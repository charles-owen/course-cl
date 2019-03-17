<?php
/**
 * @file
 * Class for analysis of submissions using Doxygen
 */

namespace CL\Course\Analysis;

use CL\Site\Site;

/**
 * Class for analysis of submissions using Doxygen
 *
 * This looks in the site root/doxygen for a file Doxyfile.doxy
 * that is the Doxygen configuration.
 *
 * @cond
 * @property string config
 * @endcond
 */
class DoxygenAnalysis extends Analysis {
    /// Tag for this analysis component
    const TAG = 'doxygen';

    /**
     * Property get magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * config | string | Path to doxygen config file, default is 'doxygen/Doxyfile.doxy'
     *
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
        switch($property) {
	        case 'config':
	        	return $this->config;

            default:
                return parent::__get($property);
        }
    }

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * config | string | Path to doxygen config file, default is 'doxygen/Doxyfile.doxy'
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'config':
				$this->config = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}


	/**
	 * Perform a Doxygen analysis
	 * @param Site $site The site object
	 * @param Analyzer $analyzer The analyzer for a submission
	 * @return void
	 * @throws AnalysisException If unable to unzip the solution or execute Doxygen
	 */
    public function analyze(Site $site, Analyzer $analyzer) {
        // Get the unzipped version of the project
        $dir = $analyzer->get_unzipped_dir($site);
        if($dir === null) {
            throw new AnalysisException("Unable to unzip solution");
        }

        // Find Doxyfile.doxy for this course
        // Future option: specify the settings file
        $doxyfile = $site->rootDir . DIRECTORY_SEPARATOR . $this->config;
		if(!file_exists($doxyfile)) {
			throw new AnalysisException('Doxygen configuration file does not exist');
		}

		$quote = '"';
		$exec = "doxygen";

        chdir($dir);
		//echo "<p>" . "doxygen $quote" . $doxyfile . "$quote 2>&1" . "</p>";
        exec("$exec $quote" . $doxyfile . "$quote 2>&1", $result, $ret);

        if($ret > 0) {
			throw new AnalysisException("Unable to execute doxygen");
        }

        /*
         * warning: ignoring unsupported tag `TOC_INCLUDE_HEADINGS   =' at line 313, file /var/www/cbowen/cse335/doxygen/Doxyfile.doxy
warning: ignoring unsupported tag `PLANTUML_CFG_FILE      =' at line 2425, file /var/www/cbowen/cse335/doxygen/Doxyfile.doxy
*** end of doxygen analysis ***
         */

        $str = '';
        $dir1 = str_replace('\\', '/', $dir);
        foreach($result as $line) {
        	if(strpos($line, 'warning: ignoring unsupported tag') !== false) {
        		continue;
	        }

            $str .= str_replace($dir1, '', $line) . "\n";
        }
		$str .= "*** end of doxygen analysis ***\n";

        $analyzer->add_result(self::TAG, $str);
    }

    /**
     * Get information about the analysis component
     * @return mixed Array with key 'name'
     */
    public function info(Site $site) {
        $root = $site->root;
        return ['tag' => self::TAG,
	        'menu' => 'doxygen analysis',
            'icon' => "$root/vendor/cl/course/img/doxygen16.png"];
    }

    /**
     * Present analysis for the user
     * @param array $analysis The analysis array as stored with the submission
     * @return string HTML
     */
    public function present(array $analysis) {
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

    private $config = 'doxygen/Doxyfile.doxy';
}