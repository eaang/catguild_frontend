<template>
  <label for="toggle_button">
    <span v-if="currentState">On</span>
    <span v-if="!currentState">Off</span>

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
}
</script>
