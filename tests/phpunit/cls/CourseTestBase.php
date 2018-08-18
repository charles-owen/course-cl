<?php
/** @file
 * Base class for normal tests.
 */

use CL\Site\Test\TestBase;
use CL\Course\Course;


/**
 * Base class for normal (non-database) tests.
 *
 * Adds creation of loaded Site and Course objects.
 */
abstract class CourseTestBase extends TestBase {

	public function __construct() {
		parent::__construct(__DIR__ . '/..');
	}

	protected function createSite() {
		$site = parent::createSite();

		//
		// Create and load the course object
		//
		$course = new Course();
		$this->course = $course;
		$course->install($site);

		$installer = $site->rootDir . '/course/course.inc.php';
		if(file_exists($installer)) {
			$function = require($installer);
			$function($course);
		} else {
			throw new Exception('Course configuration file course/course.inc.php does not exist.');
		}
		
		return $site;
	}

	protected $course;

}
