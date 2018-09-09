/**
 * @file
 * Course console entry point.
 */

import {CourseConsole} from './CourseConsole';

let courseConsole = new CourseConsole(Site.Site, Site.Site.console);
Site.Site.console.course = courseConsole;