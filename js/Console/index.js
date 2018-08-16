/**
 * @file
 * Course console entry point.
 */

import {CourseConsole} from './CourseConsole';

let courseConsole = new CourseConsole(Site.Site, Site.Console);
Site.Console.course = courseConsole;