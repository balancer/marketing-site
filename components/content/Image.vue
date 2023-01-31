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
    <div v-if="link">
      <a
      
        :href="link"
      >
        <img
          class="mb-0 pb-3"
          :src="image"
          :alt="caption"
        >
        <span
          v-if="caption"
          class="mt-0 text-sm text-gray-400"
        >{{ caption }}</span>        
      </a>
    </div>
    <div v-else>
      <img
        class="mb-0 pb-3"
        :src="image"
        :alt="caption"
      >
      <span
        v-if="caption"
        class="mt-0 text-sm text-gray-400"
      >{{ caption }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
