<template>
  <div class="px-6 w-full flex">
    <div class="w-full">
      <!-- Normal Text -->
      <div v-if="!editing">
        <ContentBox :content="content" />
      </div>
      <!-- Editing Text -->
      <div v-else>
        <!-- <textarea v-model="content" class="w-full h-64"></textarea> -->
        <ContentEditor :content="content" />
      </div>
    </div>
    <!-- Toggle Options -->
    <div class="px-2">
      <div class="h-6 w-6">
        <div v-if="!editing" @click="editing = !editing">
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
      this.updateContent(e)
    })
  },
  methods: {
    updateContent(content) {
      this.$apollo.mutate({
        mutation: introMutate,
        variables: {
          content,
        },
      })
      this.content = content
      this.editing = !this.editing
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
