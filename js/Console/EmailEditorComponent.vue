<template>
  <form @submit.prevent="submit">
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
    <p class="buttons"><input type="submit" value="Send">
      <input type="button" value="Cancel" @click.prevent="cancel">
    </p>
  </form>
</template>

<script>
	const MaskVue = Site.Site.MaskVue;

	const MAX_DISPLAYED = 10;

	export default {
		props: ['to'],
    emits: ['cancel', 'done'],
		data: function () {
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
			this.editor = new this.$site.Editor(element, {
				tab: true,
				autoIndent: true
			});

			this.displayTo = [];
			for (let i = 0; i < this.to.length && i < MAX_DISPLAYED; i++) {
				this.displayTo.push(this.to[i]);
			}
		},
		methods: {
			cancel() {
				this.$emit('cancel');
			},
			submit() {
				if (this.mask) {
					return;
				}

				let subject = this.subject.trim();
				if (subject === '') {
					this.$site.toast(this, 'Must provide a subject');
					return;
				}

				let message = this.editor.textarea.value;
				if (message === '') {
					this.$site.toast(this, 'Must provide a message');
					return;
				}

				let to = [];
				for (let user of this.to) {
					if (user.email === null) {
						continue;
					}

					to.push({name: user.name, email: user.email})
				}

				if (to.length === 0) {
					this.$emit('done');
					return;
				}

				let params = {
					to: to,
					subject: subject,
					message: message
				}

				this.mask = true;
				this.$site.api.post('/api/course/email', params)
					.then((response) => {
						this.mask = false;

						if (!response.hasError()) {
							this.$emit('done');
						} else {
				      this.$site.toast(this, response);
						}

					})
					.catch((error) => {
						this.mask = false;
			        this.$site.toast(this, error);
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
