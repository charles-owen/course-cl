<?php
/**
 * @file
 * Base class for accessing submissions (text, image, file)
 */

namespace Assignments;

/**
 * Base class for accessing submissions (text, image, file)
 *
 * This is used by SubmittedTextView, SubmittedFileView, and SubmittedImageView
 * to obtain submissions for display or download.
 */
abstract class SubmittedView extends \View {
	/**
	 * SubmittedView constructor.
	 * @param \Course $course Course object
	 * @param \User $user User making this request
	 */
	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}

	/**
	 * Get the submitted item
	 * @param $get $_GET
	 * @return mixed Submitted item
	 */
	public function get($get) {
		if($this->user->is_guest()) {
			return $this->not_available();
		}

		if(isset($get['teaming'])) {
			$submissions = new \Team\TeamSubmissions($this->course);
			$result = $this->get_submission($submissions, $get['id']);
			$submissionuser = $result['userid'];

			// There are three possibilities here:
			// 1. Staff can view any submission
			// 2. Users can view their own submissions
			// 3. Users can view submissions where they are a member of the team
			if($this->user->at_least(\User::GRADER) || $this->user->get_id() === $submissionuser) {
				return $this->result($result);
			}
			
			$teamId = $result['teamid'];

			$teamMembers = new \Team\TeamMembers($this->course);
			if($teamMembers->is_member($teamId, $this->user)) {
				return $this->result($result);
			}

			return $this->not_available();
		} else {
			$submissions = new \Assignments\Submissions($this->course);
			$result = $this->get_submission($submissions, $get['id']);
			$submissionuser = $result['userid'];

			if(isset($get['rename'])) {
				$users = new \Users($this->course);
				$subUser = $users->get_user($submissionuser);
				if($subUser !== null) {
					$this->set_rename($subUser->get_userid());
				}
			}

			// There are three possibilities here:
			// 1. Staff can view any text
			// 2. Users can view their own text
			// 3. Users can view text where they are a reviewer on that assignment
			if($this->user->at_least(\User::GRADER) || $this->user->get_id() === $submissionuser) {
				return $this->result($result);
			}

			//
			// Options that allow for viewing by a reviewer
			//

			$assignment = $this->user->get_assignment($result['assigntag']);
			$reviewing = $assignment->get_reviewing();
			if($reviewing === null) {
				return $this->not_available();
			}

			// Ensure this is a review this user can do
			$canDo = $reviewing->get_reviews_can_do($this->user, $submissionuser);
			if($canDo !== null || count($canDo) > 0) {
				return $this->result($result);
			}
		}

		return $this->not_available();
	}

	protected abstract function not_available();
	protected abstract function result($result);
	protected abstract function get_submission($submissions, $id);

	/**
	 * Calling this function sets an optional file renaming.
	 *
	 * This is mainly used to change the name for a downloaded file, so
	 * it is ignored for other types.
	 *
	 * @param $rename New name to give the file
	 */
	protected function set_rename($rename) {}
}