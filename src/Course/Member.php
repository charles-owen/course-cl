<?php
/**
 * @file
 * Member of a course
 */

namespace CL\Course;

use \CL\Site\MetaData;
use \CL\Site\MetaDataOwner;
use \CL\Site\Site;

/**
 * Member of a course
 *
 * @cond
 * @property int id
 * @property string semester
 * @property string sectionId
 * @endcond
 */
class Member extends \CL\Users\Membership implements MetaDataOwner {
	// User role codes in order of access permissions
	// The roles of Guest, User, Staff, and Admin are
	// from the basic user roles.
	const GUEST = "G";		///< Guest user visiting the site
	const USER = 'U';       ///< Standard user
	const DROPPED = 'D';    ///< User has dropped the course
	const STUDENT = "T";	///< Enrolled student in course
	const STAFF = "S";		///< Any course staff
	const GRADER = 'R';     ///< Graders
	const ULA = 'L';        ///< Undergraduate learning assistant
	const TA = 'E';         ///< Teaching assistant
	const INSTRUCTOR = "I";	///< Course instructor
	const ADMIN = 'A';      ///< Admin

	const JWT_ID = 'member_id'; ///< Field to use in JWT for member ID
	const JWT_SEMESTER = 'member_semester'; ///< Field to use in JWT for a semester indicator
	const JWT_SECTION = 'member_section';   ///< Field to use in JWT for a section indicator
    const JWT_MEMBER_ACTUAL = 'member_actual';  ///< Actual membership during spoofing

	/// Name for the extensions MetaDat category
	const METADATA_EXTENSIONS = 'extensions';

	/** Constructor
	 * @param array $row Contents of the row in the table for this user
	 * @param string $prefix Optional prefix for table column names.
	 */
	public function __construct($row = null, $prefix='') {
		parent::__construct();

		if($row !== null) {
			if(isset($row["{$prefix}id"])) {
				// Required values
				$this->id = +$row["{$prefix}id"];
				$this->userId = $row["{$prefix}userid"];
				$this->semester = $row["{$prefix}semester"];
				$this->sectionId = $row["{$prefix}section"];
				$this->role = $row["{$prefix}role"];
				$this->created = strtotime($row["{$prefix}created"]);

				if(isset($row["{$prefix}metadata"])) {
					$this->metaData = new MetaData($this, $row["{$prefix}metadata"]);
				}
			} else {
				// Required values
				$this->id = +$row['id'];
				$this->userId = $row['userid'];
				$this->semester = $row['semester'];
				$this->sectionId = $row['section'];
				$this->role = $row['role'];
				$this->created = strtotime($row['created']);

				if(isset($row['metadata'])) {
					$this->metaData = new MetaData($this, $row['metadata']);
				}
			}

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
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * created | int | When member was created
	 * id | int | Internal member ID
	 * meta | MetaData | Meta-data for this user (alias)
	 * metaData | MetaData | Meta-data for this user
	 * role | string | User role (see above roles)
	 * sectionId | string | Section ID like '001'
	 * semester | string | Semester code, like 'FS18'
	 * summer | boolean | true if this is a summer semester
	 * userId | string | Internal user ID
	 *
	 * @param string $property Property name
	 * @return Course|mixed|null|string Property value
	 */
	public function __get($property) {
		switch($property) {
			case 'created':
				return $this->created;

			case 'id':
				return $this->id;

			case 'metaData':
			case 'meta':
				if($this->metaData === null) {
					$this->metaData = new MetaData($this);
				}

				return $this->metaData;

			case 'role':
				return $this->role;

			case 'sectionId':
				return $this->sectionId;

			case 'semester':
				return $this->semester;

			case 'summer':
				return substr($this->semester, 0, 2) === 'US';

			case 'userId':
				return $this->userId;

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
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * id | int | Internal member ID
	 * role | string | User role (see above roles)
	 * userId | string | Internal user ID
	 *
	 * @param $property Property name
	 * @param $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'id':
				$this->id = $value;
				break;

			case 'role':
				$this->role = $value;
				break;

			case 'userId':
				$this->userId = $value;
				break;

			// Pending documentation
			case 'semester':
				$this->semester = $value;
				break;

			case 'sectionId':
				$this->sectionId = $value;
				break;

			case 'user':
				parent::__set($property, $value);
				$value->setJWT(Member::JWT_ID, $this->id);
				if($this->id === 0) {
					$value->setJWT(Member::JWT_SEMESTER, $this->semester);
					$value->setJWT(Member::JWT_SECTION, $this->sectionId);
				}

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
		return self::getRoles_();
	}

	/**
	 * Static version of getRoles()
	 * @return array With keys for the different roles, each with an array value with keys
	 * 'name' and 'priority'
	 */
	public static function getRoles_() {
		return array(self::GUEST => array('name' => "Guest", 'priority' => 1),
			self::DROPPED => array('name' => "Dropped", 'priority' => 2),
			self::USER => ['name' => 'User', 'priority' => 3],
			self::STUDENT => array('name' => "Student", 'priority' => 4),
			self::STAFF => array('name' => "Staff", 'priority' => 5),
			self::GRADER => array('name' => "Grader", 'priority' => 6),
			self::ULA => array('name' => "Undergraduate Learning Assistant", 'priority' => 7),
			self::TA => array('name' => "Teaching Assistant", 'priority' => 8),
			self::INSTRUCTOR => array('name' => "Instructor", 'priority' => 9),
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
	 * @return TRUE if user is an instructor */
	public function isInstructor() {
		return $this->role === self::ADMIN || $this->role === self::INSTRUCTOR;
	}


	/** Is this user in a specified section?
	 * @param $sectionId Section to check (as in '001')
	 * @return TRUE if user is in section */
	public function inSection($sectionId) {return $this->sectionId === $sectionId;}

	/**
	 * Write the meta-data for this member.
	 * @param Site $site Site object so we can access tables.
	 */
	public function writeMetaData(Site $site) {
		$members = new Members($site->db);
		$members->writeMetaData($this);
	}

	/**
	 * Create an array of data to send to runtime clients.
	 * @return array Data for client
	 */
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
	private $metaData = null;   ///< Attached meta-data

}