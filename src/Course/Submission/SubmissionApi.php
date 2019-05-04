<?php
/**
 * @file
 * API Resource for /api/course/submission
 */
namespace CL\Course\Submission;


use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Team\Submission\TeamSubmissions;
use CL\Team\Teamings;
use CL\Users\User;
use CL\Users\Users;
use CL\Course\Members;
use CL\Course\Member;
use CL\Course\Submission\Submissions;
use CL\Course\Analysis\AnalysisException;

/**
 * API Resource for /api/course/members
 */
class SubmissionApi extends \CL\Course\Api\Resource
{
	/// Default query limit for membership queries.
	const QUERY_LIMIT = 500;

	/**
	 * SubmissionApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch to this component from the router.
	 * @param Site $site The Site configuration object
	 * @param Server $server The Server object
	 * @param array $params Parameters after the path
	 * @param array $properties Properties from the path, should be empty
	 * @param int $time Time stamp
	 * @return JsonAPI Result
	 * @throws APIException On error
	 */
	protected function dispatch(Site $site, Server $server, array $params, array $properties, $time)
	{
		$user = $this->isUser($site);

		if(count($params) < 1) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		switch ($params[0]) {
			// /api/course/submission/submit/:assigntag/:submissiontag
			case 'submit':
				return $this->submit($site, $user, $server, $params, $time);

			// /api/course/submission/submissions/assigntag
			// /api/course/submission/submissions/assigntag/memberid
			case 'submissions':
				return $this->submissions($site, $user, $params);

			case 'get':
				// /api/course/submission/get/:assigntag/:submissiontag/:id
				return $this->get($site, $user, $params);

			// /api/course/submission/analysis/:assigntag/:submissiontag/:analysistag/:submissionid
			case 'analysis':
				return $this->analysis($site, $user, $params);
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	/**
	 * Get submission analysis
	 *
	 * /api/course/submission/analysis/:assigntag/:submissiontag/:analysistag/:submissionid
	 * @param Site $site
	 * @param User $user
	 * @param array $params
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function analysis(Site $site, User $user, array $params) {
		if(count($params) < 5) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$submissionTag = $params[2];
		$analysisTag = $params[3];
		$submissionId = +$params[4];

		$assignment = $this->getAssignment($site, $user, $assignTag);
		$submission = $this->getSubmission($assignment, $submissionTag);

		if($submission->teaming === null) {
			$submissions = new Submissions($site->db);
			$analysis = $submissions->get_analysis($submissionId);
			if($analysis === null) {
				throw new APIException("Analysis does not exist");
			}

			if(!$user->atLeast(Member::STAFF) && $user->member->id != $analysis['memberid']) {
				throw new APIException("Not authorized", APIException::NOT_AUTHORIZED);
			}

			if(!isset($analysis[$analysisTag])) {
				throw new APIException("Analysis does not exist");
			}
		}

		$json = new JsonAPI();
		$json->addData('submission-analysis', $submissionId, $analysis[$analysisTag]);
		return $json;
	}

	/**
	 * /api/course/submission/submissions/:assigntag
	 * /api/course/submission/submissions/:assigntag/:memberid
	 * Get all submissions for an assignment
	 * @param Site $site Site object
	 * @param User $user Current user object
	 * @param array $params Parameters
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function submissions(Site $site, User $user, array $params) {
		if(count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];

		if(count($params) > 2) {
			if(!$user->atLeast(Member::STAFF)) {
				throw new APIException("Not authorized", APIException::NOT_AUTHORIZED);
			}
			$memberId = +$params[2];
			$members = new Members($site->db);
			$member = $members->getAsUser($memberId);
			$assignment = $this->getAssignment($site, $user, $assignTag, +$params[2]);
		} else {
			$memberId = $user->member->id;
			$member = $user;
			$assignment = $this->getAssignment($site, $user, $assignTag);
		}

		$json = new JsonAPI();

		foreach($assignment->submissions->submissions as $submission) {
			if($submission->teaming == null) {
				$submissions = new Submissions($site->db);
				$subs = $submissions->get_submissions($memberId, $assignment->tag, $submission->tag);
			} else {
				$teamings = new Teamings($site->db);
				$team = $teamings->getTeamByMember($member, $submission->teaming);
				if($team !== null) {
					$submissions = new TeamSubmissions($site->db);
					$subs = $submissions->get_submissions($team->id, $assignment->tag, $submission->tag);
				} else {
					$subs = [];
				}
			}
			$analysis = [];
			foreach($submission->analysis as $an) {
				$info = $an->info($site);
				if($info !== null) {
					$analysis[] = $info;

				}
			}

			$data = $submission->data($site, $member);
			$data['assignTag'] = $assignment->tag;
			$data['submissions'] = $subs;
			$data['analysis'] = $analysis;

			$json->addData('submissions', $submission->tag, $data);
		}

		return $json;
	}


	private function get(Site $site, User $user, array $params) {
		if(count($params) < 4) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$submissionTag = $params[2];
		$id = $params[3];
		$submissions = new Submissions($site->db);
		$submission = $submissions->get_text($id);
		if(!$user->atLeast(Member::STAFF) && $submission['memberid'] != $user->member->id) {
			throw new APIException("Not authorized", APIException::NOT_AUTHORIZED);
		}

		$json = new JsonAPI();
		$json->addData('submission', $id, $submission);
		return $json;
	}

	/**
	 * /api/course/submission/submit/assigntag/submissiontag
	 * @param Site $site
	 * @param User $user
	 * @param Server $server
	 * @param array $params
	 * @param $time
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function submit(Site $site, User $user, Server $server, array $params, $time) {
		if(count($params) < 3) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$post = $server->post;
		$assignTag = $params[1];
		$tag = $params[2];

		//Determine the assignment
		$assignment = $this->getAssignment($site, $user, $assignTag);

		// Determine the submission
		$submission = $assignment->submissions->get($tag);
		if($submission === null) {
			throw new APIException("Submission does not exist");
		}

		// Has the assignment expired?
		// We allow staff to submit even if not open...
		if(!$user->atLeast(User::STAFF) && !$assignment->is_open($user, $time)) {
			throw new APIException("Assignment is not open for submission");
		}

		$submissions = new Submissions($site->db);

		$files = $server->files;
		if(isset($files['file'])) {
			$file = $server->files["file"];
			$type = $file['type'];
			$name = $file["name"];
			$path = $file["tmp_name"];

			$validate = $submission->validateFile($name, $type, $path);
			if($validate !== null) {
				throw new APIException($validate);
			}

			// File upload submission
			if ($file["error"] > 0 || $file["tmp_name"] == "") {
				// Error return
				throw new APIException('No supplied file');

			}

			// Perform any specified analysis
			try {
				$analysis = $submission->analyze($site, $path);
			} catch(AnalysisException $exception) {
				unlink($path);
				throw new APIException($exception->getMessage());
			}

			$id = $submissions->submit_file($user,
				$assignment->tag, $submission->tag, $time, $path, $name, $type);
			if(!$id) {
				throw new APIException("Submission failed");
			}

			// File any computed analysis
			if($analysis !== null) {
				$submission->set_analysis($site, $id, $analysis);
			}

		} else {
			// Post-based submission
			$this->ensure($post, ['text', 'type']);
			$type = trim(strip_tags($post['type']));
			$text = $post['text'];

			if(!$submissions->submit_text($user,
				$assignment->tag, $submission->tag, $time, $text, $type)) {
				throw new APIException("Submission failed");
			}
		}

		// Tell the assignment we have had a submission.
		// This is used by the reviewing system to send notices of pending reviews
		$assignment->submitted($user, $submission, $time);

		$json = new JsonAPI();
		$json->addData('submissions', 0,
			$submissions->get_submissions($user->member->id, $assignment->tag, $submission->tag));
		return $json;
	}

}