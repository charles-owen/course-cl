<?php
/**
 * @file
 * Controller for file submission
 *
 * 9/10/2016 Changed to return json.
 */

namespace Assignments;

/**
 * Controller for file submission
 *
 * Used by assign/submitfile.php
 */
class SubmitFileController {
    /**
     * @brief Constructor
     * @param \Course $course The Course object
     * @param \User $user The User object
     * @param $time Time of the submission as a Unix time value
     */
    public function __construct(\Course $course, \User $user, $time) {
        $this->course = $course;
        $this->user = $user;
        $this->time = $time;
    }

    /**
     * @brief Handle post for file submission
     * @param $post The $_POST array
     * @param $files The $_FILES array
     * @return string String to return to client
     */
    public function post(&$post, &$files) {
        if(!isset($post['assign']) || !isset($post['tag'])) {
            // Invalid command from page
            return $this->fail("Invalid submission - request improperly framed");
        }

        if ($files["file"]["error"] > 0 || $files["file"]["tmp_name"] == "") {
            // Error return
            return $this->fail("Invalid submission - no supplied file ");
        }

        $path = $files["file"]["tmp_name"];

        /*
         * Determine the assignment
         */
        $section = $this->user->get_section();
        $assignment = $section->get_assignment($post['assign']);
        $assignment->load();
        if($assignment === null) {
            unlink($path);
            return $this->fail("Invalid assignment");
        }

        // Has the assignment expired?
		// We allow staff to submit even if not open...
        if(!$this->user->is_staff() && !$assignment->is_open($this->user, $this->time)) {
            unlink($path);
            return $this->fail("Assignment is not open for submission");
        }

        $grading = $assignment->get_grading();
        $submission = $grading->get_submission($post['tag']);
        if($submission === null) {
            unlink($path);
            return $this->fail("Invalid submission tag");
        }

        // Determine the file name, temp file name, and type
        $name = $files["file"]["name"];
        if(isset($post['type'])) {
            $type = $post['type'];
        } else if(isset($files["file"]["type"])) {
            $type = $files["file"]["type"];
        } else {
            $type = "application/octet-stream";
        }
		
		if($this->image) {
			if(!in_array($type, array("image/png", "image/jpeg", "image/pjpeg"))) {
				unlink($path);
				return $this->fail("The file you submitted is NOT an image!");
			}

		}

		// Perform any specified analysis
		try {
			$analysis = $submission->analyze($path);
		} catch(\Analysis\AnalysisException $exception) {
			unlink($path);
			return $this->fail($exception->getMessage());
		}

		// Submit the file
		$id = $submission->submit_file($this->user, time(), $path, $name, $type);
        if(!$id) {
            unlink($path);
            return $this->fail("Failed to add submission to the database!");
        }

        $this->id = $id;

		// File any computed analysis
        if($analysis !== null) {
			$submission->set_analysis($id, $analysis);
        }

        unlink($path);
		return json_encode(array("ok" => true,
			"msg" => "Submission successfully saved to server"));
    }

    /**
     * @brief Get the ID of the submission if successful
     * @return Id of the successful submission or null if unsuccessful
     */
    public function get_id() {
        return $this->id;
    }

	/**
	 * Indicate if this must be an image
	 */
	public function set_image($image = true) {
		$this->image = $image;
	}

	private function fail($msg) {
		return json_encode(array("ok" => false, "msg" => $msg));
	}
	
    private $course;
    private $user;
    private $time;
    private $id = null;
	private $image = false;
}