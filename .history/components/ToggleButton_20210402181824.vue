<template>
  <div>
    <div
      class="w-12 h-6 px-1 rounded-full grid justify-items-auto items-center shadow-inner transition duration-200"
      :class="{ 'bg-gray-800': currentStatus, 'bg-gray-200': !currentStatus }"
    >
      <transition name="left">
        <div
          v-if="currentStatus"
          class="bg-gray-200 w-4 h-4 rounded-full shadow justify-self-start shadow-"
        ></div>
      </transition>
      <transition name="right">
        <div
          v-if="!currentStatus"
          class="bg-gray-800 w-4 h-4 rounded-full shadow justify-self-end"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentStatus() {
      return this.isActive
    },
  },
}
</script>

<style scoped>
.left-enter-active,
.left-leave-enter {
  transform: translateX(0);
  transition: all 0.2s linear;
}
.left-enter,
.left-leave-to {
  transform: translateX(100%);
}
.right-enter-active,
.right-leave-enter {
  transform: translateX(0);
  transition: all 0.2s linear;
}
.right-enter,
.right-leave-to {
  transform: translateX(-100%);
}
</style>
