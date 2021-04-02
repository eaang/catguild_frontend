<template>
  <div class="px-6">
    <div>{{ intro.title }}</div>
    <div>{{ intro.content }}</div>
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
