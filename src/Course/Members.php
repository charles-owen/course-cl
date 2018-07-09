<?php
/**
 * @file
 * Table class for course membership
 */

namespace CL\Course;

use CL\Users\User;
use CL\Users\Users;

/**
 * Table class for course membership
 */
class Members extends \CL\Tables\Table {

	/**
	 * Members constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 */
	function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "member");
	}

	/**
	 * Get all members with options
	 */
	public function query($params = []) {
		$usersTable = new Users($this->config);

		$where = new \CL\Tables\TableWhere($this);

		if(isset($params['id'])) {
			$where->append('member.id=?', $params['id'], \PDO::PARAM_INT);
		}

		if(isset($params['userId'])) {
			$where->append('user.id=?', $params['userId']);
		}

		if(isset($params['email'])) {
			$where->append('user.email=?', $params['email']);
		}

		if(isset($params['semester'])) {
			$where->append('member.semester=?', $params['semester']);
		}

		if(isset($params['section'])) {
			$where->append('member.section=?', $params['section']);
		}

		$sql = <<<SQL
select user.id as user_id, user.user as user_user, user.email as user_email,
user.name as user_name, user.role as user_role, user.extra as user_extra, 
user.created as user_created, member.id as id, member.userid as userid, member.semester as semester,
member.section as section, member.role as role, member.created as created
from $this->tablename member
join $usersTable->tablename user
on member.userid = user.id
$where->where
order by `name`, id
SQL;

		if(isset($params['limit'])) {
			$sql .= "\nlimit ?";
			$where->append(null, intval($params['limit']), \PDO::PARAM_INT);
		}

		//echo $where->sub_sql($sql);
		$result = $where->execute($sql);
		$users = [];
		foreach($result->fetchAll(\PDO::FETCH_ASSOC) as $row) {
			$user = new User($row);
			$member = new Member($row);
			$user->member = $member;
			$users[] = $user;
		}

		return $users;
	}


	/**
	 * Add a course membership to the table.
	 * @param Member $member
	 * @param null $time
	 * @return bool
	 */
	function add(Member $member, $time) {

		$sql = <<<SQL
insert into $this->tablename(userid, semester, section, role, created)
values(?, ?, ?, ?, ?)
SQL;

		$pdo = $this->pdo;
		$pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$stmt = $pdo->prepare($sql);
		try {
			if($stmt->execute([$member->userId, $member->semester,
					$member->sectionId, $member->role, $this->timeStr($time)]) === false) {
				return ['ok'=>false];
			}
		} catch(\PDOException $exception) {
			return ['ok'=>false];
		}

		$id = $pdo->lastInsertId();
		$member->id = $id;
		return ['ok'=>true, 'id'=> $id];
	}

	/**
	 * Add a member to the system, including creating the user if necessary
	 * @param $params Array with keys: user, name, email, semester, section, role
	 * @return ['ok'=>true, 'member'=>Member] if successful,
	 *         ['ok'=>false, 'msg'=>Error Message] if failure
	 */
	function addComplete($params, $time) {
		//
		// Does this user already exist?
		//
		$usersTable = new Users($this->config);
		$memberUser = null;

		$users = $usersTable->query(['userId'=>$params['user']]);
		if(count($users) > 0) {
			$memberUser = $users[0];
		} else {
			// Try by email
			$users = $usersTable->query(['email'=>$params['email']]);
			if(count($users) > 0) {
				$memberUser = $users[0];
			}
		}

		if($memberUser === null) {
			// User does not exist, we will have to create one
			$userData = [
				'user'=>$params['user'],
				'name'=>$params['name'],
				'email'=>$params['email'],
				'role'=>User::USER
			];

			$memberUser = new User($userData);
			$usersTable->add($memberUser, $time);
		}

		// Ensure membership does not already exist
		$results = $this->query([
			'userId'=>$memberUser->id,
			'semester'=>$params['semester'],
			'sectionId'=>$params['section']
		]);

		if(count($results) > 0) {
			return ['ok'=>false, 'msg'=>'User is already a member of this course'];
		}

		// Create the membership
		$memberData = [
			'id'=>0,
			'userid'=>$memberUser->id,
			'semester'=>$params['semester'],
			'section'=>$params['section'],
			'role'=>$params['role'],
			'created'=>0
		];

		$member = new Member($memberData);
		$memberUser->member = $member;
		$this->add($member, $time);

		return ['ok'=>true, 'member'=>$memberUser];
	}

	/**
	 * Update a member in the table.
	 * Only the semester, section, and role can be changed.
	 * @param Member $member
	 * @param $time
	 * @return Member|false
	 */
	function update(Member $member, $time) {
		$sql = <<<SQL
update $this->tablename
set semester=?, section=?, role=?
where id=?
SQL;

		$pdo = $this->pdo;
		$pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$stmt = $pdo->prepare($sql);
		try {
			if($stmt->execute([$member->semester, $member->sectionId,
					$member->role, $member->id]) === false) {
				return false;
			}
		} catch(\PDOException $exception) {
			return false;
		}

		return $member;
	}

	function updateRole($memberId, $role) {
		$sql = <<<SQL
update $this->tablename
set role=?
where id=?
SQL;

		$pdo = $this->pdo;
		$pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$stmt = $pdo->prepare($sql);
		try {
			if($stmt->execute([$role, $memberId]) === false) {
				return false;
			}
		} catch(\PDOException $exception) {
			return false;
		}

		return true;
	}

	/**
	 * Delete a member in the table.
	 * @param Member $member
	 * @return bool
	 */
	function delete($memberId) {
		$sql = <<<SQL
delete from $this->tablename
where id=?
SQL;

		$pdo = $this->pdo;
		$pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$stmt = $pdo->prepare($sql);
		try {
			if($stmt->execute([$memberId]) === false) {
				return false;
			}
		} catch(\PDOException $exception) {
			return false;
		}

		return true;
	}

	/**
	 * Get a member (just the Member part)
	 * @param $id
	 * @return Member|null
	 */
	function get($id) {

		$sql = <<<SQL
select * from $this->tablename
where id=?
SQL;

		$stmt = $this->config->pdo->prepare($sql);
		try {
			if($stmt->execute([$id]) === false) {
				return null;
			}
		} catch(\PDOException $exception) {
			return null;
		}

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row === false) {
			return null;
		}

		return new Member($row);
	}

	/**
	 * Get a member as a User object
	 * @param $id
	 * @return User|null
	 */
	function getAsUser($id) {
		$usersTable = new Users($this->config);

		$sql = <<<SQL
select user.id as user_id, user.user as user_user, user.email as user_email,
user.name as user_name, user.role as user_role, user.extra as user_extra, 
user.created as user_created, member.id as id, member.userid as userid, member.semester as semester,
member.section as section, member.role as role, member.created as created
from $this->tablename member
join $usersTable->tablename user
on member.userid = user.id
where member.id=?
SQL;

		$stmt = $this->config->pdo->prepare($sql);
		try {
			if($stmt->execute([$id]) === false) {
				return null;
			}
		} catch(\PDOException $exception) {
			return null;
		}

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row === false) {
			return null;
		}

		$user = new User($row);
		$member = new Member($row);
		$user->member = $member;
		return $user;
	}

	function getBySection($userId, $semester, $sectionId) {
		$sql = <<<SQL
select * from $this->tablename
where userid=? and semester=? and section=?
SQL;

		$stmt = $this->config->pdo->prepare($sql);
		try {
			if($stmt->execute([$userId, $semester, $sectionId]) === false) {
				return null;
			}
		} catch(\PDOException $exception) {
			return null;
		}

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row === false) {
			return null;
		}

		return new Member($row);
	}


	function getByUser($userId) {
		$sql = <<<SQL
select * from $this->tablename
where userid=?
SQL;

		$stmt = $this->config->pdo->prepare($sql);
		try {
			if($stmt->execute([$userId]) === false) {
				return null;
			}
		} catch(\PDOException $exception) {
			return null;
		}

		$memberships = [];
		$rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		if($rows === false) {
			return [];

		}
		foreach($rows as $row) {
			$memberships[] = new Member($row);
		}

		return $memberships;
	}

	function createSQL() {
		return <<<SQL
CREATE TABLE if not exists $this->tablename (
  id       int(11) NOT NULL AUTO_INCREMENT, 
  userid   int(11) NOT NULL, 
  semester char(4) NOT NULL, 
  section  char(3) NOT NULL, 
  role     char(1) NOT NULL, 
  created  datetime NOT NULL, 
  PRIMARY KEY (id), 
  INDEX (semester), 
  INDEX (section), 
  INDEX (role));
SQL;

	}
}