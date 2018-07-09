<?php
/**
 * Table maker for Lti tables
 */

namespace CL\Course\System;

use CL\Tables\Config;

class CourseTables extends \CL\Tables\TableMaker {

	/**
	 * SiteTableMaker constructor.
	 * @param Config $config
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new \CL\Course\Members($config));
	}
}