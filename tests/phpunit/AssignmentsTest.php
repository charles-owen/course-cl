<?php
/** @file
 * Unit tests for the class CL\Course\Assignments
 * @cond
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Course\Assignment;
use CL\Course\Assignments;
use CL\Course\Member;
use CL\Users\User;
use CL\Course\Test\DummyMember;
use CL\Course\Settings;

class AssignmentsTest extends CourseDatabaseTestBase {

    protected function setUp() : void {
        $this->ensureTable(new Settings($this->site->db));
    }

	public function test_add_category() {
		$assignments = new Assignments();
		$category = $assignments->add_category('steps', 'Step Assignments');
		$c = $assignments->get_category('steps');
		$this->assertEquals($category, $c);
	}

	public function test_get_open_assignments() {
		$dummy = new DummyMember();
		$member22 = $dummy->create(12, 22, Member::STUDENT);

		$site = $this->createSite();
		$course = $site->course;
		$section = $course->get_section_for($member22);
		$assignments = $section->assignments;

		$open = $assignments->getOpenAssignments($member22, strtotime('8/28/2018 1:00am'));
		$this->assertCount(3, $open);

		$open = $assignments->getOpenAssignments($member22, strtotime('8/21/2018 1:00am'));
		$this->assertCount(1, $open);

		$open = $assignments->getOpenAssignments($member22, strtotime('9/7/2018 1:00am'));
		$this->assertCount(2, $open);
	}

	public function test_relative_time() {
        $assignments = new Assignments();
        $assignments->set_start('1/11/2021 8:00am');

        // Works with regular time values
        $this->assertEquals(strtotime('1/11/2021 3:35pm'), $assignments->relative_time('1/11/2021 3:35pm'));

        $this->assertEquals(strtotime('1/11/2021 11:55pm'), $assignments->relative_time('mon 1 11:55pm'));
        $this->assertEquals(strtotime('1/21/2021 1:25pm'), $assignments->relative_time('th2 1:25pm'));
        $this->assertEquals(strtotime('1/21/2021 11:55pm'), $assignments->relative_time('thu 2 11:55pm'));
        $this->assertEquals(strtotime('1/21/2021 11:55pm'), $assignments->relative_time('thu-2 11:55pm'));
        $this->assertEquals(strtotime('1/22/2021 12:00am'), $assignments->relative_time('fri-2'));

    }
}





//	public function test_get_grading() {
//		$step = get_course()->get_section("FS14", '001')->get_assignment("step1");
//		$this->assertInstanceOf('\Step\Step', $step);
//
//		$grading = $step->grading;
//		$this->assertInstanceOf('\Assignments\Grading', $grading);
//	}
//
//	public function test_are_reviews() {
//		$assignments = get_course()->get_section("FS14", '001')->get_assignments();
//		$this->assertTrue($assignments->are_reviews());
//	}
//

//	/** @brief test assignmments for section 002 */
//	public function test_get_open_assignments2() {
//        $user = User::get();
//        $course = Course::get();
//
//		$assignments = $course->get_section("FS14", '002')->get_assignments();
//
//		$open = $assignments->get_open_assignments($user, strtotime("09/05/2014 02:45:00pm"));
//
//	/*	echo "\n";
//		foreach($open as $o) {
//			echo $o->get_tag() . "\n";
//		}
//		echo "\n"; */
//
//		/* $this->assertTrue(false);*/
//
//		$this->assertEquals(6, count($open));
//		$this->assertEquals('design3', $open[0]->get_tag());
//		$this->assertEquals('step2', $open[1]->get_tag());
//
//
//
//		$open = $assignments->get_open_assignments($user, strtotime("09/01/2014 02:45:00pm"));
//	/*	echo "\n";
//		foreach($open as $o) {
//			echo $o->get_tag() . "\n";
//		}
//		echo "\n"; */
//
//
//		$this->assertEquals(8, count($open));
//		$this->assertEquals('design1', $open[0]->get_tag());
//		$this->assertEquals('design3', $open[1]->get_tag());
//		$this->assertEquals('step1', $open[2]->get_tag());
//		$this->assertEquals('step2', $open[3]->get_tag());
//
//
//		$open = $assignments->get_open_assignments($user, strtotime("07/18/2014 02:45:00pm"));
//		$this->assertEquals(count($open), 5);
//		$this->assertEquals('design1', $open[0]->get_tag());
//	}
//
//
//}

/// @endcond
