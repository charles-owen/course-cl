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

    public function get($system, $category, $tag) {

    }
}