<?php
/** @brief View class for image submissions
 * @file 
 */
 
namespace Assignments;

/** @brief View class for image submissions */
class SubmissionImageView extends SubmissionView {
	
	/** @brief Constructor
	 * @param $submission Submission this is a view of */
	public function __construct(Submission $submission) {
		parent::__construct($submission);
	}
	
	/** @brief Present the submission form 
	 * @returns HTML for the form */
	protected function present_form() {
		$html = '';
		
		$assignment = $this->submission->get_assignment();
		$assigntag = $assignment->get_tag();
		$tag = $this->submission->get_tag();
			
		/*
		 * Submit button
		 */
		
		$libroot = get_libroot();
		$idform = 'upload_form_' . $tag;
		$idtarget = 'upload_target_' . $tag;
		
		$url = $libroot . '/assign/submitimg.php';
		
		$html .= <<<HTML
<div class="left" id="$idform" >
<form class="fileform" enctype="multipart/form-data" method="post" 
action="$url" target="$idtarget">
<input id="assign" name="assign" type="hidden" value="$assigntag">
<input id="tag" name="tag" type="hidden" value="$tag">
<label class="submit">Submit: </label> <input class="file" type="file" name="file" id="file" /> 
<input class="upload" type="submit" name="submit" value="Upload File" /> 
<iframe id="$idtarget" name="$idtarget" src="" style="width:0;height:0;border:0px solid #fff;display:none"></iframe>
</form>
<p class="center smallblu result">&nbsp;<span></span>&nbsp;</p>
<script>
$('#$idform form').submit(function() {
	$('#$idtarget').on("load", function() {
		var json = frames["$idtarget"].document.getElementsByTagName("body")[0].innerHTML;
		var result = parse_json(json);
		if(result.ok) {
			window.location.href = window.location.pathname + window.location.search;
			//window.location.reload();
		} else {
			$("#$idform .result span").html(result.msg)
				.show()
				.delay(2000)
				.fadeOut(1000);
		}
	});
	
	return true;
});
</script>
</div>
HTML;

		return $html;
	}
	
    /** @brief Present a submission for a reviewer to view 
	 * @param $user User who owns the submisssion */
	public function present_for_reviewer(\User $user) {
		return $this->submission->present_submits($user, false);
	}
		
}
