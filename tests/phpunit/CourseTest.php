<?php
/** @cond
 * @Unit tests for the class Course
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

use CL\Course\Course;

class CourseTest extends \PHPUnit\Framework\TestCase
{


	
	public function test_define() {
		$site = new \CL\Site\Site(__DIR__);
		$course = new Course($site);
		$course->define('testcourse', 'Test Course', 'An example course');

		$this->assertEquals("testcourse", $course->account);
		$this->assertEquals("Test Course", $course->name);
		$this->assertEquals("An example course", $course->desc);
	}

	
}

/// \endcond
