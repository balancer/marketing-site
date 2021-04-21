<template>
  <div class="flex gap-4 pb-4">
    <img :src="'_nuxt/assets/svg/' + iconPath" alt="" />
    <p class="font-medium">{{benefit}}</p>
  </div>
</template>

<script>
export default {
  props: {
    benefit: String, 
    iconPath: String 
  }
};
</script>

<style scoped></style>
