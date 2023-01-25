<script setup>
defineProps({
  quotee: {
    type: String,
    required: false,
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
    <div
      v-if="avatar"
      class="avatar"
    >
      <img        
        class="avatar-img"
        :src="avatar"
      >
    </div>
    <div class="mt-3">
      <p class="mb-0">
        <span class="block">{{ quotee }}</span>
        <span>{{ organization }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.quote {
    @apply ml-2 my-10 pl-4 border-l border-gray-400;
}
.avatar {    
    @apply w-16 h-16;    
}
.avatar-img {
    @apply rounded-full w-full;    
}
</style>
