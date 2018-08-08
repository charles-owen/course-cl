/**
 * The Vuex store module for course
 */

import {Course} from '../Models/Course';

export let StoreModuleCourse = {
    namespaced: true,
    state: {
        course: null,
        staff: []
    },
    mutations: {
        set(state, data) {
            state.course = new Course(data)
        },
        setStaff(state, data) {
            let staff = {};
            for(let d of data) {
                let user = new Users.User(d);
                staff[user.member.id] = user;
            }

            state.staff = staff;
        }
    },
    getters: {
        section: (state) => (semester, sectionId) => {
            for(let section of state.course.sections) {
                if(section.semester === semester && section.id === sectionId) {
                    return section;
                }
            }

            return null;
        },
        assignment: (state, getters) => (semester, sectionId, assignTag) => {
            for(let section of state.course.sections) {
                if(section.semester === semester && section.id === sectionId) {
                    return section;
                }
            }

            return null;
        },
        staff: (state) => (id) => {
            let user = state.staff[id];
            return user !== undefined ? user : null;
        }

    }
}
