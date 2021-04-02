<template>
  <div class="" @click="currentStatus = !currentStatus">
    <div
      class="w-12 h-6 px-1 rounded-full grid justify-items-auto items-center border border-black"
      :class="{ 'bg-gray-800': currentStatus, 'bg-gray-200': !currentStatus }"
    >
      <transition name="slide-fade">
        <div
          v-if="currentStatus"
          class="bg-pink-200 w-4 h-4 rounded-full justify-self-start"
        ></div>
      </transition>
      <div
        v-if="!currentStatus"
        class="bg-pink-800 w-4 h-4 rounded-full justify-self-end"
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
