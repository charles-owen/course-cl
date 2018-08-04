<template>
  <div class="cl-prevnext">
    <div><router-link v-if="user !== null && user.prev !== undefined" :to="link + user.prev.member.id">Previous Member</router-link></div>
    <div><slot></slot></div>
    <div><router-link v-if="user !== null && user.next !== undefined" :to="link + user.next.member.id">Next Member</router-link></div>
  </div>
</template>

<script>
  export default {
      props: ['user'],
      data: function() {
          return {
              link: '',
          }
      },
      mounted() {
          // Determine the path
          const path = this.$route.path;

          // Remove the member ID from the end
          const re = /(^.*)\/([0-9]+)$/;
          const match = path.match(re);
          if(match !== null) {
              this.link = match[1] + '/';
          }
      }
  }
</script>
