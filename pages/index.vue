<template>
  <div v-if="content" class="px-6 w-full flex">
    <div class="w-full">
      <!-- Normal Text -->
      <div v-if="!editing" class="w-full">
        <ContentBox :content="content" />
      </div>
      <!-- Editing Text -->
      <div v-else class="w-full">
        <!-- <textarea v-model="content" class="w-full h-64"></textarea> -->
        <ContentEditor :content="content" />
      </div>
    </div>
    <!-- Toggle Options -->
    <div v-if="!editing" @click="editing = !editing">
      <div class="px-2">
        <div class="h-8 w-6 flex items-center cursor-pointer">
          <Edit />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import introQuery from '~/apollo/queries/introduction/introduction'
import introMutate from '~/apollo/mutations/introduction/introductionmutation'

export default {
  data() {
    return {
      content: '',
      editing: false,
    }
  },
  created() {
    this.$nuxt.$on('update-content', (e) => {
      this.updateContent(null, e)
    })
  },
  methods: {
    updateContent(id, content) {
      if (id === null) {
        this.$apollo.mutate({
          mutation: introMutate,
          variables: {
            content,
          },
        })
        this.content = content
        this.editing = !this.editing
        location.reload()
      }
    },
  },

  apollo: {
    introduction: {
      prefetch: true,
      query: introQuery,
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.content = data.introduction.content
        }
      },
    },
  },
}
</script>
