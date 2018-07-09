<template>
  <div class="section">
    <div class="content">
      <div class="center">{{course.name}} {{course.desc}} <section-select /></div>
    </div>
  </div>
</template>

<script>
  import SectionSelect from '../SectionSelectors/SectionSelect.vue';

  export default {
      data: function() {
          return {
              course: this.$store.state.course.course
          }
      },
      components: {
          'section-select': SectionSelect
      }
  }

</script>

<style lang="scss" scoped>
@import '../../../site/sass/modules/_colors';

div.section {
  background: $primary;
  color: white;
  margin: 0;
  padding: 0.25em 0;
}
</style>