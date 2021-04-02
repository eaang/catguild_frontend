<template>
  <div>
    <div v-if="currentStatus">on</div>
    <div v-if="!currentStatus">off</div>
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
