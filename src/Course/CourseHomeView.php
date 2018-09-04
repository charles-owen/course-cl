<?php 
/** @file
 * View class for course home page
 */

namespace CL\Course;

use \CL\Site\Site;
use \CL\Users\User;

/**
 * View class for course home page
 */
class CourseHomeView extends \CL\Course\View {

	/**
	 * CourseHomeView constructor.
	 * @param Site $site Site object
	 * @param array $options Options passed to the view
	 * @param int $time Current time
	 */
	public function __construct(Site $site, array $options=[], $time=null) {
        parent::__construct($site, $options);

        $this->time = $time !== null ? $time : time();
       // $this->addCSS("vendor/cl/course/coursehome.css");
        $this->title = $this->course->desc;
		$this->addBody('wider');

		$this->calendar = $this->add_aux(new CalendarView(time()));

		$site->amend($this);
	}


    /**
     * Get standard properties for a page.
     *
     * @param string $property Options are: libroot, root
     * @return Course|mixed|null|string Property value
     */
    public function __get($property)
    {
        switch ($property) {


            default:
                return parent::__get($property);
        }
    }


    /**
     * Property set magic method
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        parent::__set($property, $value);
    }


	/**
	 * Present the calendar
	 * @return string HTML
	 */
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
<p class="cl-home-control"><a href="$root/cl/login" title="Log Out">
<img src="$img/logout.png" width="100" height="25" alt="Log Out"></a></p>
HTML;
		return $html;
	}

	/** The management section of this home page
	 * @returns string HTML for the management options if staff, empty string otherwise */
	public function management_controls() {
		$html = '';

        /*
         * Console Link
         */
		if($this->user->atLeast(User::STAFF)) {
			$img = $this->course->img;

			$html .= <<<LINK
<p class="cl-home-control"><a href="cl/console"><img src="$img/restricted.png" width="100" height="74" alt="Restricted Area"></a></p>
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


		if(isset($this->user->dataJWT[Member::JWT_MEMBER_ACTUAL])) {
			$html .= '<div class="cl-spoofing-restore"></div>';
		}

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
		$any = false;
		foreach($category->assignments as $assignment) {
			$link = $this->assignmentLink($assignment);
			if($link !== '') {
				$any = true;
			}
			$html .= $link;
		}

		if(!$any) {
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

				$review = $assignment->reviewing;
				if($review !== null) {
					$reviewDue = date('n-d-y', $review->due);
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

			$delay = $this->section->assignments->problemSolvingDelay;
			if($solving !== null && ($grader || $assignment->available_due($this->user, $this->time, $delay) )) {
				// We have a problem solving page
				$html .= "<ul><li class=\"bullet\"><a href=\"$solving\">Problem Solving</a>";

				if($staff) {
					if($assignment->available_due($this->user, $this->time, $delay)) {
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
		$root = $this->site->root;
		$html = '';

		if($this->user->atLeast(Member::STUDENT)) {
			if($this->site->installed('interact')) {
				$html = <<<HTML
<ul>
<li><a href="$root/cl/interact"><img alt="Interact! System" src="vendor/cl/interact/img/link.png" height="16" width="82"></a></li>
</ul>
HTML;
			}

			$html .= <<<HTML
<ul>
<li><a href="$root/cl/aboutme">About Me and Preferences...</a></li>
<li><a href="$root/cl/calendar">Personal Calendar</a></li>
<li><a href="$root/cl/grades">Grades</a></li>
HTML;

			// Are there any peer reviews in the assignments?
			$assignments = $this->section->assignments;
			if($assignments->areReviews() ) {
				$html .= <<<HTML
<li><a href="$root/cl/reviews/pending">Peer Reviewing</a></li>
HTML;
			}

			$html .= "</ul>";
		}

		return $html;
	}

	public function staff() {
		$users = new Members($this->site->db);
		return $users->query([
			'semester'=>$this->section->semester,
			'section'=>$this->section->id,
			'atLeast'=>\CL\Users\User::STAFF
		]);
	}

	/* @var int $time */
	private $time;          ///< Current time
	private $calendar;      ///< The course calendar
}

