<template>
  <div id="drops-component">
    <p>The following users are indicated as dropped from the uploaded course
    role. Select any you wish to flag as dropped in the system.</p>
    <p>Dropping a student does not remove them from the system, it only
      changes their status to <em>dropped</em></p>
    <table>
      <tr>
        <th scope="col"><input type="checkbox" v-model="all" @change.prevent="checkAll"></th>
        <th scope="col">User</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
      </tr>
      <tr v-for="user in drops">
        <td><input type="checkbox" v-model="user.drop"></td>
        <td>{{user.userId}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.roleName()}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
  export default {
      data: function() {
          return {
            drops: null,
            all: false
          }
      },
      methods: {
          checkAll: function(event) {
              this.drops.forEach((drop) => {
                  drop.drop = this.all;
              });
          }
      },
      mounted() {
          console.log(this.$parent);
          this.drops = this.$parent.drops;
      }
  }

</script>

<style lang="scss" scoped>
div#drops-component {
  padding: 1em;

  th:first-child {
    text-align: center;
    vertical-align: bottom;
  }
}
</style>
