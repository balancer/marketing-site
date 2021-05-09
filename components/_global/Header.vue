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
        <NuxtLink class="nav-link" data-hover="Invest" to="invest"
          >Invest</NuxtLink
        >
        <NuxtLink class="nav-link" data-hover="Trade" to="trade"
          >Trade</NuxtLink
        >                
        <NuxtLink class="nav-link" data-hover="Build" to="build"
          >Build</NuxtLink
        >
        <!-- <NuxtLink class="link" to="balancer-V2">V2</NuxtLink> -->
      </div>
    </nav>
    <div class="flex items-center">
      <div class="mobile-hide">
        <div class="flex items-center nav-utility-link">
          <a
            class="nav-link"
            data-hover="Docs"
            href="https://docs.balancer.finance"
            >Docs
            <icon-base width="14" height="14" icon-name="external link"
              ><icon-external-link /></icon-base
          ></a>
        </div>
        <!-- <NuxtLink class="link hover:text-accent transition-standard" to="whitepaper">Whitepaper</NuxtLink> -->
        <div class="flex items-center nav-utility-link">
          <a
            class="nav-link"
            data-hover="Blog"
            href="https://medium.com/balancer-protocol"
            >Blog
            <icon-base width="14" height="14" icon-name="external link"
              ><icon-external-link
            /></icon-base>
          </a>
        </div>
      </div>
      <a class="btn-header" href="https://app.balancer.fi/invest"
        >Launch&nbsp;app</a
      >
      <Burger />
    </div>
  </header>
</template>

<script>
import Burger from "@/components/menu/Burger.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconExternalLink from "@/components/icons/IconExternalLink.vue";

export default {
  components: {
    Burger,
    IconBase,
    IconExternalLink
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
  @apply h-16 md:h-20 px-3 flex justify-between items-center;
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
  position: relative;
  outline: none;
  color: #0000ff;
  text-decoration: none;
  color: #000;
  margin-right: 1rem;
}

.nav-utility-link {
  @apply mr-4;
}

.nav-utility-link .nav-link {
  margin-right: 5px;
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
  border-bottom: 2px solid purple;
  color: purple;
  content: attr(data-hover);
  -webkit-transition: max-width 0.2s ease-out;
  -moz-transition: max-width 0.2s ease-out;
  transition: max-width 0.2s ease-out;
}

.nav-link:hover::before,
.nav-link:focus::before {
  max-width: 100%;
}

.btn-header {
  @apply px-4 mr-2 py-2 rounded-lg border font-medium;
  background-size: 300% 100%;

  transition: all 0.1s ease-out;
  background-image: linear-gradient(to right, #fff, #fff, #0000ff, #ff00ff);
}
.btn-header:hover {
  background-position: 100% 0;
  box-shadow: 0 4px 15px 0 rgba(300, 100, 50, 0.1);
  transition: all 0.2s ease-out;
  color: white;
  border: 1px solid transparent;
}

.btn-header:focus {
  outline: none;
}
</style>
