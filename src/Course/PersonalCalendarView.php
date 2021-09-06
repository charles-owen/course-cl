<?php
/**
 * @file
 * The personal calendar view for the site.
 */

namespace CL\Course;

use CL\Site\Site;

/**
 * The personal calendar view for the site.
 *
 * /cl/calenadr
 */
class PersonalCalendarView extends View {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 */
	public function __construct(Site $site) {
		parent::__construct($site);

        $calendar = new CalendarView(time());
        $calendar->semester = true;
		$this->calendar = $this->add_aux($calendar);
		$this->setTitle('Personal Calendar');
	}

	/**
	 * Present the calendar for the page.
	 * @return string HTML
	 */
	public function present() {
		$html = $this->calendar->present();

		$html .= <<<HTML
<p class="full center"><em>The calendar on the home page presents the same information as this calendar.</em></p>
HTML;

		return $html;
	}

	private $calendar;
}