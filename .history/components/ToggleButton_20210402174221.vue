<template>
  <div @click="currentStatus = !currentStatus">
    <div class="bg-gray-800 w-10 h-5 p-1 rounded-full flex items-center">
      <div v-if="currentStatus" class="bg-gray-200 w-4 h-4 rounded-full"></div>
      <div v-if="!currentStatus" class="bg-gray-200 w-4 h-4 rounded-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStatus: false,
    }
  },
}
</script>
