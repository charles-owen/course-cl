<?php
/**
 * @file Site configuration object for Course
 */

namespace CL\Course\System;

use CL\Site\Components\InstalledConfig;
use CL\Site\System\Server;

/**
 * Site configuration object for Course
 */
class CourseConfig extends InstalledConfig {
	const SESSION_ID = 'CL_COURSE_SESSION1';

	/**
	 * Property get magic method
	 * @param string $key Property name
	 *
	 * Properties supported:
	 * db Database configuration object
	 *
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case 'course':
				return $this->course;

			case 'session':
				return $this->session;

			default:
				return parent::__get($key);
		}
	}

	/**
	 * Property set magic method
	 * @param $key Property name
	 * @param $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'course':
				$this->course = $value;
				break;

			default:
				parent::__set($key, $value);
				break;
		}
	}

	private $course;    ///< The Course object
	private $session;   ///< The CourseSession object
}