/**
 * @file
 */

import SectionSelector from './SectionSelectors/SectionSelector.js';
import {Member} from './Members/Member.js';
import {StoreModuleCourse} from './State/StoreModuleCourse.js';

let Course = function() {
}

// Exported objects
Course.SectionSelector = SectionSelector;
Course.Member = Member;

//
// Modify User to add the ability to instantiate
// an appropriate Member object
//
Users.User.instantiateMember = function(data) {
    if(data.member !== null) {
        return new Member(data.member);
    } else {
        return null;
    }
}

//
// Install the store module
//
const store = Site.store;
store.registerModule('course', StoreModuleCourse);

//
// Register a property 'course' that can be used
// to set the course description.
//
Object.defineProperty(Course, 'course', {
    set(value) {
        store.commit('course/set', value);
    }
});

export default Course;
