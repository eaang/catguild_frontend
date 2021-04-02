<template>
  <div :class="{ dark: darkTheme }">
    <TheHeader />
    <div class="container">
      <div class="relative">
        <TheSidebar class="absolute inset-y-0 left-0" />
        <Nuxt />
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
