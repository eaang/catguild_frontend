<template>
  <div
    class="flex justify-between items-center cursor-pointer"
    @click="toggle = !toggle"
  >
    <div class="py-2 font-semibold uppercase">{{ title }}</div>
    <div class="px-2">
      <div v-if="toggle" class="h-4 w-4"><ChevronDown /></div>
      <div v-if="!toggle" class="h-4 w-4"><ChevronUp /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Category',
    },
  },
  data() {
    return {
      toggle: false,
    }
  },
}
</script>
