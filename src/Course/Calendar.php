<?php
/**
 * @file
 * Implementation of a basic calendar for a section
 */

namespace CL\Course;

use CL\Users\User;

/**
 * Course calendar for a section
 */
class Calendar {
    /**
     * Constructor
     * @param Section $section Section this calendar is for
     */
    public function __construct(Section $section) {
        $this->section = $section;
    }

    /**
     * Add a calendar event
     * @param string $name Event name
     * @param string $date Date as a string
     * @param string $url URL to link event to
     * @param boolean $displayTime If true, display at a time
     * @param string color Optional color to apply to the event
     */
    public function add($name, $date, $url=null, $displayTime = false, $color = null) {
    	$event = ['title' => $name, 'date' => strtotime($date),
		    'url' => $url, 'displayTime' => $displayTime];
    	if($color !== null) {
    		$event['color'] = $color;
	    }
        $this->events[] = $event;
    }

	/**
	 * Get all calendar events
	 *
	 * Gets the provided events plus all assignment due dates for a given user
	 *
	 * @param User $user User to present events for
	 * @param integer $time Current time. If null, time() is used.
	 * @return array Array of events, each with four values: title, date, url, displayTime
	 */
    public function getEvents(User $user=null, $time=null) {
	    if ($time === null) {
		    $time = time();
        }

        $events = $this->events;

	    if($user !== null) {
		    $categories = $this->section->assignments->categories;
		    foreach($categories as $category) {
			    foreach($category->assignments as $assignment) {
				    if(!$user->staff && !$assignment->after_release($time)) {
					    continue;
				    }

				    $due = $assignment->get_due($user);
				    $url = $assignment->rawUrl;
				    if($due != null) {
					    $name = $assignment->shortName;
					    $event = ['title' => $name, 'date' => $due,
						    'url' => $url, 'displayTime' => false];
					    if(!$assignment->after_release($time)) {
					    	$event['color'] = '#888888';
					    }
					    $events[] = $event;
				    }
			    }
		    }
	    }

        return $events;
    }

	/**
	 * Magic function to disable displaying the section
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['section']);
		return $properties;
	}

    private $section;
    private $events = array();
}