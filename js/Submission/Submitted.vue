<template>
  <div>
    <div class="left">
      <template v-if="submissions.length === 0">
        <p class="large center">No submissions, yet.</p>
      </template>
      <template v-else>
        <table class="small">
          <tr>
            <th>Submissions</th>
          </tr>
          <tr v-for="submission in submissions">
            <td><submitted-item :submission="submission" v-on:preview_img="preview_img" v-on:preview="previewer"></submitted-item></td>
          </tr>
        </table>
        <p v-if="type === 'text'" class="center">Click on any submission date to display the submission</p>
        <p v-if="type === 'program'" class="center">Click on any submission for submission options</p>
        <p v-if="type === 'image'" class="center">Click on any submission to view and for submission options</p>
        <pre class="cl-preview yellow-pad" v-if="preview !== null">{{preview}}</pre>
      </template>
    </div>
    <figure v-if="previewImg !== null" class="cl-preview"><img :src="previewImg"></figure>
  </div>
</template>

<script>
    /**
     * @file
     * Component that displays the list of submissions.
     */
  import SubmittedItemVue from './SubmittedItem.vue';

  export default {
      props: ['type', 'submissions'],
      data: function() {
          return {
              preview: null,
              previewImg: null
          }
      },
      components: {
          submittedItem: SubmittedItemVue
      },
      mounted() {
        if(this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
            this.previewImg = Site.root + '/cl/submission/view/' + this.submissions[0].id;
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
                          this.preview = response.getData('submission').attributes.text;
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
            } else {
                this.previewImg = null;
            }
        }

      }
  }
</script>