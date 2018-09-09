<?php
/**
 * @file
 * Table class for assignment section status
 */

namespace CL\Course;

use CL\Users\User;
use CL\Users\Users;
use CL\Course\Members;

/**
 * Table class for assignment section status
 *
 * This is to keep track of the status of one section or task of an
 * assignment. It indicates NOTVISITED, VISITED, and DONE
 * and keeps track of the date and time.
 */
class SectionStatus extends \CL\Tables\Table {
    const NOTVISITED = 'N';	///< %Section has not been visited by the user
    const VISITED = 'V';	///< %Section has been visited, but is not yet done
    const DONE = 'D';		///< %Section is completed

	/**
	 * Members constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "sectionstatus");
	}

	/**
	 * Validator for section status values. Checks that the value is
	 * one of the valid section status constants.
	 * @param string $status Status to check
	 * @return bool true if valid
	 */
	public function validStatus($status) {
		return $status === SectionStatus::NOTVISITED ||
			$status === SectionStatus::VISITED ||
			$status === SectionStatus::DONE;
	}

    /**
     * Function to create an SQL create table command for the submissions table
     * @return string SQL
     */
    public function createSQL() {
        $sql = <<<SQL
CREATE TABLE IF NOT EXISTS $this->tablename (
  memberid   int(11) NOT NULL, 
  assigntag  varchar(30) NOT NULL, 
  sectiontag varchar(30) NOT NULL, 
  look       datetime NOT NULL, 
  access     datetime NOT NULL, 
  status     char(1) NOT NULL, 
  PRIMARY KEY (memberid, 
  assigntag, 
  sectiontag));

SQL;

        return $sql;
    }

    /**
     * Flag a section's status
     * @param User $user User of the section (must be a member)
     * @param string $assignTag The assignment tag
     * @param string $sectionTag The assignment section tag (section of an assignment)
     * @param string $status Status to set (constants above)
     * @param number $time Time for this status
     */
    public function set(User $user, $assignTag, $sectionTag, $status, $time) {
        $pdo = $this->pdo();

        $sql = <<<SQL
INSERT INTO $this->tablename(memberid, assigntag, sectiontag, look, access, status)
VALUES(?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE access=?, status=?
SQL;

        $stmt = $pdo->prepare($sql);
	    $datetime =  $this->timeStr($time);
	    $stmt->execute([$user->member->id, $assignTag, $sectionTag,
	        $datetime, $datetime, $status, $datetime, $status]);
    }

    /**
     * Get a section's status for a member
     * @param User $user User of the section (must be a member)
     * @param string $assignTag The assignment tag
     * @param string $sectionTag The section tag
     * @return array with keys look, date, status. If no record,
     *    return NOTVISITED and zero dates.
     */
    public function get(User $user, $assignTag, $sectionTag) {
        $pdo = $this->pdo();

        $sql = <<<SQL
SELECT look, access, status from $this->tablename
where memberid=? and assigntag=? and sectiontag=?
SQL;

        $stmt = $pdo->prepare($sql);
        $ret = $stmt->execute([$user->member->id, $assignTag, $sectionTag]);
        if(!$ret || $stmt->rowCount() == 0) {
            return ['look' => 0, 'access' => 0, 'status' => SectionStatus::NOTVISITED];
        }

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);
        return ['look' => strtotime($row['look']), 'access' => strtotime($row['access']),
            'status' => $row['status']];
    }

    /**
     * Get all statuses for an assignment
     * @param User $user User of the section (must be a member)
     * @param string $assignTag The assignment tag
     * @return array Array of arrays, each with the keys: look, access, status. Each array has a
     * key that is the section tag.
     */
    public function get_statuses(User $user, $assignTag) {
        $pdo = $this->pdo();

        $sql = <<<SQL
SELECT sectiontag, look, access, status from $this->tablename
where memberid=? and assigntag=?
SQL;

        $stmt = $pdo->prepare($sql);
        $ret = $stmt->execute([$user->member->id, $assignTag]);
        $result = array();
        foreach($stmt as $row) {
            $result[$row['sectiontag']] = ['look' => strtotime($row['look']),
                'access' => strtotime($row['access']),
                'status' => $row['status']];
        }

        return $result;
    }

    /**
     *
     * @param string $assignTag The assignment tag

     */

	/**
	 * Get the status for all users for an assignment
	 * @param string $semester Semester code
	 * @param string $sectionId Section id
	 * @param string $assignTag Assignment tag
	 * @return array result. First level key is the member ID, second level key is assignment section,
	 * third level keys: look, date, status
	 */
    public function get_statuses_assignment($semester, $sectionId, $assignTag) {
        $pdo = $this->pdo();

        $members = new Members($this->config);
        $membersTable = $members->tablename;

        $sql = <<<SQL
select member.id as memberid, ss.sectiontag as sectiontag, 
ss.look as look, ss.access as access, ss.status as status
from $membersTable member   
join `$this->tablename` ss
on member.id = ss.memberid
where member.semester=? and member.section=? and ss.assigntag=?
SQL;

        // echo $this->sub_sql($sql, [$semester, $sectionId, $assignTag]);
        $stmt = $pdo->prepare($sql);
        $ret = $stmt->execute([$semester, $sectionId, $assignTag]);
        $result = [];

        foreach($stmt as $row) {
            $userId = $row['memberid'];
            if(!isset($result[$userId])) {
                $result[$userId] = [];
            }

            $result[$userId][$row['sectiontag']] = array('look' => strtotime($row['look']),
                'access' => strtotime($row['access']),
                'status' => $row['status']);
        }

        return $result;
    }

}