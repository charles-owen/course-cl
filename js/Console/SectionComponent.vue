<template>
  <div class="cl-section-component"><span v-if="!short">{{course.name}} {{course.desc}}</span><section-select></section-select><span class="extra"></span>
  </div>
</template>

<script>
  import SectionSelect from '../SectionSelectors/SectionSelect.vue';

  export default {
      props: ['short'],
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

div.cl-section-component {
  white-space: nowrap;

  >span:first-child {
    padding: 0 14px 0 0;
  }

  >span:last-child {
    padding: 0;
  }

  vertical-align: top;
  font-size: 0.95em;
  color: white;
  margin: 0;
  padding: 1px 0 0 0;
}
</style>