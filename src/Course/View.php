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

		// Some globals that make page creation easier
		$GLOBALS['user'] = $site->users->user;
		$GLOBALS['member'] = $site->users->user->member;
		$GLOBALS['course'] = $site->course->course;

		$this->addCSS('vendor/cl/course/course.css');
		$this->addJS('users');
		$this->addJS('course');
	}
}