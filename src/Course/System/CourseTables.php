<?php
/**
 * Table maker for the Course subsystem tables
 */

namespace CL\Course\System;

use CL\Tables\Config;

/**
 * Table maker for the Course subsystem tables
 */
class CourseTables extends \CL\Tables\TableMaker {

	/**
	 * Table maker for the Course subsystem tables
	 * @param Config $config Database configuration object
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new \CL\Course\Members($config));
	}
}