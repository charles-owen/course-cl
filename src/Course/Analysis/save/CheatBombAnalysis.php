<?php
/**
 * @file
 * Class to attach to a submission to support the cheat-bomb system.
 */

namespace Analysis;

/**
 * Class to attach to a submission to support the cheat-bomb system.
 *
 * Cheat Bombs are things that are expected or not expected in a student
 * submission. When students are given starter applications, subtle changes
 * can be made in the start applications that this component will then
 * search for. For example, strings can be added to the template or removed.
 * Not finding the added strings means the template was not used. Finding removed
 * or changed strings indicates a previous year template was used.
 */
class CheatBombAnalysis extends Analysis {
	/// Tag for this analysis component
	const TAG = 'cb';

	public function __set($name, $value) {
		switch($name) {
			case 'type':
				$this->type = $value;
				break;
		}
	}

	public function __get($name) {
		switch($name) {
			case 'type':
				return $this->type;
		}
	}

	public function expect($file, $regex) {
		$this->expected[] = array('file' => $file, 'regex' => $regex);
	}

	public function not($file, $regex) {
		$this->not_expected[] = array('file' => $file, 'regex' => $regex);
	}

	public function get_expected() {
		return $this->expected;
	}

	public function get_not_expected() {
		return $this->not_expected;
	}

	/**
	 * Perform the analysis. Does not do anything at submission time.
	 * @param Analyzer $analyzer The analyzer for a submission
	 * @throws Exception If unable to unzip the solution or solution is invalid
	 */
	public function analyze(Analyzer $analyzer) {
	}

	/**
	 * Get information about the analysis component
	 * @return mixed Array with key 'name'
	 */
	public function info(\Course $course) {
		return null;
	}

	/**
	 * Present analysis for the user
	 * @param $analysis The analysis array as stored with the submission
	 * @return string HTML nothing for this analysis...
	 */
	public function present($analysis) {
		return "";
	}



	/**
	 * Get any grading page link for analysis
	 * @return string HTML
	 */
	public function get_link() {
		$submissionTag = $this->submission->get_tag();
		$submissionName = $this->submission->get_name();
		$assignmentTag = $this->submission->get_assignment()->get_tag();
		$libroot = $this->submission->get_assignment()->get_course()->get_libroot();
		return <<<HTML
<p><a href="$libroot/assign/cheatbomb.php?a=$assignmentTag&s=$submissionTag">Cheat Bomb analysis for $submissionName</a></p>
HTML;
	}

	private $type = "zip";
	private $expected = array();
	private $not_expected = array();
}