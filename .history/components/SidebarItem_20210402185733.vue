<template>
  <div class="p-3">{{ title }}</div>
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
