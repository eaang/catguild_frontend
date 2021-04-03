<template>
  <div class="px-6 w-full">
    <!-- Toggle Options -->
    <div class="h-6 w-6">
      <div v-if="!editing" @click="editing = !editing">
        <PencilAlt />
      </div>
      <div v-else @click="updateTitle">
        <Save />
      </div>
    </div>
    <!-- Normal Text -->
    <div v-if="!editing">
      <ContentBox :content="content" />
    </div>
    <!-- Editing Text -->
    <div v-else>
      <textarea v-model="content" class="w-full h-64"></textarea>
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

  methods: {
    updateTitle() {
      this.$apollo.mutate({
        mutation: introMutate,
        variables: {
          content: this.content,
        },
      })
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
