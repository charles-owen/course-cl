<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<script>
  import {StudentsOnly} from './StudentsOnly';
  import {Member} from '../../Members/Member';

  const FetcherVue = Site.FetcherVue;


  export default {
      props: {
          id: {
              default: 0
          },
          faillink: {
              default: null
          }
      },
      data: function() {
          return {
              user: null
          }
      },
      watch: {
          id(to, from) {
              this.fetch();
          }
      },
      mounted() {
        this.fetch();
      },
      components: {
          'fetcher': FetcherVue
      },
      methods: {
          fetch() {
          	  let query = {
          	  	id: this.id
              }

              if(StudentsOnly.get()) {
              	query.role = Member.STUDENT;
              }

              this.$store.dispatch('members/get', query)
                  .then((user) => {
                      this.user = user;
                      this.userId = user.userId;
                      this.$emit('fetched', this.user);
                  })
                  .catch((msg) => {
                      Site.toast(this, msg);
                      if(this.faillink !== null) {
                          setTimeout(() => {
                              this.$router.push({path: Site.root + this.faillink});
                          }, 3000);
                      }
                  })


          }
      }
  }

</script>