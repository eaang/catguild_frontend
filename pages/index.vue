<template>
  <div v-if="categories" class="px-6 w-full">
    <div
      v-for="block in category.blocks"
      :key="block.id"
      class="box-section w-full flex"
    >
      <!-- Normal Block Text -->
      <div v-if="editing === false" class="w-full flex">
        <ContentBox :content="block.content" class="w-full" />
        <div v-if="block.image !== null" class="w-1/4 px-4 pt-10">
          <div class="w-full">
            <ImageBox :url="block.image.url" :caption="block.caption" />
          </div>
        </div>
      </div>
      <!-- Editing Block Text -->
      <div v-else class="w-full">
        <ContentEditor :content="block.content" class="w-full" />
      </div>
      <!-- Toggle Options -->
      <div v-if="editing === false" @click="editing = true">
        <div class="px-2">
          <div class="h-8 w-6 flex items-center cursor-pointer">
            <Edit />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/categories/category'
import blockMutation from '~/apollo/mutations/blocks/blockmutation'

export default {
  data() {
    return {
      editing: false,
    }
  },
  computed: {
    category() {
      return this.categories[0]
    },
  },
  created() {
    this.$nuxt.$on('update-content', (e) => {
      this.updateContent(this.category.blocks[0].id, e, 'Introduction')
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('update-content')
  },
  methods: {
    updateContent(id, content, title) {
      this.$apollo.mutate({
        mutation: blockMutation,
        variables: {
          id,
          content,
          title,
        },
      })
      location.reload()
    },
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return { url: 'home' }
      },
    },
  },
}
</script>
