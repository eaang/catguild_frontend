<template>
  <div class="flex justify-between items-center">
    <div class="py-2">{{ title }}</div>
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
}
</script>
