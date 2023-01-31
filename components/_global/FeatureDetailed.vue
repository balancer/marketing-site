<template>
  <div class="max-w-lg pb-12">
    <img
      class="icon"
      :src="'~/assets/svg/' + icon"
      alt=""
    >
    <h2>{{ title }}</h2>
    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style scoped>
.icon {
  @apply mb-4;
  width: 44px;
  height: 44px;
}
</style>
