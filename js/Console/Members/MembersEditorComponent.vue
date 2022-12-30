<template>
  <div class="content cl-members-editor">
    <div class="full">
      <div v-if="fetcher.fetched">
        <div v-if="users.length > 0">
        <table class="small">
          <tr>
            <th scope="col"></th>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Created</th>
          </tr>
          <tr v-for="user in users">
            <td v-if="management" class="cl-mgmt-options">
              <router-link :to="toUser(user)"><img :src="root + '/vendor/cl/site/img/pencil16.png'" alt="Edit" title="Edit"></router-link>&nbsp;<a @click.prevent="deleteUser(user)"><img :src="root + '/vendor/cl/site/img/x.png'" alt="Delete" title="Delete"></a></td>
            <td v-if="management">
              <router-link :to="toUser(user)">{{user.userId}}</router-link>
            </td>
            <td v-if="management">
              <router-link :to="toUser(user)">{{user.name}}</router-link>
            </td>
            <td v-if="!management"><a @click.prevent="presentUser(user)" href="javascript:;"><img :src="root + '/vendor/cl/site/img/info16.png'" alt="View"
                                                                                                  title="View"></a></td>
            <td v-if="!management"><a @click.prevent="presentUser(user)" href="javascript:;">{{user.userId}}</a></td>
            <td v-if="!management"><a @click.prevent="presentUser(user)" href="javascript:;">{{user.name}}</a></td>
            <td><a v-if="user.email !== null" :href="'mailto:' + user.email">{{user.email}}</a></td>
            <td class="small">{{user.roleName(true)}}</td>
            <td class="small">{{timeRelativeUNIX(user.member.created, null, 'M-DD-YYYY')}}</td>
          </tr>
        </table>
          <p class="center small"><em>{{stats}}</em></p>
        </div>
        <p v-else class="centerbox comp center">
          There are currently no members enrolled in this section.</p>
        <bulk-upload v-if="management"></bulk-upload>

      </div>

      <fetcher :fetcher="fetcher"></fetcher>
    </div>
  </div>
</template>

<script>
  import Dialog from 'dialog-cl';
  import BulkUploadComponent from './BulkUploadComponent.vue';

  const FetcherVue = Site.FetcherVue;
  const mapState = Site.Vuex.mapState;
  const ConsoleComponentBase = Site.ConsoleComponentBase;

  /**
   * Presentation for all members for editing/viewing
   *
   * Displays all members with links for options.
   * @constructor MembersEditorComponent
   */
  export default {
    'extends': ConsoleComponentBase,
    props: [
      'management'
    ],
    data: function () {
      return {
        toUser: function (user) {
          return this.root + '/cl/console/management/course/member/' + user.member.id;
        },
        stats: ''
      }
    },
    methods: {
      fetchMore() {
        this.$store.dispatch('members/more');
      },
      deleteUser: function (user) {
        new Dialog.MessageBox('Are you sure?', 'Are you sure you want to delete ' + user.name,
                Dialog.MessageBox.OKCANCEL, () => {
                  this.$store.dispatch('members/delete', {id: user.member.id});
                });
      },
      presentUser: function (user) {
        let content = `<div class="cl-dialog">
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
      },
      computeStats() {
        let roleCnt = [];
        for (let user of this.users) {
          let role = user.role();
          if (roleCnt[role] === undefined) {
            roleCnt[role] = 1;
          } else {
            roleCnt[role]++;
          }
        }

        this.stats = this.users.length + ' members';

        const user = this.$store.state.user.user;
        const roles = user.getRoles();
        for (let role in roleCnt) {
          const r = roles[role];
          const roleName = r.short !== undefined ? r.short : r.name;
          this.stats += ' / ' + roleCnt[role] + ' ' + roleName;
        }
      }
    },
    computed: mapState({
      users: state => state.members.users,
      fetcher: state => state.members.fetcher
    }),
    watch: {
      users: function (to, fm) {
        this.computeStats();
      }
    },
    components: {
      'bulk-upload': BulkUploadComponent,
      'fetcher': FetcherVue
    },
    mounted() {
      // Add the 'Add Member' option to the the nav2 navigation bar
      if (this.management) {
        this.addComponent = this.$site.console.components.addNav2Link(this, 'Add Member', 5, () => {
          this.$router.push(this.$site.root + '/cl/console/management/course/member/new');
        });
      }

      const member = this.$store.state.user.user.member;
      let query = {
        semester: member.semester,
        section: member.section
      };
      this.$store.commit('members/query', query);

      this.$root.setTitle(`: ${member.semester}/${member.section} Members`);

      // We reset the users state since we may add users
      if (this.management) {
        this.$store.commit('users/reset');
      }

      this.$store.dispatch('members/fetch');
      this.computeStats();
    },
    beforeUnmount() {
      this.$site.console.components.removeNav2(this, this.addComponent);
    }
  }
</script>
