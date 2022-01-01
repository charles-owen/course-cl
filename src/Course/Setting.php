<?php
/**
 * @file
 *
 * A system Setting as stored in the setting table
 * managed by the Settings class.
 */
namespace CL\Course;

use CL\Site\MetaData;
use CL\Users\User;

class Setting {
    /**
     * Constructor
     * @param string $system System these settings are for
     * @param string $semester Semester ID (like fs19)
     * @param string $sectionId Section ID (like 001)
     * @param string $category Settings category for the
     * @param string $tag Tag that identifies the settings in the subsystem
     * @param string $json The database $json data
     */
    public function __construct($system, $semester, $sectionId,
                                $category, $tag,
                                $json) {
        $this->system = $system;
        $this->semester = $semester;
        $this->sectionId = $sectionId;
        $this->category = $category;
        $this->tag = $tag;

        if($json === null) {
            $this->data = [];
        } else {
            $this->data = json_decode($json, true);
        }
    }

    /**
     * Get settings content
     * @param string $key Key value to return
     * @param mixed $default Default value if key does not exist
     * @return string|array Public data content
     */
    public function get($key, $default=null) {
        if(key_exists($key, $this->data)) {
            return $this->data[$key];
        } else {
            return $default;
        }
    }

    /**
     * Remove a key
     * @param $key
     * @return void
     */
    public function remove($key) {
        if(key_exists($key, $this->data)) {
            unset($this->data[$key]);
        }
    }

    public function exists($key) {
        return key_exists($key, $this->data);
    }

    /**
     * Set a key value
     * @param string $key Key  to set
     * @param mixed $value Value to set it to
     */
    public function set($key, $value) {
        $this->data[$key] = $value;
    }

    public function __get($property) {
        switch($property) {
            case 'system':
                return $this->system;

            case 'semester':
                return $this->semester;

            case 'sectionId':
                return $this->sectionId;

            case 'category':
                return $this->category;

            case 'tag':
                return $this->tag;

            case 'json':
                return json_encode($this->data);

            default:
                return \CL\Site\PropertyHelper::Error($property);
        }
    }

    // The subsystem this is a setting for (like site or user)
    private $system;

    // The semester
    private $semester;

    // The section ID
    private $sectionId;

    // Settings category within the sybsystem
    private $category;

    // A tag identifying an assignment or other identification in the category
    private $tag;

    // The underlying data as a PHP array
    private $data;
}