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
            <p class="pb-1 text-gray-400 tall:pb-2">
              On Balancer protocol
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://app.balancer.fi/#/"
                @click="toggleSidebar"
              >Explore pools               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://app.balancer.fi/#/vebal"
                @click="toggleSidebar"
              >Vote with veBAL               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://app.balancer.fi/#/claim"
                @click="toggleSidebar"
              >Claim incentives               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>            
          </div>
          <div class="pb-4">
            <p class="pb-1 text-gray-400 tall:pb-2">
              Learn
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://medium.com/balancer-protocol"
                @click="toggleSidebar"
              >Blog               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://docs.balancer.fi"
                @click="toggleSidebar"
              >Docs               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://app.balancer.fi/#/risks"
                @click="toggleSidebar"
              >Risks               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>            
            <p class="pb-1 tall:pb-2">
              <a
                class="link"
                href="whitepaper.pdf"
                @click="toggleSidebar"
              >V1 Whitepaper</a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://angel.co/company/balancer-labs-1"
                @click="toggleSidebar"
              >Careers               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://app.balancer.fi/#/terms-of-use"
                @click="toggleSidebar"
              >Terms of Use
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>            
          </div>
          <div class="pb-4">
            <p class="pb-1 text-gray-400 tall:pb-2">
              Ecosystem
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://vote.balancer.finance/"
                @click="toggleSidebar"
              >Snapshot governance               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://immunefi.com/bounty/balancer/"
                @click="toggleSidebar"
              >Immunefi bug bounty 
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://dune.xyz/balancerlabs"
                @click="toggleSidebar"
              >Dune analytics               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>

            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://forum.balancer.finance/"
                @click="toggleSidebar"
              >Forum               
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p class="pb-1 tall:pb-2">
              <a
                class="link group"
                href="https://docs.balancer.fi/ecosystem/community/grants"
                @click="toggleSidebar"
              >Grants          
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
            </p>
            <p>
              <a
                class="link group"
                href="https://github.com/balancer/brand-assets"
                @click="toggleSidebar"
              >Brand assets          
                <icon-base
                  icon-color="bg-yellow-500"
                  width="14"
                  height="14"
                  icon-name="external-link"
                >
                  <icon-external-link class="fill-gray-100 group-hover:fill-pink-500" />
                </icon-base>
              </a>
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
                href="https://github.com/balancer"
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
  @apply text-pink-500;
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
  animation: fade-in 0.15s ease-out both;
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
