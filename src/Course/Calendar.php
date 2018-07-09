<?php
/**
 * @file
 * Implementation of a basic calendar for a section
 */

namespace CL\Course;

/**
 * Course calendar for a section
 */
class Calendar {

    /**
     * @brief Constructor
     * @param Section $section Section this calendar is for
     */
    public function __construct(Section $section) {
        $this->section = $section;
    }

    /**
     * @brief Add a calendar event
     * @param $name Event name
     * @param $date Date as a string
     * @param $url URL to link event to
     * @param $displayTime If true, display at a time
     */
    public function add($name, $date, $url=null, $displayTime = false) {
        $this->events[] = array('name' => $name, 'date' => strtotime($date),
            'url' => $url, 'displayTime' => $displayTime);
    }

    /**
     * @brief Get all calendar events
     * @return array Array of events, each with four values: name, date, url, displayTime
     */
    public function get_events(\User $user, $time) {
        $events = $this->events;

        $categories = $this->section->get_assignments()->get_categories();
        foreach($categories as $category) {
            foreach($category->get_assignments() as $assignment) {
                if(!$user->is_staff() && !$assignment->after_release($time)) {
                    continue;
                }

                $due = $assignment->get_due($user);
                $url = $assignment->get_url();
                if($due != null) {
                    $name = $assignment->get_shortname();
                    $events[] = array('name' => $name, 'date' => $due,
                        'url' => $url, 'displayTime' => false);
                }
            }
        }

        return $events;
    }

    private $section;
    private $events = array();
}