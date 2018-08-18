<?php
/** \cond 
 * Unit tests for the class Assignment
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

use CL\Course\Assignment;
use CL\Course\Member;
use CL\Course\Test\DummyMember;

class AssignmentTest extends CourseTestBase {

	public function test_set_due() {
		$dummy = new DummyMember();
		$member22 = $dummy->create(12, 22, Member::STUDENT);

		$assignment = new Assignment('assigntag', 'assignment name');
		$assignment->set_due('9/14/2014 11:53pm');
		$this->assertEquals(strtotime('9/14/2014 11:53pm'), $assignment->get_due($member22));
		$this->assertFalse($assignment->revised);

		$assignment->set_due('9/17/2014 11:55pm', true);
		$this->assertEquals(strtotime('9/17/2014 11:55pm'), $assignment->get_due($member22));
		$this->assertTrue($assignment->revised);
	}

	public function test_gets() {
		$assignment = new Assignment('assigntag', 'assignment name');
		$this->assertEquals('assigntag', $assignment->tag);
		$this->assertEquals('assignment name', $assignment->name);
	}

	public function test_after_release() {
		$dummy = new DummyMember();
		$member22 = $dummy->create(12, 22, Member::STUDENT);
		$member43 = $dummy->create(18, 43, Member::STAFF);

		$time1 = strtotime('9/17/2018 11:55pm');
		$time2 = strtotime('9/18/2018 11:55pm');
		$time3 = strtotime('9/19/2018 11:55pm');

		// If no release is specified, the assignment is released
		$assignment = new Assignment('assigntag', 'assignment name');
		$this->assertTrue($assignment->after_release($time1));

		// If release set to false, there is no current release date
		$assignment->set_release(false);
		$this->assertFalse($assignment->after_release($time1));

		$assignment->set_release('9/18/2018 11:55pm');
		$this->assertFalse($assignment->after_release($time1));
		$this->assertTrue($assignment->after_release($time2));
		$this->assertTrue($assignment->after_release($time3));

		//
		// available_release
		//
		$this->assertFalse($assignment->available_release($member22, $time1));
		$this->assertTrue($assignment->available_release($member43, $time1));
	}




//	public function test_set_release() {
//		$user = $this->create_user_student();
//
//		$release = '9/9/2014 11:53pm';
//		$due = '9/14/2014 11:53pm';
//
//		$assignment = new Assignments\Assignment(get_course(), 'assigntag', 'categories name', 23);
//		$assignment->set_due($due);
//
//		$assignment->set_release($release);
//		$this->assertEquals(strtotime($release), $assignment->get_release());
//
//		$assignment->set_release("-14 days");
//		$this->assertEquals(strtotime($due) - 3600 * 24 * 14, $assignment->get_release());
//
//		$assignment->set_release("-8   days");
//		$this->assertEquals(strtotime($due) - 3600 * 24 * 8, $assignment->get_release());
//
//
//	}
//
//	public function test_protect_due() {
//		$assignment = $this->create_test_assignment();
//
//		$userstaff = $this->create_user_staff();
//		$userstudent = $this->create_user_student();
//		$userguest = $this->create_user_guest();
//
//		$beforedue = strtotime('9/17/2014 11:55pm');
//		$afterdue = strtotime('9/30/2014 11:55pm');
//
//		// If no due date is set, staff and students can access,
//		// but are redirected
//		$this->assertEquals('Location: /lib/tests/course/',
//			$assignment->protect_due($userguest, $beforedue, true));
//		$this->assertEquals('',
//			$assignment->protect_due($userstaff, $beforedue, true));
//		$this->assertEquals('',
//			$assignment->protect_due($userstudent, $beforedue, true));
//
//		$assignment->set_due('9/20/2014 11:55pm');
//
//		// Tests before due date.
//		// Staff can access, students and guests cannot
//		$this->assertEquals('Location: /lib/tests/course/',
//			$assignment->protect_due($userguest, $beforedue, true));
//		$this->assertEquals('',
//			$assignment->protect_due($userstaff, $beforedue, true));
//		$this->assertEquals('Location: /lib/tests/course/',
//			$assignment->protect_due($userstudent, $beforedue, true));
//
//		// Tests after due date
//		// Staff and students can access, guests cannot
//		$this->assertEquals('Location: /lib/tests/course/',
//			$assignment->protect_due($userguest, $afterdue, true));
//		$this->assertEquals('',
//			$assignment->protect_due($userstaff, $afterdue, true));
//		$this->assertEquals('',
//			$assignment->protect_due($userstudent, $afterdue, true));
//	}
//
//	public function test_protect_release() {
//		$assignment = $this->create_test_assignment();
//
//		$userstaff = $this->create_user_staff();
//		$userstudent = $this->create_user_student();
//		$userguest = $this->create_user_guest();
//
//		$beforedue = strtotime('9/17/2014 11:55pm');
//		$afterdue = strtotime('9/30/2014 11:55pm');
//
//		// If no release date is set, all can access
//		$this->assertEquals('',
//			$assignment->protect_release($userguest, $beforedue, true));
//		$this->assertEquals('',
//			$assignment->protect_release($userstaff, $beforedue, true));
//		$this->assertEquals('',
//			$assignment->protect_release($userstudent, $beforedue, true));
//
//		$assignment->set_release('9/20/2014 11:55pm');
//
//       // print_r($assignment->get_course());
//
//		// Tests before release date.
//		// Staff can access, students and guests cannot
//		$this->assertEquals('Location: /lib/tests/course/',
//			$assignment->protect_release($userguest, $beforedue, true));
//		$this->assertEquals('',
//			$assignment->protect_release($userstaff, $beforedue, true));
//		$this->assertEquals('Location: /lib/tests/course/',
//			$assignment->protect_release($userstudent, $beforedue, true));
//
//		// Tests after release date
//		// All can access
//		$this->assertEquals('',
//			$assignment->protect_release($userguest, $afterdue, true));
//		$this->assertEquals('',
//			$assignment->protect_release($userstaff, $afterdue, true));
//		$this->assertEquals('',
//			$assignment->protect_release($userstudent, $afterdue, true));
//	}
//
//	private function create_user_staff() {
//        $course = Course::get();
//		$staffrow = array(
//			'id' => '0',
//			'user' => 'staff',
//			'email' => 'staff@msu.edu',
//			'name' => 'Staff Member',
//			'semester' => 'F14',
//			'section' => '',
//			'skypid' => '',
//			'preferences' => null,
//			'role' => 'T');
//		return new User($course, $staffrow);
//	}
//
//	private function create_user_student() {
//        $course = Course::get();
//        $staffrow = array(
//			'id' => '1',
//			'user' => 'student',
//			'email' => 'student@msu.edu',
//			'name' => 'Student Member',
//			'semester' => 'F14',
//			'section' => '',
//			'skypid' => '',
//			'preferences' => null,
//			'role' => 'S');
//		return new User($course, $staffrow);
//	}
//
//	private function create_user_guest() {
//        $course = Course::get();
//        $staffrow = array(
//			'id' => '1',
//			'user' => 'guest',
//			'email' => 'guest@msu.edu',
//			'name' => 'Guest Member',
//			'semester' => 'F14',
//			'section' => '',
//			'skypid' => '',
//			'preferences' => null,
//			'role' => 'G');
//		return new User($course, $staffrow);
//	}
//
//
//	/** @brief Create a test assignment in context
//	 *
//	 * This creates a test assignment in a category and
//	 * in a course.
//	 */
//	private function create_test_assignment() {
//		$course = Course::get();
//		$section = $course->get_section("001");
//		$assignments = $section->get_assignments();
//        $category = $assignments->add_category("cattag", "Category", 25);
//		$assignment = $category->add_assignment('assigntag', 'categories name', 23);
//
//		return $assignment;
//	}
	

}

/// \endcond
