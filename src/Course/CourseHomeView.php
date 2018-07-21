<?php 
/** @file
 * View class for course home page
 */

namespace CL\Course;

use \CL\Site\Site;
use \CL\Users\User;
use \CL\Course\Assignment;

/**
 * View class for course home page
 */
class CourseHomeView extends \CL\Course\View {
	/** Constructor
     * @param $course Course we are displaying
	 * @param $user Optional user object
     * @param $session The _SESSION array
     */
	public function __construct(Site $site, array $options=[], $time=null) {
        parent::__construct($site, $options);

        $this->time = $time !== null ? $time : time();
        $this->addCSS("vendor/cl/course/coursehome.css", 100);
        $this->title = $this->course->desc;
		$this->addBody('wider');

		$this->calendar = $this->add_aux(new CalendarView(time()));
	}


    /**
     * Get standard properties for a page.
     *
     * @param string $key Options are: libroot, root
     * @return Course|mixed|null|string Property value
     */
    public function __get($key)
    {
        switch ($key) {


            default:
                return parent::__get($key);
        }
    }


    /**
     * Property set magic method
     * @param string $key Property name
     * @param mixed $value Value to set
     */
    public function __set($key, $value) {
        parent::__set($key, $value);
    }



//	/**
//	 * Present the Interact! button on the home page
//	 * @return string HTML for hte Interact button
//	 */
//	public function interact_button() {
//		$libroot = $this->course->get_libroot();
//		$html = <<<HTML
//<p class="control"><a href="$libroot/interact" title="Interact! System">
//<img src="$libroot/images/interact/linkbutton.png" width="100" height="25" alt="Interact! System"></a></p>
//HTML;
//		return $html;
//	}

	public function present_calendar() {
		return $this->calendar->present();
	}


	/**
	 * Present the Logout button on the home page
	 * @return string HTML for the logout button
	 */
	public function logout_button() {
		$root = $this->site->root;
		$img = $this->site->img;

		$html = <<<HTML
<p class="control"><a href="$root/cl/login" title="Log Out">
<img src="$img/logout.png" width="100" height="25" alt="Log Out"></a></p>
HTML;
		return $html;
	}

	/** The management section of this home page
	 * @returns HTML for the management options if staff, empty string otherwise */
	public function management_controls() {
		$html = '';

        /*
         * Console Link
         */
		if($this->user->atLeast(User::STAFF)) {
			$img = $this->course->img;

			$html .= <<<LINK
<p class="control"><a href="cl/console"><img src="$img/restricted.png" width="100" height="74" alt="Restricted Area"></a></p>
LINK;
		}

//        /*
//         * Determine the actual underlying user
//         */
//        $user = $this->user;
//        $userActual = $user->get_actual($this->session);
//		$course = $this->course;
//
//        /*
//         * Role selection
//         */
//
//
//		if($userActual->is_staff()) {
//            $userRole = $user->get_role();
//            $roles = User::get_roles();
//            $userActualPriority = $roles[$userActual->get_role()]['priority'];
//
//
//			$html .= <<<HTML
//<form id="roles-form" action="lib/manage/role-changer.php" method="post">
//<p class="control">
//<select name="role" onChange="submit_roles();">
//HTML;
//
//            foreach($roles as $id => $role) {
//                $name = $role['name'];
//                $priority = $role['priority'];
//                if($userActualPriority >= $priority) {
//                    $selected = $userRole === $id ? " selected" : '';
//                    $html .= <<<HTML
//<option value="$id"$selected>$name</option>
//HTML;
//                }
//            }
//
//
//			$html .= <<<HTML
//</select>
//</p>
//HTML;
//
//            /*
//             * Section selection
//             */
//            $html .= <<<HTML
//<p class="control">
//<select name="section" onChange="submit_roles();">
//HTML;
//
//            foreach($course->get_sections() as $section) {
//                $secid = $section->name;
//                $selected = $secid === $user->get_section()->name ? 'selected' : '';
//                $html .= <<<HTML
//<option value="$secid" $selected>$secid</option>
//HTML;
//            }
//
//		    $html .= <<<HTML
//</select></p>
//HTML;
//
//            if($user->has_actual($this->session)) {
//                $html .= <<<HTML
//<p><input type="submit" name="restore" id="restore" value="restore"></p>
//HTML;
//            }
//
//            $html .= <<<HTML
//</form>
//<script>
//function submit_roles() {
//	$("#roles-form").submit();
//}
//HTML;
//			$html .= "</script>";
//		}

		return $html;
	}


	/**
	 * All assignments for a category
	 * @param string $tag Assignment category tag
	 * @returns string HTML for the assignments
	 */
	public function assignments($tag) {
		$category = $this->section->assignments->get_category($tag);
		if($category === null) {
			return '<p class="shoutout">Assignment category ' . $tag . ' does not exist</p>';
		}

		$html = '<ul>';
		$assignments = $category->assignments;
		if(count($assignments) > 0) {
			foreach($category->assignments as $assignment) {
				$html .= $this->assignmentLink($assignment);
			}
		} else {
			$html .= '<li>Pending...</li>';
		}

		$html .= '</ul>';
		return $html;
	}

	/** An assignment link line.
	 * @param Assignment $assignment The assignment object
	 * @return string HTML for the link as a li tag
	 */
	private function assignmentLink(Assignment $assignment) {
		$assignment->load();
		$staff = $this->user->atLeast(Member::STAFF);
		$grader = $this->user->atLeast(Member::GRADER);

		$html = '';

		if($staff || $assignment->after_release($this->time)) {
			$tag = $assignment->tag;
			$name = $assignment->name;
			$due = $assignment->get_due($this->user, $this->time);
			$solving = $assignment->solving;

			$html .= "<li><A href=\"$tag/\">$name</A>";

			if($due !== null) {
				$duedate = date('n-d-y', $due);
				$html .= <<<HTML
<span class="due"> Due <a class="tip">$duedate<span>Assignment Due</span></a>
HTML;

				$review = $assignment->get_reviewing();
				if($review !== null) {
					$reviewDue = date('n-d-y', $review->get_due());
					$html .= <<<HTML
 / <a class="tip">$reviewDue<span>Reviews Due</span></a>
HTML;
				}

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
				if($assignment->after_release($this->time)) {
					$html .= ' <span class="staff-note red">**active**</span>';
				} else {
				    if($assignment->release !== false) {
                        $release = date('n-d-y', $assignment->release);
                        $html .= ' <span class="staff-note blu">**releases:&nbsp;' . $release . '**</span>';
                    } else {
                        $html .= ' <span class="staff-note blu">**no release**</span>';
                    }

				}
			}

			if($solving !== null && ($grader || $assignment->available_due($this->user, $this->time) )) {
				// We have a problem solving page
				$html .= "<ul><li class=\"bullet\"><a href=\"$solving\">Problem Solving</a>";

				if($staff) {
					if($assignment->available_due($this->user, $this->time)) {
						$html .= ' <span class="staff-note red">**active**</span>';
					} else {
						$html .= ' <span class="staff-note blu">**inactive**</span>';
					}
				}

				$html .= '</li></ul>';
			}

			$html .= '</li>';
		}

		return $html;
	}

	/** Display items in the tools and resources category
	 * that are not available to guests */
	public function enrolled_tools() {
		$html = '';

//		$html = <<<HTML
//<ul>
//<li><a href="lib/interact"><img alt="Interact! System" src="lib/images/interact/link.png" height="16" width="82"></a></li>
//</ul>
//HTML;

		if(!$this->user->guest) {
			$html .= <<<HTML
<ul>
<li><a href="$this->aboutme">About Me and Preferences...</a></li>
<li><a href="lib/calendar.php">Personal Calendar</a></li>
<li><a href="lib/grading/grades.php">Grades</a></li>
HTML;

//			// Are there any peer reviews in the assignments?
//			$assignments = $this->user->get_section()->get_assignments();
//			if($assignments->are_reviews() ) {
//				$html .= <<<HTML
//<li><a href="lib/review/pending.php">Peer Reviewing</a></li>
//HTML;
//			}

			$html .= "</ul>";
		}

		return $html;
	}


//	/** The section we are viewing */
//	public function get_section() {
//		return $this->section;
//	}
//
//	/** The section ID (like '001') */
//	public function get_section_id() {
//		return $this->section !== null ? $this->section->get_id() : "???";
//	}

	/** Specify a custom aboutme page
	 * @param $aboutme Link to about me page */
	public function set_aboutme($aboutme) {
		$this->aboutme = $aboutme;
	}


//	private $section;	// The Section object
//	private $footer = null;

	private $time;          ///< Current time
	private $aboutme = "lib/user/aboutme.php";	// Link to aboutme page...
	private $calendar;      ///< The course calendar
}

