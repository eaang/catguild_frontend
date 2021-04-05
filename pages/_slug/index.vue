<template>
  <div v-if="categories" class="px-6">
    <div class="text-2xl font-bold">
      {{ category.name }}
    </div>
    <div v-for="block in category.blocks" :key="block.id" class="box-section">
      <span :id="anchorTag(block.title)"></span>
      <ContentBox :content="block.content" class="my-4" />
    </div>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/categories/category'
export default {
  apollo: {
    categories: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return { url: this.$route.params.slug }
      },
    },
  },
  computed: {
    category() {
      return this.categories[0]
    },
  },
  methods: {
    anchorTag(str) {
      return str.match(/\w/g).join('').toLowerCase()
    },
  },
}
</script>

<style scoped>
.box-section {
  @apply relative;
}
.box-section span {
  @apply absolute -mt-16;
}
</style>
