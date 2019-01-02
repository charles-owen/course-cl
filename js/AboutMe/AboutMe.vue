<template>
  <div class="content">
    <div class="full">
      <mask-vue :mask="mask">Communicating with server...</mask-vue>
      <form method="post" @submit.prevent="submit">
      <table class="small">
        <tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr>
        <tr><td>Name</td><td>{{user.name}}</td><td>As provided by the registrars office</td></tr>
        <tr><td>User ID</td><td>{{user.userId}}</td><td>As provided by the registrars office</td></tr>
        <tr><td>Email</td>
          <td v-if="!editing">{{user.email}}</td>
          <td v-else><input type="email" v-model="email" spellcheck="false"></td>
          <td>You are allowed to change your email address</td></tr>
        <tr><td>Semester</td><td>{{user.member.semester}}</td><td>&nbsp;</td></tr>
        <tr><td>Section</td><td>{{user.member.section}}</td><td>&nbsp;</td></tr>
      </table>
        <p v-if="!editing" class="center"><button @click.prevent="edit">Edit</button></p>
        <p v-else class="center"><button type="submit">Submit</button> <button @click.prevent="cancel">Cancel</button></p>
      </form>
    </div>
  </div>
</template>

<script>
  import Dialog from 'dialog-cl';
  const UserVueBase = Site.UserVueBase;
  const MaskVue = Site.MaskVue;

	export default {
		'extends': UserVueBase,
		props: ['json'],
		data: function() {
			return {
				editing: false,
        email: '',
          mask: false
			}
		},
	  components: {
		  maskVue: MaskVue
	  },
      mounted() {
			this.setTitle('About ' + this.user.displayName());

			this.email = this.user.email;
		},
		methods: {
			edit() {
				this.editing = true;
      },
      cancel() {
				this.editing = false;
      },
      submit() {
				  if(!this.validEmail(this.email)) {
            new Dialog.MessageBox('Invalid Email!', 'Must provide a valid email address.',
              Dialog.MessageBox.OK, () => {
              });

            return;
          }

          this.mask = true;
          let params = {
            email: this.email
          }
          this.$site.api.post('/api/users/userupdate', params)
              .then((response) => {
          	      this.mask = false;
                  if (!response.hasError()) {
                  	const user = new Users.User(response.getData('user').attributes);
	                  this.$store.commit('user/set', user);
                    this.editing = false;
                  } else {
	                  this.$site.toast(this, response);
                  }

              })
              .catch((error) => {
              	this.mask = false;
	              this.$site.toast(this, error);
              });
      },
      validEmail: function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
		}
	}
</script>

<style lang="scss" scoped>
  table {
    tr {
      td:nth-child(2) {
        min-width: 195px;
      }
    }
  }
  button {
    width: 7em;
  }

  input[type=email] {
    width: 175px;
  }
</style>
