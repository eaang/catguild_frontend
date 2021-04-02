<template>
  <div class="px-6">
    <p>
      <strong> All Cats Are Beautiful </strong>
      is a semi-hardcore WoW TBC video game club made by and for leftists who
      want to 1) play/raid seriously 2) in an environment free of sexism,
      racism, homophobia, and any other type of bigotry. We are of course LGBTQ+
      friendly!
    </p>
    <p>
      Casual/social/pvp-focused members are also welcome, but are advised that
      our main focus is progression and raiding. Our overarching aim is to clear
      content in a timely and efficient manner and eventually kill KJ.
    </p>
    <p>
      We are on the server Deviate Delight (H) on US-East (RP-PVP), and raid
      twice a week (days/times TBD).
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    intro() {
      await this.$strapi.find('introduction')
    }
  },
}
</script>
