<?php
/**
 * @file
 * User preference: presents user name
 */

namespace CL\Course\Preferences;

use CL\Site\Site;
use CL\Users\User;
use CL\Users\Preference;

/**
 * User preference: presents member semester
 */
class PreferenceSemester extends Preference {
	/// Tag associated with this preference
	const TAG = 'course-semester';

	/**
	 * PreferenceName constructor.
	 */
	public function __construct() {
		parent::__construct(self::TAG,  'Semester');
		$this->setReadOnly();
	}


	/**
	 * Generate data suitable for sending to About Me page
	 * @param Site $site The site object
	 * @param User $user The current user
	 * @return array Data suitable for sending to the client
	 */
	public function data(Site $site, User $user) {
		$data = parent::data($site, $user);

		if($user->member !== null) {
			$data['value'] = $user->member->semester;
		}

		return $data;
	}
}