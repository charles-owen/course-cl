<template>
  <div class="content cl-members-editor">
    <div class="full">

      <div v-if="fetcher.fetched">
        <p v-if="management" class="center">
          <router-link :to="toNew" tag="button">Add Member</router-link>
        </p>
        <table v-if="users.length > 0">
          <tr>
            <th scope="col"></th>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
          <tr v-for="user in users">
            <td v-if="management">
              <router-link :to="toUser(user)"><img :src="pencil" alt="Edit" title="Edit"></router-link>
              <a href="javascript:" @click.prevent="deleteUser(user)"><img :src="deleter" alt="Delete"
                                                                           title="Delete"></a></td>
            <td v-if="management">
              <router-link :to="toUser(user)">{{user.userId}}</router-link>
            </td>
            <td v-if="management">
              <router-link :to="toUser(user)">{{user.name}}</router-link>
            </td>
            <td v-if="!management"><a @click.prevent="presentUser(user)" href="javascript:;"><img :src="info" alt="View"
                                                                                                  title="View"></a></td>
            <td v-if="!management"><a @click.prevent="presentUser(user)" href="javascript:;">{{user.userId}}</a></td>
            <td v-if="!management"><a @click.prevent="presentUser(user)" href="javascript:;">{{user.name}}</a></td>
            <td>{{user.email}}</td>
            <td>{{user.roleName()}}</td>
          </tr>
        </table>
        <p v-if="users.length == 0" class="centerbox comp center">
          There are currently no members enrolled in this section.</p>
        <bulk-upload v-if="management"></bulk-upload>

      </div>

      <fetcher :fetcher="fetcher"></fetcher>
    </div>
  </div>
</template>

<script>
    import Dialog from 'dialog-cl';
    import {Member} from '../Members/Member.js';
    import {mapState} from 'vuex';
    import BulkUploadComponent from './BulkUploadComponent.vue';

    const FetcherVue = Users.FetcherVue;


    export default {
        props: [
            'management'
        ],
        data: function() {
            return {
                toNew: Site.root + '/cl/console/management/course/member/new',
                pencil: Site.root + '/vendor/cl/site/img/pencil16.png',
                deleter: Site.root + '/vendor/cl/site/img/x.png',
                info: Site.root + '/vendor/cl/site/img/info16.png',
                toUser: function(user) {
                      return Site.root + '/cl/console/management/course/member/' + user.member.id;
                }
            }
        },
        methods: {
            fetchMore() {
                this.$store.dispatch('members/more');
            },
            deleteUser: function(user) {
                new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete ' + user.name,
                    Dialog.MessageBox.OKCANCEL, () => {
                        this.$store.dispatch('members/delete', {id: user.member.id});
                    });
            },
            presentUser: function(user) {
                let content = `<div class="cl-members-editor-dlg">
<div class="tabular">
<p><span class="label">User ID: </span><span>${user.userId}</span></p>
<p><span class="label">Name: </span><span>${user.name}</span></p>
<p><span class="label">Email: </span><span>${user.email}</span></p>
<p><span class="label">Role: </span><span>${user.userRoleName()}</span></p>
</div>
</div>`;
                new Dialog({
                    content: content
                });
            }
        },
        computed: mapState({
            users: state => state.members.users,
            fetcher: state => state.members.fetcher

        }),
        components: {
            'bulk-upload': BulkUploadComponent,
            'fetcher': FetcherVue
        },
        mounted() {
            this.$parent.setTitle(': Members');

            const member = this.$store.state.user.user.member;
            let query = {
                semester: member.semester,
                section: member.section
            };
            this.$store.commit('members/query', query);

            // We reset the users state since we may add users
            if(this.management) {
                this.$store.commit('users/reset');
            }
console.log('Calling fetch');
            this.$store.dispatch('members/fetch');
        }
    }
</script>

// Notice: Not scoped!
<style lang="scss">
div.cl-members-editor {

  table {
    font-size: 0.9em;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
  }

  td:first-child {
    text-align: center;
  }

}

div.cl-members-editor-dlg {
  padding: 1em;

  div.tabular {
    display: table;
    margin: 0 auto;

    p {
      display: table-row;

      span:first-child {
        padding-right: 1em;
        font-style: italic;
        text-align: right;
      }

      span {
        display: table-cell;
      }
    }


  }


}

</style>