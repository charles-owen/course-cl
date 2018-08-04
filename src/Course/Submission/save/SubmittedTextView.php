<?php
/**
 * Created by PhpStorm.
 * User: cbowen
 * Date: 9/21/2016
 * Time: 9:55 AM
 */

namespace Assignments;


class SubmittedTextView extends SubmittedView {
	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}

	protected function not_available() {
		return '<p class=""center">Not Available</p>';
	}

	protected function result($result) {
		$text = $result['text'];
		return <<<HTML
<div class="problem"><pre>
$text
</pre></div><p></p>
HTML;
	}

	protected function get_submission($submissions, $id) {
		return $submissions->get_text($id);
	}
}