<template>
  <header class="header">
    <nav class="flex">
      <NuxtLink to="/"
        ><img class="logo" src="~assets/svg/logo-balancer.svg" alt=""
      /></NuxtLink>
      <NuxtLink class="hover:text-pink-500 transition-standard" to="protocol">Protocol</NuxtLink>
      <NuxtLink to="protocol">Developers</NuxtLink>
      <NuxtLink to="protocol">Community</NuxtLink>
    </nav>
    <div>
        <a href="https://app.balancer.fi/invest">Launch app</a>
    </div>

  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  @apply px-4 py-6 flex justify-between;
}
a {
   @apply mr-4;
}
</style>
