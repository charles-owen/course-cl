<?php
/**
 * @file
 * View class for problem-solving pages
 */

namespace CL\Course;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * View class for problem-solving pages
 *
 * How to use:
@code
<?php
require_once "../site.php";
$view = new CL\Course\ProblemSolvingView($site, "assigntag", "title");
?>
<!doctype html>
<html lang="en-US">
<head>
<link href="../cl/course.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>
<body>
<?php echo $view->header(); ?>

<p>Problem solving content here...</p>

<?php echo $view->footer(); ?>
</body>
</html>
@endcode
 */
class ProblemSolvingView extends \CL\Course\View {
	/**
	 * ProblemSolvingView constructor.
	 * @param Site $site The Site object
	 * @param string $assignTag Assignment tag for the assignment we present a solution for.
	 * @param string $title Page title
	 * @param Server $server Optional Server argument for dependency injection
	 * @param int $time Current time, used to determine if after due date and delay
	 */
	public function __construct(Site $site, $assignTag, $title, Server $server = null, $time=null) {
		parent::__construct($site, []);

		$time = $time !== null ? $time : time();
		$server = $server !== null ? $server : new Server();

		$this->autoback = true;

		// Guest access is not allowed
        if($this->user->guest) {
	        $server->redirect($site->root . '/');
	        return;
        }

		$this->assignment = $this->section->get_assignment($assignTag);
		if($this->assignment === null) {
			$server->redirect($site->root . '/');
			return;
		}

		$this->assignment->load();
		$this->setTitle($title);

        /*
         * Ensure the page is open!
         */
        $delay = $this->assignment->section->assignments->problemSolvingDelay;

        if(!$this->user->atLeast(Member::GRADER) &&
	        !$this->assignment->available_due($this->user, $time, $delay)) {
				$server->redirect($site->root . '/');
	        return;
        }

	}

    private $assignment;    ///< Assignment current assignment
}