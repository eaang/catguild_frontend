<template>
  <div class="" @click="currentStatus = !currentStatus">
    <div
      class="w-12 h-6 px-1 rounded-full grid justify-items-auto items-center border border-black"
      :class="{ 'bg-gray-800': currentStatus, 'bg-gray-200': !currentStatus }"
    >
      <transition-group  name="slide">
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
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
