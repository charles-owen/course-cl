<?php
/**
 * @file
 * View class for downloading submissions in bulk.
 */

namespace CL\Course\Submission;

use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;
use CL\Course\Members;

/**
 * View class for downloading submissions in bulk.
 */
class SubmissionsDownloadView extends View {
	/**
	 * SubmissionImageView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $properties Parameters passed to route ('id')
	 */
	public function __construct(Site $site, Server $server, $properties) {
		parent::__construct($site, ['at-least'=>Member::STAFF]);

		$this->server = $server;

		$this->setTitle('Bulk Download');

		// Get the assignment
		$assignTag = $properties['assign'];
		$this->assignment = $this->section->get_assignment($assignTag);
		if($this->assignment === null) {
			$server->redirect($site->root . '/cl/invalid');
			return;
		}

		$this->assignment->load();

		// Get the submission
		$submissionTag = $properties['submission'];
		$this->submission = $this->assignment->submissions->get($submissionTag);
		if($this->submission === null) {
			$server->redirect($site->root . '/cl/invalid');
			return;
		}

		// Deal with team submissions
		if($this->submission->teaming !== null) {
		    $url = $site->root . '/cl/team/submissions/' . $this->assignment->tag . '/' . $this->submission->tag;

            $from = null;
            $to = null;
            $append = '';

            $get = $this->server->get;
            if(isset($get['fm'])) {
                $from = strip_tags(strtolower($get['fm']));
                $append = '?fm=' . $from;
            }

            if(isset($get['to'])) {
                $to = strip_tags(strtolower($get['to']));
                $append .= strlen($append) > 0 ? '&to=' : '?to=';
                $append .= $to;
            }

			$server->redirect($url . $append);
			return;
		}

		$this->setTitle('Bulk download for ' . $this->assignment->name . '/' . $this->submission->name);
	}

	/**
	 * Present the whole file including header configuration.
	 * @return string Downloaded file
	 */
	public function whole() {
		$this->flush();

		/**
		 * Pull the submissions
		 */
		$members = new Members($this->site->db);
		$all = $members->query([
			'semester' => $this->semester,
			'section' => $this->section->id,
			'atLeast' => Member::STUDENT
		]);

		$from = null;
		$to = null;

		$get = $this->server->get;
		if(isset($get['fm'])) {
		    $from = strip_tags(strtolower($get['fm']));
        }

        if(isset($get['to'])) {
            $to = strip_tags(strtolower($get['to']));
        }

		$submissions = new Submissions($this->site->db);

		$temp_dir = $this->get_temp_dir();
		$submissions_dir = $temp_dir . "/submissions";
		mkdir($submissions_dir);

		$cnt = 0;
		foreach($all as $user) {
		    if(($from !== null && strtolower($user->userId) < $from) || ($to !== null && strtolower($user->userId) > $to)) {
		        continue;
            }

			$submits = $submissions->get_submissions($user->member->id, $this->assignment->tag, $this->submission->tag, true);
			if (count($submits) > 0) {
				$submit = $submits[0];
				if($this->submission instanceof SubmissionText) {
					$bin = $submissions->get_text($submit['id']);
					$name = 'submit.txt';
				} else {
					$file = $submissions->get_file($submit['id']);
					$name = $file['name'];
					$bin = $file['binary'];
				}

				$rename = true;
				if ($rename) {
					$ext = pathinfo($name, PATHINFO_EXTENSION);
					$name = $user->userId . '.' . $ext;
					file_put_contents($submissions_dir . "/" . $name, $bin);
				} else {
					mkdir($submissions_dir . "/" . $user->userId);
					file_put_contents($submissions_dir . "/" . $user->userId . "/" . $name, $bin);
				}

				$cnt++;

				if($this->limit > 0 && $cnt >= $this->limit) {
					break;
				}
			}

		}

		error_reporting(E_ERROR | E_PARSE);
        $output = [];
        $resultCode = 0;
        $result = exec("cd $temp_dir; zip -r submissions submissions", $output, $resultCode);
        if($resultCode == 127) {
            echo "zip is not available on the server.";
            return "";
        }

        $fp = fopen($temp_dir . "/submissions.zip", 'rb');
        if($fp === false) {
            echo "Unable to open submissions.zip";
            return '';
        }

		header( "Content-Type: application/zip" );
		header( "Content-Disposition: attachment;filename=submissions.zip");
		fpassthru($fp);

		$this->rrmdir($temp_dir);
		return '';
	}

	/**
	 * Get a temporary directory that we can use to create the .zip file we are downloading
	 *
	 * This will create a temp directory the first time it is called
	 * and return that subsequently.
	 * @return string Path to temporary directory
	 */
	public function get_temp_dir($name="bulk") {
		$tmp = sys_get_temp_dir();
		$tmp .= DIRECTORY_SEPARATOR;

		do {
			$path = $tmp . $name . mt_rand(0, 999999999);
		} while(!mkdir($path, 0700));

		return $path;
	}

	/**
	 * Safely remove a directory, with recursion.
	 * @param string $src Directory to remove
	 */
	private function rrmdir($src) {
		$dir = opendir($src);
		while(false !== ( $file = readdir($dir)) ) {
			if (( $file != '.' ) && ( $file != '..' )) {
				$full = $src . '/' . $file;
				if ( is_dir($full) ) {
					$this->rrmdir($full);
				}
				else {
					unlink($full);
				}
			}
		}
		closedir($dir);
		@rmdir($src);
	}

	private $assignment;
	private $submission;
	private $server;

	// Optional limit on how number of students to download
	// If set to zero, there is no limit
	private $limit = 0;
}
