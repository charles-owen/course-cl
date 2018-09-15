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
			submission: SubmissionVue
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

				Site.api.get('/api/course/submission/submissions/' +
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
