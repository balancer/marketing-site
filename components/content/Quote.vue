<script setup>
defineProps({
  quotee: {
    type: String,
    required: true
  },
  organization: {
    type: String,
  },    
  avatar: {
    type: String,
  },
})
</script>

<template>
  <div class="quote">
    <div class="max-w-2xl pr-10 italic">
      <slot />
    </div>
    <div v-if="avatar">
      <img
        class="py-4"
        :src="avatar"
      >
    </div>
    <div>
      <p class="mt-3">
        {{ quotee }}
      </p>
      <p>{{ organization }}</p>
    </div>
  </div>
</template>

<style scoped>
.quote {
    @apply ml-2 my-6 pl-4 border-l border-gray-400;
}
</style>

  