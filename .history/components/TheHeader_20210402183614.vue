<template>
  <div
    class="w-full flex items-center bg-gray-200 dark:bg-gray-800 transition duration-200"
  >
    <div class="container flex justify-between">
      <div class="left-side h-full flex items-center">
        <nuxt-link to="/"
          ><div class="text-white text-2xl font-bold">ACAB</div></nuxt-link
        >
      </div>
      <div class="right-side h-full flex items-center">
        <div @click="changeTheme">
          <ToggleButton :is-active="thisTheme" />
        </div>
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
