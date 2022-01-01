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
 *
 * @property String unzipError error result when unzip fails
 */
class Analyzer {
	/**
	 * Constructor
	 * @param Submission $submission Submission we are analyzing
	 * @param string $path Path to any provided file for the submission
	 */
    public function __construct(Submission $submission, $path=null) {
        $this->submission = $submission;
        $this->path = $path;
    }

    /**
     * Get standard properties for a user.
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * unzipError | string | error result when unzip fails

     * @param string $property Property name
     * @return mixed Property value
     */
    public function __get($property) {
        switch($property) {
            case 'unzipError':
                return $this->unzipError;

            default:
                return \CL\Site\PropertyHelper::Error($property);
        }
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
     * Any error message is placed in $this->unzipError
	 * @param Site $site The site object
	 * @return string Directory path
	 */
    public function get_unzipped_dir(Site $site) {
        if($this->unzipDir === null) {
            $tmp = $this->get_temp_dir();

            $unzip = $tmp . DIRECTORY_SEPARATOR . 'unzip';
            if(!mkdir($unzip, 0700)) {
                $this->unzipError = "Unable to allocate directory on the server";
                return null;
            }

			if($site->sandbox) {
				try {
					$zip = new \ZipArchive();
					$ret = $zip->open($this->path);
                    if($ret === \ZipArchive::ER_NOZIP) {
                        $this->unzipError = "Not a valid ZIP archive";
                        return null;
                    }
					@$zip->extractTo($unzip);
					@$zip->close();
				} catch(\Exception $ex) {
                    $this->unzipError = "Unzip operation failed on the server";
					return null;
				}
			} else {
                $output = '';
                $result = '';
				exec("unzip -d $unzip $this->path", $output, $result);

                switch($result) {
                    case 4: // unzip was unable to allocate memory for one or more buffers during program initialization.
                    case 5: // unzip was unable to allocate memory or unable to obtain a tty to read the decryption password(s).
                    case 6: // unzip was unable to allocate memory during decompression to disk.
                    case 7: // unzip was unable to allocate memory during in-memory decompression.
                        $this->unzipError = "Unzip operation failed on the server";
                        return null;

                    case 11: // no matching files were found.
                    case 51: // the end of the ZIP archive was encountered prematurely.
                        $this->unzipError = "The server disk is full";
                        return null;

                    case 3: // A severe error in the zipfile format was detected. Processing probably failed immediately.
                    case 9: // The specified zipfiles were not found.
                        $this->unzipError = "Not a valid ZIP archive";
                        return null;

                    case 50: // the disk is (or was) full during extraction.
                        $this->unzipError = "The server disk is full";
                        return null;

                    default:
                        break;
                }
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
     * @param string $tag The tag for the type of analysis
     * @param mixed $data Data produced by the analysis
     */
    public function add_result($tag, $data) {
        $this->results[$tag] = $data;
    }

    /**
     * Get results of an analysis
     * @param string $tag The tag for the type of analysis
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

	/**
	 * Set the path to the submission file
	 * @param $path
	 */
	public function set_path($path) {
		$this->path = $path;
	}
	
	/**
	 * Get the path to the submission file
	 */
	public function get_path() {
		return $this->path;
	}

	/**
	 * Get the submission under analysis
	 * @return Submission Submission this is analyzing
	 */
	public function get_submission() {
		return $this->submission;
	}

    private $submission;
    private $path;

    private $tmpDir = null;
    private $unzipDir = null;

    private $unzipError = '';

    // Analysis results will be placed in this array
    private $results = [];
}