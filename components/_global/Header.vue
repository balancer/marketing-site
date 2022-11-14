<template>
  <header class="header">
    <nav class="flex">
      <NuxtLink class="logotype mr-4 lg:mr-8" to="/">
        <logotype-balancer />
      </NuxtLink>
      <div class="mobile-hide mr-4">
        <!-- <NuxtLink class="nav-link nav-link--red" data-hover="Invest" to="/invest"
          >Invest</NuxtLink
        >
        <NuxtLink class="nav-link nav-link--blue" data-hover="Trade" to="/trade"
          >Trade</NuxtLink
        > -->
        <NuxtLink class="nav-link nav-link--pink" data-hover="Build" to="/build"
          >Build</NuxtLink
        >
      </div>
    </nav>
    <div class="flex items-center">
      <div class="mobile-hide">
        <div class="flex items-center nav-utility-link">
          <a class="nav-link" data-hover="Docs" href="https://docs.balancer.fi"
            >Docs
            <icon-base width="14" height="14" icon-name="docs-external-link"
              ><icon-external-link /></icon-base
          ></a>
        </div>
        <div class="flex items-center nav-utility-link">
          <a
            class="nav-link"
            data-hover="Blog"
            href="https://medium.com/balancer-protocol"
            >Blog
            <icon-base width="14" height="14" icon-name="blog-external-link"
              ><icon-external-link
            /></icon-base>
          </a>
        </div>
      </div>
      <a
        onclick="fathom.trackGoal('OMNVISTW', 0);"
        class="btn-header"
        href="https://app.balancer.fi/"
        >Explore&nbsp;pools</a
      >
      <Burger />
    </div>
  </header>
</template>

<script>
import Burger from "@/components/menu/Burger.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import LogotypeBalancer from "@/components/icons/LogotypeBalancer.vue";

export default {
  components: {
    Burger,
    IconBase,
    IconExternalLink,
    LogotypeBalancer
  }
};
</script>

<style scoped>
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
}
.link {
  @apply mr-4 flex hover:text-accent;
}
.logotype {
  position: relative;
  top: 1px;
}

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
  margin-right: 0.75rem;
}

.nav-utility-link {
  @apply mr-3;
}

@media (min-width: 1024px) {
  .nav-link {
    margin-right: 1rem;
  }
  .nav-utility-link {
    @apply mr-4;
  }
}

.nav-utility-link .nav-link {
  margin-right: 4px;
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
  color: #0000ff;
  content: attr(data-hover);
  -webkit-transition: max-width 0.2s ease-out;
  -moz-transition: max-width 0.2s ease-out;
  transition: max-width 0.2s ease-out;
}

/* .nav-link--pink::before {
  border-bottom: 2px solid #FF00FF;
}
.nav-link--red::before {
  border-bottom: 2px solid #F12954;
}
.nav-link--blue::before {
  border-bottom: 2px solid #0055FF;
} */

.nav-link:hover::before,
.nav-link:focus::before {
  max-width: 100%;
}

.btn-header {
  background-size: 300% 100%;
  transition: all 0.2s ease-out;
  background-image: linear-gradient(to right, #fff, #fff, #0000ff, #ff00ff);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);  
  @apply px-4 mr-2 py-2 rounded-lg font-medium border border-solid border-gray-200;
}
.btn-header:hover {
  background-position: 100% 0;
  box-shadow: 0 4px 15px 0 rgba(300, 100, 50, 0);
  transition: all 0.2s ease-out;
  color: white;
  border: 1px solid transparent;
}

.btn-header:focus {
  outline: none;
}
</style>
