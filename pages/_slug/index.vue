<template>
  <div v-if="categories" class="px-6 w-full">
    <div class="text-2xl font-bold uppercase">
      {{ category.name }}
    </div>
    <div
      v-for="block in category.blocks"
      :key="block.id"
      class="box-section w-full flex"
    >
      <!-- Normal Block Text -->
      <div v-if="editingBlock !== block.id" class="w-full flex">
        <span :id="anchorTag(block.title)"></span>
        <ContentBox :content="block.content" class="my-4 w-full" />
        <div v-if="block.image !== null" class="w-1/4 px-4 pt-14">
          <ImageBox :url="block.image.url" :caption="block.caption" />
        </div>
      </div>
      <!-- Editing Block Text -->
      <div v-else class="w-full space-y-2">
        <ContentEditor :content="content" class="mt-4 w-full" />
        <div class="flex items-center leading-8 space-x-2">
          <div class="text-sm uppercase font-bold flex-shrink-0">
            Sidebar Title
          </div>
          <div class="w-full">
            <input
              v-model="title"
              type="text"
              class="w-full px-2 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
        </div>
      </div>
      <!-- Toggle Options -->
      <div
        v-if="editingBlock !== block.id"
        @click="selectBlock(block.id, block.content, block.title)"
      >
        <div class="px-2 mt-4">
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
      editingBlock: null,
      content: '',
      title: '',
    }
  },
  computed: {
    category() {
      return this.categories[0]
    },
  },
  created() {
    this.$nuxt.$on('update-content', (e) => {
      this.updateContent(this.editingBlock, e, this.title)
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('update-content')
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return { url: this.$route.params.slug }
      },
    },
  },
  methods: {
    anchorTag(str) {
      return str.match(/\w/g).join('').toLowerCase()
    },
    selectBlock(id, content, title) {
      this.editingBlock = id
      this.content = content
      this.title = title
    },
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
