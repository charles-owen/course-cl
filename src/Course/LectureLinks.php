<?php
/** @file
 * Support for class home page lecture links
 */

namespace CL\Course;

use CL\Site\Site;
use CL\Users\User;
use CL\Course\Section;

/**
 * Support for class home page lecture links
 */
class LectureLinks {
	/**
	 * LectureLinks constructor.
	 * @param Site $site The Site object
	 * @param User $user Current user
	 * @param \CL\Course\Section $section Course section object
	 * @param string $dir Optional directory for lecture content and toetippers
	 */
	public function __construct(Site $site, User $user, Section $section, $dir='.') {
		$this->site = $site;
        $this->user = $user;
		$this->section = $section;
		$this->dir = $dir;
        $this->time = time();
	}
	
	/** Obtain the HTML to present the links */
	public function present() {
		$html = '<ol>';
		
		$root = $this->site->root;
		
		foreach($this->content as $lecture) {
			$file = $lecture['lecture'];
			$title = $lecture['title'];
			$date = $lecture['date'];
			$children = $lecture['children'];
			
			$path = $this->dir . '/' . $file;
			$ppticon = $root . '/cl/img/powerpointicon.png';
			
			//
			// This is a lecture link
			//
			$html .= <<<HTML
 <li><a href="$path.pdf">$title</a>
 <a href="$path.pptx"><img alt="Powerpoint" height="16" src="$ppticon" width="31"></a>
  <span class="date">$date</span>
HTML;
			//
			// And children of the lecture link
			//
			$any = false;
			foreach($children as $child) {
				$link = null;
				if(array_key_exists('assignment', $child)) {
					$link = $this->assignment_link($child['assignment']);
				} else if(array_key_exists('toetipper', $child)) {
					$link = $this->toetipper_link($child['toetipper']);
				} else if(array_key_exists('powerpoint', $child)) {
					$link = $this->powerpoint_link($child['powerpoint'], $child['title']);
				}
				
				if($link !== null) {
					if(!$any) {
						$html .= '<ul>';
						$any = true;
					}
					
					$html .= $link;
				}
			}
			
			if($any) {
				$html .= '</ul>';
			}

			// Close the <li> tag
			$html .= '</li>';
		}
		
		$html .= '</ol>';
		return $html;
	}
	
	/**
	 * An assignment link line
	 * @param string $tag The assignment tag
	 * @return string HTML for the link as a li tag
	 */
	private function assignment_link($tag) {
		// Get the assignment
		$assignment = $this->section->get_assignment($tag);
		if($assignment === null) {
			return null;
		}
		
		$path = $tag;
		
		$staff = $this->user->staff;
		$html = '';
				
		if($staff || $assignment->after_release($this->time)) {
			$name = $assignment->name;
			$due = $assignment->get_due($this->user);
			
			$html .= "<li class=\"bullet\"><A href=\"$path\">$name</A>";
			
			if($due !== null) {
				$duedate = date('n-d-y', $due);
				$html .= "<span class=\"date\"> Due $duedate";
				$html .= "</span>";

				if($assignment->is_extension($this->user)) {
					$html .= ' <span class="smallred">**extension**</span>';
				} else {
					if($assignment->revised) {
						$html .= ' <span class="smallred">**revised**</span>';
					}
				}
				
			}
			
			
			// Display release status for staff
			if($staff) {
				if($assignment->after_due($this->user, $this->time)) {
					$html .= ' <span class="smallred">**expired**</span>';
				} else if($assignment->after_release($this->time)) {
					$html .= ' <span class="smallred">**active**</span>';
				} else {
					$html .= ' <span class="smallblu">**inactive**</span>';
				}
			}
		
			$html .= '</li>';
		} else {
			return null;
		}
	
		return $html;
	}

	/**
	 * Create HTML for a toetipper link
	 * @param int $num Toetipper number
	 * @return string HTML
	 */
	private function toetipper_link($num) {
		$path = $this->dir . '/tt' . $num . 'answers.pdf';

		$html = <<<HTML
<li><a href="$path">TT $num Answers</a></li>
HTML;

		return $html;
	}

	/**
	 * Create HTML for a powerpoint link
	 * @param int $num Toetipper number
	 * @return string HTML
	 */
	private function powerpoint_link($file, $title) {
		$libroot = $this->course->get_libroot();
		$path = $this->dir . '/' . $file;
		$ppticon = $libroot . '/images/powerpointicon.png';
			
		//
		// This is a powerpoint link
		//
		$html = <<<HTML
 <li class="star"><a href="$path.pdf">$title</a>
 <a href="$path.pptx"><img alt="Powerpoint" height="16" src="$ppticon" width="31"></a></li>
HTML;

		return $html;
	}
	
	/** Add a lecture to the set of links 
	 * param 1 Base file name for the lecture (like 'lecture1')
	 * param 2 The lecture title
	 * param 3 The lecture date 
	 * param 4+ Any toetipper numbers to provide answers for */
	public function lecture() {
		$argc = func_num_args();
		$file = func_get_arg(0);
		$title = func_get_arg(1);
		$date = func_get_arg(2);

		$l = array('lecture' => $file, 'title' => $title, 'date' => $date, 'children' => array());
		$this->lecture = &$l;
		$this->content[] = &$l;
		
		for($i=3; $i<$argc; $i++) {
			$num = func_get_arg($i);
			$this->toetipper($num); 
		}
	}
	
	/**
	 * Add an assignment to a lecture
	 * @param string $tag The assignment tag
	 */
	public function assignment($tag) {
		if($this->lecture !== null) {
			$this->lecture['children'][] = ['assignment' => $tag];
		}
	}
	
	/**
	 * Add a toetipper solution to a lecture
	 * @param int $num Number of the toetipper
	 */
	public function toetipper($num) {
		$last = &$this->lecture;
		if($last !== null) {
			$last['children'][] = array('toetipper' => $num);
		}
	}

    /**
     * Add additional powerpoint content to a lecture
     * @param string $file The name of the powerpoint file
     * @param string $title The title of the presentation
     */
	public function powerpoint($file, $title) {
		$last = &$this->lecture;
		if($last !== null) {
			$last['children'][] = array('powerpoint' => $file, 'title' => $title);
		}
	}
	
	private $site;      // The Site object
	private $user;      // User home page is for
    private $time;      ///< Time we display the page
	private $dir;		///< Directory containing lecture content
	private $section;	///< Section this is for 
	private $lecture = null;	///< Current lecture we are adding
	
	private $content = [];	///< The actual content
}
