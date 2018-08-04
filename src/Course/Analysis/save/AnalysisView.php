<?php
/**
 * @file
 * @brief View class for presentation of analysis results
 */

namespace Analysis;

/**
 * @brief View class for presentation of analysis results
 */
class AnalysisView {
	/**
	 * Constructor
	 * @param \Course $course Current course
	 * @param \User $user Current user
	 */
    public function __construct(\Course $course, \User $user) {
        $this->course = $course;
        $this->user = $user;
    }

    /**
     * @brief Handle POST request from page
     * Expected POST parameters:
     * 'id' -> The submission id
     * 'ndx' -> Index into array of analysis components
     * @param $get The $_POST array
     * @return string HTML to send
     */
    public function get(&$get) {
        $id = $get['id'];

		if(isset($get['teaming'])) {
			$submissions = new \Team\TeamSubmissions($this->course);
		} else {
			$submissions = new \Assignments\Submissions($this->course);
		}

        $analysis = $submissions->get_analysis($id);
        if($analysis === null) {
            return '<p class="center">Not Available</p>';
        }

        $users = new \Users($this->course);
        $submissionUser = $users->get_user($analysis['userid']);

        $assignment = $submissionUser->get_assignment($analysis['assigntag']);
        if($assignment === null) {
            return '<p class="center">Not Available</p>';
        }

        $submission = $assignment->get_grading()->get_submission($analysis['submissiontag']);
        if($submission === null) {
            return '<p class="center">Not Available</p>';
        }

		if(isset($get['teaming'])) {
			return $submission->present_analysis($get['ndx'], $analysis);
		} else {
			// There are two possibilities here:
			// 1. Staff can view any
			// 2. Users can view their own
			if($this->user->at_least(\User::GRADER) || $this->user->get_id() === $submissionUser->get_id()) {
				return $submission->present_analysis($get['ndx'], $analysis);
			}
		}
		
        return '<p class="center">Not Available</p>';
    }

    private $course;
    private $user;
}