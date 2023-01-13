<template>
  <div class="bg">
    <div>My blog navigation bar here</div>
    <Nuxt />
    <button @click="hasHistory() ? $router.go(-1) : $router.push('/')">
      Close
    </button>
  </div>
</template>

<script>
export default {
  
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
  },
};
</script>
<style scoped>
.bg {
  @apply bg-purple-500;
  min-height: 100vh;
}



</style>


