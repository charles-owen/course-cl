<?php
/** @file
 * Unit tests for the class ApiMembers
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Site\Test\ServerMock;
use CL\Course\Member;
use CL\Course\Members;
use CL\Users\Users;
use CL\Course\Api\ApiMembers;


class ApiMembersTest extends CourseDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['user-many.xml', 'member.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new Members($this->site->db));
		$this->ensureTable(new Users($this->site->db));
	}


	public function test_meta() {
		$members = new Members($this->site->db);
		$admin = $members->getAsUser(10);
		$admin->member->role = Member::TA;

		$user22 = $members->getAsUser(22);
		$user35 = $members->getAsUser(35);

		$server = new ServerMock();
		$api = new ApiMembers();

		$json = $this->getMeta($admin);
		$this->assertCount(3, $json['data'][0]['attributes']);

		$time1 = time() + 882143;
		$server = new ServerMock();
		$server->setServer('REQUEST_URI', '/api/course/members/meta/set/22/extensions/design1');
		$server->setPost('value', $time1);
		$ret = $api->apiDispatch($this->site, $server, ['meta', 'set', '22', 'extensions', 'design1'], [], $time1);
		$this->assertNotContains('error', $ret);
		$json = json_decode($ret, true);

		$json = $this->getMeta($admin);
		$this->assertEquals($time1, $json['data'][0]['attributes'][22]);
	}

	private function getMeta($admin) {
		$server = new ServerMock();
		$api = new ApiMembers();

		$this->site->users->user = $admin;
		$server->setServer('REQUEST_URI', '/api/course/members/meta/get/extensions/design1');
		$server->setGet('semester', $admin->member->semester);
		$server->setGet('section', $admin->member->sectionId);
		$time = time() + 1001;
		$ret = $api->apiDispatch($this->site, $server, ['meta', 'get', 'extensions', 'design1'], [], $time);
		$json = json_decode($ret, true);

		return $json;
	}

	public function test_delete() {
		$users = new Users($this->site->db);
		$admin = $users->get(2);
		$this->site->users->user = $admin;

		$server = new ServerMock();
		$api = new ApiMembers();

		$members = new Members($this->site->db);
		$user = $members->getAsUser(22);
		$this->assertNotNull($user);

		$server->setServer('REQUEST_URI', '/api/course/members/delete');
		$server->setPost('id', '22');
		$time = time() + 1001;
		$ret = $api->apiDispatch($this->site, $server, ['delete'], [], $time);

		$user1 = $members->getAsUser(22);
		$this->assertNull($user1);
	}

	public function test_update() {
		$users = new Users($this->site->db);
		$admin = $users->get(2);
		$this->site->users->user = $admin;

		$server = new ServerMock();
		$api = new ApiMembers();

		$members = new Members($this->site->db);
		$user = $members->getAsUser(22);

		$server->setServer('REQUEST_URI', '/api/course/members/update');
		$server->setPost('id', '22');
		$server->setPost('semester', 'SS19');
		$server->setPost('section', '899');
		$server->setPost('role', Member::DROPPED);
		$time = time() + 1001;
		$json = $api->apiDispatch($this->site, $server, ['update'], [], $time);

		$user1 = $members->getAsUser(22);
		$member1 = $user1->member;
		$this->assertEquals('SS19', $member1->semester);
		$this->assertEquals('899', $member1->sectionId);
		$this->assertEquals(Member::DROPPED, $member1->role);

		//
		// This should fail due to invalid section
		//
		$server->setServer('REQUEST_URI', '/api/course/members/update');
		$server->setPost('id', '22');
		$server->setPost('semester', 'SS19');
		$server->setPost('section', '000');
		$server->setPost('role', Member::STUDENT);
		$json = $api->apiDispatch($this->site, $server, ['update'], [], $time);

		$this->assertContains('errors', $json);
		$this->assertContains('Section is invalid', $json);
	}

	public function test_newMember() {
		$users = new Users($this->site->db);
		$admin = $users->get(2);
		$this->site->users->user = $admin;

		$server = new ServerMock();
		$api = new ApiMembers();

		//
		// Add a member based on an existing user
		//
		$server->setServer('REQUEST_URI', '/api/course/members/new');
		$server->setPost('userId', 'orway');
		$server->setPost('name', 'Orway, Norway');
		$server->setPost('email', '');
		$server->setPost('semester', 'FS18');
		$server->setPost('section', '799');
		$server->setPost('role', Member::STUDENT);
		$time = time() + 1001;
		$json = $api->apiDispatch($this->site, $server, ['new'], [], $time);

		$this->assertNotContains("errors", $json);
		$data = json_decode($json, true);
		$user = $data['data'][0]['attributes'];
		$this->assertEquals(24, $user['id']);
		$this->assertNotEquals(0, $user['member']['id']);

		//
		// Add a member who is a new user
		//
		$server->setServer('REQUEST_URI', '/api/course/members/new');
		$server->setPost('userId', 'non-existent');
		$server->setPost('name', 'User, Non-existent');
		$server->setPost('email', '');
		$server->setPost('semester', 'SS19');
		$server->setPost('section', '899');
		$server->setPost('role', Member::STUDENT);
		$time = $time + 1001;
		$json = $api->apiDispatch($this->site, $server, ['new'], [], $time);

		$this->assertNotContains("errors", $json);
		$data = json_decode($json, true);
		$user = $data['data'][0]['attributes'];

		$this->assertNotEquals(0, $user['id']);
		$this->assertNotEquals(0, $user['member']['id']);

		//
		// Try to add again, should fail as duplicate user
		//
		$json = $api->apiDispatch($this->site, $server, ['new'], [], $time);
		$this->assertContains('User is already a member of this course', $json);
	}

}

/// @endcond
