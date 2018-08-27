<?php
/**
 * @file
 * Plugin class for the Course Subsystem
 */

namespace CL\Course;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Course\System\CourseTables;
use CL\Course\Api\ApiCourse;
use CL\Users\User;
use CL\Console\ConsoleView;
use CL\Course\System\SectionSelectorView;
use CL\Site\Router;
use CL\Course\Submission\SubmissionDownloadView;
use CL\Course\Submission\SubmissionImageView;
use CL\Course\ErrorHelp\ErrorHelpRouter;

/**
 * Plugin class for the Course Subsystem
 */
class CoursePlugin extends Course {
	/**
	 * Install the plugin
	 * @param Site $site The Site configuration object
	 */
	public function install(Site $site) {
		parent::install($site);

		$site->addStartup(function(Site $site, Server $server, $time) {
			return $this->startup($site, $server, $time);
		});
	}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the select selector page
	 * and for the course API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;
			$router->addRoute(['sectionselector'], function (Site $site, Server $server, array $params, array $properties, $time) {
				$view = new SectionSelectorView($site);
				return $view->vue();
			});

			$router->addRoute(['calendar'], function (Site $site, Server $server, array $params, array $properties, $time) {
				$view = new PersonalCalendarView($site);
				return $view->whole();
			});

			$router->addRoute(['submission', 'download', ':id'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new SubmissionDownloadView($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['submission', 'view', ':id'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new SubmissionImageView($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['errorhelp'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new ErrorHelpRouter($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['errorhelp', ':assign'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new ErrorHelpRouter($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['errorhelp', ':assign', ':tag'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new ErrorHelpRouter($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['aboutme'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new AboutMeView($site, $server);
				return $view->vue();
			});

			$router->addRoute(['ide'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new Ide\IdeConnectedView($site, $server);
				return $view->whole();
			});

			$router->addRoute(['api', 'course', '*'], function (Site $site, Server $server, array $params, array $properties, $time) {
				$resource = new ApiCourse();
				return $resource->apiDispatch($site, $server, $params, $properties, $time);
			});
		} else if($object instanceof ConsoleView) {
			$consoleView = $object;
			$consoleView->addCSS('vendor/cl/course/course.css');
			$consoleView->addJS('course');
			$consoleView->addJS('courseconsole');

			$site = $consoleView->site;
			$course = $site->course;
			$data = $course->data();


			$user = $site->users->user;
			$sections = [];
			if ($user->atLeast(User::ADMIN)) {
				// Admins see all sections
				foreach ($course->sections as $section) {
					$sections[] = $section->data();
				}
			} else {
				$members = new Members($site->db);
				$memberships = $members->getByUser($user->id);
				foreach ($memberships as $membership) {
					$section = $course->get_section($membership->semester, $membership->sectionId);
					if ($section !== null) {
						$sections[] = $section->data();
					}
				}
			}

			$data['sections'] = $sections;

			$json = json_encode($data);
			$consoleView->addJSON('cl-course', $json);

			//
			// Get course staff
			//
			$members = new Members($this->site->db);
			$staff = $members->query([
				'semester'=>$user->member->semester,
				'section'=>$user->member->sectionId,
				'atLeast'=>Member::STAFF
			]);

			$staffData = [];
			foreach($staff as $member) {
				$staffData[] = $member->data();
			}

			$consoleView->addJSON('cl-course-staff', json_encode($staffData));
		}
	}

	private function startup(Site $site, Server $server, $time) {
		// Get and configure the course object
		$course = $site->course;

		$installer = $site->rootDir . '/course/course.inc.php';
		if(file_exists($installer)) {
			$function = require($installer);
			$function($course);
		}

		//
		// Load the user's section membership
		//
		$redirect = null;

		$user = $site->users->user;
		if($user !== null) {
			// We have a logged in user
			// See if we can determine the course membership
			// for this user.
			if($user->member !== null) {
				// Membership has already been set, we are good
				return null;
			}

			$members = new Members($site->db);

			if(isset($user->dataJWT[Member::JWT_ID])) {
				// We know the membership from JWT
				$memberId = $user->dataJWT[Member::JWT_ID];
				if($memberId === 0 &&
					isset($user->dataJWT[Member::JWT_SEMESTER]) &&
					isset($user->dataJWT[Member::JWT_SECTION])) {
					// Special case, manual membership
					$member = new Member(['id'=>0,
						'userid'=>0,
						'semester'=>$user->dataJWT[Member::JWT_SEMESTER],
						'section'=>$user->dataJWT[Member::JWT_SECTION],
						'role'=>$user->role,
						'created'=>$time]);

					$user->member = $member;
					return null;
				} else {
					$member = $members->get($memberId);
					if($member !== null) {
						$user->member = $member;
						return null;
					} else {
						// The data is invalid. This can happen
						// if a student is removed from a section
						$redirect = $site->root . '/cl/notauthorized';
					}
				}
			} else {
				// We do not know the membership. But, if there
				// is only one option, use it.
				$memberships = $members->getByUser($user->id);
				if($user->atLeast(User::ADMIN) && count($course->sections) > 1) {
					// Admins are allowed to log into any section on
					// the system, even if they are not a member.
					$redirect = $site->root . '/cl/sectionselector?u=' .
						urlencode($server->server['REQUEST_URI']);
				} else {
					switch(count($memberships)) {
						case 0:
							// If a user is not indicated as being in
							// any sections, we put them into the
							// one section as a guest or route to the section selector.
							if(count($course->sections) === 1) {
								$member = new Member();
								$member->role = Member::GUEST;
								$member->userId = $user->userId;
								$member->semester = $course->sections[0]->semester;
								$member->sectionId = $course->sections[0]->id;
								$user->member = $member;
							} else {
								$redirect = $site->root . '/cl/sectionselector?u=' .
									urlencode($server->server['REQUEST_URI']);
							}

//							$redirect = $site->root . '/cl/notauthorized';
							break;

						case 1:
							$user->member = $memberships[0];
							return null;

						default:
							$redirect = $site->root . '/cl/sectionselector?u=' .
								urlencode($server->server['REQUEST_URI']);
							break;
					}
				}

			}

			// If this is an open page, we require no active membership
			if(in_array('open', $site->options) ||
				in_array('open-section', $site->options)) {
				return null;
			}

			return $redirect;
		}

		return null;
	}


	/**
	 * Ensure tables exist for the course subsystem.
	 * @param Site $site The site configuration component
	 */
	public function ensureTables(Site $site) {
		$maker = new CourseTables($site->db);
		$maker->create(false);
	}

}