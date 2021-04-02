<template>
  <label for="toggle_button">
    <span v-if="isActive">On</span>
    <span v-if="!isActive">Off</span>

    <input id="toggle_button" type="checkbox" />
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
