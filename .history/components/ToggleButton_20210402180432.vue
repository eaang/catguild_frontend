<template>
  <div class="" @click="currentStatus = !currentStatus">
    <div
      class="w-12 h-6 px-1 rounded-full grid justify-items-auto items-center border border-black"
      :class="{ 'bg-gray-800': currentStatus, 'bg-gray-200': !currentStatus }"
    >
      <transition name="left">
        <div
          v-if="currentStatus"
          class="bg-pink-200 w-4 h-4 rounded-full justify-self-start"
        ></div>
      </transition>
      <transition name="show">
        <div
          v-if="!currentStatus"
          class="bg-pink-800 w-4 h-4 rounded-full justify-self-end"
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
.left-enter-active,
.left-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.left-enter,
.left-leave-to {
  transform: translateX(100%);
}
.right-enter-active,
.right-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.right-enter,
.right-leave-to {
  transform: translateX(-100%);
}
</style>
