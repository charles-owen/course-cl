<?php
/** @file
 * Unit tests for the class AssignmentCategory
 * @cond
 */

use CL\Course\Assignment;
use CL\Course\AssignmentCategory;

require_once __DIR__ . '/cls/CourseTestBase.php';


class AssignmentCategoryTest extends CourseTestBase
{
	public function test_properties() {
		$category = new AssignmentCategory('cattag', 'category name');
		$this->assertEquals('cattag', $category->tag);
		$this->assertEquals('category name', $category->name);
	}

	public function test_add_get() {
		$category = new AssignmentCategory('cattag', 'category name');
		$assignment = new Assignment('assign1', 'Assignment 1');
		$a = $category->add($assignment);
		$this->assertEquals($a, $assignment);
		$b = $category->get_assignment('assign1');
		$this->assertEquals($b, $assignment);
	}

}

/// \endcond
