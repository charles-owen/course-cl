<?php
/** @file
 * Class that describes a course in the system.
 */

/// Classes in the Course subsystem
namespace CL\Course;

use CL\Users\User;
use CL\Site\Site;

/**
 * The class Course, which defines a course in the system.
 *
 * Exactly one object of this type will be instantiated for
 * a given web site and will include information about this
 * particular course offering.
 *
 * @cond
 * @property Site site
 * @property string desc
 * @endcond
 */
class Course extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'course';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['console', 'users'];}

    /**
     * Get standard properties for a course.
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * account | string | Account course runs under, like 'cse335'. Serves as a course tag.
     * desc | string | Course description.
     * gradedispute | string | HTML for the grade dispute link for grading pages
     * name | string | Name of the course, like 'CSE 335'.
     *
     * @param string $property
     * @return mixed Property value
     */
    public function __get($property)
    {
        switch ($property) {
	        case 'account':
		        return $this->account;

	        case 'desc':
		        return $this->desc;

	        case 'gradedispute':
		        return $this->gradedispute;

	        case 'name':
	        	return $this->name;

	        //
	        // Pending documentation:
	        //

	        case 'sections':
	        	return $this->sections;

	        // Convenience functions that duplicate functions from Site:
	        case 'rootDir':
	        	return $this->site->rootDir;

	        case 'root':
	        	return $this->site->root;

	        case 'img':
	        	return $this->site->root . '/vendor/cl/course/img';

	        case 'sections':
		        return $this->sections;

	        case 'site':
	        	return $this->site;

	        default:
                return parent::__get($property);
        }
    }

    /**
     * Property set magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * gradedispute | string | HTML for the grade dispute link for grading pages
     * site | Site | The Site object
	 *
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
    	switch($property) {
		    case 'gradedispute':
		    	$this->gradedispute = $value;
		    	break;

		    case 'site':
		    	$this->site = $value;
		    	break;

		    default:
			    parent::__set($property, $value);
			    break;
	    }

    }


	/** Define the course
	 *
	 * Provides basic course information.
	 * @param $account The course account (like 'cse335')
	 * @param $name The course name (like 'CSE 335')
	 * @param $desc Course description (like "Object-Oriented Programming")
	 */
 	public function define($account, $name, $desc = '') {
		$this->account = $account;
		$this->name = $name;
		$this->desc = $desc;

		if($this->site !== null) {
			$this->site->siteName = $name;
		}
	}


	/**
	 * Add a section to this course.
	 *
     * @param string $semester Semester code
     * @param string $section The section ID, like '001'
     * @param int $type Section type. The options are:
     * Section::Normal, Section::Flipped, Section::Online, Section::Flipped
     *
	 * @returns Section object
	 */
	public function add_section($semester, $section, $type) {
        $obj = new Section($this, $semester, $section, $type);
		$this->sections[] = $obj;
		
		// We keep track of the first section added, which
		// we consider the default section.
		if($this->section0 === null) {$this->section0 = $obj;}
		
		return $obj;
	}



    /**
     * Get the default section (first section added)
     * @returns Section object
     */
    public function getDefaultSection() { return $this->section0; }
	

	
	/** Section
     * @param string $semester Semester ID (like FS18)
	 * @param string $sectionId Section number/id (like 001)
	 * @returns Section object or null if section number is invalid.
	 */
	public function get_section($semester, $sectionId) {
	    foreach($this->sections as $section) {
	        if($section->semester === $semester && $section->id === $sectionId) {
	            return $section;
            }
        }

        return null;
    }

	/**
	 * Get the section for a user.
	 * @param User $user User we are getting the section for
	 * @return Section object or null if no section for this user.
	 */
    public function get_section_for(User $user) {
		$member = $user->member;
		if($member === null) {
			return null;
		}

		return $this->get_section($member->semester, $member->sectionId);
    }


	/**
	 * Create basic data representing a course that is send to clients.
	 * @return array with keys 'account', 'name', desc'
	 */
    public function data() {
		return [
			'account'=> $this->account,
			'name' => $this->name,
			'desc' => $this->desc
		];
    }


	/**
	 * Install the plugin
	 * @param Site $site The Site configuration object
	 */
	public function install(Site $site) {
		$this->site = $site;
		$site->install("course", $this);
	}

	/**
	 * Magic function to disable displaying recursive content (Site)
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['site']);
		return $properties;
	}

	protected $site = null;         ///< The Site object for this course
	private $account;	            // Account associated with the course (like "cse335")
	private $name;	                // Course name (like "CSE 335")
	private $desc;		            // Course description (like "Object-oriented Programming")

	private $sections = [];	        // All sections for this course
	private $section0 = null;		// First section added

	private $gradedispute = null;	// Grade dispute link content
}
