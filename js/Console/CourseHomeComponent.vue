<template>
  <div v-if="active" class="content">
    <course-home-item-editor :item="hot" hot="true"></course-home-item-editor>

  </div>
</template>

<script>
  import CourseHomeItemEditorVue from './CourseHomeItemEditor.vue'
  const ConsoleComponentBase = Site.ConsoleComponentBase;

	/**
	 * View for Course Assignments
	 * /cl/console/course/assignments
	 *
	 * Displays all assignments with links for options.
   * @constructor AssignmentsComponentVue
	 */
	export default {
		'extends': ConsoleComponentBase,
		data: function () {
			return {
        active: false,
        hot: {name: 'Hot', tag: 'hot', value: ''}
			}
		},
    components: {
      courseHomeItemEditor: CourseHomeItemEditorVue
    },
		created() {
			this.$root.setTitle(': Course Home Content');
			let member = this.user.member;

			this.section = this.$store.getters['course/section'](member.semester, member.section);
		},
    mounted() {
      Site.api.get('/api/course/home', {})
          .then((response) => {
            if (!response.hasError()) {
              let data = response.getData('course-home')
              this.set(data)
            } else {
              Site.toast(this, response)
            }
          })
          .catch((error) => {
            console.log(error)
            Site.toast(this, error)
          });
    },
		methods: {
      set(data) {
        this.active = true
        this.hot.value = data.attributes.hot
      }
		}
	}

</script>
