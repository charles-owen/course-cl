<template>
  <div class="content">
    <div class="full">

      <membersfetcher>
        <template slot-scope="fetcher">
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in fetcher.users">
              <td >{{user.userId}}</td>
              <td>{{user.name}}</td>
              <td>{{user.roleName()}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
  import MembersFetcherComponent from './MembersFetcherComponent.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;

  export default {
    'extends': ConsoleComponentBase,
    components: {
      'membersfetcher': MembersFetcherComponent
    },
    mounted() {
      this.setTitle(': Member Listing');
    }
  }
</script>
