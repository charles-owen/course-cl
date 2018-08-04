<template>
  <div>
    <form ref="form" class="file" enctype="multipart/form-data" method="post"
          :action="action" :target="'upload_target_' + options.tag" @submit="submit">
      <label>Submit: <input type="file" name="file" @change="files = $event.target.files"/></label>
      <input class="upload" type="submit" name="submit" value="Upload File" />
      <iframe ref="iframe" @load="load" :name="'upload_target_' + options.tag" src="" style="width:0;height:0;border:0px solid #fff;display:none"></iframe>
    </form>
  </div>
</template>

<script>
  import {APIResponse} from 'site-cl/js/APIResponse';

  export default {
      props: ['options'],
      data: function() {
          return {
              files: null,
              action: `${Site.root}/cl/api/course/submission/submit/${this.options.assignTag}/${this.options.tag}`,
              submitting: false
          }
      },
      mounted() {

      },
      methods: {
          load() {
              if(!this.submitting) {
                  return;
              }

              this.submitting = false;

              let json = frames['upload_target_' + this.options.tag].document.getElementsByTagName("body")[0].innerHTML;
              let response = new APIResponse(JSON.parse(json));

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
