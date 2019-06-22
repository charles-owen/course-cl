<?php
/**
 * @file
 * Calendar view for display of the course calendar
 */

namespace CL\Course;

use CL\Site\View;


/**
 * View class for the course calendar
 */
class CalendarView extends \CL\Site\ViewAux {
    /**
     * Constructor
     * @param int $time The time we are viewing
     */
    public function __construct($time) {
        $this->time = $time;
    }

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	protected function install(View $view) {
		parent::install($view);

		$view->addJS('calendar');

		$this->site = $view->site;
		$this->user = $this->site->users->user;
		$section = $this->site->course->get_section_for($this->user);
		if($section !== null) {
			$this->calendar = $section->calendar;
		} else {
			$this->calendar = null;
		}
	}


    /**
     * Generate the actual calendar content for the document
     * @return string HTML
     */
    public function present() {
	    $events = $this->calendar !== null ?
		    $this->calendar->getEvents($this->user, $this->time) : [];

	    $items = [];
	    foreach($events as $event) {
		    $name = $event['title'];
		    $date = date('Y-m-d', $event['date']);

		    $evt = ['title'=>$name, 'start'=>$date];
		    if($event['url'] !== null) {
		    	if(substr($event['url'], 0, 4) === 'http') {
				    $evt['url'] = $event['url'];
			    } else {
				    $evt['url'] = $this->site->root . '/' . $event['url'];
			    }
		    }

		    if(isset($event['color'])) {
		    	$evt['color'] = $event['color'];
		    }

		    $items[] = $evt;
	    }

	    $json = htmlspecialchars(json_encode($items), ENT_NOQUOTES);

	    return "<div class=\"full\"><div class=\"cl-calendar\">$json</div></div>";
    }

    private $site;
    private $user;
    private $calendar;
    private $time;
}