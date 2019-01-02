<template>
  <div class="content">
    <div class="full">

      <membersfetcher v-if="!composing">
        <template slot-scope="fetcher">
          <table class="small" :ensure="ensure(fetcher.users)">
            <tr>
              <th class="center"><input v-model="all" type="checkbox" @change="allChange"></th>
              <th>User</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in fetcher.users" :key="user.id">
              <td><input type="checkbox" v-model="flags[user.id]"></td>
              <td >{{user.userId}}</td>
              <td>{{user.name}}</td>
              <td><a :href="'mailto:' + user.email">{{user.email}}</a></td>
              <td>{{user.roleName()}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>
      <email-editor v-else @cancel="cancelEmail" @done="doneSending" :to="toUsers"></email-editor>
    </div>
  </div>
</template>

<script>
    import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';
    import EmailEditorComponent from './EmailEditorComponent.vue';
    import Dialog from 'dialog-cl';

    const ConsoleComponentBase = Site.ConsoleComponentBase;


    export default {
        'extends': ConsoleComponentBase,
        data: function() {
            return {
                all: false,
                flags: {},
                users: {},
                composing: false,
                toUsers: []
            }
        },
        components: {
            'membersfetcher': MembersFetcherComponent,
            'emailEditor': EmailEditorComponent
        },
        mounted() {
            const member = this.$store.state.user.user.member;

            this.setTitle(': Course Email');

            this.addSendEmail();


        },
        methods: {
            allChange() {
                for(let id in this.flags) {
                    this.flags[id] = this.all;
                }
            },
            ensure(users) {
                for(let user of users) {
                    if(this.flags[user.id] === undefined) {
                        this.$set(this.flags, user.id, false);
                        this.users[user.id] = user;
                    }
                }
            },
            addSendEmail() {
                this.sendEmail = this.addNav2('Send Email', 3, () => {
                    this.toUsers = [];
                    for(let id in this.flags) {
                        if(this.flags[id]) {
                            this.toUsers.push(this.users[id]);
                        }
                    }

                    console.log(this.toUsers);
                    if(this.toUsers.length === 0) {
                        new Dialog.MessageBox('No indicated members!', 'Must specify members to send email to.',
                            Dialog.MessageBox.OK, () => {
                            });

                        return;
                    }



                    this.removeNav2(this.sendEmail);
                    this.composing = true;
                });
            },
            cancelEmail() {
                this.composing = false;
                this.addSendEmail();
            },
            doneSending() {
                this.composing = false;
                this.all = false;
                for(let id in this.flags) {
                    this.flags[id] = false;
                }

                this.addSendEmail();
            }

        }
    }
</script>

<style lang="scss">
  /* Not scoped */


</style>