<?php
/** 
 * @file
 * Submission that is a program or binary file
 */

namespace CL\Course\Submission;

/** 
 * Submission that is a program or binary file
 */
class SubmissionProgram extends Submission {
	/**
	 * Constructor
	 * @param string $tag Tag associated with the submission
	 * @param string $name Name for the submission
	 * @param string $teaming Teaming name if team submission
	 */
	public function __construct($tag, $name, $teaming) {
		parent::__construct($tag, $name, $teaming);
	}

	/**
	 * Add additional content to the JSON data send to the client
	 * @param array $data Data array to add to
	 */
	protected function addData(array &$data) {
		$data['type'] = 'program';
	}

//    /**
//     * Construct a single row of the submissions table
//     * @param \User $user User this submission is for
//     * @param array $submit The submission record from the table
//     * @param $staffview True if this is a staff view
//	 * @param string $func Javascript function name to use
//	 * @return string HTML for the row
//     */
//    protected function present_submission_row(\User $user, array $submit, $staffview,
//        $func) {
//        $date = date('l, m-d-Y, g:i:sa', $submit['date']);
//        $id = $submit['id'];
//
//		$by = "";
//		if(isset($submit['userid'])) {
//			$users = new \Users($this->get_assignment()->get_course());
//			$user = $users->get_user($submit['userid']);
//			if($user !== null) {
//				$by = " by " . $user->get_displayname();
//			} else {
//				$by = " by unknown user";
//			}
//		}
//
//        $name = $submit['name'];
//        $libroot = get_libroot();
//
//        $url= $libroot . '/assign/submittedfile.php?id=' . $id;
//        if($staffview) {
//            $url .= '&userid=' . $user->get_id();
//        }
//
//		if($this->get_teaming() !== null) {
//			$url .= "&teaming=" . $this->get_teaming();
//		}
//
//        $html = <<<HTML
//<tr><td><div class="menu"><a href="$url">$date: $name$by</a> <a href="$url"><img src="$libroot/images/menubars.png" height="16" width="16" alt="Menu"> </a>
//<ul>
//    <li><a class="download" href="$url"><img src="$libroot/images/download.png" alt=""></a>
//    <a class="download" href="$url">Download submission</a></li>
//HTML;
//
//		if($staffview && $this->get_teaming() === null) {
//			$html .= <<<HTML
//    <li><a class="download" href="$url&rename"><img src="$libroot/images/download.png" alt=""></a>
//    <a class="download" href="$url&rename">Download renamed to user id</a></li>
//HTML;
//
//		}
//
//        $ndx = 0;
//        foreach($this->analysis as $analysis) {
//            $info = $analysis->info($this->assignment->get_course());
//			if($info === null) {
//				$ndx++;
//				continue;
//			}
//
//            $menu = $info['menu'];
//            $icon = $info['icon'];
//            $html .= <<<HTML
//<li><a href="javascript:;" onclick="$func('$id', '$ndx')"><img src="$icon" alt=""></a> <a href="javascript:;" onclick="$func('$id', '$ndx')">$menu</a></li>
//HTML;
//            $ndx++;
//        }
//
//        $html .= <<<HTML
//</ul></div></td></tr>
//HTML;
//
//        return $html;
//    }
//
//    /** Present the submission display/access support
//     * @param $user User to present for
//     * @param $staffview True if this is a staff view page
//     * @param $submits The submits from the database
//     * @param $func The name of the javascript function for clicking on a submit
//     * @returns HTML for the presentation */
//    protected function present_submits_display(\User $user, $staffview,
//                                               $submits, $func) {
//        $libroot = get_libroot();
//
//        $divid = $this->tag . '_div';
//
//        /*
//         * For text submissions we have a
//         * Javascript function that gets the
//         * text and displays it
//         */
//        $html = <<<HTML
//<script>
//function $func(id, analysisNdx) {
//HTML;
//
//		if($this->get_teaming() === null) {
//			if($staffview) {
//				$userid = $user->get_id();
//				$html .= "var data = {id: id, ndx: analysisNdx, userid: '$userid'};";
//			} else {
//				$html .= "var data = {id: id, ndx: analysisNdx};";
//			}
//		} else {
//			$teaming = $this->get_teaming();
//			if($staffview) {
//				$userid = $user->get_id();
//				$html .= "var data = {id: id, ndx: analysisNdx, userid: '$userid', teaming: '$teaming'};";
//			} else {
//				$html .= "var data = {id: id, ndx: analysisNdx, teaming: '$teaming'};";
//			}
//		}
//
//        $html .= <<<HTML
//	 $.ajax({
//			url: '$libroot/assign/analysis.php',
//			type: 'get',
//			data: data,
//			success: function(data) {
//				$("#$divid").html(data);
//			},
//			error: function(xhr, textStatus, errorThrown){
//				$("#$divid").html('<p class="red">Error, unable to communicate with course server ' + textStatus + '</p>');
//			}
//		});
//}
//HTML;
//
//        $html .= '</script>';
//
//        $html .= <<<HTML
//<div id="$divid"></div>
//HTML;
//
//        return $html;
//    }
//
//	/**
//	 * The message to display below the submissions
//	 * @returns HTML */
//	protected function present_submits_message() {
//		return <<<HTML
//<p class="center">Click on any submission date for submission options</p>
//HTML;
//	}
//
//    /**
//     * Get any link to a bulk-download page for this submission type.
//     * @param \User $user User who is viewing this information
//     * @return string HTML
//     */
//    public function get_bulk_download_link(\User $user, $data) {
//        if(!$user->at_least(\User::GRADER)) {
//            return '';
//        }
//
//        $name = $this->name;
//        $libroot = $user->course->get_libroot();
//        $assigntag = $this->assignment->get_tag();
//
//        $extra = '';
//        foreach($data as $key => $value) {
//            $extra .= <<<HTML
//<input type="hidden" name="$key" value="$value">
//HTML;
//        }
//
//        return <<<HTML
//<form action="$libroot/assign/submittedfiles.php">
//<input type="hidden" name="assign" value="$assigntag">
//<input type="hidden" name="tag" value="$this->tag">
//$extra
//<fieldset>
//<legend>Bulk download for $name </legend>
//<p>
//<input type="radio" name="option" checked value="rename">Rename to User ID
//<input type="radio" name="option" value="folders">Folders by User ID
//<button type="select" value="download">Download</button>
//</p></fieldset>
//</form>
//HTML;
//    }

}
