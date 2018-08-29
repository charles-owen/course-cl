<?php
/**
 * @file
 * View class for the Cheat Bomb system.
 *
 * See CheatBombAnalysis for details.
 */

namespace Analysis;

/**
 * View class for the Cheat Bomb system.
 *
 * See CheatBombAnalysis for details.
 */
class CheatBombView extends \Manage\ManageView {

	public function __construct(\Course $course, \User $user, array &$get, array &$session) {
		parent::__construct($course, $user, $get, $session);

		/*
		 * Get the assignment
		 */
		$section = $this->get_section();
		$this->assignment = $section->get_assignment($get['a']);
		if($this->assignment === null) {
			$this->set_title('Cheat Bomb Analysis: Invalid assignment');
			return;
		}

		$this->assignment->load();

		/*
		 * Get the submission
		 */
		$this->submission = $this->assignment->get_grading()->get_submission($get['s']);
		if($this->submission === null) {
			$this->set_title('Cheat Bomb Analysis: Invalid submission');
			return;
		}

		/*
		 * Get the analysis component
		 */
		foreach($this->submission->analysis as $analysis) {
			if($analysis instanceof CheatBombAnalysis) {
				$this->cb = $analysis;
				break;
			}
		}

		if($this->cb === null) {
			$this->set_title('Cheat Bomb Analysis: Submission does not have Cheat Bomb analysis');
			return;
		}

		$this->set_title('Cheat Bomb Analysis of ' . $this->assignment->get_name() .
			' - ' . $this->submission->get_name());

		$this->css = <<<CSS
.names {
   margin: 1em 4em;
}

.names p {
	margin: 0;
}

.names .bomb {
	color: red;
}
CSS;

	}

	public function present_live($output) {
		if($this->cb === null) {
			$output("<p>No analysis possible</p>");
			return;
		}

		$this->email = [];

		/**
		 * Pull the submissions
		 */
		$users = new \Users($this->course);
		$submissions = new \Assignments\Submissions($this->course);

		$output('<div class="names">');

		$cnt = 0;

		$tag = $this->assignment->get_tag();

		foreach($users->get_users($this->get_section(), "name") as $user) {
			if($user->get_role() !== \User::STUDENT) {
				continue;
			}

			$id = $user->get_id();
			$name = $user->get_displayname();
			$libroot = $this->course->get_libroot();
			$email = $user->email;

			$html = <<<HTML
<p><a href="$libroot/grading/assignmentgrader.php?tag=$tag&id=$id" target="grading">$name</a>
<a href="mailto:$email">$email</a>
HTML;
			$output($html);

			$submits = $submissions->get_submissions($this->assignment,
				$this->submission->get_tag(), $user);
			if(count($submits) == 0) {
				$html = " <em>no submission</em></p>";
				$output($html);
				continue;
			}

			$output("</p>");

			$data = $submissions->get_file($submits[0]['id']);

			if($this->cb->type === 'zip') {
				$this->process_zip($output, $user, $data);
			}

			$cnt++;
			if($cnt > 2) {
				//break;
			}
		}

		$output('</div>');

		if(count($this->emails) > 0) {
		    $emails = '';
            foreach($this->emails as $email) {
                if(strlen($emails) > 0) {
                    $emails .= ';';
                }

                $emails .= $email;
            }

            $output("<p>$emails</p><p>&nbsp;</p>");
        }


	//	$output("<p>Sending to MOSS</p>");
	//	$moss->setCommentString("MOSS");
	//	$output("<p>Response: '" . $moss->send() . "' done</p>");
	}
	
	private function process_zip($output, $user, $data) {
		$analyzer = new \Analysis\Analyzer($this->submission);
		
		$dir = $analyzer->get_temp_dir($user->get_userid());
		$path = $dir . DIRECTORY_SEPARATOR . 'submit.zip';
		$fp = fopen($path, "wb");
		fwrite($fp, $data['binary']);
		fclose($fp);

		$analyzer->set_path($path);
		$unzipped = $analyzer->get_unzipped_dir();
		unlink($path);

		$expected = $this->cb->get_expected();
		$not_expected = $this->cb->get_not_expected();

		$files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($unzipped));
		$file_data = array();

		foreach($files as $file => $obj) {
			$base = basename($file);

			/*
			 * Expected file?
			 */
			foreach($expected as $expect) {
				$ex_file = $expect['file'];
				if(strcasecmp($base, $ex_file) == 0) {
					if(!isset($file_data[$ex_file])) {
						$file_data[$ex_file] = file_get_contents($file);
					}

					$data = $file_data[$ex_file];
					$regex = $expect['regex'];

					if(preg_match($regex, $data) !== 1) {
						$msg = <<<HTML
<p class="bomb">Expected $regex in $base</p>
HTML;

						$output($msg);
						$this->emails[$user->email] = $user->email;
					}
				}
			}

			/*
			 * Not expected file?
			 */
			foreach($not_expected as $expect) {
				$ex_file = $expect['file'];
				if(strcasecmp($base, $ex_file) == 0) {
					if(!isset($file_data[$ex_file])) {
						$file_data[$ex_file] = file_get_contents($file);
					}

					$data = $file_data[$ex_file];
					$regex = $expect['regex'];

					if(preg_match($regex, $data) === 1) {
						$msg = <<<HTML
<p class="bomb">Not expected $regex in $base</p>
HTML;

						$output($msg);
                        $this->emails[$user->email] = $user->email;
                    }
				}
			}

			//echo "$file" . "<br>";
			//	$moss->add_raw($file, file_get_contents($file), $this->moss->language);
				//$
		}

		/*
		 * Ensure all expected files are there
		 */
		foreach($expected as $expect) {
			$ex_file = $expect['file'];
			if (!isset($file_data[$ex_file])) {
				$msg = <<<HTML
<p class="bomb">Missing file  $ex_file</p>
HTML;
				$output($msg);
			}
		}

		/*
		 * Ensure all expected files are there
		 */
		foreach($not_expected as $expect) {
			$ex_file = $expect['file'];
			if (!isset($file_data[$ex_file])) {
				$msg = <<<HTML
<p class="bomb">Missing file  $ex_file</p>
HTML;
				$output($msg);
			}
		}

		$analyzer->close();
	}


	private $assignment;
	private $submission = null;
	private $cb = null;		///< CheatBombAnalysis object
    private $emails = [];
}