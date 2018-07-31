/**
 * The Vuex store module for course
 */

import {Course} from '../Models/Course';

export let StoreModuleCourse = {
    namespaced: true,
    state: {
        course: null
    },
    mutations: {
        set(state, data) {
            state.course = new Course(data)
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
        }
    }
}
