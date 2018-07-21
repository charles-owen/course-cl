<?php
/**
 * @file
 * Interface for components that add attachments to extend assignments.
 */

namespace CL\Course\Assignments;

use CL\Course\Assignment;

/**
 * Interface for components that add attachments to extend assignments.
 *
 * Primarily used to add grading extensions.
 */
interface IAssignmentExtender {
	/**
	 * Extend an assignment category.
	 * @param AssignmentCategory $category
	 */
	function extendAssignmentCategory(AssignmentCategory $category);

	/**
	 * Extend an assignment.
	 * @param Assignment $assignment
	 */
	function extendAssignment(Assignment $assignment);
}