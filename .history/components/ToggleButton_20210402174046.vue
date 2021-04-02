<template>
  <div @click="currentStatus = !currentStatus">
    <div class="bg-gray-800 w-12 h-12 rounded-pill">
      <div v-if="currentStatus" class="bg-gray-200 w-6 h-6 rounded-full"></div>
      <div v-if="!currentStatus" class="bg-gray-200 w-6 h-6 rounded-full"></div>
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
