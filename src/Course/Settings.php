<?php
/**
 * @file
 *
 * System settings class that can be used by various
 * subsystems to store things like assignment due dates.
 */
namespace CL\Course;

use CL\Tables\TableException;

/**
 * System settings class that can be used by various
 * subsystems to store things like assignment due dates.
 */
class Settings  extends \CL\Tables\Table {
    /**
     * Constructor
     * @param \CL\Tables\Config $config The Database configuration object
     */
    public function __construct(\CL\Tables\Config $config) {
        parent::__construct($config, 'setting');
    }

    /**
     * Create an SQL create table command for the settings table
     * @return string SQL
     */
    public function createSQL() {

        $query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  system   varchar(30) NOT NULL, 
  semester char(4) NOT NULL, 
  section  char(4) NOT NULL, 
  category varchar(30) NOT NULL, 
  `tag`    varchar(30) NOT NULL, 
  json     mediumtext NOT NULL, 
  PRIMARY KEY (system, 
  semester, 
  section, 
  category, 
  `tag`));
SQL;

        return $query;
    }

    /**
     * Set a settings item for a given system, semester, section, category, and tag.
     * @param $system
     * @param $semester
     * @param $sectionId
     * @param $category
     * @param $tag
     * @return null | Setting
     * @throws TableException
     */
    public function read($system, $semester, $sectionId, $category, $tag) {
        $semester = strtoupper($semester);
        $pdo = $this->pdo();

        $sql = <<<SQL
SELECT json from $this->tablename
where system=? and semester=? and section=? and category=? and tag=?
SQL;

        $stmt = $pdo->prepare($sql);
        $ret = $stmt->execute([$system, $semester, $sectionId, $category, $tag]);
        if(!$ret || $stmt->rowCount() == 0) {
            return new Setting($system, $semester, $sectionId, $category, $tag, "{}");
        }

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);
        return new Setting($system, $semester, $sectionId, $category, $tag, $row['json']);
    }

    /**
     * Write settings back to the database
     * @param $setting Settings object
     * @return bool true if successful
     */
    public function write($setting) {
        $sql = <<<SQL
replace into $this->tablename(system, semester, section, category, tag, json) 
values(?, ?, ?, ?, ?, ?)
SQL;

        $pdo = $this->pdo;
        try {
            $stmt = $pdo->prepare($sql);
            return $stmt->execute([$setting->system,
                $setting->semester, $setting->sectionId, $setting->category,
                $setting->tag, $setting->json]);
        } catch(\PDOException $e) {
            return false;
        }
    }
}