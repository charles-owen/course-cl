<template>
  <div class="content cl-extensions">
    <div class="full">

      <membersfetcher :fetching="extensions === null">
        <template slot-scope="fetcher">
          <table v-if="extensions!==null" class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
              <th>Extension</th>
            </tr>
            <tr v-for="user in fetcher.users">
              <td >{{user.userId}}</td>
              <td>{{user.name}}</td>
              <td>{{user.roleName()}}</td>
              <td>
                <div class="flatpickr">
                <flat-pickr v-model="extensions[+user.member.id]" :config="fpConfig"
                @on-change="change($event, user)" data-input></flat-pickr>
                  <a data-toggle title="Toggle Calendar"><span class="icons-cl icons-cl-calendar"></span></a> <a data-clear><img :src="root + '/vendor/cl/site/img/x.png'" alt="delete" title="Delete"></a>
                </div>
              </td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
	import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';
  import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

    export default {
	    'extends': ConsoleComponentBase,
        props: ['assigntag'],
        data: function() {
            return {
                assignment: null,
                date: null,
                extensions: null,
                fpConfig: {
                    enableTime: true,
                    dateFormat: "m-d-Y h:iK",
                    defaultHour: 23,
                    defaultMinute: 55,
                    wrap: true
                }
            }
        },
        components: {
            'membersfetcher': MembersFetcherComponent,
            'flatPickr': flatPickr
        },
        mounted() {
            const member = this.$store.state.user.user.member;

            this.section = this.$store.getters['course/section'](member.semester, member.section);
            this.assignment = this.section.getAssignment(this.assigntag);

            this.setTitle(': ' + this.assignment.shortname + ' Extensions');

            let query = {
                semester: member.semester,
                section: member.section
            };
            Site.api.get('/api/course/members/meta/get/extensions/' + this.assigntag, query)
                .then((response) => {
                    if(!response.hasError()) {
                        let data = response.getData('member-meta');
                        if(data !== null) {
                            this.extensions = [];
                            for(let id in data.attributes) {
                                let time = data.attributes[id];
                                if(time === null || time === undefined) {
                                    this.extensions[+id] = '';
                                } else {
                                    this.extensions[+id] = time * 1000;
                                }

                            }
                        }
                    } else {
                        Site.toast(this, response);
                    }

                })
                .catch((error) => {
                    console.log(error);
                    Site.toast(this, error);
                });
        },
        methods: {
            change(event, user) {
                let str = event[0];
                let time = str !== '' ? (new Date(str)).getTime() / 1000 : null;

                const query = {value: time};
                Site.api.post(`/api/course/members/meta/set/${user.member.id}/extensions/${this.assigntag}`, query)
                    .then((response) => {
                        if(!response.hasError()) {

                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                        console.log(error);
                        Site.toast(this, error);
                    });
            },
            clear(user) {
                Site.Vue.set(this.extensions, +user.member.id, '');
            }
        }
    }
</script>

<style lang="scss">
  /* Not scoped */
  div.cl-extensions {
    table {
      td {
        text-align: center;

        >div>input {
          text-align: center;
        }
      }

      td:nth-child(1),  td:nth-child(2),  td:nth-child(3) {
        text-align: left;
      }
    }
  }

</style>