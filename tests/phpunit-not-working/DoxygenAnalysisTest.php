<?php
/** @file
 * @Unit tests for the class DoxygenAnalysis
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
use CL\Course\Analysis\DoxygenAnalysis;

class DoxygenAnalysisTest extends CourseTestBase {

	public function test_analyze() {
		$site = $this->createSite();
		$submission = $this->create_submission();
		$analyzer = $this->create_analyzer($submission, '/data/submit.zip');

		$analysis = new DoxygenAnalysis();

		try {
			$analysis->analyze($site, $analyzer);

			$result = $analyzer->get_result(DoxygenAnalysis::TAG);

			$this->assertContains("warning: Compound CCow is not documented.", $result);
			$this->assertContains("warning: argument 'cow' of command @param is not found in the argument list of CFarm::AddAnimal(CAnimal *animal)",
				$result);

		} catch(AnalysisException $ex) {
			$this->fail($ex->getMessage());
		} finally {
			$analyzer->close();
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
