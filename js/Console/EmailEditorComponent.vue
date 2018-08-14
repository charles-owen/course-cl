<template>
  <form v-else @submit.prevent="submit">
    <mask-vue :mask="mask">Sending Email...</mask-vue>
    <div class="to">To
      <div v-for="user in displayTo" :key="user.id">
        {{user.name}}
        &lt;<span class="no-email" v-if="user.email === null">no email</span><span v-else>{{user.email}}</span>&gt;
      </div>
      <div v-if="this.to.length > this.displayTo.length">...</div>
    </div>
    <div class="subject"><label>Subject <input type="text" v-model="subject"></label></div>
    <div ref="editor"></div>
    <div class="buttons"><input type="submit" value="Send">
      <input type="button" value="Cancel" @click.prevent="cancel"></div>
  </form>
</template>

<script>
  import {Editor} from 'site-cl/js/UI/Editor';
  import MaskVue from 'site-cl/js/Vue/Mask.vue';

    const MAX_DISPLAYED = 10;

    export default {
        props: ['to'],
        data: function() {
            return {
                displayTo: [],
                subject: '',
                mask: false
            }
        },
        components: {
          maskVue: MaskVue
        },
        mounted() {
            const element = this.$refs['editor'];
            this.editor = new Editor(element, {
                tab: true,
                autoIndent: true
            });

            this.displayTo = [];
            for(let i=0; i<this.to.length && i < MAX_DISPLAYED; i++) {
                this.displayTo.push(this.to[i]);
            }
        },
        methods: {
            cancel() {
                this.$emit('cancel');
            },
            submit() {
                if(this.mask) {
                    return;
                }

                let subject = this.subject.trim();
                if(subject === '') {
                    Site.toast(this, 'Must provide a subject');
                    return;
                }

                let message = this.editor.textarea.value;
                if(message === '') {
                    Site.toast(this, 'Must provide a message');
                    return;
                }

                let to = [];
                for(let user of this.to) {
                    if(user.email === null) {
                        continue;
                    }

                    to.push({name: user.name, email: user.email})
                }

                if(to.length === 0) {
                    this.$emit('done');
                    return;
                }

                let params = {
                    to: to,
                    subject: subject,
                    message: message
                }

                this.mask = true;
                Site.api.post('/api/course/email', params)
                    .then((response) => {
                        this.mask = false;

                        if (!response.hasError()) {
                            this.$emit('done');
                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                        this.mask = false;
                        Site.toast(this, error);
                    });
            }
        }
    }

</script>

<style lang="scss" scoped>

  form {
    position: relative;
  }

  div.to {
    margin: 1em 0;
    font-style: italic;

    > div {
      font-style: normal;
      font-size: 0.85em;

      span.no-email {
        color: red;
        font-style: italic;
      }
    }
  }

  div.subject {
    margin: 1em 0;
    label {
      font-style: italic;
    }

    input[type=text] {
      display: block;
      margin: 0.2em 0 0 0;
      font-style: normal;
      width: 25em;
    }
  }

  div.buttons {
    input {
      width: 6em;
    }
  }


</style>
