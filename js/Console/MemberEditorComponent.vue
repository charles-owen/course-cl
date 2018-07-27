<template>
  <div class="cl-member-editor conent">
    <div class="full">

      <fetcher :fetcher="fetcher"></fetcher>
      <transition name="fade">
        <div v-if="!fetcher.fetching">
          <form @submit.prevent="submit" name="user" id="user">
            <input type="hidden" name="new" id="new" value="">
            <fieldset>
              <legend>{{legend}}</legend>
              <p>
                <label>User ID<br>
                  <input :disabled="id!=='new'" ref="userid" type="text" v-model="userId" class="short" size="20"
                         maxlength="30"></label>
              </p>
              <p>
                <label class="form_text">Name <span class="small">(last, first)</span><br>
                  <input :disabled="fetched" type="text" v-model="name" maxlength="150"></label>
              </p>
              <p>
                <label class="form_text">Email<br>
                  <input :disabled="fetched" ref="email" type="email" v-model="email" maxlength="254"></label>
              </p>
              <div class="roles">
                <div class="label"><em>Role:</em></div>
                <div class="options">
                  <label v-for="(roleObj, id) in roles"><input v-model="role" name="role" type="radio" :value="id"
                                                               :checked="checked(id)"> {{roleObj.name}}</label>
                </div>
              </div>
              <p class="center">
                <button>Submit</button>
                <router-link :to="cancel" tag="button">Cancel</router-link>
              </p>
            </fieldset>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {Member} from '../Members/Member.js';

    const FetcherVue = Users.FetcherVue;

    export default {
        props: ['id'],
        data: function() {
            return {
                cancel: Site.root + '/cl/console/management/course/members',
                legend: this.id === 'new' ? 'New Member' : 'Edit Member',
                roles: this.visibleRoles,

                userId: '',
                name: '',
                email: '',
                role: 'T',
                timer: null,
                seq: 1,
                fetched: false
            }
        },
        watch: {
            userId(after, before) {
                if(this.timer !== null) {
                    clearTimeout(this.timer);
                    this.timer = null;
                };

                this.timer = setTimeout(() => {
                    this.fetch(after);
                }, 300);
            }
        },
        computed: mapState({
            fetcher: state => state.members.fetcher

        }),
        components: {
            'fetcher': FetcherVue
        },
        beforeCreate() {
            let member = new Member();
            let roles = member.getRoles();
            this.visibleRoles = {};
            for(let role in roles) {
                if(roles[role].skip !== true) {
                    this.visibleRoles[role] = roles[role];
                }
            }
        },
        mounted() {
            if(this.id === 'new') {
                this.$parent.setTitle(': Add Course Member');
                this.$nextTick(() => {
                    this.$refs.userid.select();
                })
            } else {
                this.$parent.setTitle(': Course Member');
                this.$store.dispatch('members/get', {id: this.id})
                    .then((user) => {
                        this.userId = user.userId;
                        this.name = user.name !== null ? user.name : '';
                        this.email = user.email !== null ? user.email : '';
                        this.role = user.role();
                        this.fetched = true;
                        this.$nextTick(() => {
                            this.$refs.userid.select();
                        })
                    })
                    .catch((msg) => {
                        Site.toast(this, msg);
                        setTimeout(() => {
                            this.$router.push({name: 'members'});
                        }, 3000);
                    })

            }

        },
        methods: {
            checked(role) {
                return role === this.role;
            },
            fetch(userId) {
                if(this.id !== 'new') {
                    return;
                }

                userId = userId.trim();
                if(userId === '') {
                    this.fetched = false;
                    return;
                }

                this.seq++;
                Site.api.get('/api/users', {userId: userId, seq: this.seq})
                    .then((response) => {
                        if(!response.hasError()) {
                            // This protects from out-of-order processing
                            // of results from the server...
                            const seq = response.getData('seq');
                            if(+seq.id !== this.seq) {
                               return;
                            }

                            const data = response.getData('users');
                            if(data !== null) {
                                if(data.attributes.length < 1) {
                                    // User does not exist
                                    this.fetched = false;
                                    //this.name = '';
                                    //this.email = '';
                                } else {
                                    this.fetched = true;
                                    let user = data.attributes[0];
                                    this.name = user.name !== null ? user.name : ''
                                    this.email = user.email !== null ? user.email : '';
                                }
                            }

                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                      console.log(error);
                        Site.toast(this, error);
                    });

            },
            submit() {
                const member = this.$store.state.user.user.member;
                let data = {
                    userId: this.userId,
                    name: this.name,
                    email: this.email,
                    role: this.role,
                    semester: member.semester,
                    section: member.section
                };

                if(this.id !== 'new') {
                    data.id = this.id;
                }

                let path = this.id === 'new' ? 'members/new' : 'members/update';
                this.$store.dispatch(path, data)
                    .then(() => {
                        this.$router.push({name: 'members'});
                    })
                    .catch((response) => {
                        console.log(response);
                        Site.toast(this, response);
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

div.cl-member-editor {
  min-height: 346px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div.content {
    width: 100%;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

form {
  width: 100%;
  max-width: 30em;
  margin: 1em auto;
  background-color: #eeeeee;

  p {
    margin: 0.5em 0;
  }

  fieldset {
    padding: 0 2em;
  }

  input {
    width: 100%;
  }

  label {
    font-style: italic;

    input {
      font-style: normal;
    }
  }

  input.short {
    width: 50%;
  }

  input.medium {
    width: 75%;
  }

  button {
    width: 7em;
  }
}

div.roles {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 0 auto;

  div.label {
    flex: 0 1 auto;
    padding: 0 1em 0 0;
  }

  div.options {
    flex: 0 1 auto;

    label {
      display: block;
    }

    input {
      width: auto;
    }
  }
}

</style>