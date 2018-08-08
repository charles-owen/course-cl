<?php
/**
 * @file
 * Error help router view: /cl/errorhelp
 */

namespace CL\Course\ErrorHelp;

use CL\Course\View;
use CL\Site\Site;
use CL\Site\System\Server;

/**
 * Error help router view: /cl/errorhelp
 */
class ErrorHelpRouter extends View {
	/**
	 * ErrorHelpRouter constructor.
	 * @param Site $site The site object
	 * @param Server $server A server object
	 * @param array $properties Properties from the router
	 */
	public function __construct(Site $site, Server $server, array $properties) {
		parent::__construct($site);

		$get = $server->get;
		$ide = isset($get['ide']);
		if(!empty($get['e'])) {
			$error = strip_tags($get['e']);
			$this->error = $error;

			$dir = $site->rootDir . '/errorhelp';

			if(file_exists("$dir/$error.php")) {

				$args = [];
				if($ide) {
					$args['ide'] = '';
				}

				if(isset($properties['assign'])) {
					$args['assign'] = strip_tags($properties['assign']);
				}

				if(isset($properties['tag'])) {
					$args['tag'] = strip_tags($properties['tag']);
				}

				$path = $site->root . '/errorhelp/' . $error . '.php';
				$first = true;
				foreach($args as $key => $value) {
					$path .= ($first ? '?' : '&') . $key;
					if($value !== '') {
						$path .= '=' . $value;
					}

					$first = false;
				}

				$server->redirect($path);
			}

		} else {
			$this->error = null;
		}

		$this->setTitle('Error Help');
	}

	/**
	 * Present the page.
	 *
	 * If we are unable to route to a suitable page, present a message indicating
	 * that.
	 * @return string
	 */
	public function present() {
		return <<<HTML
<div class="cl-error-help-page">
<p class="centerbox comp">I'm sorry, but I don't have any available help right now for error:
$this->error.</p>
HTML;
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

	private $error;
}

