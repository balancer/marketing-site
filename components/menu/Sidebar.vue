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
              to="build"
              >Build</NuxtLink
            >
          </div>
          <div class="pb-4">
            <p class="text-gray-400 pb-1">Infrastructure</p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://app.balancer.fi/#/"
                >Explore pools</a
              >
            </p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://app.balancer.fi/#/vebal"
                >Vote with veBAL</a
              >
            </p>
            <p>
              <a
                class="link"
                @click="toggleSidebar"
                href="https://app.balancer.fi/#/claim"
                >Claim incentives</a
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
              <a
                class="link"
                @click="toggleSidebar"
                href="https://quark-ceres-740.notion.site/09da662a80ab44ed8c2f25e89d4d5c67?v=621e7fb70f374b1dbc74e12079d321e7"
                >Knowledge Center</a
              >
            </p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://quark-ceres-740.notion.site/Question-Center-2e37a8cdf46c4663b86e916f21afaaf8"
                >Question Center</a
              >
            </p>                        
            <p class="pb-1">
              <a class="link" @click="toggleSidebar" href="whitepaper.pdf"
                >Whitepaper</a
              >
            </p>
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://angel.co/company/balancer-labs-1"
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
                href="https://immunefi.com/bounty/balancer/"
                >Immunefi bug bounty</a
              >
            </p>            
            <p class="pb-1">
              <a
                class="link"
                @click="toggleSidebar"
                href="https://dune.xyz/balancerlabs"
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
                href="https://docs.balancer.fi/ecosystem/community/grants"
                >Grants</a
              >
            </p>
          </div>

          <div class="pb-4 pt-4">
            <div class="flex">
              <a class="mr-2" href="https://twitter.com/Balancer">
                <icon-twitter />
              </a>

              <a class="mr-2" href="https://discord.balancer.fi"
                ><icon-discord
              /></a>

              <a class="mr-2" href="https://medium.com/balancer-protocol"
                ><icon-medium
              /></a>

              <a
                class="mr-2"
                href="https://www.youtube.com/channel/UCBRHug6Hu3nmbxwVMt8x_Ow"
                ><icon-youtube
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
import IconYoutube from "@/components/icons/IconYoutube.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";

export default {
  components: {
    IconTwitter,
    IconDiscord,
    IconMedium,
    IconYoutube,
    IconGithub,
    IconMail,
    IconLinkedin,
  },
  computed: {
    ...mapState({
      sidebarOpen: (state) => state.sidebar,
    }),
  },
  methods: {
    ...mapMutations({
      toggleSidebar: "toggleSidebar",
    }),
  },
  watch: {
    sidebarOpen(newValue) {
      if (newValue) {
        document.body.classList.add("sidebarOpen")
      } else {
        document.body.classList.remove("sidebarOpen")
      }
    } 
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
