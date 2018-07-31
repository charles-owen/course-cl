<template>
  <div class="content">
    <div class="full">
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

   // const FetcherVue = Users.FetcherVue;

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
        methods: {
            fetchMore() {
                this.$store.dispatch('members/more');
            }
        },
        computed: mapState({
            users: state => state.members.users,
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
        }
    }
</script>
