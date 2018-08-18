<?php
/** @file
 * Base class for database tests.
 */

use CL\Site\Test\DatabaseTestBase;
use CL\Course\Course;


/**
 * Base class for database tests.
 *
 * Adds some assertions I find useful and a more useful way to add tables
 */
abstract class CourseDatabaseTestBase extends DatabaseTestBase {

	public function __construct() {
		parent::__construct(__DIR__ . '/..');
	}

	protected function createSite() {
		$site = parent::createSite();

		//
		// Create and load the course object
		//
		$course = new Course($site);
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
