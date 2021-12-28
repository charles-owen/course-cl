<?php
/**
 * @file
 * API Resource base class
 */

namespace CL\Course\Api;

use CL\Site\Site;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Assignment;
use CL\Course\Submission\Submission;

/**
 * API Resource base class
 *
 * Provides convenience functions for course API resources.
 * This class is the base class for both SubmissionApi and
 * TeamSubmissionApi in the team subsystem and maybe more
 * in the future.
 */
abstract class Resource extends \CL\Users\Api\Resource {
	/**
	 * Constructor.
	 */
	public function __construct() {
		parent::__construct();
	}




	/**
	 * Get a submission object for an assignment.
	 * @param Assignment $assignment Assignment object
	 * @param string $tag Submission tag
	 * @return Submission The submission
	 * @throws APIException If submission does not exist.
	 */
	protected function getSubmission(Assignment $assignment, $tag) {
		$submission = $assignment->submissions->get($tag);
		if($submission === null) {
			throw new APIException("Invalid submission tag.");
		}

		return $submission;
	}
}