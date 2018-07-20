<?php
/** @file 
 * Class that defines a graded assignment category 
 */

namespace CL\Course\Assignments;

use CL\Course\Assignments;

/**
 * Define a graded assignment category
 * 
 * This class defines a grading category for a course
 * and has a collection of the assignments in that 
 * category */
class AssignmentCategory {
	/** Constructor 
	 * @param string $tag Tag associated with the assignment category
	 * @param string $name Category name
	 */
	public function __construct($tag, $name) {
		$this->tag = $tag;
		$this->name = $name;
	}
	
	/** Add an assignment to the category 
	 * @param Assignment $assignment Assignment to add */
	private function add(Assignment $assignment) {
		$assignment->category = $this;
		$this->assignments[] = $assignment;
		return $assignment;
	}
	
	/** Add a conventional assignment
	 * @param string $tag Assignment tag
	 * @param string $name Name of the assignment
     * @param string $url URL for the assignment (optional)
     * @returns Assignment object */
	public function add_assignment($tag, $name, $url=null) {
		$assignment = $this->course->assignmentFactory->createAssignment($tag, $name, $url);
		return $this->add($assignment);
	}
	
//	/** Add a step assignment
//	 * @param $tag Assignment tag
//	 * @param $name Name of the assignment
//	 * @param $percent Points to for assignment, default divides equally
//	 * @returns Assignment object */
//	public function add_step($tag, $name, $percent=0) {
//		$course = $this->parent->course;
//		return $this->add(new \Step\Step($course, $tag, $name, $percent));
//	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 * @return mixed
	 */
	public function __get($key) {
		switch($key) {
			case 'name':
				return $this->name;

			case 'tag':
				return $this->tag;

			case 'assignments':
				return $this->assignments;

			case 'grading':
				return $this->grading;

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
	 * @param string $key Property name
	 * @param string $value Value to set
	 */
	public function __set($key, $value)
	{
		switch ($key) {
			case 'grading':
				$this->grading = $value;
				break;

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


		/** Compute the grade for this category */
	public function computeGrade(\User $user) {
		/*
		 * First, we need to ensure we have a percentage
		 * assigned to every assignment. We total what we 
		 * are given and divide the remainder among all 
		 * assignments that have a zero percentage 
		 */
		$total = 0;
		$zeros = array();
		foreach($this->assignments as $assignment) {
			$assignment->load($user);
			$p = $assignment->get_percent();
			if($p == 0) {
				$zeros[] = $assignment;
			}
			
			$total += $p;
		}
		
		if(count($zeros) > 0 && $total < 100) {
			$p1 = (100.0 - $total) / count($zeros);
			foreach($zeros as $zero) {
				$zero->set_percent($p1);
			}
		}

		/*
		 * Now collect up the grades for every assignment in the category 
		 */
		$grades = array();	
		foreach($this->assignments as $assignment) {
			$percent = $assignment->get_percent();
			$grading = $assignment->get_grading();
			$grading->load_grades($user);
			$grade = $grading->get_grade();
			if($grade === null) {
				$grade = 0;
			}
			
			$grades[] = array($grade, $percent);
		}
		
		if($this->droplowest != 0) {
			uasort($grades, function($a, $b) {
				if($a[0] == $b[0]) {
					return 0;
				}
				
				return ($a[0] < $b[0]) ? 1 : -1;
			});
			
			for($i=0; $i<$this->droplowest; $i++) {
				array_pop($grades);
			}
		}
		
		/*
		 * And total them
		 */
		$percent = 0;
		$total = 0;
		foreach($grades as $grade) {
			$percent += $grade[1] * 0.01;
			$total += $grade[1] * 0.01 * $grade[0];
		}
		
		// Correct for any dropped assignments (missing percentages)
		if($percent != 0) {
			$total /= $percent;
		}

		return $total;
	}

	
	/**
	 * Get an assignment based on its tag
	 * \param $tag Tag that identifies the assignment
	 */
	public function getAssignment($tag) {
		foreach($this->assignments as $assignment) {
			if($assignment->tag == $tag) {
				return $assignment;
			}
		}
		
		return null;
	}


    /**
     * Indicate that a certain number of assignments is dropped
     * @param $drop Number of low assignments to drop
     */
	public function dropLowest($drop) {
		$this->droplowest = $drop;
	}

	private $course = null;		    ///< Course object
	private $section = null;        ///< Section we are associated with
	private $tag;
	private $name;
	private $droplowest = 0;
	private $grading = null;    ///< Grading attachment

	private $assignments = array();
}
