<?php
/**
 * @file
 * Custom installation class for the users package
 */

namespace CL\Course\Install;

/**
 * Custom installation class for the course package
 */
class CoursePackage extends \CL\Site\Install\Package {
	/**
	 * Allow local version of the installer to do custom configurations.
	 * @param string $rootDir Path to the root directory of the site.
	 */
	public function custom($rootDir) {
		$this->installImg($rootDir);
	}

	/**
	 * Copy files into /cl/img
	 * @param string $rootDir Site root directory
	 */
	private function installImg($rootDir) {
		$img = $rootDir . '/cl/img';

		if (!file_exists($img)) {
			mkdir($img);
		}

		// Copy files into cl/img directory
		$courseImg = $rootDir . '/vendor/cl/course/img';
		foreach(scandir($courseImg) as $file) {
			if(is_file($courseImg . '/' . $file)) {
				if(!file_exists($img . '/' . $file)) {
					copy($courseImg . '/' . $file, $img . '/' . $file);
				}
			}
		}
	}
}