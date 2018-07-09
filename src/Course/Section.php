<?php
/** @file
 * Class the describes one section of a course
 */

namespace CL\Course;


/** Describes one section of a course
 * One object of type Section is created for each section of
 * a course. These are added using the function Course::add_section() */
class Section {
	const Normal = 0;	//!< Section meets as normal class
	const Online = 1;	//!< Online section
	const Hybrid = 2;	//!< Hybrid section
	const Flipped = 3;	//!< Flipped section
	
	/** Constructor 
	 * @param Course $course Course this section is a member of
	 * @param string $semester Semester code, like FS16
	 * @param string $id Section code, like "001"
	 * @param int $type Section type code */
	public function __construct(Course $course, $semester, $id, $type) {
		$this->course = $course;
		$this->id = $id;
		$this->semester = $semester;
		$this->type = $type;
        $this->calendar = new Calendar($this);
		
		
		$this->scale[] = array(89.5, "4.0");
		$this->scale[] = array(84.5, "3.5");
		$this->scale[] = array(79.5, "3.0");
		$this->scale[] = array(74.5, "2.5");
		$this->scale[] = array(69.5, "2.0");
		$this->scale[] = array(64.5, "1.5");
		$this->scale[] = array(59.5, "1.0");
		$this->scale[] = array(0, "0.0");
	}

    /**
     * Property get magic method
     * @param $key Property name
     * @return null|string
     */
    public function __get($key) {
        switch($key) {
            case "id":
                return $this->id;

            case "semester":
                return $this->semester;

            case 'name':
                return $this->semester . '/' . $this->id;

            case 'summer':
                return substr($this->semester, 0, 2) === 'US';

	        case 'type':
	        	return $this->type;

	        case 'course':
	        	return $this->course;

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
     * @param $key Property name
     * @param $value Value to set
     */
    public function __set($key, $value) {
        $trace = debug_backtrace();
        trigger_error(
            'Undefined property ' . $key .
            ' in ' . $trace[0]['file'] .
            ' on line ' . $trace[0]['line'],
            E_USER_NOTICE);
    }

	
	/** The Assignments object */
	public function getAssignments() {
		$this->ensure_loaded();
		return $this->assignments; 
	}

	/** Ensure the assignments are all loaded */
	private function ensure_loaded() {
		if($this->assignments === null) {
			// The assignments are not loaded. Load them now
			$this->assignments = new Assignments\Assignments($this);

			// We optionally support assignment files in the form:
            // assignments.730.php or assignments.740.SS18.php
            // With or without the semester code.
			$rootdir = $this->course->get_rootdir();
            $file1 = $rootdir . '/course/assignments.' . $this->id . '.' . $this->semester . '.php';
            $file2 = $rootdir . '/course/assignments.' . $this->id . '.php';
            if(file_exists($file1)) {
                $this->assignments->load($file1);
            } else {
                $this->assignments->load($file2);
            }
		}
	}
	
	/** Get an assignmment by tag 
	 * @param $tag Tag for the assignment */
	public function getAssignment($tag) {
		$assignments = $this->get_assignments();
		return $assignments->get_assignment($tag);
	}
	
	/** Add a textbook for the course 
	 * @param $textbook The textbook object to add */
	public function addTextbook(Textbook $textbook) {
		if($this->textbooks === null) {
			$this->textbooks = array();
		}
		
		$this->textbooks[] = $textbook;
	}
	
	/** Get a textbook object
	 *
	 * The textbook objects are not loaded by default, so this
	 * will load them if necessary. 
	 * 
	 * @param $num Textbook number (starting at 1) */
	public function getTextbook($num) {
		if($this->textbooks === null) {
			$this->textbooks = array();
			
			$rootdir = $this->course->get_rootdir();
			$file = $rootdir . '/course/textbooks.' . 
				$this->id . '.php';
			$function = require($file);
            if(is_callable($function)) {
                $function($this);
            }
		}
		
		return $this->textbooks[$num - 1];
	}


    /** The course section calendar object */
    public function get_calendar() {
		$this->ensure_loaded();
		return $this->calendar;
	}
	
	/** Convert a percentage to a grade based on the 
	 * set section grading scale. 
	 * @param $score Score (0 to 100)
	 */
	public function to_grade($score) {
		foreach($this->scale as $scale) {
			if($score >= $scale[0]) {
				return $scale[1];
			}
		}
		
		$last = end($this->scale);
		return $last[1];
	}

	public function data() {
		return [
			'id' => $this->id,
			'semester' => $this->semester,
			'type' => $this->type
		];
	}

	private $textbooks = null;		// Any course textbooks		
	private $assignments = null;	// Course assignments
    private $calendar;              // Course calendar object
	
	private $course;			// Course this is a member of
	private $id;				// Section code, like "001
    private $semester;          ///< Semester code, like "FS18"
	private $type = Section::Normal;
	
	private $scale = array();	// Grading scale, pairs like (90, 4.0)
}