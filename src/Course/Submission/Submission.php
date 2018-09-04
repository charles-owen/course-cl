<?php
/** @file
 * Base class for classes that model an assignment submission
 */
 
namespace CL\Course\Submission;

use CL\Course\Analysis\Analysis;

use CL\Site\Site;
use CL\Users\User;
use CL\Course\AssignmentView;
use CL\Course\Analysis\Analyzer;

/**
 * Base class for classes that model an assignment submission
 *
 * @cond
 * @property \CL\Course\Assignment assignment
 * @endcond
 */
abstract class Submission {
	/**
	 * Constructor
	 * @param string $tag Tag associated with the submission
	 * @param string $name Name for the submission
	 * @param string $teaming Teaming name if team submission
     */
	public function __construct($tag, $name, $teaming=null) {
		$this->tag = $tag;
		$this->name = $name;
		$this->teaming = $teaming;
	}



	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * name | string | Name associated with the submission
	 * tag | string | Tag associated with the submission
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'assignment':
				return $this->assignment;

			case 'tag':
				return $this->tag;
				break;

			case 'name':
				return $this->name;
				break;

			case 'analysis':
				return $this->analysis;

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
	 * present_additional | string | Additional HTML content to present with the submission
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case "additional":
				$this->additional = $value;
				break;

			case 'assignment':
				$this->assignment = $value;
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
	 * Present the submission form where users enter the submission
	 * @param AssignmentView $view The view of the assignment
	 * @param User $user Current user
	 * @param int $time Current time
	 * @return string HTML For submission page
	 */
	public function present(AssignmentView $view, User $user, $time=null) {
		$time = $time !== null ? $time : time();

		$submissions = new Submissions($view->site->db);

		$assignment = $this->assignment;

		$analysis = [];
		foreach($this->analysis as $an) {
			$info = $an->info($view->site);
			if($info !== null) {
				$analysis[] = $info;

			}
		}

		$data = [
			'name' => $this->name,
			'submit' => true,
			'open'=> $assignment->is_open($user, $time),
			'assignTag' => $assignment->tag,
			'tag' => $this->tag,
			'additional' => $this->additional,
			'analysis'=>$analysis,
			'submissions' => $submissions->get_submissions($user->member->id,
				$assignment->tag, $this->tag)
		];

		$this->addData($data);
		$this->addPreview($data, $view, $user, $data['submissions']);

		$json = htmlspecialchars(json_encode($data), ENT_NOQUOTES);

		return <<<HTML
<div class="cl-submission" style="display:none">$json</div>
HTML;
	}

	/**
	 * Create a data array that describes this submission suitable for sending to a client.
	 * @return array Data
	 */
	public function data() {
		$data = [
			'name' => $this->name,
			'tag' => $this->tag,
		];

		$this->addData($data);
		return $data;
	}

	/**
	 * Add additional content to the JSON data send to the client
	 * @param array $data Data array to add to
	 */
	protected function addData(array &$data) {
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
	}


	

	
//	/** Handle a file submission
//	 * @param $user User the submission is for
//	 * @param $time Submission time as PHP time value
//	 * @param $file Path to the file to submit
//	 * @param $name Name of the file as submitted
//	 * @param $type Type of the submission file */
//	public function submit_file(User $user, $time, $file, $name, $type) {
//		$course = $this->assignment->course;
//
//		if($this->get_teaming() !== null) {
//			$teams = $this->get_teams($user);
//			if(count($teams) == 0) {
//				return json_encode(array('ok'=>false, 'msg'=>"Not a member of a team"));
//			}
//
//			$submissions = new \Team\TeamSubmissions($course );
//			$result = $submissions->submit_file($teams[0], $user, $this, $time, $file, $name, $type);
//		} else {
//			$submissions = new \Assignments\Submissions($course );
//			$result = $submissions->submit_file($user, $this, $time, $file, $name, $type);
//		}
//
//		$this->submitted($user, $time);
//		return $result;
//	}

	/**
	 * Set the analysis for a submission.
	 * @param Site $site The Site object
	 * @param int $id ID for the submission in the submissions table
	 * @param array $analysis Analysis to set
	 */
	public function set_analysis(Site $site, $id, $analysis) {
//		if($this->get_teaming() !== null) {
//			$submissions = new \Team\TeamSubmissions($site->db);
//		} else {
//			$submissions = new Submissions($site->db);
//		}

		$submissions = new Submissions($site->db);
		$submissions->set_analysis($id, $analysis);
	}



	/**
	 * Add an analysis to perform on this submission
	 * @param Analysis $analysis Analysis component to add
	 * @return Analysis object
	 */
	public function add_analysis(Analysis $analysis) {
		$this->analysis[] = $analysis;
		$analysis->submission = $this;
		return $analysis;
	}



	/**
	 * Submit a file to analysis
	 * @param Site $site The site object
	 * @param string $path Path to the file to analyze
	 * @return null|array Array of analysis results or null if none
	 */
	public function analyze(Site $site, $path) {
		if(count($this->analysis) == 0) {
			return null;
		}

		$analyzer = new Analyzer($this, $path);
		foreach($this->analysis as $analysis) {
			$analysis->analyze($site, $analyzer);
		}

		$results = $analyzer->get_results();
		$analyzer->close();

		return $results;
	}


//	/**
//	 * Get the team for a user for this submission
//	 * @ param User $user
//	 * @ return array of team ID's for false if failure
//	 */
//	public function get_teams(User $user) {
//		if($this->teaming === null) {
//			return false;
//		}
//
//		$course = $this->assignment->course;
//		$teamMembers = new \Team\TeamMembers($course);
//		return $teamMembers->get_teams_in_teaming_by_tag($user, $this->teaming);
//	}

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
		return null;
	}

	/**
	 * Is this submission visible on the user grades page?
	 *
	 * Some submissions are only used for staff purposes, such as
	 * web-based submissions. Those types override this function
	 * and return false
	 *
	 * @return bool True if the user sees the submission
	 */
	public function is_user_displayed() {
		return true;
	}

    /**
     * Get any link to a bulk-download page for this submission type.
     *
     * Default is none, override for classes that support bulk downloading.
     * @param User $user User who is viewing this information
     * @return string HTML
     */
	public function get_bulk_download_link(User $user) {
	    return '';
    }

    private $assignment;    // Assignment this submission is for
	private $tag;		    // Submission tag
	private $name;		    // Submission name
	private $additional = null; // Additional text to display with the submission tool


	/// Any Analysis components we will use
	protected $analysis = [];
	private $teaming;	///< Any teaming this submission is for
}
