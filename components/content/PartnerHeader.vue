<script setup>
defineProps({
  name: {
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
  displayURL: {
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
          {{ name }}
        </h1>
        <p class="font-semibold">
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
