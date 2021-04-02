<template>
  <div @click="currentStatus = !currentStatus">
    <div
      class="bg-gray-800 w-8 h-4 px-1 rounded-full grid justify-items-auto items-center"
    >
      <div
        v-if="currentStatus"
        class="bg-gray-200 w-2 h-2 rounded-full justify-self-start"
      ></div>
      <div
        v-if="!currentStatus"
        class="bg-gray-200 w-2 h-2 rounded-full justify-self-end"
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
