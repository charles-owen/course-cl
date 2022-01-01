<?php
/**
 * @file
 * API Resource for /api/course
 */
namespace CL\Course\Api;

use CL\Course\Submission\SubmissionApi;
use CL\Course\Submission\SubmissionProgram;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\APIException;
use CL\Course\System\CourseTables;
use CL\Course\Member;
use CL\Site\Api\JsonAPI;

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

			case 'tables':
				return $this->tables($site, $server, new CourseTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

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

}