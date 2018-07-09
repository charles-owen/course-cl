<?php

namespace CL\Course\Api;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Users\Users;
use CL\Course\Members;
use CL\Course\Member;

/**
 * API Resource for /api/course/members
 */
class ApiMembers extends \CL\Users\Api\ApiResource {
	const QUERY_LIMIT = 500;

	public function __construct() {
		parent::__construct();
	}

	public function dispatch(Site $site, Server $server, array $params, $time) {
		$user = $this->isUser($site);

		if(count($params) < 1) {
			return $this->query($site, $user, $server);
		}

		switch($params[0]) {
			case 'sectionselect':
				return $this->sectionselect($site, $user, $server, $time);

			case 'new':
				return $this->newMember($site, $user, $server, $time);

			case 'update':
				return $this->update($site, $user, $server, $time);

			case 'delete':
				return $this->delete($site, $user, $server);

			case 'drops':
				return $this->drops($site, $user, $server);

			case 'bulk':
				$api = new ApiMembersBulk();
				$params2 = $params;
				array_shift($params2);
				return $api->dispatch($site, $server, $params2, $time);
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}


	private function drops(Site $site, User $user, Server $server)
	{
		$this->atLeast($user, User::ADMIN);

		$post = $server->post;
		$this->ensure($post, "drops");
		$drops = $post['drops'];

		$members = new Members($site->db);
		foreach($drops as $drop) {
			$members->updateRole($drop, Member::DROPPED);
		}

		return new JsonAPI();
	}

	private function query(Site $site, User $user, Server $server) {
		$this->atLeast($user,User::STAFF);

		$params = [];
		$get = $server->get;

		if(!empty($get['id'])) {
			$params['id'] = $get['id'];
		}

		if(!empty($get['limit'])) {
			$limit = $get['limit'];
		} else {
			$limit = ApiMembers::QUERY_LIMIT;
		}

		$params['limit'] = $limit + 1;

		if(!empty($get['userId'])) {
			$params['userId'] = $get['userId'];
		}

		if(!empty($get['email'])) {
			$params['email'] = $get['email'];
		}

		if(!empty($get['email'])) {
			$params['email'] = $get['email'];
		}

		if(!empty($get['section'])) {
			$params['section'] = $get['section'];
		}

		if(!empty($get['semester'])) {
			$params['semester'] = $get['semester'];
		}

		$members = new Members($site->db);
		$result = $members->query($params);
		$reply = [];
		foreach($result as $user) {
			if(count($reply) >= $limit) {
				$reply[] = ['more'=>'yes'];
				break;
			}

			$reply[] = $user->data();
		}

		$json = new JsonAPI();
		$json->addData('users', 0, $reply);

		// Sequence echo option.
		if(!empty($get['seq'])) {
			$json->addData('seq', strip_tags($get['seq']), []);
		}

		return $json;
	}

	private function newMember(Site $site, User $user, Server $server, $time) {
		$this->atLeast($user, User::ADMIN);

		$post = $server->post;

		$required = ['userId', 'email', 'name', 'semester', 'section', 'role'];
		$this->ensure($post, $required);

		$userId = trim(strip_tags($post['userId']));
		$email = trim(strip_tags($post['email']));
		$semester = trim(strip_tags($post['semester']));
		$sectionId = trim(strip_tags($post['section']));

		//
		// Does the requested section exist?
		//
		$course = $site->course->course;
		$section = $course->getSection($semester, $sectionId);
		if($section === null) {
			throw new APIException("Section is invalid");
		}

		$params = [
			'user'=>$userId,
			'name'=>trim(strip_tags($post['name'])),
			'email'=>$email,
			'semester'=>$section->semester,
			'section'=>$section->id,
			'role'=>trim(strip_tags($post['role'])),
		];

		$members = new Members($site->db);
		$ret = $members->addComplete($params, $time);
		if(!$ret['ok']) {
			throw new APIException($ret['msg']);
		}

		$memberUser = $ret['member'];

		$json = new JsonAPI();
		$json->addData('member', $memberUser->member->id, $memberUser->data());
		return $json;
	}

	private function update(Site $site, User $user, Server $server, $time) {
		$this->atLeast($user, User::ADMIN);

		$post = $server->post;

		$required = ['id', 'semester', 'section', 'role'];
		$this->ensure($post, $required);

		$id = trim(strip_tags($post['id']));
		$semester = trim(strip_tags($post['semester']));
		$sectionId = trim(strip_tags($post['section']));
		$role = trim(strip_tags($post['role']));

		//
		// Does the requested section exist?
		//
		$course = $site->course->course;
		$section = $course->getSection($semester, $sectionId);
		if($section === null) {
			throw new APIException("Section is invalid");
		}

		// Get the current member object
		$members = new Members($site->db);
		$user = $members->getAsUser($id);
		if($user === null) {
			throw new APIException("Member no longer exists");
		}

		$member = $user->member;
		$member->semester = $semester;
		$member->sectionId = $sectionId;
		$member->role = $role;

		$members->update($member, $time);

		$json = new JsonAPI();
		return $json;
	}

	private function delete(Site $site, User $user, Server $server) {
		$this->atLeast($user, User::ADMIN);

		$post = $server->post;

		$this->ensure($post, 'id');

		$id = trim(strip_tags($post['id']));
		$members = new Members($site->db);
		$members->delete($id);

		$json = new JsonAPI();
		return $json;
	}

	private function sectionselect(Site $site, User $user, Server $server, $time) {
		$post = $server->post;
		$this->ensure($post, ['semester', 'section']);

		$semester = strip_tags($post['semester']);
		$section = strip_tags($post['section']);

		// Load the membership for this user
		$members = new Members($site->db);
		$member = $members->getBySection($user->id, $semester, $section);
		if($member === null) {
			if($user->atLeast(User::ADMIN)) {
				$member = new Member(['id' => 0,
					'userid' => $user->id,
					'semester' => $semester,
					'section' => $section,
					'role' => $user->role,
					'created' => $time]);
			} else {
				throw new APIException("Unable to open membership in that section");
			}
		}

		// We have a membership, attach it to the user
		$user->member = $member;

		//
		// A new session cookie is created
		//
		$jwt = $user->createJWT($site, $time);
		$cookiename = $site->cookiePrefix . User::COOKIENAME;
		$server->setcookie($cookiename, $jwt, 0, "/");

		$data = $user->data();

		$json = new JsonAPI();
		$json->addData('user', $user->id, $data);
		return $json;
	}
}