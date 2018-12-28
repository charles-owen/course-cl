<template>
  <div>
    <form method="post" @submit.prevent="submit">
      <div ref="editor"></div>
      <p><input type="submit" value="Submit"></p>
    </form>
  </div>
</template>

<script>

  export default {
      props: ['submission'],
      mounted() {
          const element = this.$refs['editor'];
          this.editor = new this.$site.Editor(element, {
              height: this.submission.height,
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

            const system = this.submission.teaming !== null ? 'team' : 'course';
            this.$site.api.post(`/api/${system}/submission/submit/${this.submission.assignTag}/${this.submission.tag}`, params)
                .then((response) => {
                    if (!response.hasError()) {
                        this.editor.textarea.value = '';
                        this.$emit('new_submissions', response.getData('submissions').attributes);
	                      this.$site.toast(this, "Submission successfully saved to the server");
                    } else {
	                      this.$site.toast(this, response);
                    }

                })
                .catch((error) => {
	                  this.$site.toast(this, error);
                });
          }
      }
  }
</script>
