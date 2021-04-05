<template>
  <div class="">
    <div v-for="category in categories" :key="category.id">
      <div class="flex justify-between items-center cursor-pointer">
        <nuxt-link to="/rules" class="flex-grow">
          <SidebarMain
            :title="category.name"
            :class="{ disabled: category.blocks.length === 0 }"
          />
        </nuxt-link>
        <div v-if="category.blocks.length !== 0">
          <div class="px-2" @click="dropdown1 = !dropdown1">
            <div v-if="dropdown1" class="h-4 w-4"><ChevronDown /></div>
            <div v-if="!dropdown1" class="h-4 w-4"><ChevronUp /></div>
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
      dropdown1: false,
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
}
</script>
