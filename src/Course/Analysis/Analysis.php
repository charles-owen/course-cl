<?php
/**
 * @file
 * Base class for any analysis components.
 */

/**
 * Classes associated with analysis of student submissions
 */
namespace CL\Course\Analysis;

/**
 * Base class for any analysis components.
 */
abstract class Analysis {
	public function __construct() {
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------

	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {


			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------

	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'submission':
				$this->submission = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

    /**
     * Perform an analysis
     * @param Analyzer $analyzer Analyzer we are applying
     * @return mixed Analysis results as array or string
     */
    public abstract function analyze(Analyzer $analyzer);

    /**
     * Get information about the analysis component
     * @return mixed Array with key 'name', 'menu'
     */
    public abstract function info(\Course $course);

    /**
     * Present analysis for the user
     * @param $analysis The analysis array as stored with the submission
     * @return string HTML
     */
    public abstract function present($analysis);

	/**
	 * @param \Assignments\Submission $submission The Submission object we are associated with
	 */
	public function set_submission(\Assignments\Submission $submission) {
		$this->submission = $submission;
	}

    /**
     * Get the submission data from the user
     *
     * The basic version assumes only a single submission file. Derived classes
     * may override this functionality to support multiple-file submissions.
     *
     * @param \Course $course Course object
     * @param \User $user User we are getting the data for
     * @return array Array of submission file data. Each item is filename=>data
     */
    public function get_data(\Course $course, \User $user) {
        $assignment = $this->submission->get_assignment();
        $submittag = $this->submission->get_tag();

        $submissions = new \Assignments\Submissions($course);
        $submits = $submissions->get_submissions($assignment, $submittag, $user);
        if(count($submits) == 0) {
            return [];
        }

        $data = $submissions->get_file($submits[0]['id']);
        return [$submits[0]['name'] => $data];
    }

	/**
	 * Get any grading page link for analysis
	 * @return string HTML
	 */
	public function get_link() {
		return '';
	}

	protected $submission = null;
}

/**
 * Exceptions that can be thrown by analysis
 */
class AnalysisException extends \Exception {

}