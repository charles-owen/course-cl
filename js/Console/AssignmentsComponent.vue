<template>
  <div class="content cl-assignments">
    <p>{{section.name}}</p>
    <div v-for="category in section.assignments.categories">
      <h2>{{category.name}}</h2>
      <ul>
        <li v-for="assignment in category.assignments">{{assignment.name}}
          <span v-for="link in assignmentLinks">
            <router-link :to="assignmentLink(assignment, link.route)" v-if="assignment[link.property] !== false">{{link.name}}</router-link>
          </span>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
    export default {
        data: function() {
            return {
                course: this.$store.state.course.course,
                section: null,
                assignmentLinks: Console.course.assignmentLinks
            }
        },
        created() {
            this.$parent.setTitle(': Assignments');


            let user = this.$store.state.user.user;
            let member = user.member;

            this.section = this.$store.getters['course/section'](member.semester, member.section);
        },
        methods: {
            assignmentLink: function(assignment, route) {
                return Site.root + '/cl/console' + route.replace(':assigntag', assignment.tag);
            }
        }
    }

</script>