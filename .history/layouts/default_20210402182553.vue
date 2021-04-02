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
      lightTheme = !lightTheme
    })
  },
}
</script>
