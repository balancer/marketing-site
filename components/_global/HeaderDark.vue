<template>
  <header class="header">
    <nav class="flex">
      <NuxtLink class="link" to="/">
        <img class="logo" src="~assets/svg/logo-balancer.svg" alt="" /><span
          class="logotype"
          >Balancer</span
        >
      </NuxtLink>

      <div class="mobile-hide">
        <transition name="fade" appear>
          <NuxtLink class="nav-link" data-hover="Protocol" to="protocol"
            >Protocol</NuxtLink
          >
        </transition>
        <NuxtLink class="nav-link" data-hover="Build" to="build"
          >Build</NuxtLink
        >
        <!-- <NuxtLink class="link" to="balancer-V2">V2</NuxtLink> -->
        <a
          class="nav-link"
          data-hover="Docs"
          href="https://docs.balancer.finance"
          >Docs</a
        >
        <!-- <NuxtLink class="link hover:text-accent transition-standard" to="whitepaper">Whitepaper</NuxtLink> -->
        <a
          class="nav-link"
          data-hover="Blog"
          href="https://medium.com/balancer-protocol"
          >Blog</a
        >
      </div>
    </nav>
    <div class="flex items-center">
      <a
        class="px-4 mr-2 py-2 rounded-3xl border border-grey text-white"
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
  @apply h-16 md:h-20 px-4 flex justify-between items-center bg-black;
  overflow: auto;
}
.link {
  @apply mr-4 flex hover:text-accent;
}
.logotype {
  @apply px-3 pr-6 md:pr-2 font-semibold;
}

/* .fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.fade-enter-active {
  transition: 1s all ease-in-out 0.3s;
} */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}

.nav-link {
  @apply font-medium;
  position: relative;
  outline: none;
  text-decoration: none;
  color: #ccc;
  margin-right: 1rem;
  /* text-transform: uppercase; */
  /* letter-spacing: 1px; */
  /* font-weight: 400; */
  /* text-shadow: 0 0 1px rgba(255,255,255,0.3); */
  /* font-size: 1.35em; */
}

.nav-link:hover,
.nav-link:focus {
  outline: none;
}

.nav-link::before {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 0;
  border-bottom: 2px solid #0000ff;
  color: #fff;
  content: attr(data-hover);
  -webkit-transition: max-width 0.2s ease-in-out;
  -moz-transition: max-width 0.2s ease-in-out;
  transition: max-width 0.2s ease-in-out;
}

.nav-link:hover::before,
.nav-link:focus::before {
  max-width: 100%;
}
</style>
