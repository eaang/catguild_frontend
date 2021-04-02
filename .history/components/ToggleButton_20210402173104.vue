<template>
  <label for="toggle_button">
    <span v-if="isActive" class="toggle__label">On</span>
    <span v-if="!isActive" class="toggle__label">Off</span>

    <input id="toggle_button" type="checkbox" />
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
