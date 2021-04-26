<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="toggleSidebar"
      v-if="sidebarOpen"
    ></div>
    <transition name="slide">
      <div v-if="sidebarOpen" class="sidebar-panel">
        <slot>
          <div class="flex flex-col mb-8">
            <NuxtLink
              @click.native="toggleSidebar"
              class="link text-lg leading-8"
              to="/"
              >Home</NuxtLink
            >
            <NuxtLink
              @click.native="toggleSidebar"
              class="link text-lg leading-8"
              to="protocol"
              >Protocol</NuxtLink
            >
            <NuxtLink
              @click.native="toggleSidebar"
              class="link text-lg leading-8"
              to="developers"
              >Developers</NuxtLink
            >
            <!-- <NuxtLink
              @click.native="toggleSidebar"
              class="link text-lg leading-8"
              to="balancer-V2"
              >V2</NuxtLink
            > -->
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Products</p>
            <p class="pb-1">
              <a @click="toggleSidebar" href="https://balancer.fi/invest"
                >Invest</a
              >
            </p>
            <p>
              <a @click="toggleSidebar" href="https://balancer.fi/trade"
                >Trade</a
              >
            </p>
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Learn</p>
            <p class="pb-1">
              <a
                @click="toggleSidebar"
                href="https://medium.com/balancer-protocol"
                >Blog</a
              >
            </p>
            <p class="pb-1">
              <a @click="toggleSidebar" href="https://docs.balancer.finance/"
                >Documentation</a
              >
            </p>
            <p class="pb-1">
              <a
                @click="toggleSidebar"
                href="https://balancer.finance/whitepaper/"
                >Whitepaper</a
              >
            </p>
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Ecosystem</p>
            <p class="pb-1">
              <a @click="toggleSidebar" href="https://vote.balancer.finance/"
                >Snapshot governance</a
              >
            </p>
            <p class="pb-1">
              <a
                @click="toggleSidebar"
                href="https://duneanalytics.com/balancerlabs"
                >Dune analytics</a
              >
            </p>

            <p class="pb-1">
              <a @click="toggleSidebar" href="https://forum.balancer.finance/"
                >Forum</a
              >
            </p>
            <p>
              <a
                @click="toggleSidebar"
                href="https://forum.balancer.finance/t/ecosystem-fund-grant-process/166"
                >Grants</a
              >
            </p>
          </div>

          <div class="pb-4">
            <div class="flex">
              <a
                class="mr-2"
                @click="toggleSidebar"
                href="https://twitter.com/BalancerLabs"
                ><img src="@/assets/svg/icon-twitter.svg" alt=""
              /></a>

              <a
                class="mr-2"
                @click="toggleSidebar"
                href="https://discord.com/invite/ARJWaeF"
                ><img src="@/assets/svg/icon-discord.svg" alt=""
              /></a>

              <a
                class="mr-2"
                @click="toggleSidebar"
                href="https://medium.com/balancer-protocol"
                ><img src="@/assets/svg/icon-medium.svg" alt=""
              /></a>

              <a
                class="mr-2"
                @click="toggleSidebar"
                href="https://github.com/balancer-labs/"
                ><img src="@/assets/svg/icon-github.svg" alt=""
              /></a>

              <a @click="toggleSidebar" href="mailto:contact@balancer.finance"
                ><img src="@/assets/svg/icon-mail.svg" alt=""
              /></a>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import MenuLinks from "@/components/menu/MenuLinks.vue";

export default {
  computed: {
    ...mapState({
      sidebarOpen: state => state.sidebar
    })
  },
  methods: {
    ...mapMutations({
      toggleSidebar: "toggleSidebar"
    })
  }
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(19, 15, 64, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
  color: #fff;
  transition: 0.2s all ease-in-out;
}
@media (min-width: 768px) {
  .sidebar-panel {
    width: 400px;
  }
}
</style>
