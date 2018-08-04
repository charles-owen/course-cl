<?php
/** 
 * @file
 * Submission that is an image
 */

namespace CL\Course\Submission;

/** 
 * Submission that is an image
 */
class SubmissionImage extends Submission {
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
	 * Add additional content to the JSON data send to the client
	 * @param array $data Data array to add to
	 */
	protected function addData(array &$data) {
		$data['type'] = 'image';
	}

}
