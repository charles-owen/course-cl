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
 * @property Calendar calendar
 * @property long start Semester start date
 * @property int weeks Number of weeks in the semester
 * @endcond
 */
class Assignments {

	
	/**
	 * Load assignment set from a file
	 * @param string $file File to load from
	 */
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
     * calendar | Calendar | The section Calendar object
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

            case 'start':
                return $this->start;

            case 'calendar':
                return $this->section->__get('calendar');

			case 'problemSolvingDelay':
				return $this->problemSolvingDelay;

            case 'weeks':
                return $this->weeks;

			default:
                return \CL\Site\PropertyHelper::Error($key);
		}
	}

	/**
	 * Property set magic method
     * @param string $key Property name
     * @param mixed $value Value to set
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

            case 'weeks':
                $this->weeks = $value;
                break;

			default:
                \CL\Site\PropertyHelper::Error($key);
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
		$category = new AssignmentCategory($this, $tag, $name);
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
     * @param string $color Optional color to apply to the event
     */
    public function add_calendar($name, $date, $url=null, $displayTime=false, $color = null) {
        $url = $this->section->substituteLC($url);

        $d = $this->relative_time($date);

		// Must manually call since this may be a recursive call
        $this->section->__get('calendar')->add($name, $d, $url, $displayTime, $color);
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

    /**
     * Set the start day of the semester.
     * Time is ignored.
     * @param string $value Date as a string
     * @param int $duration Duration of the semester in weeks
     */
	public function set_start($value, $duration=0) {
	    $date = date('Y-m-d', strtotime($value));
	    $this->start = strtotime($date);
        if($duration > 0) {
            $this->weeks = $duration;
        }
    }

    /**
     * Compute a relative time basic on the semester start.
     * This will accept times in the format:
     * 'mon1 11:55pm', 'tue3 1:30pm'
     * The number is the week in the semester. Also accepts
     * regular time/data values.
     * @param $value
     * @return int PHP time value
     */
    public function relative_time($value) {
        $pattern = '/^(monday|mon|mo|tuesday|tue|tu|wednesday|wed|we|thursday|thu|th|tr|friday|fri|fr|saturday|sat|sa|sunday|sun|su)-?\s*(\d+)(?:\s+(.*))?$/i';

        if(preg_match($pattern, $value, $match)) {
            // Convert start time to Monday of first week
            $startDay = date('N', $this->start);

            // This computes noon on the first Monday of the semester
            // Not using midnight avoids issues with daylight savings time
            $firstMonday = $this->start - ($startDay - 1) * 86400 + 86400/2;

            switch(substr(strtolower($match[1]), 0, 2)) {
                default:
                    $day = 0;
                    break;

                case 'tu':
                    $day = 1;
                    break;

                case 'we':
                    $day = 2;
                    break;

                case 'th':
                case 'tr':
                    $day = 3;
                    break;

                case 'fr':
                    $day = 4;
                    break;

                case 'sa':
                    $day = 5;
                    break;

                case 'su':
                    $day = 6;
                    break;
            }

            $week = $match[2] - 1;
            $dueDate = $firstMonday + ($week * 7 + $day) * 86400;

            if(count($match) >= 4) {
                return  strtotime(date('Y-m-d', $dueDate) . $match[3]);
            } else {
                return  strtotime(date('Y-m-d', $dueDate) . '00:00');
            }
        }


        return strtotime($value);
    }

	private $course = null;		    // Course object
    private $section = null;        // Section we are associated with
	private $categories = array();	// The assignment categories
	private $problemSolvingDelay = 86400;   // Delay after due before problem solving released/24 hours
	private $gradeDispute = null;   // Grade dispute link
    private $start = null;          // First day of the semester
    private $weeks = 16;            // Semester duration in weeks
}
