<?php
/**
 * @file
 * Class for analysis of submissions using Doxygen
 */

namespace CL\Course\Analysis;

/**
 * Class for analysis of submissions using Doxygen
 *
 * This looks in the site root/doxygen for a file Doxyfile.doxy
 * that is the Doxygen configuration.
 */
class DoxygenAnalysis extends Analysis {
    /// Tag for this analysis component
    const TAG = 'doxygen';

	/**
	 * Perform a Doxygen analysis
	 * @param Analyzer $analyzer The analyzer for a submission
	 * @throws Exception If unable to unzip the solution or execute Doxygen
	 */
    public function analyze(Analyzer $analyzer) {
        // Get the unzipped version of the project
        $dir = $analyzer->get_unzipped_dir();
        if($dir === null) {
            throw new \Exception("Unable to unzip solution");
        }

        // Find Doxyfile.doxy for this course
        // Future option: specify the settings file
        $course = $analyzer->get_submission()->get_assignment()->get_course();
        $rootdir = $course->get_rootdir();
        $doxyfile = $rootdir . DIRECTORY_SEPARATOR . 'doxygen' . DIRECTORY_SEPARATOR . 'Doxyfile.doxy';
				
		$sys = strtoupper(PHP_OS);
		if(substr($sys,0,3) === "WIN") {
			$quote = '"';
			$exec = "doxygen";
		} else {
			$quote = "'";
			$exec = "/user/cbowen/doxygen/doxygen-1.8.11/bin/doxygen";
			//$exec = "doxygen";
		}

        chdir($dir);
		//echo "<p>" . "doxygen $quote" . $doxyfile . "$quote 2>&1" . "</p>";
        exec("$exec $quote" . $doxyfile . "$quote 2>&1", $result, $ret);

        if($ret > 0) {
			foreach($result as $line) {
				echo "$line<br/>";
			}
			throw new \Exception("Unable to execute doxygen");
        }

        $str = '';
        $dir1 = str_replace('\\', '/', $dir);
        foreach($result as $line) {
            $str .= str_replace($dir1, '', $line) . "\n";
        }
		$str .= "*** end of doxygen analysis ***\n";

        $analyzer->add_result(self::TAG, $str);
    }

    /**
     * @brief Get information about the analysis component
     * @return mixed Array with key 'name'
     */
    public function info(\Course $course) {
        $libroot = $course->get_libroot();
        return array('name' => 'doxygen', 'menu' => 'doxygen analysis',
            'icon' => "$libroot/images/doxygen16.png");
    }

    /**
     * @brief Present analysis for the user
     * @param $analysis The analysis array as stored with the submission
     * @return string HTML
     */
    public function present($analysis) {
        if(!isset($analysis['doxygen'])) {
            return '<p class="center">Not available</p>';
        }

        $html = '<p class="center"><strong>Doxygen results</strong></p>';

        $doxygen = $analysis['doxygen'];
        $result = '';
        foreach(explode("\n", $doxygen) as $line) {
            if(strpos($line, "ignoring unsupported tag")) {
                continue;
            }

            if(strlen($result) > 0) {
                $result .= "\n";
            }
            $result .= $line;
        }
        $html .= '<pre class="code">' . $result . '</pre>';

        return $html;
    }
}