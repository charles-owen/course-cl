/**
 * @file
 * Course console entry point.
 */

import {CourseConsole} from './CourseConsole';

let courseConsole = new CourseConsole(Site, Console);
Console.course = courseConsole;