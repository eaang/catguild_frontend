<template>
  <div class="relative" :class="{ dark: darkTheme }">
    <TheHeader />
    <div class="container">
      <div class="">
        <TheSidebar class="" />
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
