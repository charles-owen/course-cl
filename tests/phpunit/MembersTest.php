<?php
/** @file
 * Unit tests for the class Members
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Users\Users;
use CL\Course\Member;
use CL\Course\Members;

class MembersTest extends CourseDatabaseTestBase {

    protected function setUp() : void {
		$this->ensureTable(new Users($this->site->db));
		$this->ensureTable(new Members($this->site->db));
	}


	public function test_get() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

		$members = new Members($this->site->db);
		$member = $members->get(22);
		$this->assertEquals(22, $member->id);
		$this->assertEquals(5, $member->userId);
		$this->assertEquals('FS18', $member->semester);
		$this->assertEquals('799', $member->sectionId);
		$this->assertEquals(Member::STUDENT, $member->role);
	}


	public function test_query() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

		$members = new Members($this->site->db);

		$result = $members->query(['semester'=>'FS18', 'section'=>'799']);
		$this->assertCount(3, $result);

		$result = $members->query(['atLeast'=>Member::STAFF]);
		$this->assertCount(1, $result);

		$result = $members->query(['semester'=>'FS18', 'section'=>'799', 'atLeast'=>Member::STAFF]);
		$this->assertCount(1, $result);
	}

	public function test_delete() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

		$members = new Members($this->site->db);
		$members->delete(22);
		$member = $members->get(22);
		$this->assertNull($member);
	}

	public function test_getAsUser() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

        $members = new Members($this->site->db);
		$user = $members->getAsUser(22);
		$this->assertNotNull($user);
		$member = $user->member;
		$this->assertEquals('bob', $user->userId);
		$this->assertEquals(22, $member->id);
		$this->assertEquals(5, $member->userId);
		$this->assertEquals('FS18', $member->semester);
		$this->assertEquals('799', $member->sectionId);
		$this->assertEquals(Member::STUDENT, $member->role);
	}

	public function test_add() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

        $members = new Members($this->site->db);

		$time = time() + 101;

		$member = new Member();
		$member->userId = 97;
		$member->semester = 'FS18';
		$member->sectionId = '730';
		$member->role = Member::STUDENT;
		$members->add($member, $time);

		$member1 = $members->getBySection(97, 'FS18', '730');

		$this->assertEquals(97, $member1->userId);
		$this->assertEquals('FS18', $member1->semester);
		$this->assertEquals('730', $member1->sectionId);
		$this->assertEquals(Member::STUDENT, $member1->role);
		$this->assertEquals($time, $member1->created);
	}



	public function test_update() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

        $members = new Members($this->site->db);

		$result = $members->query(['semester'=>'FS18', 'sectionId'=>'799']);

		$user = $result[0];
		$member = $user->member;
		$member->semester = 'SS19';
		$member->sectionId = '899';
		$member->role = Member::DROPPED;
		$members->update($member, time());

		$result = $members->query(['semester'=>'SS19', 'sectionId'=>'899']);
		$this->assertCount(1, $result);
		$user = $result[0];
		$member = $user->member;
		$this->assertEquals(Member::DROPPED, $member->role());
	}

	public function test_metaData() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

		$members = new Members($this->site->db);
		$user1 = $members->getAsUser(22);

		// Initially temp
		$this->assertEquals('[]', $user1->member->metaData->json());

		$user1->member->metaData->set('assignments', 'test', 'value1');
		$this->assertEquals('value1', $user1->member->metaData->get('assignments', 'test'));
		$user1->member->metaData->write($this->site);

		$user2 = $members->getAsUser(22);
		$this->assertEquals('value1', $user2->member->metaData->get('assignments', 'test'));
	}

}

/// @endcond
