<template>
  <div>
    <template v-if="isText()">
      <a @click.prevent="selectText()">{{display()}}</a>
    </template>
    <template v-else>
      <menu-vue v-on:open="select"><a>{{display()}}</a><a class="float-right"><img :src="menubarsImg" alt="Menu"></a>
        <ul>
          <li><a :href="toDownload"><img :src="downloadImg" alt="Download"> Download</a></li>
        </ul>
      </menu-vue>
    </template>

  </div>
</template>

<script>
  import {TimeFormatter} from 'site-cl/js/TimeFormatter';
  import MenuVue from 'site-cl/js/UI/Menu.vue';

  export const TEXT_TYPES = ['text/plain', 'text/html']

  export default {
      props: ['submission'],
      data: function() {
          return {
              menubarsImg: Site.root + '/vendor/cl/site/img/menubars.png',
              downloadImg: Site.root + '/vendor/cl/site/img/download.png',
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
          }

      }

  }

</script>