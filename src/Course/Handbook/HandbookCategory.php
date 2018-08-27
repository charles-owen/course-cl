<?php
/** @file
 * Class the describes a Handbook category.
 */

namespace CL\Course\Handbook;

/**
 * Describes a Handbook category
 */
class HandbookCategory {
	
	/** Constructor 
	 * @param string $tag Short string associated with category
	 * @param string $name Category name
	 * @param int $deduct Maximum deduction for category
	 */
	public function __construct($tag, $name, $deduct) {
		$this->tag = $tag;
		$this->name = $name;
		$this->deduct = $deduct;
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
			case 'rubric':
				return $this->rubric;

			case 'name':
				return $this->name;

			case 'tag':
				return $this->tag;

			case 'deduct':
				return $this->deduct;

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
			case 'rubric':
				$this->rubric = $value;
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
	 * Create data suitable for sending to runtime (client)
	 * @param bool $rubrics If true, include any rubrics.
	 * @return array Data
	 */
	public function data($rubrics) {
		$data = [
			'tag'=>$this->tag,
			'name'=>$this->name,
			'deduct'=>$this->deduct,
		];

		if($rubrics && $this->rubric !== null) {
			$data['rubric'] = $this->rubric;
		}

		return $data;
	}

	private $tag;	    // Short string associated with category
	private $name;	    // Category name
	private $deduct;	// Maximum deduction
	private $rubric = null;	// Optional rubric to display
}
