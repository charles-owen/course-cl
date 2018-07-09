<?php
/**
 * View class for any view that relies on course.css or course.js
 */

namespace CL\Course;


use CL\Site\Site;

class View extends \CL\Site\View {

	public function __construct(Site $site, array $options = []) {
		parent::__construct($site, $options);

		$this->addCSS('vendor/cl/course/course.css');
		$this->addJS('users');
		$this->addJS('course');
	}
}