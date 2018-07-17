<?php
/** @file
 * Class that describes a course in the system.
 */

namespace CL\Course;

/**
 * The class Course, which defines a course in the system.
 *
 * Exactly one object of this type will be instantiated for
 * a given web site and will include information about this
 * particular course offering.
 */
class Course {

	/**
	 * Construct a course object.
	 */
	public function __construct(\CL\Site\Site $site) {
		$this->site = $site;
	}

    /**
     * Get standard properties for a course.
     *
     * @param $key
     * @return Course|mixed|null|string Property value
     */
    public function __get($key)
    {
        switch ($key) {
        	// Name of the course, like 'CSE 335'
	        case 'name':
	        	return $this->name;

	        // Course description
	        case 'desc':
	        	return $this->desc;

	        // Account course runs under, like 'cse335'
	        case 'account':
	        	return $this->account;

	        // HTML for the grade dispute link for grading pages
	        case 'gradedispute':
	        	return $this->gradedispute;

	        case 'sections':
	        	return $this->sections;

	        // Convenience functions that duplicate functions from Site:
	        case 'rootDir':
	        	return $this->site->rootDir;

	        case 'root':
	        	return $this->site->root;

	        default:
                $trace = debug_backtrace();
                trigger_error(
                    'Undefined property ' . $key .
                    ' in ' . $trace[0]['file'] .
                    ' on line ' . $trace[0]['line'],
                    E_USER_NOTICE);
                return null;
        }
    }

    /**
     * Property set magic method
     * @param $key Property name
     * @param $value Value to set
     */
    public function __set($key, $value) {
    	switch($key) {

		    case 'gradedispute':
		    	$this->gradedispute = $value;
		    	break;

		    default:
			    $trace = debug_backtrace();
			    trigger_error(
				    'Undefined property ' . $key .
				    ' in ' . $trace[0]['file'] .
				    ' on line ' . $trace[0]['line'],
				    E_USER_NOTICE);
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

		$this->site->siteName = $name;
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
	 * @returns Section|null Reference to section object or null if section number is invalid */
	public function getSection($semester, $sectionId) {
	    foreach($this->sections as $section) {
	        if($section->semester === $semester && $section->id === $sectionId) {
	            return $section;
            }
        }

        return null;
    }

    public function data() {
		return [
			'account'=> $this->account,
			'name' => $this->name,
			'desc' => $this->desc
		];
    }
	
	/** Sections collection */
	public function getSections() {return $this->sections;}

	private $site;      ///< The Site object for this course
	private $account;	// Account associated with the course (like "cse335")
	private $name;	    // Course name (like "CSE 335")
	private $desc;		// Course description (like "Object-oriented Programming")

	private $sections = [];	        // All sections for this course
	private $section0 = null;		// First section added

	private $gradedispute = null;	///< Grade dispute link content

}
