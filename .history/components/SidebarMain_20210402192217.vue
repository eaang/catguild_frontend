<template>
  <div class="flex justify-between items-center" @click="toggle = !toggle">
    <div class="py-2">{{ title }}</div>
    <div class="h-4 w-4 px-2">
      <div v-if="toggle"><ChevronDown /></div>
      <div v-if="!toggle"><ChevronUp /></div>
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
