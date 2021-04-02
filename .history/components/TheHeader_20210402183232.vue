<template>
  <div
    class="w-full h-16 flex items-center bg-gray-200 dark:bg-gray-800 transition duration-200"
  >
    <div class="container flex">
      <div>Home</div>
      <div @click="changeTheme">
        <ToggleButton :is-active="thisTheme" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisTheme: false,
    }
  },
  methods: {
    changeTheme() {
      this.thisTheme = !this.thisTheme
      this.$nuxt.$emit('change-theme')
    },
  },
}
</script>
