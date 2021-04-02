<template>
  <div class="px-6 space-y-2">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold">{{ intro.title }}</div>
      <div class="w-6 h-6 hover:text-gray-400 cursor-pointer">
        <PencilAlt />
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="space-y-2" v-html="$md.render(intro.content)"></div>
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
