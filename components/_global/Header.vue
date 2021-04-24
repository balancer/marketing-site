<template>
  <header class="header">
    <nav class="flex">
      <NuxtLink class="link" to="/"
        ><img class="logo" src="~assets/svg/logo-balancer.svg" alt="" /><span
          class="logotype"
          >Balancer</span
        >
      </NuxtLink>

      <div class="mobile-hide">
        <NuxtLink class="link" to="protocol">Protocol</NuxtLink>
        <NuxtLink class="link" to="developers">Developers</NuxtLink>
        <NuxtLink class="link" to="balancer-V2">V2</NuxtLink>
        <a
          class="link hover:text-accent transition-standard"
          href="https://docs.balancer.finance"
          >Docs</a
        >        
        <!-- <NuxtLink class="link hover:text-accent transition-standard" to="whitepaper">Whitepaper</NuxtLink> -->
        <a
          class="link hover:text-accent transition-standard"
          href="https://medium.com/balancer-protocol"
          >Blog</a
        >
      </div>
    </nav>
    <div class="flex items-center">
      <a
        class="px-4 mr-2 py-2 rounded-3xl border border-grey"
        href="https://app.balancer.fi/invest"
        >Launch&nbsp;app</a
      >
      <Burger />
    </div>
  </header>
</template>

<script>
import Burger from "@/components/menu/Burger.vue";

export default {
  components: {
    Burger
  }
};
</script>

<style scoped>
/* #TODO" remove overflow:auto once a js mobile nav is implmemented */
.mobile-hide {
  display: none;
}

@media (min-width: 639px) {
  .mobile-hide {
    display: flex;
  }
}
.header {
  @apply h-16 md:h-20 px-4 flex justify-between items-center;
  overflow: auto;
}
.link {
  @apply mr-4 flex hover:text-accent;
}
.logotype {
  @apply px-3 pr-6 md:pr-2 font-semibold;
}
</style>
