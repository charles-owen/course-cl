<template>
  <div>
    <div v-for="submission in submissions">
      <h2>{{submission.name}}</h2>
      <submission :options="submission"></submission>
    </div>
  </div>
</template>

<script>
    import SubmissionVue from '../Submission/Submission.vue';

    export default {
        props: ['user', 'assigntag'],
        data: function() {
            return {
                assignment: null,
                submissions: []
            }
        },
        components: {
            submission: SubmissionVue
        },
        mounted() {
            this.fetch(this.user);
        },
        methods: {
            fetch(user) {
                console.log('getting submissions');
                Site.api.get('/api/course/submission/submissions/' +
                    this.assigntag + '/' + user.member.id, {})
                    .then((response) => {
                        if (!response.hasError()) {
                            console.log('got submissions');
                            let submissions = {};
                            for(let submission of response.getDataAll('submissions')) {
                                submissions[submission.id] = submission.attributes;
                            }

                            let section = user.member.getSection(this.$store);
                            this.assignment = user.member.getAssignment(this.$store, this.assigntag);

                            this.submissions = [];
                            for(let submission of this.assignment.submissions) {
                                this.submissions.push({
                                    name: submission.name,
                                    assignTag: this.assignment.tag,
                                    tag: submission.tag,
                                    type: submission.type,
                                    user: user,
                                    submissions: submissions[submission.tag]
                                });
                            }
                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });


            }
        }
    }
</script>
