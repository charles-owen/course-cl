<?php
/**
 * @file
 * Class to support Analysis components when analyzing a submission
 */

namespace CL\Course\Analysis;

use CL\Site\Site;
use CL\Course\Submission\Submission;

/**
 * Class to support Analysis components when analyzing a submission
 *
 * After a submission occurs, if there is any required analysis, an
 * instance of this class is created and passed the submitted file to
 * analyze. It then executes any required analysis components.
 */
class Analyzer {
	/**
	 * Constructor
	 * @param Submission $submission Submission we are analyzing
	 * @param $path Path to any file for the submission
	 */
    public function __construct(Submission $submission, $path=null) {
        $this->submission = $submission;
        $this->path = $path;
    }

    /**
     * Get a temporary directory that analysis can use
     *
     * This will create a temp directory the first time it is called
     * and return that subsequently.
     * @return string Path to temporary directory
     */
    public function get_temp_dir($name="anal") {
        if($this->tmpDir === null) {
			$tmp = sys_get_temp_dir();
			$tmp .= DIRECTORY_SEPARATOR;

			do {
                $path = $tmp . $name . mt_rand(0, 999999999);
            } while(!mkdir($path, 0700));

            $this->tmpDir = $path;
        }

        return $this->tmpDir;
    }


	/**
	 * Get a temporary directory containing an unzipped submission
	 * @param Site $site The site object
	 * @return string Directory path
	 */
    public function get_unzipped_dir(Site $site) {
        if($this->unzipDir === null) {
            $tmp = $this->get_temp_dir();

            $unzip = $tmp . DIRECTORY_SEPARATOR . 'unzip';
            if(!mkdir($unzip, 0700)) {
                return null;
            }

			if($site->sandbox) {
				try {
					$zip = new \ZipArchive();
					$zip->open($this->path);
					@$zip->extractTo($unzip);
					@$zip->close();
				} catch(\Exception $ex) {
					return null;
				}
			} else {
				exec("unzip -d $unzip $this->path");
			}

            $this->unzipDir = $unzip;
        }


        return $this->unzipDir;
    }

    /**
     * Close the analysis system
     */
    public function close() {
        if($this->tmpDir !== null) {
            $this->rrmdir($this->tmpDir);
			$this->tmpDir = null;
			$this->unzipDir = null;
        }
    }

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

    /**
     * Add result to the current analysis
     * @param $tag The tag for the type of analysis
     * @param $data Data produced by the analysis
     */
    public function add_result($tag, $data) {
        $this->results[$tag] = $data;
    }

    /**
     * Get results of an analysis
     * @param $tag The tag for the type of analysis
     * @return mixed|null The data for the analysis or null if none
     */
    public function get_result($tag) {
        if(isset($this->results[$tag])) {
            return $this->results[$tag];
        }

        return null;
    }

	/**
	 * Get the results of the analysis
	 * @return array Results array
	 */
    public function get_results() {
        return $this->results;
    }
	
	public function set_path($path) {
		$this->path = $path;
	}
	
	/**
	 * Get the path to the submission file
	 */
	public function get_path() {
		return $this->path;
	}

	public function get_submission() {
		return $this->submission;
	}

    private $user;
    private $submission;
    private $path;

    private $tmpDir = null;
    private $unzipDir = null;

    /// All of the analysis results will be placed in this array
    private $results = array();
}