<?php
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

use CL\Course\Handbook;

/**
 * \cond
 * Unit tests for the class Handbook
 */
class HandbookTest extends CourseTestBase
{
	public function test() {
		$this->createSite();

		$section1 = $this->course->get_section('FS18', '799');
		$section2 = $this->course->get_section('SS19', '899');

		// handbook.fs18.799.php
		$handbook1 = Handbook::get($section1);

		// handbook.inc.php
		$handbook2 = Handbook::get($section2);

		$this->assertEquals("Handbook 1", $handbook1->title);
		$this->assertEquals("Handbook 2", $handbook2->title);

		//$this->assertEquals($expected, $actual);
	}
}

/// \endcond
