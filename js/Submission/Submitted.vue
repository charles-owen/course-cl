<template>
  <div>
    <div>
      <template v-if="submissions.length === 0">
        <p class="large center">No submissions, yet.</p>
      </template>
      <template v-else>
        <table class="small">
          <tr>
            <th>Submissions</th>
          </tr>
          <tr v-for="submitted in submissions">
            <td><submitted-item :assigntag="submission.assignTag" :tag="submission.tag" :submission="submitted" :analysis="submission.analysis" :teaming="submission.teaming" @result='analysisResult' v-on:preview_img="preview_img" v-on:preview="previewer"></submitted-item></td>
          </tr>
        </table>
        <p v-if="submission.type === 'text'" class="center">Click on any submission date to display the submission</p>
        <p v-if="submission.type === 'program'" class="center">Click on any submission for submission options</p>
        <p v-if="submission.type === 'image'" class="center">Click on any submission to view and for submission options</p>
        <div v-if="previewTxt !== null">
          <pre class="cl-preview yellow-pad" v-if="previewTxt !== null">{{previewTxt}}</pre>
          <p class="cl-preview-time" v-html="previewTime"></p>
        </div>
      </template>
    </div>
    <pre class="cl-analysis" v-if="result !== null">{{result}}</pre>
    <div v-if="previewImg !== null">
      <figure v-if="previewImg !== null" class="cl-preview"><img :src="previewImg"></figure>
      <p class="cl-preview-time">{{previewTime}}</p>
    </div>
  </div>
</template>

<script>
    /**
     * Component that displays the list of submissions.
     * @constructor SubmittedVue
     */
  import SubmittedItemVue from './SubmittedItem.vue';
  import {TimeFormatter} from 'site-cl/js/TimeFormatter';

  export default {
      props: ['submission', 'submissions'],
      data: function() {
          return {
              previewTxt: null,
              previewImg: null,
              previewTime: null,
              result: null
          }
      },
      components: {
          submittedItem: SubmittedItemVue
      },
      mounted() {
	      const service = this.submission.teaming !== null ? 'team' : 'course';
        if(this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
            this.previewImg = `${this.$site.root}/cl/${service}/submission/view/${this.submissions[0].id}`;
            this.previewTime = TimeFormatter.relativeUNIX(this.submissions[0].date);
        }

        if(this.submission.preview !== undefined) {
        	this.previewTxt = this.submission.preview.text;
        	this.previewTime = TimeFormatter.relativeUNIX(this.submission.preview.date);
        }
      },
      watch: {
        submissions: function() {
	        const service = this.submission.teaming !== null ? 'team' : 'course';
	        if(this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
                this.previewImg = `${this.$site.root}/cl/${service}/submission/view/${this.submissions[0].id}`;
            } else {
                this.previewImg = null;
            }
        }
      },
      methods: {
        previewer(submission) {
        	this.previewTxt = "\n";
        	this.previewTime = '&nbsp;';
            const service = this.submission.teaming === null ? 'course' : 'team';
            this.$site.api.get(`/api/${service}/submission/get/${this.submission.assignTag}/${this.submission.tag}/${submission.id}`, {})
                  .then((response) => {
                      if (!response.hasError()) {
                          const submission = response.getData('submission').attributes;
                          this.previewTxt = submission.text;
                          this.previewTime = TimeFormatter.relativeUNIX(submission.date);
                      } else {
	                      this.$site.toast(this, response);
                      }

                  })
                  .catch((error) => {
	                  this.$site.toast(this, error);
                  });
        },
        preview_img(submission) {
	        const service = this.submission.teaming === null ? 'course' : 'team';
	        if(submission.type.substr(0, 6) === 'image/') {
            	this.previewImg = `${this.$site.root}/cl/${service}/submission/view/${submission.id}`;
	            this.previewTime = TimeFormatter.relativeUNIX(submission.date);
            } else {
                this.previewImg = null;
            }
        },
        analysisResult(result) {
        	this.result = result;
        }

      }
  }
</script>