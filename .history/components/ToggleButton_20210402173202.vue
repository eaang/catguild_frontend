<template>
  <label for="toggle__button" class="toggle__button">
    <span v-if="isActive" class="toggle__label">On</span>
    <span v-if="!isActive" class="toggle__label">Off</span>

    <input id="toggle__button" type="checkbox" />
    <span class="toggle__switch"></span>
  </label>
</template>

<script>
export default {
  data() {
    return {
      currentState: false,
    }
  },
  computed: {
    isActive() {
      return this.currentState
    },
    checkedValue: {
      get() {
        return this.currentState
      },
      set(newValue) {
        this.currentState = newValue
      },
    },
  },
}
</script>
