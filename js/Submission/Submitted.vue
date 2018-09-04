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
          <tr v-for="submission in submissions">
            <td><submitted-item :submission="submission" :analysis="analysis" @result='analysisResult' v-on:preview_img="preview_img" v-on:preview="previewer"></submitted-item></td>
          </tr>
        </table>
        <p v-if="type === 'text'" class="center">Click on any submission date to display the submission</p>
        <p v-if="type === 'program'" class="center">Click on any submission for submission options</p>
        <p v-if="type === 'image'" class="center">Click on any submission to view and for submission options</p>
        <div v-if="previewTxt !== null">
          <pre class="cl-preview yellow-pad" v-if="previewTxt !== null">{{previewTxt}}</pre>
          <p class="cl-preview-time">{{previewTime}}</p>
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
      props: ['type', 'submissions', 'analysis', 'preview'],
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
        if(this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
            this.previewImg = Site.root + '/cl/submission/view/' + this.submissions[0].id;
            this.previewTime = TimeFormatter.relativeUNIX(this.submissions[0].date);
        }

        if(this.preview !== undefined) {
        	this.previewTxt = this.preview.text;
        	this.previewTime = TimeFormatter.relativeUNIX(this.preview.date);
        }
      },
      watch: {
        submissions: function() {
            if(this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
                this.previewImg = Site.root + '/cl/submission/view/' + this.submissions[0].id;
            } else {
                this.previewImg = null;
            }
        }
      },
      methods: {
        previewer(submission) {
            Site.api.get('/api/course/submission/get/' + submission.id, {})
                  .then((response) => {
                      if (!response.hasError()) {
                          const submission = response.getData('submission').attributes;
                          this.previewTxt = submission.text;
                          this.previewTime = TimeFormatter.relativeUNIX(submission.date);
                      } else {
                          Site.toast(this, response);
                      }

                  })
                  .catch((error) => {
                      Site.toast(this, error);
                  });
        },
        preview_img(submission) {
            if(submission.type.substr(0, 6) === 'image/') {
            	this.previewImg = Site.root + '/cl/submission/view/' + submission.id;
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