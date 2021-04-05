<template>
  <div class="">
    <div class="flex justify-between items-center cursor-pointer">
      <nuxt-link to="/rules" class="flex-grow">
        <SidebarMain title="Rules" />
      </nuxt-link>

      <div class="px-2" @click="dropdown1 = !dropdown1">
        <div v-if="dropdown1" class="h-4 w-4"><ChevronDown /></div>
        <div v-if="!dropdown1" class="h-4 w-4"><ChevronUp /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown1: false,
    }
  },
}
</script>
