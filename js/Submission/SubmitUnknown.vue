<template>
  <div><p>Hello</p>
    <p class="shoutout">Submission type <em>{{options.type}}</em> is not supported</p>
  </div>
</template>

<script>
  export default {
      props: ['options']
  }
</script>
