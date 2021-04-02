<template>
  <div class="flex justify-between items-center" @click="toggle = !toggle">
    <div class="py-2">{{ title }}</div>
    <div class="px-2">
      <div v-if="toggle"><ChevronDown />y</div>
      <div v-if="!toggle"><ChevronUp />n</div>
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
