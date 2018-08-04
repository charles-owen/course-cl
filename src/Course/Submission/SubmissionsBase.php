<?php
/**
 * @file
 * Base class for the two different table classes that handle submissions.
 */

namespace CL\Course\Submission;

/**
 * Base class for the two different table classes that handle submissions.
 *
 * There is a lot of similarity between the submission and teamsubmission tables.
 * This could have been handled by a single table that is shared, but I did not
 * want to break a lot of code, so this class shares code between those two classes.
 */
abstract class SubmissionsBase extends \CL\Tables\Table {

	/**
	 * Members constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 * @param string $name Table base name.
	 */
	public function __construct(\CL\Tables\Config $config, $name) {
		parent::__construct($config, $name);
	}

	/**
	 * Set the analysis for a submission
	 *
	 * Analysis is stored in the table as JSON data
	 * @param int $id Submission ID
	 * @param array $analysis The analysis data array to save
	 */
	public function set_analysis($id, array $analysis) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename set analysis=?
where id=?
SQL;

		$json = json_encode($analysis);

		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(1, $json, \PDO::PARAM_STR);
		$stmt->bindParam(2, $id, \PDO::PARAM_STR);
		$stmt->execute();
	}

	/**
	 * Get the analysis for a submission
	 * @param int $id Submission ID
	 * @return mixed|null The analysis data stored or null if none. Also includes
	 *   'userid', 'assigntag', and 'submissiontag' in the array
	 */
	public function get_analysis($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select memberid, assigntag, submissiontag, analysis from $this->tablename
where id=?
SQL;

		$stmt = $pdo->prepare($sql);

		$memberId = null;
		$assignTag = null;
		$submissionTag = null;
		$json = null;

		$stmt->bindParam(1, $id, \PDO::PARAM_STR);
		$stmt->execute();
		$stmt->bindColumn(1, $memberId, \PDO::PARAM_STR);
		$stmt->bindColumn(2, $assignTag, \PDO::PARAM_STR);
		$stmt->bindColumn(3, $submissionTag, \PDO::PARAM_STR);
		$stmt->bindColumn(4, $json, \PDO::PARAM_STR);
		$stmt->fetch(\PDO::FETCH_BOUND);

		if($json === null) {
			return null;
		}

		$result = json_decode($json, true);
		$result['memberid'] = $memberId;
		$result['assigntag'] = $assignTag;
		$result['submissiontag'] = $submissionTag;

		return $result;
	}

}