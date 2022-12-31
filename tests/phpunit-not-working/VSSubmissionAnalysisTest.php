<?php
/** @file
 * Unit tests for the class VSSubmissionAnalysis
 * @cond 
 */
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

require_once 'cls\DummyMembers.php';

use CL\Course\Submission\Submission;
use CL\Course\Assignment;
use CL\Course\Test\DummyMember;
use CL\Course\Member;
use CL\Course\Analysis\Analyzer;
use CL\Course\Analysis\AnalysisException;
use CL\Course\Analysis\VSSubmissionAnalysis;

class VSSubmissionAnalysisTest extends CourseTestBase {

	public function test_analyze() {
		$site = $this->createSite();
		$submission = $this->create_submission();
		$analyzer = $this->create_analyzer($submission, "/data/submit.zip");

		$analysis = new VSSubmissionAnalysis();

		try {
			$analysis->analyze($site, $analyzer);
		} catch(AnalysisException $ex) {
			$this->fail($ex->getMessage());
		} finally {
			$analyzer->close();
		}
	}

	public function test_analyze_bad() {
		$site = $this->createSite();
		$submission = $this->create_submission();

		$bads = array("/data/submit-bad.zip", "/data/submit-nosolution.zip", "/data/Step1.sln");

		foreach($bads as $bad) {
			$analyzer = $this->create_analyzer($submission, $bad);

			$analysis = new VSSubmissionAnalysis();
			$fail = false;

			try {
				$analysis->analyze($site, $analyzer);
			} catch(AnalysisException $ex) {
				$fail = true;
			} finally {
				$analyzer->close();
			}

			$this->assertTrue($fail);
		}

	}

	public function test_testPath() {
		$analysis = new VSSubmissionAnalysis();

		$good = array(
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Doxyfile.doxy',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\Animal.cpp',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\Animal.h',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\Farm.h',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\ReadMe.txt',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\stdafx.cpp',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\stdafx.h',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\Step1.cpp',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\Step1.vcxproj',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\Step1.vcxproj.filters',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1\targetver.h',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1.sln',
			'/Users/cbowen/AppData/Local/Temp/anal777503244/unzip/Step1/Step1/targetver.h',
			'/Users/cbowen/AppData/Local/Temp/anal777503244/unzip/Step1/Step1.sln',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Step1.v12.suo');

		foreach($good as $g) {
			$this->assertTrue($analysis->testPath($g));
		}

		$bad = array(
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\test.db',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\zip',
			'C:\Users\cbowen\AppData\Local\Temp\anal777503244\unzip\Step1\Debug',
			'/Users/cbowen/AppData/Local/Temp/anal777503244/unzip/Step1/zip',
			'/Users/cbowen/AppData/Local/Temp/anal777503244/unzip/Step1/Debug'

		);

		foreach($bad as $b) {
			$this->assertFalse($analysis->testPath($b));
		}

	}

	private function create_analyzer(Submission $submission, $file) {
		$dummy = new DummyMember();
		$user = $dummy->create(887, 14, Member::STUDENT);

		$path = __DIR__ . $file;

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
