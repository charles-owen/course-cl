<template>
  <div class="cl-submission">
    <div v-if="submission.submit" class="">
      <div v-if="!submission.open">
        <p class="centerbox comp center">This assignment is not open for submissions.</p>
        <div v-if="staff" class="centerbox primary">
          <p class="center"><em>...Staff only for submission testing...</em></p>
          <component :submission="submission" :is="submitter" v-on:new_submissions="newSubmissions"></component>
        </div>
      </div>
      <component v-if="submission.open" :submission="submission" :is="submitter" v-on:new_submissions="newSubmissions"></component>
    </div>
    <submitted :submission="submission" :submissions="submissions"></submitted>
    <div v-if="submission.additional !== null" v-html="submission.additional" class=""></div>
  </div>
</template>

<script>
    import {Member} from '../Members/Member';
    import SubmitTextVue from './SubmitText.vue';
    import SubmitProgramVue from './SubmitProgram.vue';
    import SubmitImageVue from './SubmitImage.vue';
    import SubmitUnknownVue from './SubmitUnknown.vue';
    import SubmittedVue from './Submitted.vue';
    import {TEXT_TYPES} from './SubmittedItem.vue';

    export default {
      props: ['submission'],
      data: function() {
          return {
              staff: false,
              submitter: 'submit-text',
              submissions: []
          }
      },
      components: {
          submitText: SubmitTextVue,
          submitProgram: SubmitProgramVue,
          submitImage: SubmitImageVue,
          submitUnknown: SubmitUnknownVue,
          submitted: SubmittedVue
      },
      mounted() {
      	this.submissions = this.submission.submissions;

          let user = this.$store.state.user.user;
          this.staff = user.atLeast(Member.STAFF);
          switch(this.submission.type) {
              case 'program':
                  this.submitter = 'submit-program';
                  break;

              case 'text':
                  this.submitter = 'submit-text';
                  break;

              case 'image':
                  this.submitter = 'submit-image';
                  break;

              default:
                  this.submitter = 'submit-unknown';
                  break;
          }
      },
      methods: {
        newSubmissions(value) {
            this.submissions = value;
        }
      }
  }
</script>