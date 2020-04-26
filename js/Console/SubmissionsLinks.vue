<template>
  <div class="cl-submissions-bulk">
    <p v-for="link in links" v-if="user.atLeast(link.atLeast)" class="center"><a @click.prevent="click(link)">{{link.text}}</a>
      <a v-if="link.from !== undefined && !link.range" title="Enable Range" @click.prevent="link.range = true">
        <img :src="root + '/cl/img/range.png'" alt="Enable Range" width="26" height="10">
      </a>
      <span v-if="link.range"><input type="text" v-model="link.from"> to <input type="text" v-model="link.to"></span>
    <span v-if="link.range"><br>Enter from/to range for user id.</span>
    </p>
  </div>
</template>

<script>
  import {Member} from '../Members/Member';

  const ConsoleComponentBase = Site.ConsoleComponentBase;

  /**
   * Vue class for links to download submissions in bulk
   * @constructor SubmissionsLinksVue
   */
  export default {
    'extends': ConsoleComponentBase,
    props: ['assignment'],
    data: function () {
      return {
        links: [],
        from: '',
        to: ''
      }
    },
    watch: {
      assignment: function () {
        this.take();
      }
    },
    mounted() {
      this.take();
    },
    methods: {
      take() {
        this.links = [];

        if (this.assignment !== null && this.assignment.submissions !== undefined) {
          // Collect up the submission links
          for (let submission of this.assignment.submissions) {
            if (submission.bulk === true) {
              let bulk = {
                text: 'Bulk download of ' + submission.name,
                url: '/cl/course/submissions/' + this.assignment.tag + '/' + submission.tag,
                from: '',
                to: '',
                range: false,
                atLeast: Member.STAFF
              };
              this.links.push(bulk);
            }

            // Any additional submission links
            if (submission.links !== undefined) {
              for (let link of submission.links) {
                this.links.push(link);
              }
            }

          }
        }
      },
      click(link) {
        console.log(link);
        let url = this.root + link.url;
        if (link.from !== undefined && link.to !== undefined &&
                (link.from.trim() !== '' || link.to.trim() !== '')) {
          url += '?fm=' + encodeURIComponent(link.from.trim()) + '&to=' + encodeURIComponent(link.to.trim());
        }

        window.location.href = url;

      }

    }
  }

</script>

<style>
  div.cl-submissions-bulk p {
    font-size: 0.9em;
  }

  div.cl-submissions-bulk input {
    width: 5em;
  }

</style>