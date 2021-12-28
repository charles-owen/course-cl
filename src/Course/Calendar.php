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
     * Property set magic method
     * @param string $key Property name
     * @param mixed $value Value to set
     */
    public function __set($key, $value) {
        switch($key) {
            case 'showUnreleased':
                $this->showUnreleased = $value;
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

    /**
     * Add a calendar event
     * @param string $name Event name
     * @param string $date Date as a string
     * @param string $url URL to link event to
     * @param boolean $displayTime If true, display at a time
     * @param string $color Optional color to apply to the event
     */
    public function add($name, $date, $url=null, $displayTime = false, $color = null) {
        $date = is_numeric($date) ? $date : strtotime($date);
    	$event = ['title' => $name,
            'date' => $date,
		    'url' => $url,
            'displayTime' => $displayTime];
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
                    $assignment->load();

			        if($this->showUnreleased) {
                        $release = $assignment->get_release();
                        $due = $assignment->get_due($user);
                        $url = $assignment->rawUrl;
                        if ($release != null) {
                            $name = $assignment->shortName;
                            $event = ['title' => "Rel:".$name, 'date' => $release,
                                'url' => $url, 'displayTime' => false];
                            if(!$assignment->after_release($time)) {
                                $event['color'] = '#88bb88';
                            }
                            $events[] = $event;
                        }


                        if($due != null) {
                            $name = $assignment->shortName;
                            $event = ['title' => $name, 'date' => $due,
                                'url' => $url, 'displayTime' => false];
                            if(!$assignment->after_release($time)) {
                                $event['color'] = '#888888';
                            }
                            $events[] = $event;
                        }



                    } else {
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
    private $showUnreleased = false;
}