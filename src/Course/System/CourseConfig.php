<?php
/**
 * @file
 * Site configuration object the Course plugin
 */

namespace CL\Course\System;

use CL\Site\Components\InstalledConfig;

/**
 * Site configuration object for the Course plugin
 */
class CourseConfig extends InstalledConfig {
	/**
	 * Property get magic method
	 * @param string $key Property name
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -------
	 * course | Course | The main Course configuration object
	 *
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case 'course':
				return $this->course;

			default:
				return parent::__get($key);
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -------
	 * course | Course | The main Course configuration object
	 *
	 * @param string $key Property name
	 * @param any $value Value to set
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
}