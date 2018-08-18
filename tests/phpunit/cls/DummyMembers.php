<?php

use CL\Users\User;
use CL\Course\Member;

/**
 * Class to create dummy course members for testing
 */
class DummyMembers {
	public function __construct($time = null) {
		$this->time = $time !== null ? $time : time();
	}

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

	public $semester = 'FS18';
	public $section = '799';
	public $time;
}