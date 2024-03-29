<?php
/** @file
 * Unit tests for the class Submissions
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Users\Users;
use CL\Course\Member;
use CL\Course\Submission\Submissions;
use CL\Course\Test\DummyMember;

class SubmissionsTest extends CourseDatabaseTestBase {
    protected function setUp() : void {
        $this->ensureTable(new Submissions($this->site->db));
    }

	public function test_has_submissions() {
		$submissions = new Submissions($this->site->db);
		$dummy = new DummyMember();
		$user = $dummy->create(887, 14, Member::STUDENT);

        $time = strtotime("2015-01-10 14:00:00");
        $submissions->submit_text($user, 'design3', 'task1', $time, "test text");

        $this->assertTrue($submissions->has_submissions($user, 'design3', "task1"));
		$this->assertFalse($submissions->has_submissions($user, 'design3', "taskX"));
	}


	public function test_submit_text() {
		$submissions = new Submissions($this->site->db);
		$dummy = new DummyMember();
		$user = $dummy->create(887, 14, Member::STUDENT);

		// After existing submissions
		$time = strtotime("2015-01-10 14:00:00");
		$submissions->submit_text($user, 'design3', 'task1', $time, "test text");

		$submits = $submissions->get_submissions($user->member->id, 'design3', "task1");
		$this->assertEquals(1, count($submits));

		$submit = $submits[0];
		$this->assertEquals($time, $submit['date']);
		$id = $submit['id'];

		$text = $submissions->get_text($id);
		$this->assertEquals("test text", $text['text']);
		$this->assertEquals(14, $text['memberid']);
		$this->assertEquals("design3", $text['assigntag']);
		$this->assertEquals("task1", $text['submissiontag']);
	}


	public function test_submit_file() {
		$submissions = new Submissions($this->site->db);
		$dummy = new DummyMember();
		$user = $dummy->create(887, 14, Member::STUDENT);

		$file = __DIR__ . "/data/classdiagram.png";
        $handle = fopen($file, "rb");
        $fileData = fread($handle, filesize($file));
        fclose($handle);

		$time = strtotime("2015-01-10 22:22:00");
		$result = $submissions->submit_file($user, 'design3', 'task2',
			$time, $file,"test.png","image/png");

		$this->assertNotFalse($result);

		$submits = $submissions->get_submissions($user->member->id, 'design3', "task2", $user);
		$this->assertEquals(1, count($submits));


		$submit = $submits[0];
		$this->assertEquals($time, $submit['date']);
		$this->assertEquals("test.png", $submit['name']);
		$this->assertEquals("image/png", $submit['type']);

		$id = $submit['id'];

		$file = $submissions->get_file($id);
       // print_r($file);
        $this->assertEquals($fileData, $file['binary']);
		$this->assertEquals(14, $file['memberid']);
		$this->assertEquals("design3", $file['assigntag']);
		$this->assertEquals("task2", $file['submissiontag']);
	}

	public function test_analysis() {
		$submissions = new Submissions($this->site->db);
        $dummy = new DummyMember();
        $user = $dummy->create(887, 14, Member::STUDENT);

        // Add a submission
        $time = strtotime("2015-01-10 14:00:00");
        $id = $submissions->submit_text($user, 'design3', 'task1', $time, "test text");

        $analysis = $submissions->get_analysis($id);
		$this->assertNull($analysis);

		$test = array('doxygen' => 'some results', 'cppcheck' => 'other results');

		$submissions->set_analysis($id, $test);
		$test1 = $submissions->get_analysis($id);

		$this->assertTrue(isset($test1['doxygen']));
		$this->assertEquals($test['doxygen'], $test1['doxygen']);
		$this->assertEquals($test['cppcheck'], $test1['cppcheck']);
	}


	public function test_create_sql() {
		global $course;

		$submissions = new Submissions($this->site->db);

		$sql = $submissions->createSQL();
		$this->assertStringContainsString('test_cl_submission', $sql);
	}

	public function test_drop_sql() {
		global $course;

		$submissions = new Submissions($this->site->db);

		$sql = $submissions->dropSQL();
		$sqlshouldbe = <<<SQL
drop table if exists test_cl_submission;
SQL;

		$this->assertEquals($sqlshouldbe, $sql);
	}
}

/// @endcond
