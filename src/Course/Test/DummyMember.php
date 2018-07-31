<?php
/**
 * @file
 * Class to create dummy course members for testing
 */
namespace CL\Course\Test;

use CL\Users\User;
use CL\Course\Member;

/**
 * Class to create dummy course members for testing
 */
class DummyMember {
	/**
	 * DummyMember constructor.
	 * @param int $time Creation time for dummy user.
	 */
	public function __construct($time = null) {
		$this->time = $time !== null ? $time : time();
	}

	/**
	 * Create a dummy course member.
	 * @param int $userId Internal user ID to use
	 * @param int $memberId Internal member ID to use
	 * @param string $role User's role
	 * @return User
	 */
	public function create($userId, $memberId, $role) {
		$user = new User(['id'=>$userId]);
		$member = new Member(['id'=>$memberId,
			'userid'=>null,
			'semester'=>$this->semester,
			'section'=>$this->section,
			'created'=>$this->time,
			'role'=>$role]);
		$user->member = $member;

		return $user;
	}

	/// Semester to use
	public $semester = 'FS18';

	/// Secton to use
	public $section = '799';

	/// Time to use for 'created'
	public $time;
}