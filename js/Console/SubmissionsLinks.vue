<template>
  <div>
    <p v-for="link in links" v-if="user.atLeast(link.atLeast)" class="center"><a :href="root + link.url">{{link.text}}</a></p>
  </div>
</template>

<script>
	import {Member} from '../Members/Member';

  const ConsoleComponentBase = Site.ConsoleComponentBase;

  export default {
	  'extends': ConsoleComponentBase,
    props: ['assignment'],
    data: function() {
    	return {
    		links: []
      }
    },
    watch: {
	  	assignment: function() {
	  		this.take();
      }
    },
    mounted() {
      this.take();
    },
    methods: {
      take() {
      	if(this.assignment !== null) {
      		this.links = [];

	        // Collect up the submission links
	        if (this.assignment.submissions !== undefined) {
		        for (let submission of this.assignment.submissions) {
		        	let bulk = {
                text: 'Bulk download of ' + submission.name,
                url: '/cl/course/submissions/' + this.assignment.tag + '/' + submission.tag,
                atLeast: Member.STAFF
              };
              this.links.push(bulk);

			        if (submission.links !== undefined) {
				        for (let link of submission.links) {
					        this.links.push(link);
				        }
			        }

		        }
	        }
        }
      }

	  }
  }

</script>