<template>
  <div @click="currentStatus = !currentStatus">
    <div
      class="w-10 h-5 px-1 rounded-full grid justify-items-auto items-center"
      :class="{ 'bg-gray-800': currentStatus, 'bg-gray-200': !currentStatus }"
    >
      <div
        v-if="currentStatus"
        class="bg-gray-800 w-3 h-3 rounded-full justify-self-start"
      ></div>
      <div
        v-if="!currentStatus"
        class="bg-gray-200 w-3 h-3 rounded-full justify-self-end"
      ></div>
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
