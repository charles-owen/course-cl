<?php
/** @file
 * Class that provides support for managing course assignments
 */

namespace CL\Course;

use CL\Course\Assignments\AssignmentCategory;

/**
 * Provides support for managing course assignments
 * 
 * One object of this type is owned by each section.
 */
class Assignments {
	/**
	 * Constructor
	 */
	public function __construct() {
	}
	
	
	/** Load assignment set from a file
	 * @param string $file File to load from */
	public function load($file) {
		$function = require $file;
		if(is_callable($function)) {
			$function($this);
		}
	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 * @return mixed
	 */
	public function __get($key) {
		switch($key) {
			case 'categories':
				return $this->categories;

			case 'course':
				return $this->course;

			case 'section':
				return $this->section;

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
		switch($key) {
			case 'section':
				$this->section = $value;
				$this->course = $this->section->course;
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
	 * Add a grading category for this course
	 * @param string $tag Assignment category tag
	 * @param string $name Name of the category
	 * @return New AssignmentCategory object.
	 */
	public function add_category($tag, $name) {
		$category = $this->course->assignmentFactory->createAssignmentCategory($tag, $name);
		$category->section = $this->section;
		$this->categories[] = $category;
		return $category;
	}
	
	
	
	/**
	 * Get an assignment based on its tag
	 * @param string $tag Tag that identifies the assignment
	 * @returns Assignment object
	 */
	public function get_assignment($tag) {
		foreach($this->categories as $category) {
			$assignment = $category->get_assignment($tag);
			if($assignment != null) {
				return $assignment;
			}
		}
		
		return null;
	}
	
	/**
	 * Get an assignment category
	 * @param $tag The category tag
	 * @return AssignmentCategory|null
	 */
	public function get_category($tag) {
		foreach($this->categories as $category) {
			if($category->get_tag() == $tag) {
				return $category;
			}
		}
		
		return null;
	}
	
	/**
	 * Determine if there are any assignments using the peer review system.
	 * @return true if there are.
	 */
	public function areReviews() {
		foreach($this->categories as $category) {
			foreach($category->get_assignments() as $assignment) {
				if($assignment->get_reviewing() !== null) {
					return true;
				}
			}
		}
		
		return false;
	}
	
	/** Get all assignments that are released and not yet due
	 * @param $user User to get the assignments for
	 * @param $time Time to test
	 * @returns array List of Assignment objects */
	public function getOpenAssignments(\User $user, $time) {
		$result = array();
		
		foreach($this->categories as $category) {
			foreach($category->get_assignments() as $assignment) {
				if($assignment->is_open($user, $time)) {
					$result[] = $assignment;
				}
			}
		}	
		
		return $result;
	}
	


    /**
     * Add a calendar event
     * @param $name Event name
     * @param $date Date as a string
     * @param $url URL to link event to
     * @param $displayTime If true, display at a time
     */
    public function add_calendar($name, $date, $url=null, $displayTime=false) {
		// Must manually call since this may be a recursive call
        $this->section->__get('calendar')->add($name, $date, $url, $displayTime);
    }

	/**
	 * Magic function to disable displaying the section
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['course']);
		unset($properties['section']);
		return $properties;
	}

	private $course = null;		    ///< Course object
    private $section = null;        ///< Section we are associated with
	private $categories = array();	///< The assignment categories
}