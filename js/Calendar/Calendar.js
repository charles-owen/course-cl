import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import './_calendar.scss';

/**
 * A calendar with course events in it.
 *
 * Replaces div.cl-calendar
 *
 * The div contains JSON for the events as an array of objects like this:
 * {title: 'Step 1', start: '2018-05-17', url: '/step1'},
 * @constructor
*/
const SiteCalendar = function (site) {
    let sel = 'div.cl-calendar';
    site.ready(() => {
        let calendars = document.querySelectorAll(sel);
        for(let i=0; i<calendars.length; i++) {
            let calendarElement = calendars[i];

            let events = JSON.parse(calendarElement.textContent);
            calendarElement.textContent = '';

            let calendar = new Calendar(calendarElement, {
                plugins: [ dayGridPlugin , interactionPlugin],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: '',
                    center: 'title',
                    right: 'prev,next today'
                },
                eventColor: '#005500',
                events: events
            });

            calendarElement.style.display = 'flex'
            calendar.render();
        }
    });
}

new SiteCalendar(Site.Site);

