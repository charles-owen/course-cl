<template>
  <div></div>
</template>

<script>

export default {
  props: ['user'],
  data: function () {
    return {
      link: '',
    }
  },
  watch: {
    user: function (to, fm) {
      let user = this.user;
      let link = this.link;

      if (user !== null && user.prev !== undefined) {
        this.$root.console.components.nav2left = {
          template: `
            <router-link title="Previous Member" :to="link + user.prev.member.id"><img :src="icon"
                                                                                       alt="Previous Member">
            </router-link>`,
          data: function () {
            return {
              icon: this.$site.root + '/cl/img/previcon.png',
              user: user,
              link: link
            }
          }
        }
      } else {
        this.$root.console.components.nav2left = null
      }

      if (user !== null && user.next !== undefined) {
        this.$root.console.components.nav2right = {
          template: `
            <router-link title="Next Member" :to="link + user.next.member.id"><img :src="icon" alt="Next Member">
            </router-link>`,
          data: function () {
            return {
              icon: this.$site.root + '/cl/img/nexticon.png',
              user: user,
              link: link
            }
          }
        }

      } else {
        this.$root.console.components.nav2right = null
      }


    }
  },
  mounted() {
    // Determine the path
    const path = this.$route.path;

    // Remove the member ID from the end
    const re = /(^.*)\/([0-9]+)$/;
    const match = path.match(re);
    if (match !== null) {
      this.link = match[1] + '/';
    }
  },
  beforeUnmount() {
    this.$root.console.components.nav2left = null
    this.$root.console.components.nav2right = null
  }
}
</script>
