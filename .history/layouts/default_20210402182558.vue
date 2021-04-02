<template>
  <div class="">
    <TheHeader />
    <TheSidebar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  created() {
    this.$nuxt.$on('changeTheme', () => {
      this.lightTheme = !this.lightTheme
    })
  },
}
</script>
