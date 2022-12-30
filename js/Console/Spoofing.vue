<template>
  <div class="content">
    <div class="full">

      <membersfetcher>
        <template v-slot="fetcher">
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="user1 in fetcher.users" >
              <td><a @click.prevent="select(user1)">{{user1.userId}}</a></td>
              <td><a @click.prevent="select(user1)">{{user1.name}}</a></td>
              <td>{{user1.roleName()}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
  import {toRaw} from 'vue'
	import MembersFetcherComponent from './Members/MembersFetcherComponent.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;

	export default {
		'extends': ConsoleComponentBase,
		components: {
			'membersfetcher': MembersFetcherComponent
		},
		mounted() {
			this.setTitle(': Member Spoofing');
		},
    computed: {
      availableUsers(users) {
        console.log(users)
        return toRaw(users).filter(user => this.user.atLeast(user.role()))
      }
    },
		methods: {
			select(user) {
				let params = {
				  user: user.id,
          member: user.member.id
				};

				this.$site.api.post('/api/course/members/spoof', params)
				    .then((response) => {
				        if (!response.hasError()) {
				        	window.location = this.root + '/';
				        } else {
			        this.$site.toast(this, response);
				        }

				    })
				    .catch((error) => {
			          this.$site.toast(this, error);
				    });
      }
		}
	}
</script>
