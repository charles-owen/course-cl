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
              <router-link :to="extensionsLink + assignment.tag">extensions</router-link>&nbsp;
            </span>
            <span v-if='assignment.submissions !== undefined'>
              <router-link :to="submissionsLink + assignment.tag">submissions</router-link>&nbsp;
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
    export default {
        data: function() {
            return {
                course: this.$store.state.course.course,
                section: null,
                assignmentLinks: Site.Console.course.assignmentLinks,
                extensionsLink: Site.root + '/cl/console/course/extensions/',
                submissionsLink: Site.root + '/cl/console/course/submissions/'
            }
        },
        created() {
            this.$parent.setTitle(': Assignments');

            let user = this.$store.state.user.user;
            let member = user.member;

            this.section = this.$store.getters['course/section'](member.semester, member.section);

            console.log(this.assignmentLinks);
            console.log(this.section.assignments.categories);
        },
        methods: {
            assignmentLink: function(assignment, route) {
                return Site.root + '/cl/console' + route.replace(':assigntag', assignment.tag);
            }
        }
    }

</script>
