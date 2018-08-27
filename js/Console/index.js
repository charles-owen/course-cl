/**
 * @file
 * Course console entry point.
 */

import {CourseConsole} from './CourseConsole';

let courseConsole = new CourseConsole(Site.Site, Site.Console);
console.log("assigning Site.Console.course");
Site.Console.course = courseConsole;