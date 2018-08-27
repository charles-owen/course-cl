<?php
/**
 * @file
 * View class for the course About Me page
 */

namespace CL\Course;

use CL\Site\Site;
use CL\Site\System\Server;


/**
 * View class for the course section selector page
 */
class AboutMeView extends \CL\Course\View {
	/**
	 * AboutMeView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 */
	public function __construct(Site $site, Server $server) {
		parent::__construct($site, ['at-least'=>Member::STUDENT]);

		$data = [];
		$this->addCLS('cl-course-aboutme', json_encode($data));
	}
}
