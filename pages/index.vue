<template>
  <div v-if="introduction" class="px-6 space-y-2">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold">{{ introduction.title }}</div>
      <div class="w-6 h-6 hover:text-gray-400 cursor-pointer">
        <PencilAlt />
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="space-y-2" v-html="$md.render(introduction.content)"></div>
  </div>
</template>

<script>
import introQuery from '~/apollo/queries/introduction/introduction'

export default {
  data() {
    return {
      introduction: {},
    }
  },
  apollo: {
    introduction: {
      prefetch: true,
      query: introQuery,
    },
  },
}
</script>
