/**
 * The Vuex store module for course
 */

export let StoreModuleCourse = {
    namespaced: true,
    state: {
        course: null
    },
    mutations: {
        set(state, data) {
            state.course = data
        }
    }
}
