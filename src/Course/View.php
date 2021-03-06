<?php
/**
 * @file
 * View class for any view that relies on course.css or course.js
 */

namespace CL\Course;


use CL\Site\Site;

/**
 * View class for any view that relies on course components and globals.
 */
class View extends \CL\Users\View {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param array $options Options to pass to Site::start()
	 */
	public function __construct(Site $site, array $options = []) {
		parent::__construct($site, $options);

		$this->member = $site->users->user->member;
		$this->course = $site->course;
		$this->semester = $this->member->semester;
		$this->section = $this->member !== null ? $this->course->get_section($this->member->semester, $this->member->sectionId) : null;

		// Some globals that make page creation easier
		$GLOBALS['member'] = $this->member;
		$GLOBALS['course'] = $this->course;
		$GLOBALS['semester'] = $this->semester;
        $GLOBALS['semesterLC'] = strtolower($this->semester);
		$GLOBALS['section'] = $this->section;

		$this->addCSS('vendor/cl/course/course.css');
		$this->addJS('course');
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * course | Course | Course object.
	 * member | Member | Member object for current user.
	 * section | Section | Section object for current user.
	 *
	 * @param string $property
	 * @return mixed Property value
	 */
	public function __get($property) {
		switch($property) {
			case 'course':
				return $this->course;

			case 'member':
				return $this->member;

			case 'section':
				return $this->section;

			case 'semester':
				return $this->semester;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Add the cl-course-staff div to the page containing staff information
	 */
	public function addStaff() {
		//
		// Get course staff
		//
		$members = new Members($this->site->db);
		$staff = $members->query([
			'semester'=>$this->section->semester,
			'section'=>$this->section->id,
			'atLeast'=>Member::STAFF
		]);

		$staffData = [];
		foreach($staff as $member) {
			$staffData[] = $member->data();
		}

		$this->addJSON('cl-course-staff', json_encode($staffData));
	}

	protected $member;  ///< Member object for current user
	protected $course;  ///< Course object

	/* @var Section $section */
	protected $section; ///< Section object for current user

	private $semester;  ///< string Semester
}