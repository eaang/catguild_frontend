<template>
  <div class="w-full p-1 border border-gray-400">
    <div class="w-full p-1 border border-gray-400">
      <img :src="url" alt="" class="w-full object-cover" />
    </div>
    <div v-if="caption" class="text-sm italic px-1 py-1">
      {{ caption }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default:
        'https://res.cloudinary.com/dqywsmiax/image/upload/v1617701352/kitty_cat_kitten_pet_45201_8b8f6dc781.jpg',
    },
    caption: {
      type: String,
      default: null,
    },
  },
}
</script>
