<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  category: {
    type: String,
    default: 'Default description'
  },
  url: {
    type: String,
    default: 'Default description'
  },
  display: {
    type: String,
    default: 'Default description'
  },    
  icon: {
    type: String,
    default: 'IconMarkdown'
  },
})
</script>

<template>
  <div>
    <div class="container">
      <div class="header">
        <h1 class="text-5xl font-normal text-white">
          {{ title }}
        </h1>
        <p class="font-semibold">
          {{ category }}
        </p>
        
        <a
          class="link font-semibold"
          :href="url"
        >{{ display }}
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
