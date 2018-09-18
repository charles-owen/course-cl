<template>
  <div>
    <form ref="form" class="file" enctype="multipart/form-data" method="post"
          :action="action" :target="'upload_target_' + submission.tag" @submit="submit">
      <label>Submit: <input type="file" name="file" @change="files = $event.target.files"/></label>
      <input class="upload" type="submit" name="submit" value="Upload File" />
      <iframe ref="iframe" @load="load" :name="'upload_target_' + submission.tag" src="" style="width:0;height:0;border:0px solid #fff;display:none"></iframe>
    </form>
  </div>
</template>

<script>
  import {APIResponse} from 'site-cl/js/APIResponse';

  export default {
      props: ['submission'],
      data: function() {
          return {
              files: null,
              action: null,
              submitting: false
          }
      },
      mounted() {
	      const system = this.submission.teaming !== null ? 'team' : 'course';
	      this.action = `${this.$site.root}/cl/api/${system}/submission/submit/${this.submission.assignTag}/${this.submission.tag}`;
      },
      methods: {
          load() {
              if(!this.submitting) {
                  return;
              }

              this.submitting = false;

              let json = frames['upload_target_' + this.submission.tag].document.getElementsByTagName("body")[0].innerHTML;
              let response;
              try {
	              response = new APIResponse(JSON.parse(json));
              } catch(exception) {
              	console.log(exception);
              	console.log(json);
	              Site.toast(this, "Error during submission");
              	return;
              }

              if (!response.hasError()) {
                  this.$refs['form'].reset();
                  this.$emit('new_submissions', response.getData('submissions').attributes);
                  Site.toast(this, "Submission successfully saved to the server");
              } else {
                  Site.toast(this, response);
              }
          },
          submit() {
              this.submitting = true;
          }
      }
  }
</script>
