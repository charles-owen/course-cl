<?php
/**
 * Created by PhpStorm.
 * User: cbowen
 * Date: 9/21/2016
 * Time: 11:12 AM
 */

namespace Assignments;


class SubmittedFileView extends SubmittedView {
	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}

	protected function not_available() {
		$root = $this->course->get_root();
		header("Location: $root/");
		exit;
	}

	protected function result($result) {
		$type = $result['type'];
		$bin = $result['binary'];
		$name = $result['name'];

		if($this->rename !== null) {
			$ext = pathinfo($name, PATHINFO_EXTENSION);
			$name = $this->rename . '.' . $ext;
		}

		header( "Content-Type: $type" );
		header( "Content-Disposition: attachment;filename=$name");
		echo $bin;
		exit;
	}

	protected function get_submission($submissions, $id) {
		return $submissions->get_file($id);
	}

	/**
	 * Calling this function sets an optional file renaming.
	 * @param $rename New name to give the file
	 */
	protected function set_rename($rename) {
		$this->rename = $rename;
	}

	private $rename = null;
}