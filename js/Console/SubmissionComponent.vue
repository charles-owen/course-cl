<template>
  <div class="content">
    <div class="full">
      <memberfetcher v-on:fetched="fetched" :id="memberid" :faillink="submissions">
        <template slot-scope="fetcher">
          <prev-next :user="fetcher.user">
            <backto name="Submissions" :link="submissionsLink"></backto>
          </prev-next>

          <div  v-if="fetcher.user !== null">
            <div v-for="submission in submissions">
              <h2>{{submission.name}}</h2>
              <submission :options="submission"></submission>
            </div>
          </div>



          <backto name="Submissions" :link="submissionsLink"></backto>
        </template>
      </memberfetcher>

    </div>
  </div>
</template>

<script>
    import PrevNextMemberVue from './Members/PrevNextMember.vue';
    import BackToVue from 'site-cl/js/UI/BackTo.vue';
    import MemberFetcherComponent from './Members/MemberFetcherComponent.vue';
    import SubmissionVue from '../Submission/Submission.vue';

    export default {
        props: ['assigntag', 'memberid'],
        data: function() {
            return {
                submissionsLink: '/cl/console/course/submissions/' + this.assigntag,
                assignment: null,
                submissions: []
            }
        },
        components: {
            memberfetcher: MemberFetcherComponent,
            prevNext: PrevNextMemberVue,
            backto: BackToVue,
            submission: SubmissionVue
        },
        mounted() {
            this.$parent.setTitle(': Submissions');

        },
        methods: {
            fetched(user) {
                Site.api.get('/api/course/submission/submissions/' +
                    this.assigntag + '/' + user.member.id, {})
                    .then((response) => {
                        if (!response.hasError()) {
                            let submissions = {};
                            for(let submission of response.getDataAll('submissions')) {
                                submissions[submission.id] = submission.attributes;
                            }

                            let section = user.member.getSection(this.$store);
                            this.assignment = user.member.getAssignment(this.$store, this.assigntag);
                            this.$parent.setTitle(': ' + user.name + ' ' + this.assignment.shortname + ' Submissions');

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

<style lang="scss">
  /* Not scoped */



</style>