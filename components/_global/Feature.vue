<script setup>
const props = defineProps({
  title: String,
  description: String,
  icon: String,
});

const iconUrl = computed(() => {
  // Note that dynamic images like these ones must be inside public folder (assets folder would not work)
  return `/svg/${props.icon}`;
});
</script>

<template>
  <div class="flex max-w-lg pb-5">
    <div class="mr-3">
      <div
        v-if="description"
        class="mt-2"
      >
        <img
          class="icon"
          :src="iconUrl"
          alt=""
        >
      </div>
      <div v-else>
        <img
          class="icon"
          :src="iconUrl"
          alt=""
        >
      </div>
    </div>
    <div>
      <p class="font-medium">
        {{ title }}
      </p>
      <p class="block">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.icon {
  min-width: 24px;
}
</style>
