<?php
/** 
 * @file
 * Submission that is a program or binary file
 */

namespace CL\Course\Submission;

/** 
 * Submission that is a program or binary file
 */
class SubmissionProgram extends Submission {
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
	 * type | string | Submission type: 'program'
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch ($property) {
			case 'type':
				return 'program';

			default:
				return parent::__get($property);
		}
	}


	/**
	 * Add additional content to the JSON data send to the client
	 * @param array $data Data array to add to
	 */
	protected function addData(array &$data) {
		$data['type'] = 'program';
	}

}
