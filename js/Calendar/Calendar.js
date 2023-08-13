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

            let config = JSON.parse(calendarElement.textContent);
            calendarElement.textContent = '';

            let events = config.events;

            let options = {
                plugins: [ dayGridPlugin , interactionPlugin],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: '',
                    center: 'title',
                    right: 'prev,next today'
                },
                eventColor: '#005500',
                events: events,
                height: 'auto'
            }

            if(config.weeks) {
                options.initialView = 'dayGridWeek';

                options.views = {
                    dayGridWeek: {
                      duration: {
                          weeks: config.weeks
                }
                    }
                }

                options.monthStartFormat = { month: 'short', day: 'numeric' }
                //options.aspectRatio = 1
              // options.aspectRatio = 0.27 / config.weeks;
            }

            if(config.start) {
                options.initialDate = config.start * 1000;
            }

            let calendar = new Calendar(calendarElement, options);

            calendarElement.style.display = 'flex'
            calendar.render();
        }
    });
}

new SiteCalendar(Site.Site);

