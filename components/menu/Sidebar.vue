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
              to="invest"
              >Invest</NuxtLink
            >
            <NuxtLink
              @click.native="toggleSidebar"
              class="link text-lg leading-8"
              to="trade"
              >Trade</NuxtLink
            >
            <NuxtLink
              @click.native="toggleSidebar"
              class="link text-lg leading-8"
              to="build"
              >Build</NuxtLink
            >
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Products</p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://app.balancer.fi/#/"
                >Invest app</a
              >
            </p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://app.balancer.fi/#/trade"
                >Trade app</a
              >
            </p>
            <p>
              <a
                class="link"
                @click="toggleSidebar"
                href="https://claim.balancer.fi"
                >Claim $BAL</a
              >
            </p>
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Learn</p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://medium.com/balancer-protocol"
                >Blog</a
              >
            </p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://docs.balancer.fi"
                >Documentation</a
              >
            </p>
            <p class="pb-1">
              <a class="link" @click="toggleSidebar" href="whitepaper.pdf"
                >Whitepaper</a
              >
            </p>
            <p class="pb-1">
              <a class="link" @click="toggleSidebar" href="https://angel.co/company/balancer-labs-1"
                >Careers</a
              >
            </p>            
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Ecosystem</p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://vote.balancer.finance/"
                >Snapshot governance</a
              >
            </p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://duneanalytics.com/projects/balancer"
                >Dune analytics</a
              >
            </p>

            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://forum.balancer.finance/"
                >Forum</a
              >
            </p>
            <p>
              <a
                class="link"
                @click="toggleSidebar"
                href="https://balancer.community/balancer-community-grants"
                >Grants</a
              >
            </p>
          </div>

          <div class="pb-4 pt-4">
            <div class="flex">
              <a class="mr-2" href="https://twitter.com/BalancerLabs">
                <icon-twitter />
              </a>

              <a class="mr-2" href="https://discord.com/invite/ARJWaeF"
                ><icon-discord
              /></a>

              <a class="mr-2" href="https://medium.com/balancer-protocol"
                ><icon-medium
              /></a>

              <a class="mr-2" href="https://github.com/balancer-labs/"
                ><icon-github
              /></a>

              <a
                class="mr-2"
                href="https://www.linkedin.com/company/balancer-labs/"
                ><icon-linkedin
              /></a>
              <a class="mr-2" href="mailto:contact@balancer.finance"
                ><icon-mail
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
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconMedium from "@/components/icons/IconMedium.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";

export default {
  components: {
    IconTwitter,
    IconDiscord,
    IconMedium,
    IconGithub,
    IconMail,
    IconLinkedin
  },
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
.link {
  transition: all 0.2s ease-out;
}

.link:hover,
.link:focus-visible {
  @apply text-defaultRed;
}

.link:focus:not(:focus-visible) {
  outline: none;
}

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
  background-color: rgba(19, 15, 64, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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
