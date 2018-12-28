import {Course} from './Course';
import {Member} from './Members/Member';

import {StoreModuleCourse} from './State/StoreModuleCourse';
import {StoreModuleUsers} from 'users-cl/js/StoreModuleUsers';
import {SectionSelector} from './SectionSelectors/SectionSelector';
import {Submission} from './Submission/Submission';
import {ErrorHelp} from './ErrorHelp/ErrorHelp';
import {SpoofingRestore} from './Util/SpoofingRestore';
import AboutMeVue from './AboutMe/AboutMe.vue';

/**
 * Factory to create the Course object.
 * @constructor
 */
export const CourseFactory = function() {
}

/**
 * Factory method to create a Course object.
 *
 * This allows for injection of the store for testing purposes.
 * @param site The Site object
 * @return {Course} object.
 */
CourseFactory.create = function(site) {

    let course = new Course();

    site.Course = course;

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

        if( (en = document.getElementById('cl-course-staff'))) {
            store.commit('course/setStaff', JSON.parse(en.textContent));
        }

        //
        // We have modified the User object so that it will know
        // how to attach a membership. This means we must reload
        // the user information so it can create a new object
        //
        if( (en = document.getElementById('cl-user')) !== null) {
            store.commit('user/set', JSON.parse(en.textContent));
        }

	    site.PageVue.create('div.cl-course-aboutme', 'Example Vue', AboutMeVue, site.PageNav);

    })

    site.start(() => {
        SectionSelector.install(site);
        Submission.install(site);
        ErrorHelp.install(site);
        SpoofingRestore.install(site);
    })

    return course;
}
