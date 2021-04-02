<template>
  <div class="w-full h-16 flex items-center bg-gray-200 dark:bg-gray-800">
    <div class="container">
      <div @click="lightTheme = !lightTheme"></div>
      <ToggleButton :is-active="lightTheme" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightTheme: false,
    }
  },
}
</script>
