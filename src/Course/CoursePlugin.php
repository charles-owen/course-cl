<?php
/**
 * @file
 * Factory class for the LTI system
 */

namespace CL\Course;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Course\System\CourseConfig;
use CL\Course\System\CourseTables;
use CL\Course\Api\ApiCourse;
use CL\Users\User;
use CL\Console\ConsoleView;

class CoursePlugin extends \CL\Site\Components\Plugin {
	public function install(Site $site) {
		$site->install("course", new CourseConfig());

		$site->addPreStartup(function(Site $site, Server $server, $time) {
			return $this->preStartup($site, $server, $time);
		});

		$site->addStartup(function(Site $site, Server $server, $time) {
			return $this->startup($site, $server, $time);
		}, 200);

		$site->addPostStartup(function(Site $site, Server $server, $time) {
			return $this->postStartup($site, $server, $time);
		});

		$site->addApi('course', function(Site $site, Server $server, array $params, $time) {
			$resource = new ApiCourse();
			return $resource->dispatch($site, $server, $params, $time);
		});
	}

	/**
	 * Called before we start up.
	 * @param Site $site
	 * @param Server $server
	 * @param int $time Current time
	 * @return null|string redirect page.
	 */
	public function preStartup(Site $site, Server $server, $time)
	{
		// Ensure tables exist
		$members = new Members($site->db);
		if (!$members->exists()) {
			$maker = new CourseTables($site->db);
			$maker->create(false);
		}
	}

	public function startup(Site $site, Server $server, $time) {
		// Create the course object
		$course = new Course();

		$installer = $site->rootDir . '/course/course.inc.php';
		if(file_exists($installer)) {
			$function = require($installer);
			$function($course);
		}

		// Set it in the configuration
		$site->course->course = $course;

		//
		// Load the user section membership
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
						$redirect = $site->root . '/cl/site/notauthorized.php';
					}
				}
			} else {
				// We do not know the membership. But, if there
				// is only one option, use it.
				$memberships = $members->getByUser($user->id);
				if($user->atLeast(User::ADMIN) && count($course->sections) > 1) {
					// Admins are allowed to log into any section on
					// the system, even if they are not a member.
					$redirect = $site->root . '/cl/course/sectionselector?u=' .
						urlencode($server->server['REQUEST_URI']);
				} else {
					switch(count($memberships)) {
						case 0:
							$redirect = $site->root . '/cl/site/notauthorized.php';
							break;

						case 1:
							$user->member = $memberships[0];
							return null;

						default:
							$redirect = $site->root . '/cl/course/sectionselector?u=' .
								urlencode($server->server['REQUEST_URI']);
							break;
					}
				}

			}

			// If this is an open page, we allow no active membership
			if(in_array('open', $site->options) ||
				in_array('open-section', $site->options)) {
				return null;
			}

			return $redirect;
		}

		return null;
	}

	/**
	 * System is started, perform any validation required
	 * @param Site $site
	 * @param Server $server
	 * @param int $time Current time
	 * @return null|string redirect page.
	 */
	private function postStartup(Site $site, Server $server, $time) {
		//
		// Install in the control panel
		//
		$site->console->addPlugin('course', []);
		$site->console->addPlugin('courseconsole', ['course', 'usersconsole']);

		$site->console->addClosure(function(ConsoleView $consoleView) {
			$site = $consoleView->site;
			$course = $site->course->course;
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
					$section = $course->getSection($membership->semester, $membership->sectionId);
					if ($section !== null) {
						$sections[] = $section->data();
					}
				}
			}

			$data['sections'] = $sections;

			$json = json_encode($data);

			$consoleView->script = <<<SCRIPT
Course.course = $json;
SCRIPT;

		});

		return null;
	}
}