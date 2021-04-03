<template>
  <div class="px-6 w-full space-y-2">
    <div class="flex leading-8 justify-between items-center">
      <div v-if="!editing" class="text-2xl font-bold">
        {{ title }}
      </div>
      <div v-else>
        <input v-model="title" type="text" class="w-full" />
      </div>
      <div class="w-6 h-6 hover:text-gray-400 cursor-pointer">
        <div v-if="!editing" @click="editing = !editing">
          <PencilAlt />
        </div>
        <div v-else @click="updateTitle">
          <Save />
        </div>
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="!editing" class="space-y-2" v-html="$md.render(content)"></div>
    <div v-else>
      <textarea v-model="content" class="w-full"></textarea>
    </div>
  </div>
</template>

<script>
import introQuery from '~/apollo/queries/introduction/introduction'
import introMutate from '~/apollo/mutations/introduction/introductionmutation'

export default {
  data() {
    return {
      title: '',
      content: '',
      editing: false,
    }
  },

  methods: {
    updateTitle() {
      this.$apollo.mutate({
        mutation: introMutate,
        variables: {
          title: this.title,
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
          this.title = data.introduction.title
          this.content = data.introduction.content
        }
      },
    },
  },
}
</script>
