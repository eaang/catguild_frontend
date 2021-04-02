<template>
  <div class="px-6">
    {{ intro.title }}
    {{ intro.content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: {},
    }
  },
  async fetch() {
    this.intro = await this.$strapi.find('introduction')
  },
}
</script>
