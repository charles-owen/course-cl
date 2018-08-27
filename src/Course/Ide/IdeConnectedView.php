<?php
/**
 * @file
 * View class used for IDE connection
 */

namespace CL\Course\Ide;


use CL\Site\Site;
use CL\Site\System\Server;

/**
 * View class used for IDE connection
 *
 * This generates content that is seen when the IDE connects.
 */
class IdeConnectedView extends \CL\Course\View {
	/// The current plugin major version number
	const PLUGIN_VERSION_MAJOR = 1;

	/// The current plugin minor version number
	const PLUGIN_VERSION_MINOR = 15;

	/**
	 * IdeConnectedView constructor.
	 * @param Site $site Site object
	 * @param Server $server The server object
	 */
	public function __construct(Site $site, Server $server) {
		parent::__construct($site, ['nojs'=>true]);

		$this->setTitle('CourseLib IDE Connection');

		$get = $server->get;
		if(isset($get['major']) && isset($get['minor'])) {
			$this->major = strip_tags($get['major']);
			$this->minor = strip_tags($get['minor']);
		}
	}


	/**
	 * Present the section selector
	 * @return string HTML
	 */
	public function present() {
		$html = '';

		if($this->major == 0) {
			$html .= <<<HTML
<p class="centerbox comp center">Invalid access to IDE connection page.</p>
HTML;
			return $html;
		}

		$theirVersionStr = sprintf("%d.%02d", $this->major, $this->minor);
		$currentVersionStr = sprintf("%d.%02d",
			self::PLUGIN_VERSION_MAJOR, self::PLUGIN_VERSION_MINOR);

		$badVersion = $this->major < self::PLUGIN_VERSION_MAJOR ||
			($this->major == self::PLUGIN_VERSION_MAJOR && $this->minor < self::PLUGIN_VERSION_MINOR);

		$html .= <<<HTML
<p>You are now connected to the CSE335 Server and can provide submissions.</p>
<p>You are using version $theirVersionStr of
the Visual Studio Plugin.</p>
HTML;

		if($badVersion) {
			$html .= <<<HTML
<p class="centerbox comp">The current version of the plugin is $currentVersionStr. The version
you are using is out of date and must be updated. Please go to the
page Configuring Visual Studio for details on how to update your plugin.
You must upgrade prior to submitting.</p>
HTML;
		}

		return $html;
	}

	private $major = 0;
	private $minor = 0;
}
