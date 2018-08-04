<?php
/** 
 * @file
 * @brief Submission that an image
 */

namespace Assignments;

/** 
 * @brief Submission that is an image
 */
class SubmissionImage extends Submission {
	/** @brief Constructor
	 * @param $assignment Assignment this submission is for
	 * @param $tag Tag associated with the submission
	 * @param $name Name for the submission */
	public function __construct($assignment, $tag, $name, $teaming=null) {
		parent::__construct($assignment, $tag, $name, $teaming);
		
		$this->assignment = $assignment;
		$this->tag = $tag;
	}
	
	/** @brief Create a view class object for this submission type 
	 * @returns Created object */
	public function create_view() {
		return new SubmissionImageView($this);
	}

	/**
	 * @brief Construct a single row of the submissions table
	 * @param \User $user User this submission is for
	 * @param array $submit The submission record from the table
	 * @param $staffview True if this is a staff view
	 * @param string $func Javascript function name to use
	 * @return string HTML for the row
	 */
    protected function present_submission_row(\User $user, array $submit, $staffview,
        $func) {
        $date = date('l, m-d-Y, h:i:sa', $submit['date']);
        $id = $submit['id'];
        $name = $submit['name'];
        $libroot = get_libroot();

        $url= $libroot . '/assign/submittedimg.php?id=' . $id;
        if($staffview) {
            $url .= '&userid=' . $user->get_id();
        }

		if($this->get_teaming() !== null) {
			$url .= '&teaming=' . $this->get_teaming();
		}

        $html = <<<HTML
<tr><td><div class="menu"><a href="javascript:;" onclick="$func('$url', '$date')">$date: $name</a></div></td></tr>
HTML;

        return $html;
    }

    /** @brief Present the submission display/access support
     * @param $user User to present for
     * @param $staffview True if this is a staff view page
     * @param $submits The submits from the database
     * @param $func The name of the javascript function for clicking on a submit
     * @returns HTML for the presentation */
    protected function present_submits_display(\User $user, $staffview,
                                               $submits, $func) {
        $name = $this->get_name();
        $html = '';
        $libroot = get_libroot();

        $divid = $this->tag . '_div';

        /*
         * For image submissions we have a Javascript function
         * that puts an appropriate image tag into the div
         */
        $html .= <<<HTML
<script>
function $func(url, date) {
$("#$divid").html('<figure class="submitfigure"><img src="' + url + '" /><figcaption>' + date + '</figcaption></figure>');
}
HTML;
        $html .= '</script>';

        $submit0 = $submits[0];
        $date = date('l, m-d-Y, h:i:sa', $submit0['date']);
        $id = $submit0['id'];

        $url= $libroot . '/assign/submittedimg.php?id=' . $id;
        if($staffview) {
            $url .= '&userid=' . $user->get_id();
        }

		if($this->get_teaming() !== null) {
			$url .= "&teaming=" . $this->get_teaming();
		}

        $html .= <<<HTML
<div id="$divid" class="center"><figure class="submitfigure"><img src="$url" /><figcaption>$date</figcaption></div>
HTML;

        return $html;
    }

	/**
	 * @brief The message to display below the submissions
	 * @returns HTML */
	protected function present_submits_message() {
		return <<<HTML
<p class="center">Click on any submission date to view the submission</p>
HTML;
	}


	private $assignment; // Assignment for this submission
	private $tag;		///< Submission tag
}
