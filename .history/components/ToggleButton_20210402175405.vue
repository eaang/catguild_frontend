<template>
  <div class="" @click="currentStatus = !currentStatus">
    <div
      class="w-12 h-6 px-1 rounded-full grid justify-items-auto items-center border border-black"
      :class="{ 'bg-gray-800': currentStatus, 'bg-gray-200': !currentStatus }"
    >
      <transition name="slide">
        <div
          v-if="currentStatus"
          class="bg-gray-200 w-4 h-4 rounded-full justify-self-start"
        ></div>
        <div
          v-if="!currentStatus"
          class="bg-gray-800 w-4 h-4 rounded-full justify-self-end"
        ></div>
      </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
