<?php
/** 
 * @file
 * Submission that is text content
 */

namespace CL\Course\Submission;



use CL\Course\AssignmentView;
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

		$submissionsTable = new Submissions($view->site->db);
		$submission = $submissionsTable->get_text($submissions[0]['id']);

		$data['preview'] = ['text'=>$submission['text'], 'date'=>$submission['date']];
	}



//    /**
//     * Construct a single row of the submissions table
//     * @param \User $user User this submission is for
//     * @param array $submit The submission record from the table
//     * @param $staffview True if this is a staff view
//     * @param $func The name of the JavaScript function to call to bring up the submission
//     * @return string HTML for the row
//     */
//    protected function present_submission_row(\User $user, array $submit, $staffview, $func) {
//        $date = date('l, m-d-Y, g:i:sa', $submit['date']);
//        $id = $submit['id'];
//
//		$by = "";
//		if(isset($submit['userid'])) {
//			$users = new \Users($this->get_assignment()->get_course());
//			$user = $users->get_user($submit['userid']);
//			if($user !== null) {
//				$by = " by " . $user->get_displayname();
//			} else {
//				$by = " by unknown user";
//			}
//		}
//
//        $html = <<<HTML
//
//<tr><td><div class="menu"><a href="javascript:;" onclick="$func('$id')">$date$by</a></div></td></tr>
//HTML;
//
//        return $html;
//    }

	private $height = "10em";
}
