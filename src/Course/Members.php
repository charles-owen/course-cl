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
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "member");
	}

	/**
	 * Create an SQL create table command for the members table
	 * @return string SQL
	 */
	public function createSQL() {
		return <<<SQL
CREATE TABLE if not exists $this->tablename (
  id       int(11) NOT NULL AUTO_INCREMENT, 
  userid   int(11) NOT NULL, 
  semester char(4) NOT NULL, 
  section  char(3) NOT NULL, 
  role     char(1) NOT NULL, 
  metadata mediumtext, 
  created  datetime NOT NULL, 
  PRIMARY KEY (id), 
  INDEX (semester), 
  INDEX (section), 
  INDEX (role));
SQL;

	}

	/**
	 * Get members with options
	 *
	 * Notice: Does not load the user metadata by default. Add 'metadata'=>true to the parameter to
	 * also load metadata.
	 */
	public function query($params = []) {
		$order = '`name`, user.id';

		$where = new \CL\Tables\TableWhere($this);

		if(isset($params['id'])) {
			$where->append('member.id=?', $params['id'], \PDO::PARAM_INT);
		}

		if(isset($params['userUser'])) {
			$where->append('user.user=?', $params['userUser']);
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

		if(isset($params['sectionId'])) {
			$where->append('member.section=?', $params['sectionId']);
		}

		if(isset($params['atLeast'])) {
			$roles = Member::getRoles_();
			if(!isset($roles[$params['atLeast']])) {
				return [];
			}

			$atLeastPriority = $roles[$params['atLeast']]['priority'];
			$list = '';
			foreach($roles as $code => $role) {
				if($role['priority'] >= $atLeastPriority) {
					if($list !== '') {
						$list .= ',';
					}

					$list .= '?';
					$where->appendExec($code);
				}
			}

			$where->append("member.role in ($list)");
		}

		if(!empty($params['after'])) {
			$where->nest();
			$where->append('name > ?', $params['after']['name'], \PDO::PARAM_STR);
			$where->nest('or');
			$where->append('name = ?', $params['after']['name'], \PDO::PARAM_STR, 'or');
			$where->append('user.id > ?', $params['after']['userId'], \PDO::PARAM_INT, 'and');
			$where->unnest();
			$where->unnest();
		}

		if(!empty($params['before'])) {
			$where->nest();
			$where->append('name < ?', $params['before']['name'], \PDO::PARAM_STR);
			$where->nest('or');
			$where->append('name = ?', $params['before']['name'], \PDO::PARAM_STR, 'or');
			$where->append('user.id < ?', $params['before']['userId'], \PDO::PARAM_INT, 'and');
			$where->unnest();
			$where->unnest();

			$order = '`name` desc, user.id desc';
		}

		if(isset($params['search'])) {
			$any = false;
			$split = preg_split('/[\s,\.]/', $params['search']);

			if(count($split) === 1) {
				$split0 = $split[0];

				$where->nest();
				$where->append('user.user like ?', "%$split0%", \PDO::PARAM_STR, 'or');
				$where->append('user.name like ?', "%$split0%", \PDO::PARAM_STR, 'or');
				$where->unnest();

				$any = true;
			} else {
				// Multiple substring can match names only
				foreach($split as $like) {
					if(strlen($like) > 0) {
						$any = true;
						$where->append('user.name like ?', "%$like%");
					}
				}
			}


			if(!$any) {
				return [];
			}
		}

		$includeMeta = isset($params['metadata']) && $params['metadata'];
		$sql = $this->memberUserJoinSQL(null, $includeMeta);

		$sql .= <<<SQL
$where->where
order by $order
SQL;

		if(isset($params['limit'])) {
			$sql .= "\nlimit ?";
			$where->append(null, intval($params['limit']), \PDO::PARAM_INT);
		}

		if(isset($params['offset'])) {
			$sql .= "\noffset ?";
			$where->append(null, intval($params['offset']), \PDO::PARAM_INT);
		}

		// echo $where->sub_sql($sql);
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
	 * Construct the SQL for a join of the user and member tables, including all
	 * content needed to create the User and Member objects.
	 * @param string $additional Additional fields to select
	 * @param bool $includeMeta If true, include metadata in the query.
	 * @return string SQL
	 */
	public function memberUserJoinSQL($additional=null, $includeMeta = false, $userPrefix='user_', $memberPrefix='') {
		$usersTable = new Users($this->config);
		$meta = $includeMeta ? ", user.metadata as {$userPrefix}metadata, member.metadata as {$memberPrefix}metadata" : '';

		$additional = $additional !== null ? ', ' . $additional : '';

		$sql = <<<SQL
select user.id as {$userPrefix}id, user.user as {$userPrefix}user, user.email as {$userPrefix}email,
user.name as {$userPrefix}name, user.role as {$userPrefix}role,
user.created as {$userPrefix}created, member.id as {$memberPrefix}id, member.userid as {$memberPrefix}userid, member.semester as {$memberPrefix}semester,
member.section as {$memberPrefix}section, member.role as {$memberPrefix}role, member.created as {$memberPrefix}created$meta$additional
from $this->tablename member
join $usersTable->tablename user
on member.userid = user.id

SQL;

		return $sql;
	}


	/**
	 * Add a course membership to the table.
	 * @param Member $member
	 * @param null $time
	 * @return bool
	 */
	public function add(Member $member, $time) {

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
	 * @param array $params Array with keys: user, name, email, semester, section, role
	 * @param int $time Current time.
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

	/**
	 * Update the role for a member
	 * @param int $memberId The member internal ID
	 * @param string $role New Role (see Member role constants)
	 * @return bool true if successful
	 */
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
	 * @param int $memberId Internal member ID value
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
	 * Write the user meta-data to the table.
	 * @param Member $member The member to write the metadata for
	 */
	public function writeMetaData(Member $member) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename SET metadata=?
where id=?
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$member->metaData->json(), $member->id]);
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
user.name as user_name, user.role as user_role, user.metadata as user_metadata, 
user.created as user_created, member.id as id, member.userid as userid, member.semester as semester,
member.section as section, member.role as role, member.metadata as metadata, member.created as created
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

	/**
	 * Get a member (only) of a specific semester/section
	 * @param int $userId The User internal ID
	 * @param string $semester Semester ID (like FS18)
	 * @param string $sectionId Section ID (like 001)
	 * @return Member|null Fetched member.
	 */
	public function getBySection($userId, $semester, $sectionId) {
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

	/**
	 * Get all members (Member only) for a specific semester/section
	 * @param $semester Semester code
	 * @param $sectionId Section ID
	 * @return array
	 */
	public function getAllBySection($semester, $sectionId) {
		$sql = <<<SQL
select * from $this->tablename
where semester=? and section=?
SQL;

		$stmt = $this->config->pdo->prepare($sql);
		try {
			if($stmt->execute([$semester, $sectionId]) === false) {
				return null;
			}
		} catch(\PDOException $exception) {
			return null;
		}

		$ret = [];
		foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
			$ret[] = new Member($row);
		}

		return $ret;
	}


	/**
	 * Get all memberships for a given user
	 * @param int $userId The User internal ID
	 * @return array of Member objects.
	 */
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

}