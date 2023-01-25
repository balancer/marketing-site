<script setup>
defineProps({
  displayImage: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },    
  caption: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <a :href="videoLink">
      <img
        class="mb-0 w-full max-w-xs pb-3"
        :src="displayImage"
        :alt="caption"
      >
    </a>
    <span class="mt-0 text-sm text-gray-400">{{ caption }}</span>
  </div>
</template>

<style scoped>

</style>
