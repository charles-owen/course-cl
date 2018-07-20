/**
 * @file
 * Factory to create the Course object.
 */

import {StoreModuleUsers} from 'users-cl';
import {Member} from './Members/Member.js';

import SectionSelector from './SectionSelectors/SectionSelector.js';
import {StoreModuleCourse} from './State/StoreModuleCourse.js';

let CourseFactory = function() {
}

/**
 * Factory method to create a Course object.
 *
 * This allows for injection of the store for testing purposes.
 * @param store Vuex store object
 * @returns {Course} object.
 */
CourseFactory.create = function(site) {

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
    // Install the course store modules
    //
    let store = site.store;
    if(store !== undefined) {
        store.registerModule('course', StoreModuleCourse);
        store.registerModule('members', StoreModuleUsers.create(
            '/api/course/members',
            (user) => {return user.member.id; }
        ));
    }

    site.ready(() => {
        //
        // Detect the passed in course definition information
        // and add it to the store.
        //

        let en;
        if( (en = document.getElementById('cl-course')) !== null) {
            store.commit('course/set', JSON.parse(en.textContent));
        }

        //
        // We have modified the User object so that it will know
        // how to attach a membership. This means we must reload
        // the user information so it can create a new object
        //
        if( (en = document.getElementById('cl-user')) !== null) {
            store.commit('user/set', JSON.parse(en.textContent));
        }
    })


    return Course;
}


export {CourseFactory};


