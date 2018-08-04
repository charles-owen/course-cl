<?php
/** @file
 * Base class for classes that model an assignment submission
 */
 
namespace CL\Course\Submission;

use CL\Course\Analysis\Analysis;

use CL\Users\User;
use CL\Course\AssignmentView;

/**
 * Base class for classes that model an assignment submission
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
	 * @param User $user Current user
	 * @param int $time Current time
	 * @returns string HTML For submission page
	 */
	public function present(AssignmentView $view, User $user, $time=null) {
		$time = $time !== null ? $time : time();

		$submissions = new Submissions($view->site->db);

		$assignment = $this->assignment;

		$data = [
			'name' => $this->name,
			'submit' => true,
			'open'=> $assignment->is_open($user, $time),
			'assignTag' => $assignment->tag,
			'tag' => $this->tag,
			'additional' => $this->additional,
			'submissions' => $submissions->get_submissions($user,
				$assignment->tag, $this->tag)
		];

		$this->addData($data);

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
	 * Present the submissions for a user
	 * @param User $user User to present for
	 * @param $staffview True if this is a staff view page 
	 * @returns HTML for the presentation
	 */
	public function present_submits(User $user, $staffview) {
		$course = $this->assignment->course;

		if($this->get_teaming() !== null) {
			$teams = $this->get_teams($user);
			if(count($teams) == 0) {
				$this->recent = null;
				$html = <<<HTML
<p class="center">Not a member of a team.</p>
HTML;
				return $html;
			} else {
				$submissions = new \Team\TeamSubmissions($this->assignment->course);
				$submits = $submissions->get_submissions($this->assignment,
					$this->tag, $teams[0]);
			}

		} else {
			$submissions = new Submissions($course->site->db);
			$submits = $submissions->get_submissions($user, $this->assignment->tag, $this->tag);
		}


		if(count($submits) === 0) {
			$this->recent = null;
			$html = <<<HTML
<p class="center">No submissions, yet.</p>
HTML;
			return $html;
		}

		$this->recent = $submits[0]['id'];

        /*
         * This ensures that if we have multiple submissions
         * on a page that each gets a unique javascript function
         */
        self::$cnt++;
        $func = 'request_' . self::$cnt;

        /*
         * Present any mechanism for displaying this submission
         */
		$html = $this->present_submits_display($user, $staffview, $submits, $func);
		
		/*
		 * Present the table of submissions 
		 */
		$html .= <<<HTML
<div class="left">
<table><tr><th>Submission Date</td></tr>
HTML;

		foreach($submits as $submit) {
            $html .= $this->present_submission_row($user, $submit, $staffview, $func);
		}
		
		$html .= "</table></div>";
		
		$html .= $this->present_submits_message();

		if($this->additional !== null) {
			$html .= $this->additional;
		}
		
		return $html;
	}

    /**
     * Construct a single row of the submissions table
     * @param \User $user User this submission is for
     * @param array $submit The submission record from the table
     * @param $staffview True if this is a staff view
     * @param $func The name of the JavaScript function to call to bring up the submission
     * @return string HTML for the row
     */
    protected function present_submission_row(\User $user, array $submit, $staffview, $func) {
		return '';
	}
	
	/** Present the submission display/access support
	 * @param $user User to present for
	 * @param $staffview True if this is a staff view page 
	 * @param $submits The submits from the database
	 * @param $func The name of the javascript function for clicking on a submit
	 * @returns HTML for the presentation */
	protected function present_submits_display(\User $user, $staffview, $submits, $func) {
        return '';
    }

	
	/**
	 * The message to display below the submissions
	 * @returns HTML */
	protected function present_submits_message() {
		return '';
	}
	

	
	/** Handle a file submission
	 * @param $user User the submission is for
	 * @param $time Submission time as PHP time value
	 * @param $file Path to the file to submit
	 * @param $name Name of the file as submitted
	 * @param $type Type of the submission file */
	public function submit_file(User $user, $time, $file, $name, $type) {
		$course = $this->assignment->course;

		if($this->get_teaming() !== null) {
			$teams = $this->get_teams($user);
			if(count($teams) == 0) {
				return json_encode(array('ok'=>false, 'msg'=>"Not a member of a team"));
			}

			$submissions = new \Team\TeamSubmissions($course );
			$result = $submissions->submit_file($teams[0], $user, $this, $time, $file, $name, $type);
		} else {
			$submissions = new \Assignments\Submissions($course );
			$result = $submissions->submit_file($user, $this, $time, $file, $name, $type);
		}
		
		$this->submitted($user, $time);
		return $result;
	}
	
	public function set_analysis($id, $analysis) {
		$course = $this->assignment->course;

		if($this->get_teaming() !== null) {
			$submissions = new \Team\TeamSubmissions($course);
		} else {
			$submissions = new \Assignments\Submissions($course );
		}

		$submissions->set_analysis($id, $analysis);
	}
	

	
	/** This function is called whenever a new submission occurs.
	 *
	 * This checks to see if pending review is open on this submission. If so,
	 * it tells the pending review system so it can test the results 
	 */
	protected function submitted(\User $user, $time) {
		$this->assignment->submitted($user, $this, $time);
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
	 * Get the array of installed analysis for this submission
	 * @return array of Analysis objects
	 */
	public function get_analysis() {
		return $this->analysis;
	}

    /**
     * Present the formatted analysis
     * @param $ndx Index into the array of analysis components
     * @param $analysis The analysis array as stored with the submission
     * @return string HTML
     */
    public function present_analysis($ndx, $analysis) {
        if(isset($this->analysis[$ndx])) {
            return $this->analysis[$ndx]->present($analysis);
        }

        return '<p class="center">Not available</p>';
    }

	/**
	 * Submit a file to analysis
	 * @param $path Path to the file to analyze
	 * @return null|array Array of analysis results or null if none
	 */
	public function analyze($path) {
		if(count($this->analysis) == 0) {
			return null;
		}

		$analyzer = new \Analysis\Analyzer($this, $path);
		foreach($this->analysis as $analysis) {
			$analysis->analyze($analyzer);
		}

		$results = $analyzer->get_results();
		$analyzer->close();

		return $results;
	}

	/**
	 * Get the name of the teaming for this assignment.
	 * @return teaming|null The teaming name or null if not a team submission
	 */
	public function get_teaming() {
		return $this->teaming;
	}

	/**
	 * Get the team for a user for this submission
	 * @param User $user
	 * @return array of team ID's for false if failure
	 */
	public function get_teams(User $user) {
		if($this->teaming === null) {
			return false;
		}

		$course = $this->assignment->course;
		$teamMembers = new \Team\TeamMembers($course);
		return $teamMembers->get_teams_in_teaming_by_tag($user, $this->teaming);
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


	protected $analysis = array();	///< Any Analysis components we will use
	private $teaming;	///< Any teaming this submission is for
}
