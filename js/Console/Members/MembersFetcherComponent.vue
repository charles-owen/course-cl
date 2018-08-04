<template>
  <div class="content">
    <div class="full">
      <label ref="students-only" ><input type="checkbox" v-model="students" @change="studentsOnlyChanged"> Students Only</label>
      <fetcher :fetcher="fetcher" :fetching="fetching">
        <slot :users="users"></slot>
        <p v-if="users.length == 0" class="centerbox comp center">
          There are currently no members enrolled in this section.</p>
      </fetcher>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import FetcherVue from 'users-cl/js/Lib/FetcherVue.vue';
    import {Member} from '../../Members/Member'

    const LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';

    export default {
        // If the fetching value it true, the using client
        // is fetching more than just the membership and we will
        // wait for that as well.
        props: {
            fetching: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
               students: false,
                studentsElement: null
            }
        },
        methods: {
            fetchMore() {
                this.$store.dispatch('members/more');
            },
            studentsOnlyChanged() {
                const localStorage = window.localStorage;
                localStorage.setItem(LOCAL_STORAGE_STUDENTS_ONLY, this.students ? 'yes' : 'no');
            }
        },
        computed: mapState({
            users(state) {
                if (this.students) {
                    return state.members.users.filter((user) => {
                        return user.role() === Member.STUDENT
                    });
                } else {
                    return state.members.users;
                }
            },
            fetcher: state => state.members.fetcher

        }),
        components: {
            'fetcher': FetcherVue
        },
        mounted() {
            const member = this.$store.state.user.user.member;
            let query = {
                semester: member.semester,
                section: member.section
            };
            this.$store.commit('members/query', query);
            this.$store.dispatch('members/fetch');

            const localStorage = window.localStorage;
            let s = localStorage.getItem(LOCAL_STORAGE_STUDENTS_ONLY);
            this.students = s === 'yes';
            let el = this.$refs['students-only'];
            let extra = document.querySelector('div.cl-section-component span.extra');

            el.parentNode.removeChild(el);
            extra.appendChild(el);

            this.studentsElement = el;
        },
        destroyed() {
            this.studentsElement.parentNode.removeChild(this.studentsElement);
        }
    }
</script>
