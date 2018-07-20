<?php
/** @file
 * Class that represents a single assignment in the assignment tracking
 * and grading system.
 */
 
namespace CL\Course\Assignments;

use CL\Course\Course;


/**
 * A single assignment in the assignment tracking
 * and grading system.
 *
 * This is for basic assignments and can be overridden for
 * more complex assignments.
 */
class Assignment {
	/** Constructor 
	 * @param string $tag Tag for the assignment
	 * @param string $name Assignment name
	 * @param string $url URL for the assignment
	 */
	public function __construct($tag, $name, $url=null) {
		$this->tag = $tag;
		$this->name = $name;
		$this->shortname = $name;
		$this->url = $url;
	}

    /**
     * Get standard properties for an assignment.
     *
     * @param $key Options are: course, tag
     * @return Course|mixed|null|string Property value
     */
    public function __get($key)
    {
        switch ($key) {
            case 'tag':
                return $this->tag;

	        case 'category':
	        	return $this->category;

            case 'course':
                return $this->course;

            case 'section':
                return $this->section;

	        case 'grading':
		        return $this->grading;

            default:
                $trace = debug_backtrace();
                trigger_error(
                    'Undefined property ' . $key .
                    ' in ' . $trace[0]['file'] .
                    ' on line ' . $trace[0]['line'],
                    E_USER_NOTICE);
                return null;
        }
    }


	/**
	 * Property set magic method
	 * @param string $key Property name
	 * @param string $value Value to set
	 */
	public function __set($key, $value)
	{
		switch ($key) {
			case 'grading':
				$this->grading = $value;
				break;

			case 'category':
				$this->category = $value;
				$this->section = $value->section;
				$this->course = $value->course;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
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
	 * @param $revised true if the due date is a revison */
	public function set_due($due, $revised=FALSE) {
		$this->due = strtotime($due);
		$this->revised = $revised;
	}
	
	/** The assignment due date as PHP time
     * @param $user User we want the due date for or null to get the fixed due date
     * @returns Due date or null if none */
	public function get_due(\User $user=null) {
		$due = $this->due;

        if($user === null) {
            return $due;
        }

		if($this->reviewing !== null) {
			$rdue = $this->reviewing->get_revision_due($user);
			if($rdue !== null && $rdue > $due) {
				$due = $rdue;
			}
		}

        // Handle a user extension due date
        $extdue = $user->get_preferences()->get_extension($this);
        if($extdue !== null && $extdue > $due) {
            $due = $extdue;
        }

		return $due;
	}
	
	/** This due date is a user due date extension */
	public function is_extension(\User $user) {
        // Handle a user extension due date
        $extdue = $user->get_preferences()->get_extension($this);
        if($extdue !== null && $extdue > $this->due) {
            return true;
        }

        return false;
	}
	
	/** Is the time after the due date? 
	 *
	 * If no due date is specified, this will return 
	 * false since we can't be after a due date not set.
     * @param $user User we are looking at
	 * @param $time PHP time, default is current time 
	 * @returns true if after a specified due date */
	public function after_due(\User $user, $time=null) {
		if($time === null) {
			$time = time();
		}

		$due = $this->get_due($user);
		
		if($due === null) {
			return true;
		}
		
		return $time > $due;
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
	public function set_release($release, $due=null, $revised=false) {
		if($due !== null) {
			$this->set_due($due, $revised);
		}

		if(preg_match('/no/i', $release)) {
		    $this->release = false;
        } else if(preg_match('/^-([0-9]+)\s+days?/i', $release, $matches)) {
			$this->release = $this->due - $matches[1] * 86400;
		} else {
			$this->release = strtotime($release);
		}
	}
	
	/** The assignment release date as PHP time */
	public function get_release() {return $this->release;}
	
	/** Is this assignment active for submission? 
	 * @param $user User we are testing, default is current user
 	 * @param $time PHP time, default is current time */
	public function is_open(\User $user, $time=null) {
		if($time === null) {
			$time = time();
		}

		// Never active for guests
		if($user->is_guest()) {
			return false;		
		}
		
		// If not released yet, we are not open
		if(!$this->after_release($time)) {
			return false;
		}

		// If no due date, we are always open
		if($this->due === null) {
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
	 * @returns true if after a specified release date */
	public function after_release($time) {
		if($this->release === null) {
			return true;
		}

		if($this->release === false) {
		    return false;
        }

		return $time > $this->release; 
	}
	
	/** Is this assignment past the due date?
	 * 
	 * This will return true if the time is after the due date
	 * and the user is not a guest. Always available to staff.
	 *
	 * @param $user User
	 * @param $time Time
	 * @returns true if available to user */
	public function available_due($user, $time) {
		if($user->is_guest()) {
			return false;		
		}
		
		//
		// If there is reviewing, we don't open solutions
		// until after the reviewing due date plus any option extra time
		//
		if($this->reviewing !== null) {
			$rdue = $this->reviewing->get_available_due();
			if($rdue !== null && $rdue > $time) {
				
				return false;
			}
		}

		if(!$this->after_due($user, $time)) {
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
	public function shout_available_due(\User $user, $time=null) {
		if($user->is_staff()) {
            if($time === null) {
                $time = time();
            }

			if($this->available_due($user, $time)) {
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
	public function shout_available_release(\User $user, $time) {
		if($user->is_staff()) {
			if($this->after_release($time)) {
				return '<p class="topnotice">available to students</p>';
			} else {
				return '<p class="topnotice">not available to students</p>';
			}
		}

	}
	
	/** Redirect to a different page if before the due date
	 * 
	 * This is used to protect solution documents. 
	 * Staff is never redirected.
	 * Guests are always redirected!
	 * @param $user The user to test
	 * @param $time Test to test or null for current time
	 * @param $test True if test mode
	 */
	public function protect_due(\User $user, $time=null, $test=false) {
        if($time === null) {
            $time = time();
        }

		if(!$user->is_staff() && !$this->available_due($user, $time)) {
			return $this->course->redirect("", $test);
		}
		
		return "";
	}
	
	
	/** Is this assignment available to this user?
	 * 
	 * This will return true if the time is after the release date.
	 * Always available to staff.
	 *
	 * @param $user User
	 * @param $time Time to test
	 * @returns true if available to user */
	public function available_release(\User $user, $time) {
		// Staff never redirected
		if($user->is_staff()) {
			return true;
		}
		
		if(!$this->after_release($time)) {
			return false;
		}
		
		return true;
	}
	

	/** Redirect to a different page if before the release date
	 * 
	 * This is used to protect documents prior to release to students. 
	 * Staff is never redirected.
	 * Guests and students are redirected if before release date!
	 * @param $user The user to test
	 * @param $time Test to test
	 * @param $test True if test mode
	 */
	public function protect_release(\User $user, $time, $test=false) {
		if(!$this->available_release($user, $time)) {
			return $this->course->redirect("", $test);
		}
		
		return "";
	}

	/** Due date revised? */
	public function is_duerevised() {return $this->revised;}
	
	/** \brief The assignment name */
	public function get_name() {return $this->name;}
	
	/** \brief The assignment tag 
	 * 
	 * All assignments get a short string used as a
	 * key for the assignment in the system. Strings such as
	 * "step1" and "exam2" are good choices for the tag. */
	public function get_tag() {return $this->tag;}



	/**
	 * The Grading object for this assignment
	 * @return Grading the Grading object for this assignment
	 */
	public function get_grading() {return $this->grading; }
	
	/** Load the assignment definition.
	 *
	 * This is overridden for assignment types that have more
	 * complex definitions to load.
	 */
	public function load() {
        if($this->loaded) {
            return;
        }

        /*
         * Include the file that defines the actual assignment
         * and run the function from define.inc.php if the file exists
         */
        $file = $this->get_dir() . "/define.inc.php";
        if(file_exists($file)) {
			$define = require $file;
            if(is_callable($define)) {
                $define($this);
            }
        }

        $this->loaded = true;
    }


	/** This function is called whenever a new submission occurs.
	 *
	 * This checks to see if pending review is open on this submission. If so,
	 * it tells the pending review system so it can test the results
	 * @param The|\User $user The user the submission is for
	 * @param Submission|The $submission The Submission object this is for
	 * @param $time Submission time
	 */
	public function submitted(\User $user, Submission $submission, $time) {
		if($this->reviewing !== null) {
			$this->reviewing->submitted($user, $submission, $time);
		}
	}
	
	/** Construct the due date HTML for an assignment 
	 * @returns HTML for the due date */
	public function due_present(\User $user, $name = null) {
		$html = '';
		
		if($name === null) {
			$name = "This assignment";
		}
		
		$due = $this->get_due($user);
		if($due != NULL) {
			$date = date("l, F j, Y", $due);
			$time = date("g:ia", $due);
			$html .= '<p class="due">' . $name . ' is due ' . $date . ' at ' . $time . '</p>';
		}

		if($this->reviewing !== null) {
			$reviewDue = $this->reviewing->get_due();
			$date = date("l, F j, Y", $reviewDue);
			$time = date("g:ia", $reviewDue);
			$html .= '<p class="due">Peer reviews are due ' . $date . ' at ' . $time . '</p>';
		}

		return $html;
	}
	
	/** Set the assignment names
	 * @param string $name The name of the assignment (long name)
	 * @param string $shortName A short name for the assignment, such as 'Step 1'. */
	public function set_name($name, $shortName) {
		$this->name = $name;
		$this->shortname = $shortName;
	}
	
	/** Get the assignment short name 
	 * @returns Short name string */
	public function get_shortname() {return $this->shortname;}
	
	/** URL for a problem solving page for this assignment 
	 * @param $solving Optional problem solving page */
	public function set_solving($solving) {$this->solving = $solving;}
	
	/** URL for a problem solving page for this assignmennt
	 * @returns URL as a string or null if none */
	public function get_solving() {return $this->solving;}
	
	/** Course this assignment is for */
	public function get_course() {return $this->course; }

    /** The URL for the assignment */
    public function get_url() {
        return $this->url;
    }

    /** File system directory that contains the assignment
     *
     * The directory for an assignment defaults to the tag name in the
     * course root. If a URL for the assignment is provided and it does
     * not contain a period, it is assumed that is the directory for the
     * assignment instead.
     *
     * @returns File system path */
    public function get_dir() {
        $rootdir = $this->course->get_rootdir();

        if($this->url !== null && strpos($this->url, ".") !== false ) {
            return $rootdir . '/' . $this->url;
        }

        return $rootdir . '/' . $this->tag;
    }

    /**
     * Flag an assignment as looked at.
     * @param \User $user User doing the looking
     * @param $time Optional time for the look
     * @internal param $
     */
    public function look(\User $user, $time = null) {
        if($time === null) {
            $time = time();
        }

        $sectionStatus = new SectionStatus($this->course);
        $sectionStatus->set_section_status($user, $this, 'look', SectionStatus::DONE, $time);
    }


	/** The reviews due date
	 * @param $due The due date (time as a string as in '9/02/2014 11:55pm')
	 * @param $revisionHours Number of hours after review for resubmission, default is 24
	 * @param $revised true if the due date is a revison */
	public function set_reviews_due($due, $revisionHours=24, $revised = false) {
		if($this->reviewing === null) {
			$this->reviewing = new \Review\Reviewing($this);
		}

		$this->reviewing->set_due($due, $revisionHours, $revised);
	}

	/**
	 * Get the PeerReview object for this assignment
	 * @return Reviewing|null Peer review object or null if not used
	 */
	public function get_reviewing() {
		return $this->reviewing;
	}

	/**
	 * Enable the use of  the Interact! system for this assignment.
	 * @param bool|true $use True (default) to use the Interact! system for this assignment
	 */
	public function use_interact($use = true) {
		$this->interact = $use;
	}

    /**
     * Does this assignment use the Interact! system?
     * @return bool True if the assignment uses Interact!
     */
	public function uses_interact() {
		return $this->interact;
	}

	protected $tag;				///< Assignment tag
	private $name;				// Name of the assignment
	private $shortname;			// Short name for the assignment
	protected $url;             ///< URL for the assignment (optional)

    /// When the assignment is release.
    /// null (default) means open immediately
    /// false means not released at all
	private $release = null;

	private $due = NULL;		// When the assignment is due
	private $revised = FALSE;	// Is the due date revised?

	protected $category = null;	///< Assignment category for this assignment
	protected $course = null;	///< Course we are associated with
	protected $section = null;  ///< Section we are a member of

	private $grading = null;	///< The Grading object for this assignment
    private $loaded = false;    // Is the assignment loaded?
	private $reviewing = null;		///< Optional PeerReview object for this assignment

	protected $solving = NULL;	///< Optional problem solving document
	protected $interact = false;	///< Do we use the Interact system?
}
