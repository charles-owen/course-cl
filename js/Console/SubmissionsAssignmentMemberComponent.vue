<template>
  <div>
    <div v-for="submission in submissions">
      <h2>{{submission.name}}</h2>
      <submission-vue :submission="submission"></submission-vue>
    </div>
  </div>
</template>

<script>
  import SubmissionVue from '../Submission/Submission.vue';

  export default {
    props: ['user', 'assigntag'],
    data: function () {
      return {
        assignment: null,
        submissions: []
      }
    },
    watch: {
      user() {
        this.submissions = [];
        this.fetch(this.user);
      }
    },
    components: {
      submissionVue: SubmissionVue
    },
    mounted() {
      this.fetch(this.user);
    },
    methods: {
      fetch(user) {
        let section = user.member.getSection(this.$store);
        this.assignment = user.member.getAssignment(this.$store, this.assigntag);
        if (this.assignment.submissions === undefined) {
          // This assignment has no submissions
          this.submissions = [];
          return;
        }

        this.$site.api.get('/api/course/submission/submissions/' +
                this.assigntag + '/' + user.member.id, {})
                .then((response) => {
                  if (!response.hasError()) {
                    const submissions = response.getDataAll('submissions');
                    this.submissions = [];
                    for (let i = 0; i < submissions.length; i++) {
                      this.submissions.push(submissions[i].attributes);
                      this.submissions[i].user = user;
                    }
                  } else {
                    this.$site.toast(this, response);
                  }

                })
                .catch((error) => {
                  this.$site.toast(this, error);
                });


      }
    }
  }
</script>
