<template>
  <div class="error-container">
    <div class="">
      <h1 class="h1 text-white" v-if="error.statusCode === 404">
        404<span class="h1-subtext">Page not found</span>
      </h1>
      <h1 class="h1-subtext" v-else>An error occurred</h1>
      <NuxtLink class="btn btn-secondary" to="/">Return Home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error" // you can set a custom layout for the error page
};
</script>

<style scoped>
.h1 {
  font-family: 'Inter var', sans-serif;
  font-size: 60px;
}

.h1-subtext {
  @apply font-extrabold pb-4 md:text-6xl text-white pt-4;
  font-size: 32px;
  line-height: 1.1;
  font-family: 'Inter var', sans-serif;
  letter-spacing: -0.5px;
  display: block;
}

.error-container {
  @apply flex justify-center items-center bg-cover bg-no-repeat bg-center;
  background-color: #ccc;
  background-image: url(~assets/svg/error-bg.svg);
  min-height: 400px;
  height: calc(100vh - 200px);
  text-align: center;
}
@media (min-height: 900px) {
  .error-container {
    min-height: 400px;
    height: calc(100vh - 300px);
  }
}
</style>
