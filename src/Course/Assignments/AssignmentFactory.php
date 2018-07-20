<?php
/**
 * @file
 * Factory class that creates assignment components.
 */

namespace CL\Course\Assignments;

use CL\Course\Assignments;

/**
 * Factory class that creates assignment components.
 *
 * The base class assignment components do not include support
 * for grading. This class is overridden by the grading subsystem
 * to add the grading components.
 */
class AssignmentFactory {
	/**
	 * Create an AssignmentCategory object
	 * @param string $tag Tag representing the assignment category
	 * @param string $name Name of the category
	 * @param int $percent Percentage of points in category.
	 * @return AssignmentCategory object
	 */
	public function createAssignmentCategory($tag, $name) {
		return new AssignmentCategory($tag, $name);
	}

	/**
	 * Create an Assignment object
	 * @param $tag Tag representing the assignment
	 * @param $name Name of the assignment
	 * @param null $url Optional URL to the assignment
	 * @return Assignment
	 */
	public function createAssignment($tag, $name, $url=null) {
		return new Assignment($tag, $name, $url);
	}
}