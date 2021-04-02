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
    this.$nuxt.$on('changeTheme', () => {
      this.lightTheme = !this.lightTheme
    })
  },
}
</script>
