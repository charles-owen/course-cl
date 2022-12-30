<template>
  <div class="content">
    <div class="full">
      <membersfetcher>
        <template v-slot="fetcher">
          <p class="center">Click on a user to view submissions for that user.</p>
          <submissions-links :assignment="assignment"></submissions-links>
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in fetcher.users">
              <td><router-link :to="link + user.member.id">{{user.userId}}</router-link></td>
              <td><router-link :to="link + user.member.id">{{user.name}}</router-link></td>
              <td>{{user.roleName()}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
	import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';
  import SubmissionsLinksVue from './SubmissionsLinks.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;


  /**
   * Vue for submissions for all students.
   * Provides links to a view of an individual student's submissions.
   * @constructor SubmissionsComponentVue
   */
	export default {
		'extends': ConsoleComponentBase,
		props: ['assigntag'],
		data: function () {
			return {
				link: Site.root + '/cl/console/course/submissions/' + this.assigntag + '/',
				assignment: null
			}
		},
		components: {
          'membersfetcher': MembersFetcherComponent,
          'submissionsLinks': SubmissionsLinksVue
		},
		mounted() {
			const member = this.$store.state.user.user.member;
			let query = {
				semester: member.semester,
				section: member.section
			};

			this.section = this.$store.getters['course/section'](member.semester, member.section);
			this.assignment = this.section.getAssignment(this.assigntag);

			this.$root.setTitle(': ' + this.assignment.shortname + ' Submissions');

		}
	}
</script>
