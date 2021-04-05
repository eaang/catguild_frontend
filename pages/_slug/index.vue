<template>
  <div v-if="categories" class="px-6">
    <div class="text-2xl font-bold uppercase">
      {{ category.name }}
    </div>
    <div
      v-for="block in category.blocks"
      :key="block.id"
      class="box-section w-full flex"
    >
      <!-- Normal Block Text -->
      <div v-if="editingBlock !== block.id" class="w-full">
        <span :id="anchorTag(block.title)"></span>
        <ContentBox :content="block.content" class="my-4" />
      </div>
      <!-- Editing Block Text -->
      <div v-else class="w-full">
        <ContentEditor :content="content" class="my-4" />
      </div>
      <!-- Toggle Options -->
      <div
        v-if="editingBlock !== block.id"
        @click="selectBlock(block.id, block.content)"
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
    }
  },
  computed: {
    category() {
      return this.categories[0]
    },
  },
  created() {
    this.$nuxt.$on('update-content', (e) => {
      this.updateContent(this.editingBlock, e)
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
    selectBlock(id, content) {
      this.editingBlock = id
      this.content = content
    },
    updateContent(id, content) {
      this.$apollo.mutate({
        mutation: blockMutation,
        variables: {
          id,
          content,
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
