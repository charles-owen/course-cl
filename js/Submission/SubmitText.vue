<template>
  <div>
    <form method="post" @submit.prevent="submit">
      <div ref="editor"></div>
      <p><input type="submit" value="Submit"></p>
    </form>
  </div>
</template>

<script>
  import {Editor} from 'site-cl/js/UI/Editor';

  export default {
      props: ['options'],
      mounted() {
          const element = this.$refs['editor'];
          this.editor = new Editor(element, {
              height: this.options.height,
              classes: ['yellow-pad']
          });
      },
      methods: {
          submit() {
            const text = this.editor.textarea.value.trim();
            if(text === '') {
                Site.toast(this, 'You must enter some text to submit');
                return;
            }

            let params = {
                type: 'text/plain',
                text: text
            }
            console.log(params);

            Site.api.post(`/api/course/submission/submit/${this.options.assignTag}/${this.options.tag}`, params)
                .then((response) => {
                    if (!response.hasError()) {
                        this.editor.textarea.value = '';
                        this.$emit('new_submissions', response.getData('submissions').attributes);
                        Site.toast(this, "Submission successfully saved to the server");
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
