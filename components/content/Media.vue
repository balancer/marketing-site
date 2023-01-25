<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },    
  caption: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <a :href="link">
      <img
        class="mb-0 w-full max-w-xs pb-3"
        :src="image"
        :alt="caption"
      >
    </a>
    <span class="mt-0 text-sm text-gray-400">{{ caption }}</span>
  </div>
</template>

<style scoped>

</style>