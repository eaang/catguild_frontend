<template>
  <div>
    <div class="py-2 font-semibold text-sm uppercase">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style scoped>
.disabled {
  @apply text-gray-400 dark:text-gray-600;
}
</style>
