<template>
  <router-link  title="Next Member"><img :src="icon" alt="Next"></router-link>
</template>

<script>
  export default {
      data: function() {
          return {
              icon: Site.root + '/vendor/cl/site/img/nexticon.png'
          }
      }
  }
</script>