<template>
  <div @click="currentStatus = !currentStatus">
    <div class="bg-gray-800">
      <div v-if="currentStatus">on</div>
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
