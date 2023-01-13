<script setup>
const { sidebarOpen, toggleSidebar } = useSidebar();

watch(sidebarOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add("sidebarOpen");
  } else {
    document.body.classList.remove("sidebarOpen");
  }
});
</script>
<template>
  <div class="sidebar">
    <div
      v-if="sidebarOpen"
      class="sidebar-backdrop"
      @click="toggleSidebar"
    />
    <transition name="slide">
      <div
        v-if="sidebarOpen"
        class="sidebar-panel"
      >
        <slot>
          <div class="mb-8 flex flex-col">
            <NuxtLink
              class="link text-lg leading-8"
              to="/"
              @click="toggleSidebar"
            >
              Home
            </NuxtLink>
            <NuxtLink
              class="link text-lg leading-8"
              to="build"
              @click="toggleSidebar"
            >
              Build
            </NuxtLink>
          </div>
          <div class="pb-4">
            <p class="pb-1 text-gray-400">
              Infrastructure
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://app.balancer.fi/#/"
                @click="toggleSidebar"
              >Explore pools</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://app.balancer.fi/#/vebal"
                @click="toggleSidebar"
              >Vote with veBAL</a>
            </p>
            <p>
              <a
                class="link"
                href="https://app.balancer.fi/#/claim"
                @click="toggleSidebar"
              >Claim incentives</a>
            </p>
          </div>
          <div class="pb-4">
            <p class="pb-1 text-gray-400">
              Learn
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://medium.com/balancer-protocol"
                @click="toggleSidebar"
              >Blog</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://docs.balancer.fi"
                @click="toggleSidebar"
              >Documentation</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://quark-ceres-740.notion.site/09da662a80ab44ed8c2f25e89d4d5c67?v=621e7fb70f374b1dbc74e12079d321e7"
                @click="toggleSidebar"
              >Knowledge Center</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://quark-ceres-740.notion.site/Question-Center-2e37a8cdf46c4663b86e916f21afaaf8"
                @click="toggleSidebar"
              >Question Center</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="whitepaper.pdf"
                @click="toggleSidebar"
              >Whitepaper</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://angel.co/company/balancer-labs-1"
                @click="toggleSidebar"
              >Careers</a>
            </p>
          </div>
          <div class="pb-4">
            <p class="pb-1 text-gray-400">
              Ecosystem
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://vote.balancer.finance/"
                @click="toggleSidebar"
              >Snapshot governance</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://immunefi.com/bounty/balancer/"
                @click="toggleSidebar"
              >Immunefi bug bounty</a>
            </p>
            <p class="pb-1">
              <a
                class="link"
                href="https://dune.xyz/balancerlabs"
                @click="toggleSidebar"
              >Dune analytics</a>
            </p>

            <p class="pb-1">
              <a
                class="link"
                href="https://forum.balancer.finance/"
                @click="toggleSidebar"
              >Forum</a>
            </p>
            <p>
              <a
                class="link"
                href="https://docs.balancer.fi/ecosystem/community/grants"
                @click="toggleSidebar"
              >Grants</a>
            </p>
          </div>

          <div class="py-4">
            <div class="flex">
              <a
                class="mr-2"
                href="https://twitter.com/Balancer"
              >
                <icon-twitter />
              </a>

              <a
                class="mr-2"
                href="https://discord.balancer.fi"
              ><icon-discord /></a>

              <a
                class="mr-2"
                href="https://medium.com/balancer-protocol"
              ><icon-medium /></a>

              <a
                class="mr-2"
                href="https://www.youtube.com/channel/UCBRHug6Hu3nmbxwVMt8x_Ow"
              ><icon-youtube /></a>

              <a
                class="mr-2"
                href="https://github.com/balancer-labs/"
              ><icon-github /></a>

              <a
                class="mr-2"
                href="https://www.linkedin.com/company/balancer-labs/"
              ><icon-linkedin /></a>
              <a
                class="mr-2"
                href="mailto:contact@balancer.finance"
              ><icon-mail /></a>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

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
