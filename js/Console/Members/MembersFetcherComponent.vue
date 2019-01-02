<template>
  <div>
      <label style="display:none" ref="students-only" ><input type="checkbox" v-model="students" @change="studentsOnlyChanged"> Students Only</label>
      <fetcher :fetcher="fetcher" :fetching="fetching">
        <slot :users="users" :students="students"></slot>
        <p v-if="users.length == 0" class="centerbox comp center">
          There are currently no members enrolled in this section.</p>
      </fetcher>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {Member} from '../../Members/Member'
    import {StudentsOnly} from './StudentsOnly';

    const FetcherVue = Site.FetcherVue;

    /**
     * Member fetcher component that can be used by views.
     *
     * @constructor MembersFetcherComponentVue
     */
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
            /**
             * Add "Students Only" to the menu bar
             * @memberof MembersFetcherComponentVue
             */
            addStudentsOnly() {
            	this.students = StudentsOnly.get();

                let element = this.$refs['students-only'];
                element.parentNode.removeChild(element);

                let extra = document.querySelector('div.cl-section-component span.extra');
                extra.appendChild(element);
                element.style.display = 'inline-block';

                this.studentsElement = element;
            },
            studentsOnlyChanged() {
            	StudentsOnly.set(this.students);
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
	        this.students = StudentsOnly.get();
            const member = this.$store.state.user.user.member;
            let query = {
                semester: member.semester,
                section: member.section
            };
            this.$store.commit('members/query', query);
            this.$store.dispatch('members/fetch');

            setTimeout(() => {
                this.addStudentsOnly();
            }, 100);

        },
        beforeDestroy() {
            this.studentsElement.parentNode.removeChild(this.studentsElement);
            let extras = document.querySelectorAll('div.cl-section-component span.extra');
        }

    }
</script>
