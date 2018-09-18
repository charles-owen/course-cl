<?php
/** 
 * @file
 * Submission that is text content
 */

namespace CL\Course\Submission;



use CL\Course\AssignmentView;
use CL\Team\Submission\TeamSubmissions;
use CL\Users\User;

/**
 * Submission that is text content
 */
class SubmissionText extends Submission {
	/**
	 * Constructor
	 * @param string $tag Tag associated with the submission
	 * @param string $name Name for the submission
	 * @param string $teaming Teaming name if team submission
	 */
	public function __construct($tag, $name, $teaming) {
		parent::__construct($tag, $name, $teaming);
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * height | string | Height of the text editor (default = "10em")
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch ($property) {
			case 'height':
				return $this->height;

			case 'type':
				return 'text';

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * height | string | Height of the text editor (default = "10em")
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch ($property) {
			case "height":
				$this->height = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}


	/**
	 * Add additional content to the JSON data send to the client
	 * @param array $data Data array to add to
	 */
	protected function addData(array &$data) {
		$data['type'] = 'text';
		$data['height'] = $this->height;
	}

	/**
	 * Add actual submission data to the data array.
	 *
	 * This is used to add the actual Text submission to the
	 * data send to the client so we can preview it immediately.
	 * @param AssignmentView $view
	 * @param User $user
	 * @param array $submissions
	 */
	protected function addPreview(array &$data, AssignmentView $view, User $user, array $submissions) {
		if(count($submissions) === 0) {
			return;
		}

		$submissionsTable = $this->teaming === null ?
			new Submissions($view->site->db) :
			new TeamSubmissions($view->site->db);
		$submission = $submissionsTable->get_text($submissions[0]['id']);

		$data['preview'] = ['text'=>$submission['text'], 'date'=>$submission['date']];
	}

	private $height = "10em";
}
