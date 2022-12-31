<?php
/** @cond
 * @Unit tests for the class Course
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

use CL\Course\Course;

class CourseTest extends \PHPUnit\Framework\TestCase
{
    public function test_construct() {
        $course = new Course('testcourse', 'CSE123', 'An example course');

        $this->assertEquals("testcourse", $course->account);
        $this->assertEquals("CSE123", $course->name);
        $this->assertEquals("An example course", $course->desc);
    }

	public function test_define() {
		$course = new Course();
		$course->define('testcourse', 'CSE123', 'An example course');

		$this->assertEquals("testcourse", $course->account);
		$this->assertEquals("CSE123", $course->name);
		$this->assertEquals("An example course", $course->desc);
	}
}

/// \endcond
