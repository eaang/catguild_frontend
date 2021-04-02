<template>
  <div
    class="relative pt-16 h-screen bg-gray-200 dark:bg-gray-800"
    :class="{ dark: darkTheme }"
  >
    <TheHeader class="absolute inset-x-0 top-0" />
    <div class="container h-full">
      <div class="flex h-full">
        <TheSidebar class="w-1/3 h-full" />
        <Nuxt class="h-full" />
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: true,
    }
  },
  created() {
    this.$nuxt.$on('change-theme', () => {
      this.darkTheme = !this.darkTheme
    })
  },
}
</script>
