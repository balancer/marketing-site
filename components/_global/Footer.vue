<script setup></script>

<template>
  <footer>
    <div class="content-container">
      <div class="grid grid-cols-1 px-4 py-16 text-white md:grid-cols-2 lg:grid-cols-5">
        <div class="sidebar mb-8 flex flex-col">
          <p class="pb-2 text-gray-400">
            Balancer.fi
          </p>
          <p class="pb-2">
            <NuxtLink
              class="link-featured"
              to="/"
            >
              Home
            </NuxtLink>
          </p>
          <p class="pb-2">
            <NuxtLink
              class="link-featured"
              to="build"
            >
              Build
            </NuxtLink>
          </p>
        </div>

        <div class="pb-8 md:pb-16 lg:pb-0">
          <p class="pb-2 text-gray-400">
            Infrastructure
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://app.balancer.fi/#/"
            >Explore pools</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://app.balancer.fi/#/vebal"
            >Vote with veBAL</a>
          </p>
          <p>
            <a
              class="link"
              href="https://app.balancer.fi/#/claim"
            >Claim incentives</a>
          </p>
        </div>
        <div class="pb-8 md:pb-0">
          <p class="pb-2 text-gray-400">
            Learn
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://docs.balancer.fi"
            >Docs</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="whitepaper.pdf"
            >Whitepaper</a>
          </p>
          <p>
            <a
              class="link"
              href="https://angel.co/company/balancer-labs-1"
            >Careers</a>
          </p>
        </div>
        <div class="pb-8 md:pb-16 lg:pb-0">
          <p class="pb-2 text-gray-400">
            Ecosystem
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://vote.balancer.finance/"
            >Snapshot governance</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://immunefi.com/bounty/balancer/"
            >Immunefi bug bounty</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://dune.xyz/balancerlabs"
            >Dune analytics</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://forum.balancer.finance/"
            >Forum</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://docs.balancer.fi/ecosystem/community/grants"
            >Grants</a>
          </p>
        </div>

        <div class="">
          <p class="pb-2 text-gray-400">
            Community
          </p>
          <div class="flex lg:flex-col">
            <div class="mr-3 flex pb-3 lg:mr-0">
              <a
                class="mr-3"
                href="https://twitter.com/Balancer"
              >
                <icon-twitter />
              </a>

              <a
                class="mr-3"
                href="https://discord.balancer.fi"
              ><icon-discord /></a>

              <a
                class="mr-3"
                href="https://medium.com/balancer-protocol"
              ><icon-medium /></a>

              <a
                class=""
                href="https://www.youtube.com/channel/UCBRHug6Hu3nmbxwVMt8x_Ow"
              ><icon-youtube /></a>
            </div>
            <div class="flex">
              <a
                class="mr-3"
                href="https://github.com/balancer-labs/"
              ><icon-github /></a>

              <a
                class="mr-3"
                href="https://www.linkedin.com/company/balancer-labs/"
              ><icon-linkedin /></a>
              <a
                class=""
                href="mailto:contact@balancer.finance"
              ><icon-mail /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.link {
  transition: color 0.2s ease-out;
}

.link-featured {
  transition: color 0.2s ease-out;
  @apply pb-1 md:pb-0 text-white;
}

.link:hover,
.link:focus-visible,
.link-featured:hover,
.link-featured:focus-visible {
  @apply text-defaultRed;
}

.link:focus:not(:focus-visible) {
  outline: none;
}

footer {
  @apply bg-black;
}
</style>
