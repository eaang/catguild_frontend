<template>
  <div>{{ categoryTitle }}</div>
</template>

<script>
export default {
  props: {
    categoryTitle: {
      type: String,
      default: 'Category Title',
    },
  },
}
</script>
