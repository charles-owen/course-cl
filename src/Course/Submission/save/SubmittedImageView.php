<?php
/**
 * Created by PhpStorm.
 * User: cbowen
 * Date: 9/21/2016
 * Time: 11:12 AM
 */

namespace Assignments;


class SubmittedImageView extends SubmittedView {
	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}

	protected function not_available() {
		$notauth = $this->course->get_libroot() . '/images/notauthorized.png';
		header("Location: $notauth");
		exit;
	}

	protected function result($result) {
		$type = $result['type'];
		$bin = $result['binary'];
		header( "Content-Type: $type" );
		echo $bin;
		exit;
	}

	protected function get_submission($submissions, $id) {
		return $submissions->get_file($id);
	}

}