<template>
  <div :class="{ dark: darkTheme }">
    <div
      class="relative pt-16 h-screen theme bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition duration-200"
    >
      <TheHeader class="absolute inset-x-0 top-0" />
      <div class="container h-full">
        <div class="flex h-full pt-6">
          <TheSidebar class="w-64 h-full flex-shrink-0" />
          <Nuxt class="h-full" />
        </div>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    }
  },
  created() {
    this.$nuxt.$on('change-theme', () => {
      this.darkTheme = !this.darkTheme
    })
  },
}
</script>

<style>
.markdown h1 {
  @apply text-2xl font-bold;
}
.markdown h2 {
  @apply text-xl font-bold;
}
.markdown h3 {
  @apply text-lg font-bold;
}
.markdown ul {
  @apply list-disc;
}
.markdown ol {
  @apply list-decimal;
}
.markdown li {
  @apply ml-6;
}
.markdown blockquote {
  @apply pl-2 my-2 border-l-4 border-gray-300 italic;
}
.markdown pre {
  @apply p-2 my-2 bg-black text-white rounded-lg;
}
.markdown hr {
  @apply my-2;
}
</style>
