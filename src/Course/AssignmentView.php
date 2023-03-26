<?php
/**
 * @file
 * View class for assignments
 */

namespace CL\Course;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Users\User;
use CL\Course\Submission\Submissions;

/**
 * View class for assignments
 */
class AssignmentView extends \CL\Course\View {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param string $assignTag Tag for the assignment to view
	 * @param array $options Options to pass to Site::start()
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, $assignTag, $options=[], Server $server = null, $time=null) {
		parent::__construct($site, $options);

		$this->time = $time !== null ? $time : time();
		$server = $server !== null ? $server : new Server();

        $this->assignment = $this->section->get_assignment($assignTag);
        if($this->assignment === null) {
        	$server->redirect($site->root . '/');
			return;
        }

        $this->assignment->load();

		if(!$this->assignment->available_release($this->user, $this->time)) {
			$server->redirect($site->root . '/');
			return;
		}

		$this->setTitle($this->assignment->name);

		// Call amend if this object is not subclassed.
		if(get_class($this) === self::class) {
			$site->amend($this);
		}

		$GLOBALS['assignment'] = $this->assignment;
	}

    /**
     * Property get magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * assignment | Assignment | Assignment we are viewing.
     * tag | string | Assignment tag
     * url | string | URL to get to the view
     *
     * Plus all properties of CL::Course::View
     *
     * @param string $property
     * @return mixed Property value
     */
    public function __get($property) {
        switch($property) {
            case "url":
                return $this->assignment->url;

	        case 'assignment':
	        	return $this->assignment;

	        case 'tag':
	        	return $this->assignment->tag;

            default:
                return parent::__get($property);
        }
    }

    /**
     * PHP set operation
     *
     * Plus all properties of CL::Course::View
	 *
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch ($property) {
            default:
                parent::__set($property, $value);
                break;
        }
    }

	
	/** Get the due date presentation for this assignment 
	 * @returns string HTML for the due date */
	public function due_present($name = null) {
		return $this->assignment->due_present($this->user, $name);
	}
	
	/**
	 * Present all submissions and the peer review system if included
	 * @param array $titles An optional array of titles to use for
	 * each of the submissions
     * @param User $user Optional user to present for. This is used for administration pages.
	 * @return string HTML
	 */
	public function present_submissions(array $titles=null, User $user=null) {
	    if($user === null) {
            $user = $this->user;
        }

		$html = '';
		
		/*
		 * Display all submissions
		 */
		$assignment = $this->assignment;
		$cnt = 0;
		
		foreach($assignment->submissions->submissions as $submission) {
			if($titles !== null && $cnt < count($titles)) {
				$html .= '<h3>' . $titles[$cnt] . '</h3>';
				$cnt++;
			}

			$html .= $submission->present($this, $user);
		}

		$submissions = new Submissions($this->site->db);
		$submissionsData = [];
		foreach($assignment->submissions->submissions as $submission) {
			$submitted = $submissions->get_submissions($user->member->id, $assignment->tag,
				$submission->tag, true);

			$data = $submission->data();
			$data['id'] = $submitted[0]['id'];
			$data['date'] = $submitted[0]['date'];
			$data['type'] = $submission->type;

			switch($submission->type) {
				case 'text':
					$text = $submissions->get_text($submitted[0]['id']);
					$data['text'] = $text['text'];
					break;
			}

			$submissionsData[] = $data;
		}


		/*
		 * Display any peer reviews
		 */
		if($assignment->reviewing !== null) {
			$html .= $assignment->reviewing->presentReviews($user, $submissionsData);
		}

		return $html;
	}
	
	/**
     * Display the link for the assignment grading page
	 * @param string $text Optional text to use in the link. Default is "Assignment Grading Page"
	 * @param string $url Link to the page relative to the root
	 * @return string HTML for the grading link
     */
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
<p class="grade"><img src="$root/vendor/cl/grades/img/grading.png" width="114" height="50" alt=""/>

HTML;
		$html .= \Backto::link($text,
			"$libroot/cl/grade/$tag") . '</p>';
			
		return $html;
	}

	/**
	 * Create a link to another page with autoback support.
	 * @param string $text Text to put in the link
	 * @param string $link URL relative to this page
	 * @return string HTML
	 */
	public function link($text, $link) {
		return \Backto::link($text, $link);
	}

    protected $time;            ///< The view time
	protected $assignment;      ///< Assignment object we are viewing

    protected $redirect = null; ///< Redirect page - set to a URL if redirection is needed
	protected $interact = null;	///< Reference to the InteractView object
}