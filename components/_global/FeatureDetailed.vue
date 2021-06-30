<template>
  <div class="pb-12 max-w-lg">
    <img class="icon" :src="require('~/assets/svg/' + icon)" alt="" />
    <h2>{{title}}</h2>
    <p v-if="description">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        icon: {
            type: String
        }        
    }
};
</script>

<style scoped>
.icon {
  @apply mb-4;
  width: 44px;
  height: 44px;
}
</style>
