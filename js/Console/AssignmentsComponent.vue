<template>
  <div class="content cl-assignments">
    <div class="full">
    <p>{{section.name}}</p>
    <div v-for="category in section.assignments.categories">
      <h2>{{category.name}}</h2>
      <ul>
        <li v-for="assignment in category.assignments" :key="assignment.tag">{{assignment.name}}
          <span class="small">
            <span>
              <router-link :to="root + '/cl/console/course/extensions/' + assignment.tag">extensions</router-link>&nbsp;
            </span>
            <span v-if='assignment.submissions !== undefined'>
              <router-link :to="root + '/cl/console/course/submissions/' + assignment.tag">submissions</router-link>&nbsp;
            </span>
            <span v-for="link in assignmentLinks"  v-if="assignment[link.property] !== undefined && assignment[link.property] !== false">
              <router-link :to="assignmentLink(assignment, link.route)">{{link.name}}</router-link>&nbsp;
            </span>
          </span>
        </li>
      </ul>
    </div>
    </div>
  </div>

</template>

<script>
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
				section: null,
				assignmentLinks: this.$site.console.course.assignmentLinks
			}
		},
		created() {
			this.$parent.setTitle(': Assignments');
			let member = this.user.member;

			this.section = this.$store.getters['course/section'](member.semester, member.section);
		},
		methods: {
			assignmentLink: function (assignment, route) {
				return this.$site.root + '/cl/console' + route.replace(':assigntag', assignment.tag);
			}
		}
	}

</script>
