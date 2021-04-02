<template>
  <div class="relative" :class="{ dark: darkTheme }">
    <TheHeader class="absolute inset-x-0 top-0" />
    <div class="container mt-16">
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
