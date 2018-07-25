/**
 * @file
 */

import {CourseFactory} from './CourseFactory.js';

import MemberSelectorVue from './Lib/MemberSelectorVue.vue';
import {SectionStatus} from './Util/SectionStatus.js';

export {MemberSelectorVue};
export {SectionStatus};

// Use the factory to create the Users object
let Course = global.Course !== undefined ?
    Course :
    CourseFactory.create(Site);

export {Course};
export default Course;
