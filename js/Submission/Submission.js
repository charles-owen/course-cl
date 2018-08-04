import SubmissionVue from './Submission.vue';

export const Submission = function(element, site) {

    const options = JSON.parse(element.textContent);
    element.innerHTML = '';

    let store = Site.store;

    new site.Vue({
        el: element,
        store,
        data: function() {
            return {
                options: options
            }
        },
        components: {
            submission: SubmissionVue
        },
        template: `<submission :options="options"></submission>`
    })
}

Submission.install = function(site) {
    let elements = document.querySelectorAll('div.cl-submission');
    for(let i=0; i<elements.length; i++) {
        new Submission(elements[i], site);
    }
}