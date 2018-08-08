<?php
/** @file
 * Class that describes and manages the course handbook
 */

/**
 * Classes associated with the course handbook
 */
namespace CL\Course;

use CL\Course\Section;
use CL\Course\Handbook\HandbookCategory;

/**
 * Describes and manages the course handbook
 */
class Handbook {
	/**
	 * Get the course handbook definition.
	 *
	 * We expect this to be in a file. There are two possible
	 * filenames:
	 *
	 * handbook.SECTIONID.SEMESTERID.php
	 * handbook.inc.php
	 *
	 * @return Handbook object
	 */
	public static function get(Section $section, $dir=null) {
		$semester = $section->getSemesterLC();
		$sectionId = $section->id;
		if($dir === null) {
			$dir = $section->site->rootDir . '/course';
		}

		$handbook = new Handbook();

		$file1 = "$dir/handbook.$semester.$sectionId.php";
		if(file_exists($file1)) {
			echo 'loading specific';
			$function = require($file1);
			$function($handbook);
		} else {
			echo 'loading general';
			$file2 = "$dir/handbook.inc.php";
			if(file_exists($file2)) {
				$function = require($file2);
				$function($handbook);
			}
		}

		return $handbook;
	}
	
	/** Add a handbook deduction category
	 * @param $tag A short string associated with the category
	 * @param $name The category name
	 * @param $deduct Maximum possible deduction
	 * @returns HandbookCategory object */
	public function add_category($tag, $name, $deduct) {
		$category = new HandbookCategory($tag, $name, $deduct);
		$this->categories[] = $category;
		return $category;
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case "title":
				return $this->title;

			case "free":
				return $this->free;

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
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case "title":
				$this->title = $value;
				break;

			case "free":
				$this->free = $value;
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
	
	/** The handbook categories array */
	public function categories() { return $this->categories;}
	
	private $categories = array();	// The handbook categories
	private $title = "Course Handbook";
	private $free = 1;				// Free points
}
