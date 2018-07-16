/**
 * @file
 */

import {CourseFactory} from './CourseFactory.js';

import MemberSelectorVue from './Lib/MemberSelectorVue.vue';

export {MemberSelectorVue};

// Use the factory to create the Users object
let Course = global.Course !== undefined ?
    Course :
    CourseFactory.create(Site.store);

export {Course};
export default Course;
