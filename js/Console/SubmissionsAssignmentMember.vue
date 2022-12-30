<template>
  <div class="content">
    <div class="full">
      <memberfetcher v-on:fetched="fetched" :id="memberid" :faillink="submissionsLink">
        <template v-slot="fetcher">
          <prev-next :user="fetcher.user"></prev-next>
          <div  v-if="fetcher.user !== null">
            <submissions :user="fetcher.user" :assigntag="assigntag"></submissions>
          </div>
        </template>
      </memberfetcher>
    </div>
  </div>
</template>

<script>
	import SubmissionsAssignmentMemberComponent from './SubmissionsAssignmentMemberComponent.vue';

	import PrevNextMemberVue from './Members/PrevNextMember.vue';
	import MemberFetcherComponent from './Members/MemberFetcherComponent.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;


  export default {
		'extends': ConsoleComponentBase,
		props: ['assigntag', 'memberid'],
		data: function () {
			return {
				submissionsLink: '/cl/console/course/submissions/' + this.assigntag
			}
		},
		components: {
			memberfetcher: MemberFetcherComponent,
			prevNext: PrevNextMemberVue,
			submissions: SubmissionsAssignmentMemberComponent
		},
		mounted() {
			this.$root.setTitle(': Submissions');
			this.addNav2Link('Exit', 4, '/cl/console/course/submissions/' + this.assigntag);
		},
		methods: {
			fetched(user) {
				let assignment = user.member.getAssignment(this.$store, this.assigntag);
				this.$root.setTitle(': ' + user.name + ' ' + assignment.shortname + ' Submissions');
			}
		}
	}
</script>
