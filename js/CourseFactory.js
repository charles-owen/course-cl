/**
 * @file
 * Factory to create the Course object.
 */

import SectionSelector from './SectionSelectors/SectionSelector.js';
import {Member} from './Members/Member.js';
import {StoreModuleCourse} from './State/StoreModuleCourse.js';
import {StoreModuleUsers} from 'users-cl';

let CourseFactory = function() {
}

/**
 * Factory method to create a Course object.
 *
 * This allows for injection of the store for testing purposes.
 * @param store Vuex store object
 * @returns {Course} object.
 */
CourseFactory.create = function(store) {
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
    // Install the users store modules
    //
    if(store !== undefined) {
        store.registerModule('course', StoreModuleCourse);
        store.registerModule('members', StoreModuleUsers.create(
           '/api/course/members',
           (user) => {return user.member.id; }
        ));
    }

    //
    // Register a property 'course' that can be used
    // to set the course description.
    //
    Object.defineProperty(Course, 'course', {
        set(value) {
            store.commit('course/set', value);
        }
    });

    return Course;
}


export {CourseFactory};


