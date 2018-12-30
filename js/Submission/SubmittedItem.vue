<template>
  <div>
    <template v-if="isText()">
      <a @click.prevent="selectText()">{{display()}}</a>
    </template>
    <template v-else-if="isImage()">
      <a @click.prevent="select">{{display()}}</a><menu-vue class="float-right" @open="select"><a><img :src="root + '/vendor/cl/site/img/menubars.png'" alt="Menu"></a>
        <ul>
          <li><a :href="toDownload"><img :src="root + '/vendor/cl/site/img/download.png'" alt="Download"> Download</a></li>
          <li v-for="item in analysis"><a @click.prevent="showAnalysis(item)"><img :src="item.icon" :alt="item.menu"> {{item.menu}}</a></li>
        </ul>
      </menu-vue>
    </template>
    <template v-else>
      <menu-vue v-on:open="select"><a>{{display()}}</a><a class="float-right"><img :src="root + '/vendor/cl/site/img/menubars.png'" alt="Menu"></a>
        <ul>
          <li><a :href="toDownload"><img :src="root + '/vendor/cl/site/img/download.png'" alt="Download"> Download</a></li>
          <li @click.stop="showAnalysis(item)"  v-for="item in analysis"><a @click.prevent.stop="showAnalysis(item)"><img :src="item.icon" :alt="item.menu"> {{item.menu}}</a></li>
        </ul>
      </menu-vue>
    </template>

  </div>
</template>

<script>
//  import MenuVue from 'site-cl/js/UI/Menu.vue';
  const MenuVue = Site.Site.MenuVue;

  export const TEXT_TYPES = ['text/plain', 'text/html']
  export const IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];

  export default {
      props: ['assigntag', 'tag', 'submission', 'analysis', 'teaming', 'type'],
      data: function() {
          return {
          	root: Site.root,
            toDownload: null
          }
      },
      components: {
          menuVue: MenuVue
      },
      mounted() {
	      const service = this.teaming !== null ? 'team' : 'course';
	      this.toDownload = `${this.$site.root}/cl/${service}/submission/download/${this.submission.id}`;

	      console.log(this.type);
      },
      methods: {
          isText() {
              return this.type !== 'program' && TEXT_TYPES.indexOf(this.submission.type) >= 0
          },
          isImage() {
	          return IMG_TYPES.indexOf(this.submission.type) >= 0
          },
          display() {
              let disp = this.$site.TimeFormatter.absoluteUNIX(this.submission.date, "long");
              if(this.submission.name !== null) {
                  disp += ': ' + this.submission.name;
              }

              if(this.submission.by !== undefined) {
              	disp += ' by ' + this.submission.by;
              }
              return disp;
          },
          selectText() {
              this.$emit('preview', this.submission);
          },
          select() {
              this.$emit('preview_img', this.submission);
          },
          showAnalysis(analysis) {
	          const service = this.teaming !== null ? 'team' : 'course';
	          this.$site.api.get(`/api/${service}/submission/analysis/${this.assigntag}/${this.tag}/${analysis.tag}/${this.submission.id}`, {})
          	    .then((response) => {
          	        if (!response.hasError()) {
          	        	const analysisResult = response.getData('submission-analysis').attributes;
          	        	this.$emit('result', analysisResult);
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