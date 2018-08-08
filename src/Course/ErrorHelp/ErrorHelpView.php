<?php
/**
 * @file
 * View class for error help pages.
 */

/// Classes that support error help
namespace CL\Course\ErrorHelp;

use CL\Course\View;
use CL\Site\Site;
use CL\Site\System\Server;

/**
 * View class for error help pages.
 */
class ErrorHelpView extends View {
	/**
	 * ErrorHelpView constructor.
	 * @param Site $site The site object
	 * @param string $error The error message for the title
	 * @param Server $server Optional server object
	 */
	public function __construct(Site $site, $error, Server $server=null) {
		parent::__construct($site);

		$server = $server !== null ? $server : new Server();
		$this->ide = isset($server->get['ide']);
		$this->error = $error;

		$this->setTitle('Error Help: ' . $error);
	}


	/**
	 * @copydoc CL::Course::View::header()
	 */
	public function header($contentDiv = true, $nav='') {
		$html = parent::header(false);
		$html .= '<div class="cl-error-help-page">';
		return $html;
	}

	/**
	 * @copydoc CL::Course::View::footer()
	 */
	public function footer($contentDiv = true) {
		$html = '</div>';
		$html .= $this->tail();
		return $html;
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * ide | boolean | true if view is in an IDE
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'ide':
				return $this->ide;

			default:
				return parent::__get($property);
		}
	}


	private $error;
	private $ide;
}

