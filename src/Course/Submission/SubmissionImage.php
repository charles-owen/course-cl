<?php
/** 
 * @file
 * Submission that is an image
 */

namespace CL\Course\Submission;

use CL\Site\Site;
use CL\Users\User;

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
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * type | string | Submission type: 'image'
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch ($property) {
			case 'type':
				return 'image';

            case 'bulk':
                return true;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Add additional content to the JSON data send to the client
	 * @param array $data Data array to add to
	 */
	protected function addData(array &$data, Site $site=null, User $user=null) {
		$data['type'] = 'image';
	}


	/**
	 * Validate that a file is acceptable for submission.
	 *
	 * The default returns null, which means no errors.
	 * @param string $name File name
	 * @param string $type File type
	 * @param string $path File path
	 * @return string Error message or null if file is acceptable.
	 */
	public function validateFile($name, $type, $path) {
		$valid = [
			'image/jpeg',
			'image/png',
			'image/gif'
		];

		if(!in_array($type, $valid)) {
			return 'Not a valid image';
		}

		return null;
	}
}
