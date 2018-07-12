<template>
 <span>
  <span v-if="course.sections.length === 1">{{selected}}</span>
  <select v-if="course.sections.length > 1" v-model="selected" @change="changeSection">
   <option v-for="section in course.sections">{{section.semester}}/{{section.id}}</option>
  </select>

 </span>
</template>

<script>
    export default {
        data: function () {
            return {
                course: this.$store.state.course.course,
                selected: "FS18/730",
                changeSection: () => {
                    let data = this.selected.split('/');
                    let params = {
                        semester: data[0],
                        section: data[1]
                    }
                    Site.api.post('/api/course/members/sectionselect', params)
                        .then((response) => {
                            if (!response.hasError()) {
                                let user = response.getData('user');
                                this.$store.commit('user/set', user.attributes);
                                this.$store.commit('members/reset');
                                window.history.go();
                            } else {
                                Site.toast(this, response);
                            }

                        })
                        .catch((error) => {
                            Site.toast(this, error);
                        });
                }
            }
        },
        mounted() {
            const member = this.$store.state.user.user.member;
            this.selected = member.semester + '/' + member.section;
        }

    }

</script>

<style lang="scss" scoped>
  select {
    background: white;
    color: black;
  }
</style>