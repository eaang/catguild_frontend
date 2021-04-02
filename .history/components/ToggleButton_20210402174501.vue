<template>
  <div @click="currentStatus = !currentStatus">
    <div
      class="bg-gray-800 w-10 h-4 p-1 rounded-full grid justify-items-stretch"
    >
      <div
        v-if="currentStatus"
        class="bg-gray-200 w-4 h-4 rounded-full justify-self-start"
      ></div>
      <div
        v-if="!currentStatus"
        class="bg-gray-200 w-4 h-4 rounded-full justify-self-end"
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
