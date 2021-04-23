<template>
  <header class="header">
    <nav class="flex">
      <NuxtLink class="link" to="/"
        ><img class="logo" src="~assets/svg/logo-balancer.svg" alt=""
      /><span class="logotype">Balancer</span>
      </NuxtLink>
      
      <!-- <NuxtLink class="link font-medium" to="/">Balancer</NuxtLink> -->
      <NuxtLink class="link" to="protocol">Protocol</NuxtLink>
      <NuxtLink class="link" to="developers">Developers</NuxtLink>
      <NuxtLink class="link" to="developers">Docs</NuxtLink>
      <!-- <NuxtLink class="link hover:text-accent transition-standard" to="whitepaper">Whitepaper</NuxtLink> -->
      <a class="link hover:text-accent transition-standard" href="https://medium.com/balancer-protocol">Blog</a>
    </nav>
    <div>
        <a class="px-4 mr-4 md:mr-0 py-2 rounded-3xl border border-grey" href="https://app.balancer.fi/invest">Launch&nbsp;app</a>
    </div>

  </header>
</template>

<script>
export default {

};
</script>

<style scoped>

/* #TODO" remove overflow:auto once a js mobile nav is implmemented */
.header {
  @apply  h-14 md:h-20 px-4 py-2 md:py-6 flex justify-between items-center;  
  overflow: auto;

}
.link {
   @apply mr-4 flex hover:text-accent;
}
.logotype {
  @apply px-3 pr-6 md:pr-2 font-semibold;
}
</style>
