<template>
  <div :class="{ dark: lightTheme }">
    <TheHeader />
    <TheSidebar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightTheme: false,
    }
  },
  created() {
    this.$nuxt.$on('change-theme', () => {
      this.lightTheme = !this.lightTheme
    })
  },
}
</script>
