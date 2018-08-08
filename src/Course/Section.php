<?php
/** @file
 * Class that describes one section of a course
 */

namespace CL\Course;


/**
 * Describes one section of a course
 *
 * One object of type Section is created for each section of
 * a course. These are added using the function Course::addSection()
 *
 * @cond
 * @property Assignments assignments
 * @endcond
 */
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
     * @param $property Property name
     * @return null|string
     */
    public function __get($property) {
        switch($property) {
	        case 'calendar':
		        $this->ensureLoaded();
		        return $this->calendar;

	        case "id":
                return $this->id;

            case "semester":
                return $this->semester;

            case 'name':
                return $this->semester . '/' . $this->id;

	        case 'year':
	        	return '20' . substr($this->semester, 2, 2);

	        case 'season':
	        	switch(substr($this->semester, 0, 2)) {
			        case 'FS':
			        default:
			        	return 'Fall';

			        case 'US':
			        	return 'Summer';

			        case 'SS':
			        	return 'Spring';
		        }

            case 'summer':
                return substr($this->semester, 0, 2) === 'US';

	        case 'type':
	        	return $this->type;

	        case 'course':
	        	return $this->course;

	        case 'site':
	        	return $this->course !== null ? $this->course->site : null;

	        case 'assignments':
		        $this->ensureLoaded();
		        return $this->assignments;

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
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
    	switch($property) {
		    case 'assignments':
		    	$this->assignments = $value;
		    	$this->assignments->section = $this;
		    	break;

		    case 'course':
		    	$this->course = $value;
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


	/** Ensure the assignments are all loaded */
	private function ensureLoaded() {
		if($this->assignments === null) {
			// The assignments are not loaded. Load them now
			$this->assignments = new Assignments();
			$this->assignments->section = $this;

			if($this->course->site !== null) {
				$rootdir = $this->course->site->rootDir;
				$file1 = $rootdir . '/course/assignments.' . $this->getSemesterLC() . '.' . $this->id . '.php';
				$this->assignments->load($file1);
			}
		}
	}
	
	/**
	 * Get an assignment by tag
	 * @param string $tag Tag for the assignment
	 * @return Assignment object
	 */
	public function get_assignment($tag) {
		$this->ensureLoaded();
		return $this->assignments->get_assignment($tag);
	}
	
	/**
	 * Add a textbook for the course
	 * @param Textbook $textbook The textbook object to add
	 */
	public function add_textbook(Textbook $textbook) {
		if($this->textbooks === null) {
			$this->textbooks = [];
		}
		
		$this->textbooks[] = $textbook;
		$textbook->section = $this;
	}
	
	/** Get a textbook object
	 *
	 * The textbook objects are not loaded by default, so this
	 * will load them if necessary. 
	 * 
	 * @param $num Textbook number (starting at 1)
	 * @return Textbook object
	 */
	public function get_textbook($num) {
		if($this->textbooks === null) {
			$this->textbooks = [];
			
			$rootdir = $this->course->rootDir;
			$file = $rootdir . '/course/textbooks.' .
				$this->getSemesterLC() . '.' . $this->id . '.php';
			$function = require($file);
            if(is_callable($function)) {
                $function($this);
            }
		}
		
		return $this->textbooks[$num - 1];
	}



	/**
	 * Convert a percentage to a grade based on the
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

	/**
	 * Data to describe this section for sending to clients.
	 * @return array Containing section data.
	 */
	public function data() {
		$this->ensureLoaded();

		$data = [
			'id' => $this->id,
			'semester' => $this->semester,
			'type' => $this->type,
			'assignments' => $this->assignments->data()
		];

		return $data;
	}

	/**
	 * Get the semester as a lower-case string
	 * @return string Semester (lower case)
	 */
	public function getSemesterLC() {
		return strtolower($this->semester);
	}

	/**
	 * Magic function to disable displaying the section
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['course']);
		return $properties;
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