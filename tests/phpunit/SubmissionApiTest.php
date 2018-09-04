<?php
/** @file
 * Unit tests for the class SubmissionApi
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Site\Test\ServerMock;
use CL\Course\Member;
use CL\Course\Members;
use CL\Users\Users;
use CL\Course\Api\ApiMembers;
use CL\Course\Submission\Submissions;


class SubmissionApiTest extends CourseDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['user-many.xml', 'member.xml', 'submission.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new Members($this->site->db));
		$this->ensureTable(new Users($this->site->db));
		$this->ensureTable(new Submissions($this->site->db));
	}




	public function test_submit() {
		$members = new Members($this->site->db);
		$user22 = $members->getAsUser(22);
		$admin = $members->getAsUser(10);

		$this->assertNotNull($admin);

		$goodTime = strtotime("8/28/2018 1:00am");
		$this->site->users->user = $user22;

		$server = new ServerMock();
		$api = new \CL\Course\Submission\SubmissionApi();

		$server->setServer('REQUEST_URI', '/api/course/submission/submit/step1/text');
		$server->setPost('text', 'This is some text');
		$server->setPost('type', 'text/plain');
		$json = $api->apiDispatch($this->site, $server, ['submit', 'step1', 'text'], [], $goodTime);

		// Is it working?
		$submissions = new Submissions($this->site->db);
		$x = $submissions->get_submissions($user22->member->id, 'step1', 'text');
		$t = $submissions->get_text($x[0]['id']);
		$this->assertEquals('This is some text', $t['text']);

//		$user1 = $members->getAsUser(22);
//		$member1 = $user1->member;
//		$this->assertEquals('SS19', $member1->semester);
//		$this->assertEquals('899', $member1->sectionId);
//		$this->assertEquals(Member::DROPPED, $member1->role);
//
//		//
//		// This should fail due to invalid section
//		//
//		$server->setServer('REQUEST_URI', '/api/course/members/update');
//		$server->setPost('id', '22');
//		$server->setPost('semester', 'SS19');
//		$server->setPost('section', '000');
//		$server->setPost('role', Member::STUDENT);
//		$json = $api->apiDispatch($this->site, $server, ['update'], [], $time);
//
//		$this->assertContains('errors', $json);
//		$this->assertContains('Section is invalid', $json);
	}


}

/// @endcond
