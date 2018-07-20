import './calendar.css';
import 'fullcalendar';

import {Ready} from 'site-cl';

import $ from 'jquery';

/**
* Create a calendar with course events in it.
* @param sel Selector for the div the calendar is to appear in.
* The div contains JSON for the events as an array of objects like this:
* {title: 'Step 1', start: '2018-05-17', url: '/step1'},
* @constructor
*/
var Calendar = function (sel) {
    Ready.go(() => {
        let calendars = document.querySelectorAll(sel);
        for(let i=0; i<calendars.length; i++) {
            let calendar = calendars[i];

            let events = JSON.parse(calendar.textContent);
            calendar.textContent = '';

            $(calendar).fullCalendar({
                header: {
                    left: '',
                    center: 'title',
                    right: 'prev,next today'
                },
                eventLimit: true, // allow "more" link when too many events
                events: events
            })

            calendar.style.display = 'block';
        }
    });
}

export default Calendar;