<template>
  <div @click="currentStatus = !currentStatus">
    <div class="bg-gray-800 w-12">
      <div v-if="currentStatus" class="bg-white-200 w-6">on</div>
      <div v-if="!currentStatus">off</div>
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
