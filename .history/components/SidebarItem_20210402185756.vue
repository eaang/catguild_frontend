<template>
  <div class="py-2">{{ title }}</div>
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
