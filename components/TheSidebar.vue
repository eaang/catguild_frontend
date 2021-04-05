<template>
  <div class="">
    <nuxt-link to="/">
      <div class="py-2 font-semibold text-sm uppercase">HOME</div>
    </nuxt-link>
    <div v-for="category in categories" :key="category.id">
      <div v-if="category.url !== 'home'">
        <div
          class="flex justify-between items-center cursor-pointer"
          :class="{ 'pointer-events-none': category.blocks.length === 0 }"
        >
          <nuxt-link
            :to="{ path: '/' + category.url, params: { id: category.id } }"
            class="flex-grow"
            :disabled="category.blocks.length === 0"
          >
            <div
              class="py-2 font-semibold text-sm uppercase"
              :class="{ disabled: category.blocks.length === 0 }"
            >
              {{ category.name }}
            </div>
          </nuxt-link>
          <div v-if="category.blocks.length !== 0">
            <div class="px-2" @click="setActive(category.url)">
              <div v-if="activeItem === category.url" class="h-4 w-4">
                <ChevronDown />
              </div>
              <div v-if="activeItem !== category.url" class="h-4 w-4">
                <ChevronUp />
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeItem === category.url" class="mb-2">
          <div v-for="block in category.blocks" :key="block.title">
            <nuxt-link
              :to="{
                path: '/' + category.url + '#' + anchorTag(block.title),
                params: { id: category.id },
              }"
              class="flex-grow"
              :disabled="category.blocks.length === 0"
            >
              <div class="py-2 pl-4 font-semibold text-sm cursor-pointer">
                {{ block.title }}
              </div></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/categories/categories'

export default {
  data() {
    return {
      activeItem: null,
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
  methods: {
    setActive(i) {
      if (this.activeItem === i) {
        this.activeItem = null
      } else this.activeItem = i
    },
    anchorTag(str) {
      return str.match(/\w/g).join('').toLowerCase()
    },
  },
}
</script>

<style scoped>
.disabled {
  @apply text-gray-400 dark:text-gray-600;
}
</style>
