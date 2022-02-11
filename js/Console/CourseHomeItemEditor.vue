<template>
  <div>
    <h2>{{ item.name }}</h2>

    <form method="post" @submit.prevent="submit()">
      <div v-if="hot === 'true'" class="cl-hot">
        <div v-html="item.value"></div>
      </div>
      <div v-else>
        <div v-html="item.value"></div>
      </div>
      <div ref="editor"></div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  props: ['item', 'hot'],
  mounted() {
    const element = this.$refs['editor'];
    this.editor = new this.$site.Editor(element, {
      value: this.item.value,
      tab: true,
      autoIndent: true
    });

    this.editor.textarea.addEventListener('keydown', () => {
      this.changed();
    })

  },
  methods: {
    changed() {
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        this.timer = null;
        this.item.value = this.$site.Sanitize.sanitize(this.editor.textarea.value);
      }, 100);
    },
    submit() {
      this.$site.api.post('/api/course/home/' + this.item.tag, {
        value: this.item.value
      })
          .then((response) => {
            if (!response.hasError()) {
              this.$site.toast(this, 'Content successfully saved');
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
