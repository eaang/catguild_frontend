<template>
  <div class="flex justify-between items-center" @click="toggle = !toggle">
    <div class="py-2">{{ title }}</div>
    <div v-if="toggle">y</div>
    <div v-if="!toggle">n</div>
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
