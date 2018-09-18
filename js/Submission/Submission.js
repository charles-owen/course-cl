import SubmissionVue from './Submission.vue';

export const Submission = function(element, site) {

    const submission = JSON.parse(element.textContent);
    element.innerHTML = '';

    let store = site.store;

    new site.Vue({
        el: element,
        store,
	    site,
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
}

Submission.install = function(site) {
    let elements = document.querySelectorAll('div.cl-submission');
    for(let i=0; i<elements.length; i++) {
        new Submission(elements[i], site);
    }
}