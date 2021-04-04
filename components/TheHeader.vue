<template>
  <div class="w-full h-16 flex items-center">
    <div class="w-full p-6 flex justify-between items-center">
      <div class="left-side">
        <nuxt-link to="/"
          ><div class="text-2xl font-bold text-gray-800 dark:text-gray-200">
            ACAB
          </div></nuxt-link
        >
      </div>
      <div class="right-side">
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
      thisTheme: true,
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
