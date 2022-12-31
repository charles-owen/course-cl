import SubmissionVue from './Submission.vue';

/**
 * Present the submissions to the user
 * @param element Element to install the submission Vue in
 * @param site Site object
 * @constructor
 */
export const Submission = function(element, site) {
    const VueHelper = site.VueHelper

    const submission = JSON.parse(element.textContent);
    element.innerHTML = '';

    let store = site.store;

    const app = VueHelper.createApp({
        data: function() {
            return {
                submission: submission
            }
        },
        components: {
            submissionVue: SubmissionVue
        },
        template: `<submission-vue :submission="submission"></submission-vue>`
    })

    app.config.globalProperties.$site = site
    app.use(store)

    VueHelper.mount(app, element)
}

Submission.install = function(site) {
    let elements = document.querySelectorAll('div.cl-submission');
    for(let i=0; i<elements.length; i++) {
        new Submission(elements[i], site);
    }
}