<?php
/**
 * @file
 * View for downloading files in bulk.
 *
 * Notice: Uses system "zip" command. Not Windows compatible at this time.
 */

namespace Assignments;

/**
 * View for downloading files in bulk.
 */
class SubmittedFilesView  extends \View {
    /**
     * SubmittedView constructor.
     * @param \Course $course Course object
     * @param \User $user User making this request
     */
	public function __construct(\Course $course, \User $user) {
        parent::__construct($course, $user);
	}

    protected function not_available() {
        $root = $this->course->get_root();
        header("Location: $root/");
        exit;
    }

    /**
     * Get the submitted item
     * @param $get $_GET
     * @return mixed Submitted item
     */
    public function get($get) {
        if(!$this->user->at_least(\User::STAFF)) {
            return $this->not_available();
        }

        $rename = $get['option'] === "rename";

        $users = new \Users($this->course);
        $submissions = new \Assignments\Submissions($this->course);
        $section = $this->course->get_section($this->user->semester, strip_tags($get['section']));
        $assignment = $section->get_assignment(strip_tags($get['assign']));
        $submissionTag = strip_tags($get['tag']);

        $temp_dir = $this->get_temp_dir();
        $submissions_dir = $temp_dir . "/submissions";
        mkdir($submissions_dir);

        foreach($users->get_users($section, "user") as $user) {
            $submits = $submissions->get_submissions($assignment, $submissionTag, $user);
            if (count($submits) > 0) {
                $submit = $submits[0];
                $file = $submissions->get_file($submit['id']);

                $type = $file['type'];
                $bin = $file['binary'];
                $name = $file['name'];

                if ($rename) {
                    $ext = pathinfo($name, PATHINFO_EXTENSION);
                    $name = $user->userid . '.' . $ext;
                    file_put_contents($submissions_dir . "/" . $name, $bin);
                } else {
                    mkdir($submissions_dir . "/" . $user->userid);
                    file_put_contents($submissions_dir . "/" . $user->userid . "/" . $name, $bin);
                }
            }
        }

        exec("cd $temp_dir; zip -r submissions submissions");

        $fp = fopen($temp_dir . "/submissions.zip", 'rb');

        header( "Content-Type: application/zip" );
        header( "Content-Disposition: attachment;filename=submissions.zip");
        fpassthru($fp);

        $this->rrmdir($temp_dir);
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
     * @param $src Directory to remove
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
}