<script setup>
defineProps({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  url: {
    type: String,
  },
  displayURL: {
    type: String,
  },    
  icon: {
    type: String,
  },
})
</script>

<template>
  <div class="partner-header">
    <div class="container pb-4">
      <div class="header">
        <h1 class="text-5xl font-normal text-white">
          {{ name }}
        </h1>
        <p class="category">
          {{ category }}
        </p>
        
        <a
          class="link font-semibold"
          :href="url"
        >{{ displayURL }}
          <icon-base
            width="14"
            height="14"
            icon-name="external-link"
          ><icon-external-link class="fill" /></icon-base>
        </a>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped>
.category {
  @apply m-0 text-white font-semibold;
}
</style>