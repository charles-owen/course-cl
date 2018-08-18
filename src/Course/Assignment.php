<?php
/** @file
 * Class that represents a single assignment in the assignment tracking system.
 */
 
namespace CL\Course;

use CL\Users\User;
use \Closure;
use CL\Site\ViewAux;

/**
 * A single assignment in the assignment tracking system.
 *
 * This is for basic assignments and can be overridden for
 * more complex assignments.
 *
 * @cond
 * @property \CL\Grades\AssignmentGrading grading
 * @property Section section
 * @property array Submissions
 * @property \CL\Site\Site site
 * @endcond
 */
class Assignment {
	/** Constructor
	 * @param string $tag Tag for the assignment
	 * @param string $name Assignment name
	 * @param string $url URL for the assignment
	 */
	public function __construct($tag, $name, $url = null)
	{
		$this->tag = $tag;
		$this->name = $name;
		$this->shortname = $name;
		$this->url = $url;
	}

	/**
	 * Get standard properties for an assignment.
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * category | AssignmentCategory | The assignment category for this assignment
	 * course | Course | The Course object
	 * dir | string | Directory (path) containing the assignment
	 * grading | AssignmentGrading | Optional grading object if grading subsystem present
	 * name | string | Assignment name (full)
	 * release | int | Time/date for assignment release
	 * revised | boolean | true if the due date has been revised.
	 * section | Section | Course Section object/section this assignment is for
	 * shortName | string | Assignment short name (like "Step 1")
	 * site | Site | The Site object
	 * solving | string | Path to problem solving document
	 * submissions | AssignmentSubmissions | The submissions object for this assignment
	 * tag | string | Assignment tag
	 * url | string | URL for this assignment on the site
	 *
	 * @param string $property Property to get
	 * @return Course|mixed|null|string Property value
	 */
	public function __get($property)
	{
		switch ($property) {
			case 'category':
				return $this->category;

			case 'course':
				return $this->section->course;

			case 'dir':
				return $this->get_dir();

			case 'grading':
				return $this->grading;

			case 'section':
				return $this->section;

			case 'name':
				return $this->name;

			case 'shortName':
				return $this->shortname;

			case 'site':
				return $this->section->course->site;

			case 'tag':
				return $this->tag;

			case 'url':
				return $this->section->course->root . '/' . $this->url;

			// 	The assignment release date/time
			case 'release':
				return $this->release;

			case 'revised':
				return $this->revised;

			case 'solving':
				return $this->solving;

			case 'submissions':
				if ($this->submissions_ === null) {
					$this->submissions_ = new Submission\AssignmentSubmissions($this);
				}
				return $this->submissions_;

			default:
				if (isset($this->properties[$property])) {
					return $this->properties[$property];
				}

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
	 * category | AssignmentCategory | AssignmentCategory for this assignment
	 * grading | Grading | Add a grading object to assignment
	 * solving | string | Path to problem solving page
	 *
	 * @param string $property Property to set
	 * @param string $value Value to set
	 */
	public function __set($property, $value)
	{
		switch ($property) {
			case 'grading':
				$this->grading = $value;
				$this->grading->assignment = $this;
				break;

			case 'category':
				$this->category = $value;
				$this->section = $value->section;
				break;

			case 'solving':
				$this->solving = $value;
				break;

			default:
				if (isset($this->properties[$property])) {
					$this->properties[$property] = $value;
					break;
				}

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
	 * The assignment due date
	 *
	 * The format for a due date is a time string as in
	 * '9/02/2014 11:55pm'. Any time that can be read by PHP's strtotime
	 * will work.
	 *
	 * @param $due The due date (time as a string as in '9/02/2014 11:55pm')
	 * @param $revised true if the due date is a revison
	 */
	public function set_due($due, $revised = FALSE)
	{
		$this->due = strtotime($due);
		$this->revised = $revised;
	}

	/** The assignment due date as a PHP time
	 * @param $user User we want the due date for or null to get the fixed due date
	 * @returns Due date or null if none
	 */
	public function get_due(User $user = null)
	{
		$due = $this->due;

		if ($user === null) {
			return $due;
		}

//		if ($this->reviewing !== null) {
//			$rdue = $this->reviewing->get_revision_due($user);
//			if ($rdue !== null && $rdue > $due) {
//				$due = $rdue;
//			}
//		}

		// Handle a user extension of the due date
		$extension = $user->member->meta->get(Member::METADATA_EXTENSIONS, $this->tag);
		if ($extension !== null && $extension > $due) {
			$due = $extension;
		}

		return $due;
	}

	/**
	 * Is the due date an extension?
	 * @param User $user User we are checking
	 * @return bool true if due date is an extension.
	 */
	public function is_extension(User $user)
	{
		// Handle a user extension of the due date
		$extension = $user->member->meta->get(Member::METADATA_EXTENSIONS, $this->tag);
		if ($extension !== null && $extension > $this->due) {
			return true;
		}

		return false;
	}

	/**
	 * Is the time after the due date?
	 *
	 * If no due date is specified, this will return
	 * false since we can't be after a due date not set.
	 *
	 * Guests always return false
	 *
	 * @param User $user The user we are looking at
	 * @param int $time PHP time, default is current time
	 * @param int $delay Delay after due time/date
	 * @returns true if after a specified due date
	 */
	public function after_due(User $user, $time = null, $delay = 0) {
		if ($time === null) {
			$time = time();
		}

		// Guests are never after the due date
		if($user->guest) {
			return false;
		}

		$due = $this->get_due($user);

		if ($due === null) {
			return true;
		}

		return $time > ($due + $delay);
	}

	/** The assignment release date
	 *
	 * This function sets the date/time that an assignment is released to
	 * students. It optionally can also set the due date.
	 *
	 * The format for a release date is a time string as in
	 * '9/02/2014 11:55pm'. Any time that can be read by PHP's strtotime
	 * will work. An option format is:
	 *
	 * '-14 days' : 14 days prior to the due date
	 * 'no' or 'none' : No release date at all
	 *
	 *
	 * @param $release The release date (time as a string as in '9/02/2014 11:55pm')
	 * @param $due Optional due date (time as a string as in '9/02/2014 11:55pm')
	 * @param $revised Optional due date revised flag
	 */
	public function set_release($release, $due = null, $revised = false)
	{
		if ($due !== null) {
			$this->set_due($due, $revised);
		}

		if (preg_match('/no/i', $release)) {
			$this->release = false;
		} else if (preg_match('/^-([0-9]+)\s+days?/i', $release, $matches)) {
			$this->release = $this->due - $matches[1] * 86400;
		} else {
			$this->release = strtotime($release);
		}
	}


	/** Is this assignment active for submission?
	 * @param $user User we are testing, default is current user
	 * @param $time PHP time, default is current time
	 */
	public function is_open(User $user, $time = null)
	{
		if ($time === null) {
			$time = time();
		}

		// Never open for guests
		if ($user->guest) {
			return false;
		}

		// If not released yet, we are not open
		if (!$this->after_release($time)) {
			return false;
		}

		// If no due date, we are always open
		if ($this->due === null) {
			return true;
		}

		// If there is a due date, open until after the due date
		return !$this->after_due($user, $time);
	}

	/** Is the time after the release date?
	 *
	 * If no release date is specified, this will return
	 * true. If the release date is equal to false, there is
	 * no release date for the assignment.
	 *
	 * @param $time PHP time
	 * @returns true if after a specified release date
	 */
	public function after_release($time)
	{
		if ($this->release === null) {
			return true;
		}

		if ($this->release === false) {
			return false;
		}

		return $time >= $this->release;
	}

	/**
	 * Is this assignment past the due date?
	 *
	 * This will return true if the time is after the due date
	 * and the user is not a guest. Always available to staff.
	 *
	 * @param User $user User we need a due date for
	 * @param int $time Current time
	 * @returns true if available to user
	 */
	public function available_due(User $user, $time)
	{
		if ($user->guest) {
			return false;
		}

//		//
//		// If there is reviewing, we don't open solutions
//		// until after the reviewing due date plus any option extra time
//		//
//		if ($this->reviewing !== null) {
//			$rdue = $this->reviewing->get_available_due();
//			if ($rdue !== null && $rdue > $time) {
//
//				return false;
//			}
//		}

		if (!$this->after_due($user, $time)) {
			return false;
		}

		return true;
	}

	/** Generate a top notice about availability relative to due date
	 *
	 * The will return for staff only a message about availability
	 * @param $user User
	 * @param $time Time
	 */
	public function shout_available_due(User $user, $time = null)
	{
		if ($user->is_staff()) {
			if ($time === null) {
				$time = time();
			}

			if ($this->available_due($user, $time)) {
				return '<p class="topnotice">available to students</p>';
			} else {
				return '<p class="topnotice">not available to students</p>';
			}
		}

	}

	/** Generate a top notice about availability relative to release date
	 *
	 * The will return for staff only a message about availability
	 * @param $user User
	 * @param $time Time
	 */
	public function shout_available_release(User $user, $time)
	{
		if ($user->is_staff()) {
			if ($this->after_release($time)) {
				return '<p class="topnotice">available to students</p>';
			} else {
				return '<p class="topnotice">not available to students</p>';
			}
		}

	}


	/**
	 * Is this assignment available to this user?
	 *
	 * This will return true if the time is after the release date.
	 * Always available to staff.
	 *
	 * @param User $user The user to test
	 * @param int $time Time to test
	 * @returns true if available to user
	 */
	public function available_release(User $user, $time)
	{
		// Assignments are always avialable to staff members
		if ($user->atLeast(Member::STAFF)) {
			return true;
		}

		if (!$this->after_release($time)) {
			return false;
		}

		return true;
	}


	/** Load the assignment definition.
	 *
	 * This is overridden for assignment types that have more
	 * complex definitions to load.
	 */
	public function load() {
		if ($this->loaded) {
			return;
		}

		/*
		 * Include the file that defines the actual assignment
		 * and run the function from define.inc.php if the file exists
		 */
		$file = $this->get_dir() . "/define.inc.php";
		if (file_exists($file)) {
			$define = require $file;
			if (is_callable($define)) {
				$define($this);
			}
		}

		$this->loaded = true;
	}


	/** This function is called whenever a new submission occurs.
	 *
	 * This checks to see if pending review is open on this submission. If so,
	 * it tells the pending review system so it can test the results
	 * @param The|User $user The user the submission is for
	 * @param Submission|The $submission The Submission object this is for
	 * @param $time Submission time
	 */
	public function submitted(User $user, Submission $submission, $time)
	{
//		if ($this->reviewing !== null) {
//			$this->reviewing->submitted($user, $submission, $time);
//		}
	}

	/** Construct the due date HTML for an assignment
	 * @returns HTML for the due date
	 */
	public function due_present(User $user, $name = null)
	{
		$html = '';

		if ($name === null) {
			$name = "This assignment";
		}

		$due = $this->get_due($user);
		if ($due != NULL) {
			$date = date("l, F j, Y", $due);
			$time = date("g:ia", $due);
			$html .= '<p class="due">' . $name . ' is due ' . $date . ' at ' . $time . '</p>';
		}

//		if ($this->reviewing !== null) {
//			$reviewDue = $this->reviewing->get_due();
//			$date = date("l, F j, Y", $reviewDue);
//			$time = date("g:ia", $reviewDue);
//			$html .= '<p class="due">Peer reviews are due ' . $date . ' at ' . $time . '</p>';
//		}

		return $html;
	}

	/** Set the assignment names
	 * @param string $name The name of the assignment (long name)
	 * @param string $shortName A short name for the assignment, such as 'Step 1'.
	 */
	public function set_name($name, $shortName)
	{
		$this->name = $name;
		$this->shortname = $shortName;
	}

	/** File system directory that contains the assignment
	 *
	 * The directory for an assignment defaults to the tag name in the
	 * course root. If a URL for the assignment is provided and it does
	 * not contain a period, it is assumed that is the directory for the
	 * assignment instead.
	 *
	 * @returns string File system path
	 */
	public function get_dir() {
		$rootDir = $this->section->course->rootDir;

		if ($this->url !== null && strpos($this->url, ".") !== false) {
			return $rootDir . '/' . $this->url;
		}

		return $rootDir . '/' . $this->tag;
	}

	/**
	 * Flag an assignment as looked at.
	 * @param User $user User doing the looking
	 * @param int $time Optional time for the look
	 * @internal param $
	 */
	public function look(User $user, $time = null)
	{
		if ($time === null) {
			$time = time();
		}

		$sectionStatus = new SectionStatus($this->site->db);
		$sectionStatus->set($user, $this->tag, 'look', SectionStatus::DONE, $time);
	}


//	/** The reviews due date
//	 * @param $due The due date (time as a string as in '9/02/2014 11:55pm')
//	 * @param $revisionHours Number of hours after review for resubmission, default is 24
//	 * @param $revised true if the due date is a revison
//	 */
//	public function set_reviews_due($due, $revisionHours = 24, $revised = false)
//	{
//		if ($this->reviewing === null) {
//			$this->reviewing = new \Review\Reviewing($this);
//		}
//
//		$this->reviewing->set_due($due, $revisionHours, $revised);
//	}
//
//	/**
//	 * Get the PeerReview object for this assignment
//	 * @return Reviewing|null Peer review object or null if not used
//	 */
//	public function get_reviewing()
//	{
//		return $this->reviewing;
//	}

	/**
	 * Magic function to disable displaying the section
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['category']);
		unset($properties['course']);
		unset($properties['section']);
		return $properties;
	}

	/**
	 * __call() is triggered when invoking inaccessible methods in an object context.
	 * @param string $name Name of non-existent function
	 * @param array $arguments Arguments to the function call
	 */
	public function __call($name, $arguments) {
		if (isset($this->extensions[$name])) {
			return $this->extensions[$name]($this, $arguments);
		} else {
			$trace = debug_backtrace();
			trigger_error(
				'Fatal error: Call to undefined method CL\Course\Assignment::' .
				$name . '() in ' . $trace[0]['file'] .
				' on line ' . $trace[0]['line'],
				E_USER_NOTICE);
		}
	}

	/**
	 * Extend this class by adding a new function.
	 * This is used by the Step system to add "add_step"
	 * to the assignment category.
	 * @param string $name Name of the function
	 * @param Closure $closure Closure to call.
	 */
	public function extend($name, $closure) {
		$this->extensions[$name] = $closure;
	}

	/**
	 * Add a custom property to this object.
	 *
	 * If called like this:
	 *
	 *   $assignment->addProperty('quiz', false)
	 *
	 * The __get and __set magic methods will now
	 * recognized a property 'quiz' with the initial
	 * value of false.
	 *
	 * @param string $name Property name
	 * @param mixed $value Initial value
	 * @param boolean $data If true the property will be sent to clients
	 */
	public function addProperty($name, $value, $data = false) {
		$this->properties[$name] = $value;
		if ($data) {
			$this->dataProperties[$name] = $data;
		}
	}

	/**
	 * Does the assignment have this installed property?
	 * @param string $name Name of property.
	 * @return bool True if installed.
	 */
	public function hasProperty($name) {
		return isset($this->properties[$name]);
	}

	/**
	 * Create data suitable for JSON to send to runtime
	 * @param array $options Options that control what data is included
	 * @return array
	 */
	public function data($options=[])
	{
		$this->load();

		$data = [
			'tag' => $this->tag,
			'name' => $this->name,
			'shortname' => $this->shortname,
			'url' => $this->__get('url')
		];

		$submissions = $this->submissions_;
		if($submissions !== null) {
			$submissionsData = $submissions->data();
			if($submissionsData !== null) {
				$data['submissions'] = $submissionsData;
			}
		}

		foreach ($this->dataProperties as $name => $propertyData) {
			$data[$name] = $this->properties[$name];
		}

		return $data;
	}

	/**
	 * Add any auxiliary views that are utilized by the page views
	 * @param ViewAux $aux Auxiliary view utilized by this page
	 * @return ViewAux The ViewAux object we added
	 */
	public function add_view_aux(ViewAux $aux) {
		$this->viewaux[] = $aux;
		return $aux;
	}

	/**
	 * Get all ViewAux views attached to this view.
	 * @return array All auxiliary views attached to this view
	 */
	public function get_view_aux() {
		return $this->viewaux;
	}

	// Basic description of an assignment
	private $tag;                // Assignment tag
	private $name;                // Name of the assignment
	private $shortname;            // Short name for the assignment
	private $url;               // URL for the assignment (optional)

	// When the assignment is released.
	// null (default) means open immediately
	// false means not released at all
	private $release = null;

	private $due = NULL;            // When the assignment is due
	private $revised = FALSE;       // Is the due date revised?

	private $category = null;       // Assignment category for this assignment
	private $section = null;        // Section we are a member of
	private $extensions = [];       // Extensions to this object

	private $grading = null;        // The Grading object for this assignment
	private $loaded = false;        // Is the assignment loaded?
	// private $reviewing = null;      // Optional PeerReview object for this assignment

	protected $solving = NULL;      ///< Optional problem solving document
	protected $interact = false;    ///< Do we use the Interact system?

	private $properties = [];       // Custom properties
	private $dataProperties = [];   // Custom data associated with properties

	private $viewaux = array();		///< Any auxiliary views to add to pages

	// AssignmentSubmissions object
	// Any submissions for this assignment
	private $submissions_ = null;
}
