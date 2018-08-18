<?php
/** @file
 * Unit tests for the class AssignmentView
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseTestBase.php';

use CL\Course\AssignmentView;
use CL\Course\Member;
use CL\Site\Test\ServerMock;
use CL\Course\Test\DummyMember;


class AssignmentViewTest extends CourseTestBase {

	public function test_valid_assignment() {
		$this->assertTrue(true);
		$site = $this->createSite();

		// We must have an installed course member to start the system.
		$dummy = new DummyMember();
		$member22 = $dummy->create(12, 22, Member::STUDENT);
		$site->users->user = $member22;

		$time = strtotime('8/29/2018 1:00am');

		$server = new ServerMock();

		$view = new AssignmentView($site, 'step1', $server, $time);
		$view->flush();
		$this->assertNull($server->redirected);
		$this->assertEquals('Step 1', $view->title);
	}

//	public function test_redirects() {
//		$site = $this->createSite();
//
//		// We must have an installed cours member to start the system.
//		$dummy = new DummyMember();
//		$member22 = $dummy->create(12, 22, Member::STUDENT);
//		$site->users->user = $member22;
//
//		// Redirects due to bad assignment
//		$server = new ServerMock();
//		$view = new AssignmentView($site, 'badassignment', $server);
//		$this->assertEquals('/', $server->redirected);
//	}
}

/// @endcond
