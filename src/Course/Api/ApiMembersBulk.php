<?php
/**
 * @file
 * API resource for reading users in bulk from a file
 */

namespace CL\Course\Api;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Member;

/**
 * API resource for reading users in bulk from a file
 * Path: cl/course/members/bulk
 */
class ApiMembersBulk extends \CL\Users\Api\Resource {
	/**
	 * ApiMembersBulk constructor
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch to this component from the router.
	 * @param Site $site The Site configuration object
	 * @param Server $server The Server object
	 * @param array $params Parameters after the path, should be empty
	 * @param array $properties Properties from the path, should be empty
	 * @param $time Time stamp
	 * @return JsonAPI Result
	 * @throws APIException On error
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site);

		if(count($params) < 1) {
			return $this->upload($site, $user, $server, $time);
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function upload(Site $site, User $user, Server $server, $time) {
		$this->atLeast($user, User::STAFF);

		$post = $server->post;
		$this->ensure($post, ['file', 'semester', 'section']);

		$file = $post['file'];
		$semesterId = trim(strip_tags($post['semester']));
		$sectionId = trim(strip_tags($post['section']));

		//
		// Does the requested section exist?
		//
		$course = $site->course;
		$section = $course->get_section($semesterId, $sectionId);
		if($section === null) {
			throw new APIException("Section is invalid");
		}

		// Get the members table
		$membersTable = new Members($site->db);

		/*
		 * Load all of the user ID's for this semester/section so we
		 * know who is already loaded. Students and Dropped only.
		 *
		 * $existing is an array of members 'userid' => User
		 */
		$existing = array();
		$query = [
			'semester'=>$semesterId,
			'sectionId'=>$sectionId
		];
		foreach($membersTable->query($query) as $user) {
			if($user->role !== Member::STUDENT && $user->role !== Member::DROPPED) {
				// Only interested in students who exist or have dropped
				continue;
			}

			$existing[$user->userId] = $user;
		}

		$lines = explode("\n", $file);

		$updated = [];

		// Read the file
		$first = true;
		foreach($lines as $line) {
			if($first) {
				$headings = str_getcsv($line);

				// Determine indices to the columns we are interested in
				$semesterI = array_search("Term", $headings);
				$sectionI = array_search("Sctn_Code", $headings);
				$userI = array_search("MSUNet_ID", $headings);
				$nameI = array_search("Student_Name", $headings);

				$first = false;
				continue;
			}

			$entry = str_getcsv($line);
			if(count($entry) < 6) {
				continue;
			}

			$section = $entry[$sectionI];

			/*
			 * It used to be that sections were of the form 001, but
			 * the registrar system changed that to omit the leading zeros
			 * so this code adds them if necessary
			*/
			while(strlen($section) < 3) {
				$section = '0' . $section;
			}

			$semester = $entry[$semesterI];
			$userid = $entry[$userI];
			$name = $entry[$nameI];
			$email = $userid . "@msu.edu";

			//
			// Ensure this file is for this semester/section
			//
			if($semester !== $semesterId) {
				throw new APIException('File is not for this semester');
			}

			if($section !== $sectionId) {
				throw new APIException('File is not for this section');
			}

			// Does this user already exist?
			if(array_key_exists($userid, $existing)) {
				// If the student had dropped, they are reinstated:
				$student = $existing[$userid];
				if($student->role === Member::DROPPED) {
					$student->member->role = Member::STUDENT;
					$membersTable->update($student, $time);
				}

				$updated[] = $existing[$userid];

				// User is loaded
				// Remove from existing
				unset($existing[$userid]);
			} else {
				// Add this user to the database
				$params = [
					'user'=>$userid,
					'name'=>$name,
					'email'=>$email,
					'semester'=>$semesterId,
					'section'=>$sectionId,
					'role'=>Member::STUDENT,
				];

				$members = new Members($site->db);
				$ret = $members->addComplete($params, $time);
				if(!$ret['ok']) {
					throw new APIException($ret['msg']);
				}

				$updated[] = $ret['member'];
			}
		}

		// $updated is the updated role less any potential drops

		$drops = [];
		foreach($existing as $dropped) {
			$updated[] = $dropped;
			$drops[] = $dropped;
		}

		// Sort anew...
		usort($updated, function($a, $b) {
			return strcmp($a->name, $b->name);
		});

		$updatedData = [];
		foreach($updated as $user) {
			$updatedData[] = $user->data();
		}

		$json = new JsonAPI();
		$json->addData('users', 0, $updatedData);

		$dropsData = [];
		foreach($drops as $user) {
			if($user->role === Member::STUDENT) {
				$dropsData[] = $user->data();
			}

		}

		if(count($dropsData) > 0) {
			$json->addData('drops', 0, $dropsData);
		}

   	    return $json;
	}
}