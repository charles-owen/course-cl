<?php
/** @file
 * Unit tests for the class Calendar
 * @cond
 */

require_once __DIR__ . '/cls/CourseTestBase.php';


class CalendarTest extends CourseTestBase
{
	public function test_construct() {
		$site = $this->createSite();

		$section = $this->course->get_section('FS18', '799');
        $calendar = $section->calendar;

        $this->assertInstanceOf('\\CL\\Course\\Calendar', $calendar);
		$this->assertCount(12, $calendar->getEvents());
	}

//    /**
//     * Test with assignments
//     */
//    public function test_add_section() {
//        $section = get_course()->get_section('FS14', '001');
//        $assignments = $section->get_assignments();     // Forces a load of the assignments
//        $calendar = $section->get_calendar();
//        $this->assertInstanceOf('Calendar', $calendar);
//
//        $events = $calendar->get_events(User::get(), time());
//        $this->assertEquals(5, count($events));
//    }
}

/// @endcond
