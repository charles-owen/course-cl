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
			$function = require($file1);
			$function($handbook);
		} else {
			$file2 = "$dir/handbook.inc.php";
			if(file_exists($file2)) {
				$function = require($file2);
				$function($handbook);
			}
		}

		return $handbook;
	}
	
	/** Add a handbook deduction category
	 * @param string $tag A short string associated with the category
	 * @param string $name The category name
	 * @param int $deduct Maximum possible deduction
	 * @returns HandbookCategory object
	 */
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
	 * categories | array | Array of HandbookCategory objects
	 * free | int | Free points
	 * title | string | Title for the handbook
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'categories':
				return $this->categories;

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
	 * free | int | Free points
	 * title | string | Title for the handbook
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

	/**
	 * Get data for sending to client (runtime)
	 * @param bool $rubrics If true, include rubrics.
	 * @return array
	 */
	public function data($rubrics) {
		$categories = [];
		foreach($this->categories as $category) {
			$categories[] = $category->data($rubrics);
		}

		return [
			'free'=>$this->free,
			'categories'=>$categories
		];
	}
	
	private $categories = [];	    // The handbook categories
	private $title = "Course Handbook";
	private $free = 1;				// Free points
}
