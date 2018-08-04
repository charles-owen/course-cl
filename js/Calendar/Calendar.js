import 'fullcalendar';
import './_calendar.scss';

import $ from 'jquery';

/**
* Create a calendar with course events in it.
* The div contains JSON for the events as an array of objects like this:
* {title: 'Step 1', start: '2018-05-17', url: '/step1'},
* @constructor
*/
var Calendar = function () {
    let sel = 'div.cl-calendar';
    Site.Site.ready(() => {
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
            $(calendar).fullCalendar('render');
        }
    });
}

new Calendar();

