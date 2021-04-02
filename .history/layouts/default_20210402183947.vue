<template>
  <div :class="{ dark: darkTheme }">
    <TheHeader />
    <div class="container">
      <TheSidebar />
      <Nuxt />
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
