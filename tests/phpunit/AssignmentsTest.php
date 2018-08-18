<?php
/** @file
 * Unit tests for the class CL\Course\Assignments
 * @cond
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

use CL\Course\Assignment;
use CL\Course\Assignments;
use CL\Course\Member;
use CL\Users\User;
use CL\Users\Users;

class AssignmentsTest extends CourseTestBase {


	public function test_add_category() {
		$assignments = new Assignments();
		$category = $assignments->add_category('steps', 'Step Assignments');
		$c = $assignments->get_category('steps');
		$this->assertEquals($category, $c);
	}
}





//	public function test_get_grading() {
//		$step = get_course()->get_section("FS14", '001')->get_assignment("step1");
//		$this->assertInstanceOf('\Step\Step', $step);
//
//		$grading = $step->get_grading();
//		$this->assertInstanceOf('\Assignments\Grading', $grading);
//	}
//
//	public function test_are_reviews() {
//		$assignments = get_course()->get_section("FS14", '001')->get_assignments();
//		$this->assertTrue($assignments->are_reviews());
//	}
//
//	public function test_get_open_assignments() {
//        $user = User::get();
//
//		$assignments = get_course()->get_section("FS14", '001')->get_assignments();
//
//		$open = $assignments->get_open_assignments($user, strtotime("09/05/2014 02:45:00pm"));
//
//		/* echo "\n";
//		foreach($open as $o) {
//			echo $o->get_tag() . "\n";
//		}
//		echo "\n";
//
//		/* $this->assertTrue(false);*/
//
//		$this->assertEquals(6, count($open));
//		$this->assertEquals('design3', $open[0]->get_tag());
//		$this->assertEquals('step2', $open[1]->get_tag());
//		$this->assertEquals('project1', $open[2]->get_tag());
//		$this->assertEquals('project2', $open[3]->get_tag());
//		$this->assertEquals('exam1', $open[4]->get_tag());
//		$this->assertEquals('exam2', $open[5]->get_tag());
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
//		$this->assertEquals('project1', $open[4]->get_tag());
//		$this->assertEquals('project2', $open[5]->get_tag());
//		$this->assertEquals('exam1', $open[6]->get_tag());
//		$this->assertEquals('exam2', $open[7]->get_tag());
//
//
//		$open = $assignments->get_open_assignments($user, strtotime("07/18/2014 02:45:00pm"));
//		$this->assertEquals(count($open), 5);
//		$this->assertEquals('design1', $open[0]->get_tag());
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
