<?php
/**
 * @file
 * View class for assignments
 */
 
namespace CL\Course;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * View class for assignments
 */
class AssignmentView extends \CL\Course\View {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param string $assignTag Tag for the assignment to view
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, $assignTag, Server $server = null, $time=null) {
		parent::__construct($site, []);

		$this->time = $time !== null ? $time : time();

        $this->assignment = $this->section->get_assignment($assignTag);
        if($this->assignment === null) {
        	$server->redirect($site->root . '/');
			return;
        }

		if(!$this->assignment->available_release($this->user, $this->time)) {
			$server->redirect($site->root . '/');
			return;
		}

		$this->assignment->load();
		$this->title = $this->assignment->name;
	}

    /**
     * Property get magic method
     * @param $key Property name
     * @property-read tablename The table name
     * @property-read prefix The table prefix
     * @return null|string
     */
    public function __get($key) {
        switch($key) {
            case "url":
                return $this->assignment->url;

	        case 'assignment':
	        	return $this->assignment;

	        case 'tag':
	        	return $this->assignment->tag;

            default:
                return parent::__get($key);
        }
    }

    /**
     * PHP set operation
     **
     * @param $key Name of the parameter to set
     * @param $value Value to set
     */
    public function __set($key, $value) {
        switch ($key) {
            default:
                parent::__set($key, $value);
                break;
        }
    }



	/**
	 * If Interact is in use, allocate the Interact object
	 * @return string Content to place in the head tag area
	 */
	public function head() {
//		if($this->assignment->uses_interact()) {
//			$this->create_interact_view();
//		}

		return parent::head();
	}
	
	/** Get the due date presentation for this assignment 
	 * @returns HTML for the due date */
	public function due_present($name = null) {
		return $this->assignment->due_present($this->user, $name);
	}
	
	/** Present all submissions and the peer review system if included
	 * @param $user User to present for or null for current user
	 * @param $titles An optional array of titles to present for
	 * the submissions */
	public function present_submissions(\User $user = null, $titles=null) {
		if($user === null) {
			$user = get_user();
		}
		
		$html = '';
		
		/*
		 * Display all submissions
		 */
		$assignment = $this->assignment;
		$cnt = 0;
		
		foreach($assignment->get_grading()->get_submissions() as $submission) {
			if($titles !== null) {
				$html .= '<h3>' . $titles[$cnt] . '</h3>';
				$cnt++;
			}
			
			$view = $submission->create_view();
			$html .= $view->present($user);
		}
		
		/*
		 * Display any peer reviews
		 */
		if($assignment->get_reviewing() !== null) {
			$reviewing = $assignment->get_reviewing();

			$html .= '<p class="reviewsappear">Reviews of this assignment appear here.</p>';

			$view = $reviewing->create_view();
			$html .= $view->present_reviews($user, $user);
		}

		return $html;
	}
	
	/** Display the link for the assignment grading page 
	 * @param $text Optional text to use in the link. Default is "Assignment Grading Page"
	 * @param $url Link to the page relative to the root
	 * @returns string HTML for the grading link */
	public function grading_link($text=null, $url=null) {
		if($text === null) {
			$text = "Assignment Grading Page";
		}
		
		if($url === null) {
			$url = $this->assignment->url;
		}

		$root = $this->site->root;
		$libroot = $root;
		$tag = $this->assignment->tag;
		
		$html = <<<HTML
<p class="grade" id="grade"><img src="$root/vendor/cl/grades/img/grading.png" width="114" height="50" alt=""/>

HTML;
		$html .= \Backto::link($text,
			"$libroot/grading/assignmentgrade.php?tag=$tag") . '</p>';
			
		return $html;
	}

	public function link($text, $link) {
		return \Backto::link($text, $link);
	}


	/**
	 * Create the Interact! object for this view.
	 *
	 * May be overridden in a derived class that also uses a section.
	 */
	protected function create_interact_view() {
		$this->interact = new \InteractView($this->course, $this->user, array($this->assignment->get_tag()));
		$this->add_aux($this->interact);
	}

    /**
     * Present the Interact! section on the screen
     * @return string HTML for the Interact! component
     */
	public function present_interact() {
		if($this->interact !== null) {
			return $this->interact->present();
		}

		return '';
	}

    /**
     * Present the Interact link if Interact is in use on this assignment
     * @return string HTML for the link
     */
	public function interact_link() {
		$libroot = $this->course->get_libroot();
		if($this->interact !== null) {
			return <<<HTML
<p class="interact_link"><a href="#interact"><img src="$libroot/images/interact/link.png"> for this assignment</a></p>
HTML;
		} else {
			return '';
		}

	}

    protected $time;            ///< The view time
	protected $assignment;      ///< Assignment object we are viewing

    protected $redirect = null; ///< Redirect page - set to a URL if redirection is needed
	protected $interact = null;	///< Reference to the InteractView object
}