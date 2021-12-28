<?php
/** @file
 * Unit tests for the class SectionStatus
 * @cond 
 */
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Users\Users;
use CL\Course\Members;
use CL\Course\SectionStatus;


class SectionStatusTest extends CourseDatabaseTestBase {

	public function setUp() : void {
		$this->ensureTable(new Users($this->site->db));
        $this->ensureTable(new Members($this->site->db));
		$this->ensureTable(new SectionStatus($this->site->db));
	}

    public function test_flag() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

	    $members = new Members($this->site->db);
	    $member = $members->getAsUser(22);

	    $assignTag = 'step1';
	    $sectionTag = 'test';

        $table = new SectionStatus($this->site->db);
        $status = $table->get($member, $assignTag, $sectionTag);
        $this->assertEquals(SectionStatus::NOTVISITED, $status['status']);

        $time = time() + 1235;
        $table->set($member, $assignTag, $sectionTag, SectionStatus::VISITED, $time);
	    $status = $table->get($member, $assignTag, $sectionTag);
	    $this->assertEquals(SectionStatus::VISITED, $status['status']);
	    $this->assertEquals($time, $status['look']);
        $this->assertEquals($time, $status['access']);

        $time1 = $time + 1000;
        $table->set($member, $assignTag, $sectionTag, SectionStatus::DONE, $time1);
	    $status = $table->get($member, $assignTag, $sectionTag);
	    $this->assertEquals(SectionStatus::DONE, $status['status']);
	    $this->assertEquals($time, $status['look']);
	    $this->assertEquals($time1, $status['access']);
    }

    public function test_get_statuses() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

	    $members = new Members($this->site->db);
	    $member = $members->getAsUser(22);

	    $assignTag = 'step1';

	    $table = new SectionStatus($this->site->db);

        $statuses = $table->get_statuses($member, $assignTag);
        $this->assertEquals(0, count($statuses));

        $time1 = time();
        $table->set($member, $assignTag, "abc", SectionStatus::DONE, $time1);

        $time2 = $time1 + 100;
        $table->set($member, $assignTag,"xyz", SectionStatus::VISITED, $time2);

        $statuses = $table->get_statuses($member, $assignTag);
        $this->assertEquals(2, count($statuses));

        $this->assertEquals(SectionStatus::DONE, $statuses['abc']['status']);
        $this->assertEquals($time1, $statuses['abc']['look']);
        $this->assertEquals($time1, $statuses['abc']['access']);

        $this->assertEquals(SectionStatus::VISITED, $statuses['xyz']['status']);
        $this->assertEquals($time2, $statuses['xyz']['look']);
        $this->assertEquals($time2, $statuses['xyz']['access']);
   }

    public function test_get_statuses_assignment() {
        $this->dataSets(['db/user-many.xml', 'db/member.xml']);

	    $members = new Members($this->site->db);
	    $member22 = $members->getAsUser(22);
	    $member35 = $members->getAsUser(35);

	    $assignTag = 'step1';

	    $table = new SectionStatus($this->site->db);

        /*
         * Create some data
         */

        $time1 = time();
        $table->set($member22, $assignTag, "abc", SectionStatus::DONE, $time1);

        $time2 = $time1 + 100;
        $table->set($member22, $assignTag, "xyz", SectionStatus::VISITED, $time2);

        $time3 = $time1 + 220;
        $table->set($member35, $assignTag, "xyz", SectionStatus::VISITED, $time3);

        $statuses = $table->get_statuses_assignment($member22->member->semester, $member22->member->sectionId, $assignTag);

        $this->assertArrayHasKey(22, $statuses);
        $this->assertArrayHasKey(35, $statuses);
        $this->assertArrayHasKey('xyz', $statuses[22]);
        $this->assertArrayHasKey('abc', $statuses[22]);
        $this->assertArrayHasKey('xyz', $statuses[35]);
    }
	
}

/// @endcond
