<?php
/**
 * @file
 * API Resource for /api/course
 */
namespace CL\Course\Api;

use CL\Course\Assignment;
use CL\Course\Members;
use CL\Course\Submission\SubmissionApi;
use CL\Course\Submission\SubmissionProgram;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\APIException;
use CL\Course\System\CourseTables;
use CL\Course\Member;
use CL\Site\Api\JsonAPI;
use CL\Users\User;

/**
 * API Resource for /api/course
 */
class ApiCourse extends \CL\Users\Api\Resource {
	/**
	 * ApiCourse constructor
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Top-level dispatching by the API. This is called by the router for an API call
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $params
	 * @param array $properties Properties determined from the page options like :id
	 * @param int $time The current time
	 * @return mixed Result of the API operation.
	 * @throws APIException
	 * @internal param array $path The path beyond the page that invoked this call
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {

		if(count($params) < 1) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		switch($params[0]) {
			case 'members':
				$api = new ApiMembers();
				$params2 = $params;
				array_shift($params2);
				return $api->dispatch($site, $server, $params2, $properties, $time);

			case 'submission':
				$api = new SubmissionApi();
				$params2 = $params;
				array_shift($params2);
				return $api->dispatch($site, $server, $params2, $properties, $time);

			// /api/course/open
			// Get all open assignment available for submission
			case 'open':
				return $this->open($site, $server, $time);

			case 'email':
				return $this->email($site, $server, $time);

            case 'dates':
                return $this->dates($site, $server, $params, $properties, $time);

            case 'home':
                return $this->home($site, $server, $params, $properties, $time);

			case 'tables':
				return $this->tables($site, $server, new CourseTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

    /**
     * /api/course/home
     * Get/set home page content editing
     * @param Site $site The Site object
     * @param Server $server
     * @param array $params
     * @param array $properties
     * @param $time
     * @return JsonAPI
     */
    private function home(Site $site, Server $server, array $params, array $properties, $time) {
        $user = $this->isUser($site, Member::INSTRUCTOR);
        $member = $user->member;

        $settings = new \CL\Course\Settings($site->db);
        $member = $user->member;
        $setting = $settings->read('course', $member->semester, $member->sectionId,
            'course-home', '');

        if(count($params) > 1) {
            $tag = $params[1];

            $post = $server->post;
            $this->ensure($post, ['value']);

            $value = $post['value'];
            $setting->set('hot', $value);
            $settings->write($setting);
        }

        $ret = [
            'hot' => $setting->get('hot', ''),
            'tagged' => $setting->get('tagged', [])
        ];

        $json = new JsonAPI();
        $json->addData('course-home', 0, $ret);
        return $json;
    }

    /**
     * /api/course/dates/:assignment
     * Get/set assignment release and due dates
     * @param Site $site The Site object
     * @param Server $server
     * @param array $params
     * @param array $properties
     * @param $time
     * @return JsonAPI
     */
    private function dates(Site $site, Server $server, array $params, array $properties, $time) {
        $user = $this->isUser($site, Member::TA);

        if (count($params) < 2) {
            throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
        }

        // Determine the assignment
        $assignTag = $params[1];
        $assignment = $this->getAssignment($site, $user, $assignTag);

        $post = $server->post;

        if(count($params) > 2 && $params[2] === 'clear') {
            $settings = new \CL\Course\Settings($site->db);
            $member = $user->member;
            $setting = $settings->read('course', $member->semester, $member->sectionId, 'assignments', $assignTag);

            $setting->remove('release');
            $setting->remove('due');
            $setting->remove('due-revised');
            $setting->remove('review');

            $settings->write($setting);

            return new JsonAPI();
        } else if(array_key_exists('release', $post) &&
            array_key_exists('due', $post) &&
            array_key_exists('revised', $post)) {

            $settings = new \CL\Course\Settings($site->db);
            $member = $user->member;
            $setting = $settings->read('course', $member->semester, $member->sectionId, 'assignments', $assignTag);

            $releaseCmd = $post['release'];
            $release = $releaseCmd === 'none' ? false : ($releaseCmd === 'open' ? null : strtotime($releaseCmd));

            $dueCmd = $post['due'];
            $due = $dueCmd === 'none' ? null : strtotime($dueCmd);
            $revised = $post['revised'] === 'yes';

            $setting->set('release', $release);
            $setting->set('due', $due);
            $setting->set('due-revised', $revised);

            $assignment->set_release_timestamp($release);
            $assignment->set_due_timestamp($due, $revised);

            if(array_key_exists('review', $post)) {
                $reviewCmd = $post['review'];
                if($reviewCmd !== 'none') {
                    $assignment->set_reviews_due($reviewCmd);
                    $setting->set('review', $reviewCmd);
                } else {
                    $setting->remove('review');
                }
            }

            $settings->write($setting);
        } else {
            $release = $assignment->get_release();
            $due = $assignment->get_due();
            $revised = $assignment->revised;
        }

        $ret = [
            'release' => $release === false ? 'none' : ($release === null ? 'open' : $release),
            'due' => $due === null ? 'none' : $due,
            'revised' => $revised ? 'yes' : 'no'
        ];

        $review = $assignment->reviewing;
        if($review !== null) {
            $ret['review'] = $review->due === null ? 'none' : $review->due;
        }

        $json = new JsonAPI();
        $json->addData('assignment-dates', 0, $ret);
        return $json;
    }

    /**
     * /api/course/open
     * Get all open assignment available for submission
     * @param Site $site
     * @param Server $server
     * @param $time
     * @return JsonAPI
     * @throws APIException
     */
	private function open(Site $site, Server $server, $time) {
		$user = $this->isUser($site, Member::STUDENT);

		$get = $server->get;

		$section = $site->course->get_section_for($user);
		if($section === null) {
			throw new APIException("Member not currently in a course section");
		}

		$opens = $section->assignments->getOpenAssignments($user, $time);
		$data = [];
		foreach($opens as $open) {
			$open->load();
			$submissions = $open->submissions->submissions;
			if(count($submissions) === 0) {
				// If no submissions, ignore the assignment
				continue;
			}

			foreach($submissions as $submission) {
				if(!($submission instanceof SubmissionProgram)) {
					continue;
				}


				$submitData = [
					'assign'=>$open->tag,
					'assignName'=>$open->name,
					'submitTag'=>$submission->tag,
					'submitName'=>$submission->name,
                    'teaming'=>$submission->teaming
				];

				$due = $open->get_due($user);
				if($due !== null) {
					$submitData['due'] = date("m-d-Y h:ia", $due);
				}

				$data[] = $submitData;
			}
		}

		$json = new JsonAPI();
		$json->addData('open-submissions', 0, $data);
		return $json;
	}

	private function email(Site $site, Server $server, $time) {
		$user = $this->isUser($site, Member::TA);

		$post = $server->post;
		$this->ensure($post, ['to', 'subject', 'message']);

		$email = $server->email;
		$subject = $post['subject'];
		$message = $post['message'];

		foreach($post['to'] as $to) {
			$email->send($site, $to['email'], $to['name'], $subject, $message);
		}

		return new JsonAPI();
	}

    /**
     * Get an assignment.
     * @param Site $site The Site object
     * @param User $user A user.
     * @param string $assignTag The assignment tag
     * @param int $memberId Member ID or null to use $user->member->id.
     * @return Assignment Found assignment
     * @throws APIException If member, section, or assignment do not exist.
     */
    protected function getAssignment(Site $site, User $user, $assignTag, $memberId=null) {
        if($memberId !== null) {
            // Specified member, get them...
            $members = new Members($site->db);
            $member = $members->getAsUser($memberId);
            if($member === null) {
                throw new APIException("Member does not exist");
            }
        } else {
            $member = $user;
        }

        $section = $site->course->get_section_for($member);
        if($section === null) {
            throw new APIException("No section for this member.");
        }
        $assignment = $section->get_assignment($assignTag);
        if($assignment === null) {
            throw new APIException("Assignment not found");
        }

        $assignment->load();
        return $assignment;
    }
}