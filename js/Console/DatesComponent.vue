<template>
  <div class="content cl-assignment-dates">
    <div class="full">
      <div v-if="fetched" class="cl-form-common">
        <div class="cl-form-border cl-center">
          <div class="cl-form-legend">Assignment Dates</div>
            <div style="display: inline-block">
          <p><span class="cl-no-expand"><label>Release<br>
            <flat-pickr v-model="release" :config="fpConfig" @on-change="changeRelease($event)" data-input></flat-pickr>
              <a data-toggle title="Toggle Calendar"><span class="icons-cl icons-cl-calendar"></span></a> <a data-clear><img :src="root + '/cl/img/x.png'" alt="delete" title="Delete"></a>
          </label>&nbsp;&nbsp;<label><input v-model="released" @change="changeReleased($event)" type="checkbox"> Released</label></span>
          </p>

          <p> <span class="cl-no-expand"><label>Due<br>
           <flat-pickr v-model="due" :config="fpConfig" data-input></flat-pickr>
              <a data-toggle title="Toggle Calendar"><span class="icons-cl icons-cl-calendar"></span></a> <a data-clear><img :src="root + '/cl/img/x.png'" alt="delete" title="Delete"></a>
           </label>&nbsp;&nbsp;<label v-if="due !== ''"><input v-model="revised" type="checkbox"> Revised</label></span>
          </p>

          <p v-if="hasReviews"><span class="cl-no-expand"><label>Reviews<br>
            <flat-pickr v-model="review" :config="fpConfig" data-input></flat-pickr>
              <a data-toggle title="Toggle Calendar"><span class="icons-cl icons-cl-calendar"></span></a> <a data-clear><img :src="root + '/cl/img/x.png'" alt="delete" title="Delete"></a>
          </label></span>
          </p>
              <p class="cl-center"><button @click="send">Set</button> &nbsp; <button @click="clear">Clear</button> </p>
            </div>
        </div>
      </div>
      <p class="centerbox primary">Dynamic assignment date revisions override those in the assignments specification file. Once set, the
      revisions replace the results from the assignments specification file. Clear removes the dynamic assignments
      as specified on this page and restores the assignments specified in the assignments specification file.</p>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

const ConsoleComponentBase = Site.ConsoleComponentBase;

export default {
  'extends': ConsoleComponentBase,
  props: ['assigntag'],
  data: function () {
    return {
      assignment: null,
      date: null,
      release: null,
      released: false,
      due: null,
      revised: false,
      hasReviews: true,
      review: null,
      fetched: false,
      fpConfig: {
        enableTime: true,
        dateFormat: "m/d/Y h:iK",
        defaultHour: 23,
        defaultMinute: 55,
        wrap: true
      }
    }
  },
  components: {
    'flatPickr': flatPickr
  },
  mounted() {
    const member = this.$store.state.user.user.member;

    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);

    this.setTitle(': ' + this.assignment.shortname + ' Dates');
    this.load();
  },
  methods: {
    set(data) {

      if (data !== null) {
        //  console.log(data.attributes)
        this.fetched = true

        if (data.attributes.release === 'open') {
          this.release = ''
          this.released = true
        } else if (data.attributes.release === 'none') {
          this.release = ''
          this.released = false
        } else {
          this.release = new Date(data.attributes.release * 1000).toISOString()
          this.released = true
        }

        if (data.attributes.due !== 'none') {
          this.due = new Date(data.attributes.due * 1000).toISOString()
        } else {
          this.due = ''
        }

        this.revised = data.attributes.revised === 'yes'

        if (data.attributes.review === undefined) {
          this.hasReviews = false
        } else if (data.attributes.review === 'none') {
          this.hasReviews = true
          this.review = ''
        } else {
          this.hasReviews = true
          this.review = new Date(data.attributes.review * 1000).toISOString()
        }
      }

    },
    changeRelease(event) {
      if (event.length > 0 && event[0] !== '') {
         this.released = true
      }


    },
    changeReleased(event) {
      if (!this.released) {
        this.release = ''
      }
    },
    send() {
      // Compute new query parameters
      let params = {
        revised: this.revised ? 'yes' : 'no'
      }

      if (this.released) {
        if (this.release === '') {
          params.release = 'open'
        } else {
          params.release = this.release
        }
      } else {
        params.release = 'none'
      }

      if (this.due === '') {
        params.due = 'none'
      } else {
        params.due = this.due
      }

      if (this.hasReviews) {
        if (this.review === '') {
          params.review = 'none'
        } else {
          params.review = this.review
        }
      }

      Site.api.post(`/api/course/dates/${this.assigntag}`, params)
          .then((response) => {
              if(!response.hasError()) {
                Site.toast(this, "Assignment date revisions set");
                let data = response.getData('assignment-dates')
                this.set(data)
              } else {
                  Site.toast(this, response);
              }

          })
          .catch((error) => {
              console.log(error);
              Site.toast(this, error);
          });
    },
    clear() {
      this.fetched = false;

      Site.api.post(`/api/course/dates/${this.assigntag}/clear`, {})
          .then((response) => {
            if(!response.hasError()) {
              Site.toast(this, "Assignment date revisions cleared");
              this.load();
            } else {
              Site.toast(this, response);
            }
          })
          .catch((error) => {
            console.log(error);
            Site.toast(this, error);
          });
    },
    load() {
      Site.api.get('/api/course/dates/' + this.assigntag, {})
          .then((response) => {
            if (!response.hasError()) {
              let data = response.getData('assignment-dates')
              this.set(data)
            } else {
              Site.toast(this, response)
            }

          })
          .catch((error) => {
            console.log(error)
            Site.toast(this, error)
          });
    }
  }
}
</script>
