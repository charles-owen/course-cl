<?php
/** @file
 * Class that provides support for managing course assignments
 */

namespace CL\Course;

use CL\Course\AssignmentCategory;
use CL\Users\User;


/**
 * Provides support for managing course assignments
 * 
 * One object of this type is owned by each section.
 *
 * @cond
 * @property int problemSolvingDelay
 * @endcond
 */
class Assignments {

	
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
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * categories | array | AssignmentCategory collection
	 * course | Course | Course object
	 * gradeDispute | string | Grade dispute link (Usually an a tag)
	 * problemSolvingDelay | int | Delay for release of problem solving pages
	 * section | Section | Section object for this assignment
	 * site | Site | Site object
	 *
	 * @param string $key Property name
	 * @return mixed
	 */
	public function __get($key) {
		switch($key) {
			case 'categories':
				return $this->categories;

			case 'course':
				return $this->course;

			case 'gradeDispute':
				return $this->gradeDispute;

			case 'section':
				return $this->section;

			case 'site':
				return $this->course !== null ? $this->course->site : null;

			case 'problemSolvingDelay':
				return $this->problemSolvingDelay;

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

			case 'problemSolvingDelay':
				$this->problemSolvingDelay = $value;
				break;

			case 'gradeDispute':
				$this->gradeDispute = $value;
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
	 * Add an assignment category for this course
	 * @param string $tag Assignment category tag
	 * @param string $name Name of the category
	 * @param int|null $points Optional points for this category
	 * @return AssignmentCategory object.
	 */
	public function add_category($tag, $name, $points=null) {
		$category = new AssignmentCategory($tag, $name);
		if($this->site !== null) {
			$this->site->amend($category);
		}

		// Normally I do not like to have anything about grading in this
		// class at all, but it is very convenient to make the category points
		// an option rather than requiring the points to be manually added
		// after object creation.
		if($points !== null) {
			$grading = $category->grading;
			if($grading !== null) {
				$grading->points = $points;
			}
		}

		if($this->section !== null) {
			$category->section = $this->section;
		}

		$this->categories[] = $category;
		return $category;
	}
	
	
	
	/**
	 * Get an assignment based on its tag
	 * @param string $tag Tag that identifies the assignment
	 * @return Assignment object
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
			if($category->tag == $tag) {
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
			foreach($category->assignments as $assignment) {
				if($assignment->reviewing !== null) {
					return true;
				}
			}
		}
		
		return false;
	}
	
	/** Get all assignments that are released and not yet due
	 * @param User $user User to get the assignments for
	 * @param int $time Time to test
	 * @return array List of Assignment objects */
	public function getOpenAssignments(User $user, $time) {
		$result =[];
		
		foreach($this->categories as $category) {
			foreach($category->assignments as $assignment) {
				if($assignment->is_open($user, $time)) {
					$result[] = $assignment;
				}
			}
		}	
		
		return $result;
	}
	


    /**
     * Add a calendar event
     * @param string $name Event name
     * @param string $date Date as a string
     * @param string $url URL to link event to
     * @param bool $displayTime If true, display at a time
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

	/**
	 * Generate assignment data suitable for sending to client
	 * @return array Assignment data
	 */
	public function data() {
		$data = [];
		foreach($this->categories as $category) {
			$data[] = $category->data();
		}

		return [
			'categories' => $data,
			'gradedispute'=> $this->gradeDispute
		];
	}

	private $course = null;		    // Course object
    private $section = null;        // Section we are associated with
	private $categories = array();	// The assignment categories
	private $problemSolvingDelay = 86400;   // Delay after due before problem solving released/24 hours
	private $gradeDispute = null;   // Grade dispute link
}
