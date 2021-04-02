<template>
  <div :class="{ dark: darkTheme }">
    <div
      class="relative pt-16 h-screen theme bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition duration-200"
    >
      <TheHeader class="absolute inset-x-0 top-0" />
      <div class="container h-full">
        <div class="flex h-full pt-6">
          <TheSidebar class="w-64 h-full flex-grow" />
          <Nuxt class="h-full" />
        </div>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    }
  },
  created() {
    this.$nuxt.$on('change-theme', () => {
      this.darkTheme = !this.darkTheme
    })
  },
}
</script>
