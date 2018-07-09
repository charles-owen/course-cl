<?php
/**
 * @file
 * Member of a course
 */

namespace CL\Course;

/**
 * Member of a course
 */
class Member extends \CL\Users\Membership {
	// User role codes in order of access permissions
	// The roles of Guest, User, Staff, and Admin are
	// from the basic user roles.
	const GUEST = "G";		///< Guest user visiting the site
	const USER = 'U';       ///< Standard user
	const DROPPED = 'D';    ///< User has dropped the course
	const STUDENT = "T";	///< Enrolled student in course
	const STAFF = "S";		///< Any course staff
	const GRADER = 'R';     ///< Graders
	const TA = 'E';         ///< Teaching assistant
	const INSTRUCTOR = "I";	///< Course instructor
	const ADMIN = 'A';      ///< Admin

	const JWT_ID = 'member_id'; ///< Field to use in JWT for member ID
	const JWT_SEMESTER = 'member_semester';
	const JWT_SECTION = 'member_section';

	/** Constructor
	 * @param array $row Contents of the row in the table for this user
	 */
	public function __construct($row = null) {
		parent::__construct();

		if($row !== null) {
			// Required values
			$this->id = +$row['id'];
			$this->userId = $row['userid'];
			$this->semester = $row['semester'];
			$this->sectionId = $row['section'];
			$this->role = $row['role'];
			$this->created = strtotime($row['created']);
		}
	}

	private function getOrDefault($row, $key, $default=null) {
		if(isset($row[$key])) {
			return $row[$key];
		}

		return $default;
	}

	/**
	 * Get standard properties for a member.
	 *
	 * @param $name Options are:
	 * @return Course|mixed|null|string Property value
	 */
	public function __get($key) {
		switch($key) {
			case 'id':
				return $this->id;

			case 'userId':
				return $this->userId;

			case 'semester':
				return $this->semester;

			case 'section':
				return $this->course->get_section($this->semester, $this->sectionId);

			case 'role':
				return $this->role;

			case 'sectionId':
				return $this->sectionId;

			case 'summer':
				return substr($this->semester, 0, 2) === 'US';

			case 'created':
				return $this->created;

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
			case 'id':
				$this->id = $value;
				break;

			case 'userId':
				$this->userId = $value;
				break;

			case 'semester':
				$this->semester = $value;
				break;

			case 'sectionId':
				$this->sectionId = $value;
				break;

			case 'role':
				$this->role = $value;
				break;

			case 'user':
				parent::__set($key, $value);
				$value->setJWT(Member::JWT_ID, $this->id);
				if($this->id === 0) {
					$value->setJWT(Member::JWT_SEMESTER, $this->semester);
					$value->setJWT(Member::JWT_SECTION, $this->sectionId);
				}

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
	 * Get the membership role
	 *
	 * Provided to be consistent with user.
	 * @return mixed|null
	 */
	public function role() {
		return $this->role;
	}

	/**
	 * Get all of the user roles
	 *
	 * This returns an array with all of the user roles, including a name and priority.
	 * The priority is a ranking in increasing privilege order and determines access privileges.
	 * Do not store this value, it is subject to change if roles are added or changed.
	 *
	 * @return array With keys for the different roles, each with an array value with keys
	 * 'name' and 'priority'
	 */
	public function getRoles() {
		return array(self::GUEST => array('name' => "Guest", 'priority' => 1),
			self::DROPPED => array('name' => "Dropped", 'priority' => 2),
			self::USER => ['name' => 'User', 'priority' => 3],
			self::STUDENT => array('name' => "Student", 'priority' => 4),
			self::STAFF => array('name' => "Staff", 'priority' => 5),
			self::GRADER => array('name' => "Grader", 'priority' => 6),
			self::TA => array('name' => "Teaching Assistant", 'priority' => 7),
			self::INSTRUCTOR => array('name' => "Instructor", 'priority' => 8),
			self::ADMIN => array('name' => "Admin", 'priority' => 100)
		);
	}

	/** Test that a user's role has a priority at least at some specified level
	 * @param string $atLeast The role the user must be for this to be true
	 * @return bool True if the role is at least the specified role */
	public function atLeast($atLeast) {
		$roles = $this->getRoles();
		if(!isset($roles[$atLeast])) {
			return false;
		}

		return ($roles[$this->role]['priority'] >= $roles[$atLeast]['priority']);
	}

	/**
	 * Is this user a guest?
	 * Students who have dropped are treated as guests.
	 * @return bool true if the user is a guest
	 */
	public function isGuest() {
		return $this->role === self::GUEST || $this->role === self::DROPPED;
	}


	/** Is this user an instructor?
	 * @returns TRUE if user is an instructor */
	public function isInstructor() {
		return $this->role === self::ADMIN || $this->role === self::INSTRUCTOR;
	}


	/** Is this user in a specified section?
	 * @param $sectionId Section to check (as in '001')
	 * @returns TRUE if user is in section */
	public function inSection($sectionId) {return $this->sectionId === $sectionId;}


	/** Get a textbook object
	 *
	 * This gets the textbook object appropriate for this user
	 * @param int $num Textbook number (starting at 1)
	 * @returns Textbook object for that textbook */
	public function getTextbook($num) {
		return $this->getSection()->getTextbook($num);
	}

	/** Assignment for a given user
	 * @param $tag Assignment tag
	 * @return Assignment The Assignment object */
	public function getAssignment($tag) {
		return $this->section->getAssignment($tag);
	}


	public function data() {
		$data = [
			'id'=>$this->id,
			'role'=>$this->role,
			'semester'=>$this->semester,
			'section'=>$this->sectionId
		];

		return $data;
	}


	private $id = 0;            ///< ID for the membership record
	private $userId = null;     // User ID
	private $semester = null;	// Semester code
	private $sectionId = null;	// Section id (like 001) for section this user is in
	private $role = null;
	private $created = null;
}