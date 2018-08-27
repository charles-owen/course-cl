<?php
/** @file 
 * Class that defines a graded assignment category 
 */

namespace CL\Course;


/**
 * Define a graded assignment category
 * 
 * This class defines a grading category for a course
 * and has a collection of the assignments in that 
 * category
 *
 * @cond
 * @property array assignments
 * @property Section section
 * @enccond
 */
class AssignmentCategory {
	/** Constructor 
	 * @param string $tag Tag associated with the assignment category
	 * @param string $name Category name
	 */
	public function __construct($tag, $name) {
		$this->tag = $tag;
		$this->name = $name;
	}
	
	/**
	 * Add an assignment to the category
	 * @param Assignment $assignment Assignment to add
	 * @return Assignment The added assignment object.
	 */
	public function add(Assignment $assignment) {
		$assignment->category = $this;
		if($this->site !== null) {
			$this->site->amend($assignment);
		}

		$this->assignments[] = $assignment;
		return $assignment;
	}
	
	/** Add a conventional assignment
	 * @param string $tag Assignment tag
	 * @param string $name Name of the assignment
     * @param string $url URL for the assignment (optional)
     * @returns Assignment object */
	public function add_assignment($tag, $name, $url=null) {
		return $this->add(new Assignment($tag, $name, $url));
	}

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

			case 'site':
				return $this->course !== null ? $this->course->site : null;

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
				$value->category = $this;
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


	/**
	 * Get an assignment based on its tag
	 * \param $tag Tag that identifies the assignment
	 */
	public function get_assignment($tag) {
		foreach($this->assignments as $assignment) {
			if($assignment->tag == $tag) {
				return $assignment;
			}
		}
		
		return null;
	}


	/**
	 * __call() is triggered when invoking inaccessible methods in an object context.
	 * @param string $name Name of non-existent function
	 * @param array $arguments Arguments to the function call
	 */
	public function __call($name, $arguments) {
		if(isset($this->extensions[$name])) {
			return $this->extensions[$name]($this, $arguments);
		} else {
			$trace = debug_backtrace();
			trigger_error(
				'Fatal error: Call to undefined method CL\Course\AssignmentCategory::' .
					$name . '() in ' . $trace[0]['file'] .
				' on line ' . $trace[0]['line'],
				E_USER_NOTICE);
		}
	}

	/**
	 * Extend this class by adding a new function.
	 * This is used by the Step system to add "add_step"
	 * to the assignment category.
	 * @param $name Name of the function
	 * @param $closure Closure to call.
	 */
	public function extend($name, $closure) {
		$this->extensions[$name] = $closure;
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
	 * Return category assignments in form suitable for sending to client.
	 * @return array Assignments data
	 */
	public function data() {
		$assignments = [];
		foreach($this->assignments as $assignment) {
			$assignments[] = $assignment->data();
		}

		$data = [
			'tag'=>$this->tag,
			'name'=>$this->name,
			'assignments'=>$assignments
		];

		if($this->grading !== null) {
			$data['grading'] = $this->grading->data();
		}

		return $data;
	}

	private $course = null;		    ///< Course object
	private $section = null;        ///< Section we are associated with
	private $tag;
	private $name;
	private $grading = null;        ///< Grading attachment
	private $extensions = [];       ///< Extensions to this object

	private $assignments = [];
}
