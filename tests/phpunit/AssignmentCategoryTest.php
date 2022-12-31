<?php
/** @file
 * Unit tests for the class AssignmentCategory
 * @cond
 */

use CL\Course\Course;
use CL\Course\Section;
use CL\Course\Assignment;
use CL\Course\Assignments;
use CL\Course\AssignmentCategory;

require_once __DIR__ . '/cls/CourseTestBase.php';


class AssignmentCategoryTest extends CourseTestBase
{
	public function test_properties() {
        $assignments = new Assignments();

        // create a AssignmentCategory using the Assignments class add_category function
        $category = $assignments->add_category('cattag', 'category name');

		$this->assertEquals('cattag', $category->tag);
		$this->assertEquals('category name', $category->name);
	}

	public function test_add_get() {
        $site = new \CL\Site\Site(__DIR__);
        $course = new Course('testcourse', 'CSE123', 'An example course');
        $course->install($site);
        $section = new Section($course, "FS22", "001", Section::Normal);

        $assignments = new Assignments();
        $assignments->section = $section;
        $category = $assignments->add_category('cattag', 'category name');

		$assignment = new Assignment('assign1', 'Assignment 1');
		$a = $category->add($assignment);
		$this->assertEquals($a, $assignment);
		$b = $category->get_assignment('assign1');
		$this->assertEquals($b, $assignment);
	}

}

/// \endcond
