<?php
/** @file
 * Class used to describe a course textbook
 */

namespace CL\Course;
 
/**
 * Describes and displays course textbook
 */
class Textbook {
	/**
	 * Constructor
	 * @param string $title Book title
	 * @param string $authors Authors
	 * @param string $publisher Publisher
	 * @param string $year Year
	 * @param string $image Path to a 75 by 100 image of the book
	 * @param string $alt Alt text to use with the book image */
	public function __construct($title, $authors, $publisher, $year, $image=null, $alt=null) {
		$this->title = $title;
		$this->authors = $authors;
		$this->publisher = $publisher;
		$this->year = $year;
		$this->image = $image;
		if($alt === null) {
			$this->alt = $title;
		} else {
			$this->alt = $alt;
		}
	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 * @return null|mixed
	 */
	public function __get($key) {
		switch($key) {
			case "title":
				return $this->title;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}


	/** Construct a reading indication
	 * @param $text Text to include with the reading indication
	 * @param null $extraClass Any extra classes to add to the p tag
	 * @return HTML for the reading indication
	 */
	public function reading($text, $extraClass=null) {
		$root = get_root();
		$image = $this->image;
		$extra = $extraClass === null ? '' : ' ' . $extraClass;
		if($image === null) {
			return <<<READING
<p class="reading$extra">$this->title: $text</p>
READING;
		} else {
			return <<<READING
<p class="reading$extra">
<img src="$root/$image" width="75" height="100" alt="$this->alt"/><span>
$text</span></p>
READING;
		}
	}

	private $title;		// Textbook title
	private $authors;	// Authors
	private $publisher;	
	private $year;
	private $image;		// Image to use for readings
	private $alt;		// alt text for the image
}
