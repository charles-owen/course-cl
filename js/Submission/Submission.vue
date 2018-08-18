<template>
  <div class="cl-submission">
    <div v-if="options.submit" class="">
      <div v-if="!options.open">
        <p class="centerbox comp center">This assignment is not open for submissions.</p>
        <div v-if="staff" class="centerbox primary">
          <p class="center"><em>...Staff only for submission testing...</em></p>
          <component :is="submitter" :options="options" v-on:new_submissions="newSubmissions"></component>
        </div>
      </div>
      <component :is="submitter" v-if="options.open" :options="options" v-on:new_submissions="newSubmissions"></component>
    </div>
    <submitted :analysis='options.analysis' :type="options.type" :submissions="options.submissions"></submitted>
    <div v-if="options.additional !== null" v-html="options.additional" class=""></div>
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
      props: ['options'],
      data: function() {
          return {
              staff: false,
              submitter: 'submit-text'
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
          let user = this.$store.state.user.user;
          this.staff = user.atLeast(Member.STAFF);
          switch(this.options.type) {
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
            this.options.submissions = value;
        }
      }
  }
</script>