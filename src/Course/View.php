<?php
/**
 * @file
 * View class for any view that relies on course.css or course.js
 */

namespace CL\Course;


use CL\Site\Site;

/**
 * View class for any view that relies on course.css or course.js
 */
class View extends \CL\Site\View {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param array $options Options to pass to Site::start()
	 */
	public function __construct(Site $site, array $options = []) {
		parent::__construct($site, $options);

		$this->user = $site->users->user;
		$this->member = $site->users->user->member;
		$this->course = $site->course;
		$this->section = $this->member !== null ? $this->course->get_section($this->member->semester, $this->member->sectionId) : null;

		// Some globals that make page creation easier
		$GLOBALS['user'] = $this->user;
		$GLOBALS['member'] = $this->member;
		$GLOBALS['course'] = $this->course;
		$GLOBALS['section'] = $this->section;

		$this->addCSS('vendor/cl/course/course.css');
		$this->addJS('users');
		$this->addJS('course');
	}

	/**
	 * Property get magic method
	 * @param $key Property name
	 * @property-read tablename The table name
	 * @property-read prefix The table prefix
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case "user":
				return $this->user;

			case 'member':
				return $this->member;

			case 'course':
				return $this->course;

			case 'section':
				return $this->section;

			default:
				return parent::__get($key);
		}
	}

	protected $user;
	protected $member;
	protected $course;
	protected $section;
}