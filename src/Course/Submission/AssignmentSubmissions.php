<?php
/**
 * @file
 * Submissions associated with an assignment
 */

namespace CL\Course\Submission;

use CL\Course\Assignment;
use CL\Site\Site;
use CL\Users\User;

/**
 * Submissions associated with an assignment
 */
class AssignmentSubmissions {

	/**
	 * AssignmentSubmissions constructor.
	 * @param Assignment $assignment Assignment these submissions are for
	 */
	public function __construct(Assignment $assignment) {
		$this->assignment = $assignment;
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'submissions':
				return $this->submissions;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {


			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/** Add a submission object to this assignment
	 * @param string $tag Submission tag (local identifier)
	 * @param Submission $submission The Submission object
	 * @return Submission object
	 */
	public function add_submission(Submission $submission) {
	    $tag = $submission->tag;

		// Validate teaming
		if($submission->teaming !== null) {
			$site = $this->assignment->site;
			if(!$site->installed('team')) {
				$submission->teaming = null;
				$trace = debug_backtrace();
				trigger_error(
					'Submission assigned a teaming without the teaming subsystem installed in ' .
					$trace[1]['file'] . ' on line ' . $trace[1]['line'],
					E_USER_NOTICE);
			}

		}

		$this->submissions[$tag] = $submission;
		$submission->assignment = $this->assignment;
		return $submission;
	}

	/**
	 * Add a submission of type Program to this assignment
	 * @param string $tag Submission tag (local identifier)
	 * @param string $name Assignment name
	 * @param string $teaming Teaming name if this is a team submission
	 * @return Submission object
	 */
	public function add_program($tag, $name, $teaming=null) {
        return $this->add_submission(new SubmissionProgram($tag, $name, $teaming));
	}

	/**
	 * Add a submission of type Text to this assignment
	 * @param string $tag Submission tag (local identifier)
	 * @param string $name Assignment name
	 * @param string $teaming Teaming name if this is a team submission
	 * @return Submission object
	 */
	public function add_text($tag, $name, $teaming=null) {
		return $this->add_submission(new SubmissionText($tag, $name, $teaming));
	}

	/** Add a submission of type Image to this assignment
	 * @param string $tag Assignment tag
	 * @param string $name Assignment name
	 * @param string $teaming Teaming name if this is a team submission
	 * @return Submission object */
	public function add_image($tag, $name, $teaming=null) {
        return $this->add_submission(new SubmissionImage($tag, $name, $teaming));
	}


	/**
	 * Get a submission object
	 * @param $tag Submission tag
	 * @return Submission object or null if invalid tag
	 */
	public function get($tag) {
		if(!isset($this->submissions[$tag])) {
			return null;
		}

		return $this->submissions[$tag];
	}

	/**
	 * Create data suitable for JSON to send to runtime
	 * @return array or null if no submissions
	 */
	public function data(Site $site=null, User $user=null) {
		if(count($this->submissions) === 0) {
			return null;
		}

		$data = [];
		foreach($this->submissions as $submission) {
			$data[] = $submission->data($site, $user);
		}

		return $data;
	}

	private $assignment;        // Assignment these submissions are for
	private $submissions = [];  // Collection of submissions for this assignment
}
