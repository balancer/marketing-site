<template>
  <div class="flex pb-5 max-w-lg">
    <div class="mr-3">
      <div v-if="description" class="mt-2">        
        <img class="icon" :src="require('~/assets/svg/' + icon)" alt="" />
      </div>
      <div v-else>        
        <img class="icon" :src="require('~/assets/svg/' + icon)" alt="" />
      </div>
    </div>
    <div>
      <p class="font-medium">{{ title }}</p>
      <p class="block">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String
  }
};
</script>

<style scoped>

.icon {
  min-width: 24px;
}
</style>
