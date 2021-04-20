<template>
  <header class="header">
    <nav class="flex">
      <NuxtLink to="/"
        ><img class="logo link" src="~assets/svg/logo-balancer.svg" alt=""
      /></NuxtLink>
      
      <NuxtLink class="link font-medium" to="/">Balancer</NuxtLink>
      <NuxtLink class="link hover:text-purple-500 transition-standard" to="protocol">Protocol</NuxtLink>
      <NuxtLink class="link hover:text-purple-500 transition-standard" to="developers">Developers</NuxtLink>
      <NuxtLink class="link hover:text-purple-500 transition-standard" to="developers">Docs</NuxtLink>
      <NuxtLink class="link hover:text-purple-500 transition-standard" to="whitepaper">Whitepaper</NuxtLink>
      <a class="link hover:text-purple-500 transition-standard" href="https://medium.com/balancer-protocol">Blog</a>
    </nav>
    <div>
        <a class="px-4 py-2 rounded-3xl border border-grey" href="https://app.balancer.fi/invest">Launch app</a>
    </div>

  </header>
</template>

<script>
export default {

};
</script>

<style scoped>
.header {
  @apply px-4 py-6 flex justify-between;
}
.link {
   @apply mr-4;
}
</style>
