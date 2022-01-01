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
     * Get an assignment.
     * @param Site $site The Site object
     * @param User $user A user.
     * @param string $assignTag The assignment tag
     * @param int $memberId Member ID or null to use $user->member->id.
     * @return Assignment Found assignment
     * @throws APIException If member, section, or assignment do not exist.
     */
    protected function getAssignment(Site $site, User $user, $assignTag, $memberId=null) {
        if($memberId !== null) {
            // Specified member, get them...
            $members = new Members($site->db);
            $member = $members->getAsUser($memberId);
            if($member === null) {
                throw new APIException("Member does not exist");
            }
        } else {
            $member = $user;
        }

        $section = $site->course->get_section_for($member);
        if($section === null) {
            throw new APIException("No section for this member.");
        }
        $assignment = $section->get_assignment($assignTag);
        if($assignment === null) {
            throw new APIException("Assignment not found");
        }

        $assignment->load();
        return $assignment;
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



