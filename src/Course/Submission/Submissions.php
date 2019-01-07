<?php
/** @file
 * Class that manages the submission table
 */
 
namespace CL\Course\Submission;

use CL\Users\User;

/**
 * Management of the submission table
 */
class Submissions extends SubmissionsBase {
	/**
	 * Submissions constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "submission");
	}
	
	/**
	 * Handle a text submission
	 * @param User $user User the submission is for
	 * @param string $assignTag Assignment tag
	 * @param string $submissionTag Submission tag
	 * @param int $date Submission date as PHP time value
	 * @param string $text The text to submit
	 * @param string $type MIME type for the submission (default: 'text/plain')
	 * @return int ID for the new submission or false if fail
	 */
	public function submit_text(User $user, $assignTag, $submissionTag,
	                            $date, $text, $type="text/plain") {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
insert into $this->tablename(memberid, assigntag, submissiontag, date, text, type)
values(?, ?, ?, ?, ?, ?)
SQL;

        $memberId = $user->member->id;
        $dateStr = $this->timeStr($date);

		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(1, $memberId);
		$stmt->bindParam(2, $assignTag);
		$stmt->bindParam(3, $submissionTag);
		$stmt->bindParam(4, $dateStr);
		$stmt->bindParam(5, $text);
		$stmt->bindParam(6, $type);
		
		if(!$stmt->execute()) {
			return false;
		}

		return $pdo->lastInsertId();
	}
	
	/**
	 * Handle a file submission
	 * @param User $user User the submission is for
	 * @param string $assignTag Assignment tag
	 * @param string $submissionTag Submission tag
	 * @param int $date Submission date as PHP time value
	 * @param string $file The path to the file to submit
	 * @param string $name Name of the file we are submitting
	 * @param string $type The file MIME type
	 * @return mixed ID for the submission or FALSE if failure
	 */
	public function submit_file(User $user, $assignTag, $submissionTag, $date,
	                            $file, $name, $type) {
			
		$fp = fopen($file, 'rb');
		if($fp === false) {
			return false;
		}

		$pdo = $this->pdo();

		$sql = <<<SQL
insert into $this->tablename(memberid, assigntag, submissiontag, date, `binary`, name, type)
values(?, ?, ?, ?, ?, ?, ?)
SQL;

		$memberId = $user->member->id;
		$dateStr = $this->timeStr($date);

		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(1, $memberId);
		$stmt->bindParam(2, $assignTag);
		$stmt->bindParam(3, $submissionTag);
		$stmt->bindParam(4, $dateStr);
		$stmt->bindParam(5, $fp, \PDO::PARAM_LOB);
		$stmt->bindParam(6, $name);
		$stmt->bindParam(7, $type);

		$result = false;
        try {
            $result = @$stmt->execute();
        } catch(\PDOException $ex) {
            return false;
        }

		fclose($fp);

		if(!$result) {
			return false;
		}

		return $pdo->lastInsertId();
	}
	

	
	/** Get a submission file
	 * @param int $id ID for the submission
	 * @return array with these keys:
	 * 		type, binary, memberid, assigntag, submissiontag, name
	 */
	public function get_file($id) {
		$pdo = $this->pdo();

$sql = <<<SQL
select `binary`, type, memberid, assigntag, submissiontag, name, date from $this->tablename
where id=?
SQL;

		$type = '';
		$submissionMember = '';
		$bin = null;
		$assigntag = null;
		$submissiontag = null;
		$name = null;
		$date = 0;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		$stmt->bindColumn(1, $bin, \PDO::PARAM_LOB);
		$stmt->bindColumn(2, $type, \PDO::PARAM_STR);
		$stmt->bindColumn(3, $submissionMember, \PDO::PARAM_STR);
		$stmt->bindColumn(4, $assigntag, \PDO::PARAM_STR);
		$stmt->bindColumn(5, $submissiontag, \PDO::PARAM_STR);
		$stmt->bindColumn(6, $name, \PDO::PARAM_STR);
		$stmt->bindColumn(7, $date, \PDO::PARAM_STR);
		$stmt->fetch(\PDO::FETCH_BOUND);

		return array('type' => $type,
			'binary' => $bin,
			'memberid' => $submissionMember,
			'assigntag' => $assigntag,
			'submissiontag' => $submissiontag,
			'name' => $name,
			'date'=>strtotime($date));
	}
	
	/** Get a submission text
	 * @param int $id ID for the submission
	 * @return array with these keys:
	 * 		text, memberid, assigntag, submissiontag */
	public function get_text($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select text, memberid, assigntag, submissiontag, type, date from $this->tablename
where id=?
SQL;

		$submissionuser = '';
		$text = null;
		$assigntag = null;
		$submissiontag = null;
		$type = '';
		$date = 0;
		
		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		$stmt->bindColumn(1, $text, \PDO::PARAM_STR);
		$stmt->bindColumn(2, $submissionuser, \PDO::PARAM_STR);
		$stmt->bindColumn(3, $assigntag, \PDO::PARAM_STR);
		$stmt->bindColumn(4, $submissiontag, \PDO::PARAM_STR);
		$stmt->bindColumn(5, $type, \PDO::PARAM_STR);
		$stmt->bindColumn(6, $date, \PDO::PARAM_STR);
		$stmt->fetch(\PDO::FETCH_BOUND);

		return array('text' => $text, 'type'=>$type, 'memberid' => +$submissionuser,
			'assigntag' => $assigntag, 'submissiontag' => $submissiontag, 'date'=>strtotime($date));
	}


	/**
	 * Get all submissions there are in the database
	 * @param int $memberId Member ID for the member we want the submissions for
	 * @param string $assignTag Assignment we want the submissions for
	 * @param string $submissionTag The tag for a specific submission within an assignment
	 * @param boolean $mostRecentOnly If true, only hte most recent submission is returned
	 * @return array Array of submission records, empty if none. Each record with keys:
	 *     id, date, name, type
	 */
	public function get_submissions($memberId, $assignTag, $submissionTag, $mostRecentOnly = false) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select id, date, name, type from $this->tablename
where memberid=? and assigntag=? and submissiontag=?
order by date DESC
SQL;

		if($mostRecentOnly) {
			$sql .= "\nlimit 1";
		}

		$stmt = $pdo->prepare($sql);
		$exec = [$memberId, $assignTag, $submissionTag];
		// echo "<pre>\n" . $this->sub_sql($sql, $exec) . "</pre>";
		$stmt->execute($exec);

		$result = array();
		foreach($stmt as $row) {
			$result[] = array(
				'id' => $row['id'],
				'date' => strtotime($row['date']),
				'name' => $row['name'],
				'type' => $row['type']);
		}

		return $result;
	}

	/** Get all submissions there are in the database
	 * @param int $memberId Member ID for the member we want the submissions for
	 * @param string $assignTag Assignment we want the submissions for
	 * @return array Array of submission records, empty if none. Each record with keys:
	 *     id, date, name, type
	 */
	public function getAssignmentSubmissions($memberId, $assignTag) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select id, date, name, type, submissiontag from $this->tablename
where memberid=? and assigntag=?
order by submissiontag, date DESC
SQL;


		$stmt = $pdo->prepare($sql);
		$exec = [$memberId, $assignTag];
		// echo "<pre>\n" . $this->sub_sql($sql, $exec) . "</pre>";
		$stmt->execute($exec);

		$result = array();
		foreach($stmt as $row) {
			if(!isset($result[$row['submissiontag']])) {
				$result[$row['submissiontag']] = [];
			}

			$result[$row['submissiontag']][] = array(
				'id' => $row['id'],
				'date' => strtotime($row['date']),
				'name' => $row['name'],
				'type' => $row['type']);
		}

		return $result;
	}

	/** Determine if a user has submitted at all
	 * @param User $user User we want the submissions for
	 * @param string $assignTag Assignment we want the submissions for
	 * @param string $submissionTag The tag for a specific submission within an assignment
	 * @return true if any submission exists
	 */
	public function has_submissions(User $user, $assignTag, $submissionTag) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select id, date, name, type from $this->tablename
where memberid=? and assigntag=? and submissiontag=?
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($user->member->id, $assignTag, $submissionTag));
		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		$stmt->closeCursor();
		return $row !== false;
	}


	/**
	 * Create an SQL create table command for the members table
	 * @return string SQL
	 */
	public function createSQL() {
		return <<<SQL
CREATE TABLE if not exists $this->tablename (
  id            int(11) NOT NULL AUTO_INCREMENT, 
  memberid      int(11) NOT NULL, 
  assigntag     varchar(30) NOT NULL, 
  submissiontag varchar(30) NOT NULL, 
  `date`        datetime NOT NULL, 
  name          varchar(500), 
  `binary`      longblob, 
  text          mediumtext, 
  type          varchar(30), 
  analysis      mediumtext, 
  PRIMARY KEY (id), 
  INDEX (memberid));

SQL;

	}
}
