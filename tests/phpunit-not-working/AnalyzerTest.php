<?php
/** @file
 * Unit tests for the class Analyzer
 * @cond 
 */
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

require_once 'cls\DummyMembers.php';

use CL\Course\Assignment;
use CL\Course\Test\DummyMember;
use CL\Course\Member;
use CL\Course\Analysis\Analyzer;


class AnalyzerTest extends CourseTestBase {

	public function test_construct() {
		$submission = $this->create_submission();
		$dummy = new DummyMember();
		$user = $dummy->create(887, 14, Member::STUDENT);

		$path = __DIR__ . '/data/submit.zip';

		$analyzer = new Analyzer($submission, $path);
		$this->assertInstanceOf('CL\Course\Analysis\Analyzer', $analyzer);
	}

	public function test_get_temp_dir() {

		$analyzer = $this->create_analyzer();
		$dir = $analyzer->get_temp_dir();

		$this->assertTrue(file_exists($dir));

		$analyzer->close();
		$this->assertFalse(file_exists($dir));
	}

	public function test_get_unzipped_dir() {
		$site = $this->createSite();

		$analyzer = $this->create_analyzer();
		$dir = $analyzer->get_unzipped_dir($site);

		$this->assertTrue(file_exists($dir . '/Step1'));
		$this->assertTrue(file_exists($dir . '/Step1/Step1.sln'));

		$analyzer->close();
		$this->assertFalse(file_exists($dir . '/Step1'));
		$this->assertFalse(file_exists($dir . '/Step1/Step1.sln'));
	}

	private function create_analyzer() {
		$submission = $this->create_submission();
		$dummy = new DummyMember();
		$user = $dummy->create(887, 14, Member::STUDENT);

		$path = __DIR__ . '/data/submit.zip';

		$analyzer = new Analyzer($submission, $path);
		return $analyzer;
	}

	private function create_submission() {

		$assignment = new Assignment('assigntag', 'categories name');

		$submissions = $assignment->submissions;
		$submission = $submissions->add_program('submission', 'submission name');

		return $submission;
	}
}

/// @endcond
