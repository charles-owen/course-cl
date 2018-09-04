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
          <li v-for="item in analysis"><a @click.prevent="showAnalysis(item)"><img :src="item.icon" :alt="item.menu"> {{item.menu}}</a></li>
        </ul>
      </menu-vue>
    </template>

  </div>
</template>

<script>
  import {TimeFormatter} from 'site-cl/js/TimeFormatter';
  import MenuVue from 'site-cl/js/UI/Menu.vue';

  export const TEXT_TYPES = ['text/plain', 'text/html']
  export const IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];

  export default {
      props: ['submission', 'analysis'],
      data: function() {
          return {
          	root: Site.root,
            toDownload: Site.root + '/cl/submission/download/' + this.submission.id
          }
      },
      components: {
          menuVue: MenuVue
      },
      methods: {
          isText() {
              return TEXT_TYPES.indexOf(this.submission.type) >= 0
          },
          isImage() {
	          return IMG_TYPES.indexOf(this.submission.type) >= 0
          },
          display() {
              let disp = TimeFormatter.absoluteUNIX(this.submission.date, "long");
              if(this.submission.name !== null) {
                  disp += ': ' + this.submission.name;
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
          	Site.api.get('/api/course/submission/analysis/' + analysis.tag + '/' + this.submission.id, {})
          	    .then((response) => {
          	        if (!response.hasError()) {
          	        	const analysisResult = response.getData('submission-analysis').attributes;
          	        	this.$emit('result', analysisResult);
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