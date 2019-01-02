<template>
  <div class="content">
    <div class="full">

      <membersfetcher>
        <template slot-scope="fetcher">
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in fetcher.users">
              <td><a @click.prevent="select(user)">{{user.userId}}</a></td>
              <td><a @click.prevent="select(user)">{{user.name}}</a></td>
              <td>{{user.roleName()}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
	import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';

  const ConsoleComponentBase = Site.ConsoleComponentBase;

	export default {
		'extends': ConsoleComponentBase,
		data: function() {
			return {
			}
		},
		components: {
			'membersfetcher': MembersFetcherComponent
		},
		mounted() {
			this.setTitle(': Member Spoofing');
		},
		methods: {
			select(user) {
				let params = {
				  user: user.id,
          member: user.member.id
				};

				Site.api.post('/api/course/members/spoof', params)
				    .then((response) => {
				        if (!response.hasError()) {
				        	window.location = this.root + '/';
				        } else {
				            Site.toast(this, response);
				        }

				    })
				    .catch((error) => {
				        Site.toast(this, error);
				    });
      }
		}
	}
</script>
