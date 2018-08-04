<?php
/**
 * @file
 * Controller for text submission
 */
namespace Assignments;

/**
 * Controller for text submission
 *
 * Used by assign/submittext.php
 */
class SubmitTextController extends \Controller {
	/**
	 * @brief Constructor
	 * @param \Course $course The Course object
	 * @param \User $user The User object
	 * @param $time Time of the submission as a Unix time value
	 */
	public function __construct(\Course $course, \User $user, $time) {
		parent::__construct($course, $user);
		$this->time = $time;
	}


	/**
	 * Handle post for text submission
	 * @param $post The $_POST array
	 * @return string String to return to client
	 */
	public function post(&$post) {
		if(!isset($post['assign']) || !isset($post['tag']) || !isset($post['id'])) {
			// Invalid command from page
			return $this->json_error("Invalid submission - request improperly framed");
		}


		/*
		 * Determine the assignment
		 */
		$section = $this->user->get_section();
		$assignment = $section->get_assignment($post['assign']);
		$assignment->load();
		if($assignment === null) {
			return $this->json_error("Invalid assignment");
		}

		// Has the assignment expired?
		// We allow staff to submit even if not open...
		if(!$this->user->is_staff() && !$assignment->is_open($this->user, $this->time)) {
			return $this->json_error("Assignment is not open for submission");
		}

		$grading = $assignment->get_grading();
		$submission = $grading->get_submission($post['tag']);
		if($submission === null) {
			return $this->json_error("Invalid submission tag");
		}

		// Get the text
		$id = $post['id'];
		$text = $post[$id];
		
		return $submission->submit_text($this->user, $this->time, $text);
	}

	private $time;
}