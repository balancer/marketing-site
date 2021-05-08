<template>
  <footer>
    <div class="content-container">
      <div
        class="px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white"
      >
        <div class="flex flex-col mb-8 sidebar">
          <p class="text-gray-400 pb-1">Balancer.fi</p>
          <NuxtLink
            class="link text-lg md:text-base pb-1 leading-8 text-white"
            to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            class="link text-lg md:text-base pb-1 leading-8 text-white"
            to="protocol"
            >Protocol</NuxtLink
          >
          <NuxtLink
            class="link text-lg md:text-base pb-1 leading-8 text-white"
            to="build"
            >Build</NuxtLink
          >
          <!-- <NuxtLink
            class="link text-lg md:text-base pb-1 leading-8 text-white"
            to="balancer-V2"
            >V2</NuxtLink
          > -->
        </div>
        <div class="pb-8 md:pb-16  lg:pb-0">
          <p class="text-gray-400 pb-1">Products</p>
          <p class="pb-1"><a class="link" href="https://app.balancer.fi/#/">Invest</a></p>
          <p><a class="link" href="https://app.balancer.fi/#/trade">Trade</a></p>
        </div>
        <div class="pb-8 md:pb-0">
          <p class="text-gray-400 pb-1">Learn</p>
          <p class="pb-1">
            <a class="link" href="https://medium.com/balancer-protocol">Blog</a>
          </p>
          <p class="pb-1">
            <a class="link" href="https://docs.balancer.finance/">Documentation</a>
          </p>
          <p class="pb-1">
            <a class="link" href="https://balancer.finance/whitepaper/">Whitepaper</a>
          </p>
          <p><a class="link" href="https://github.com/balancer-labs/">Github code</a></p>
        </div>
        <div class="pb-8 md:pb-16  lg:pb-0">
          <p class="text-gray-400 pb-1">Ecosystem</p>
          <p class="pb-1">
            <a class="link" href="https://vote.balancer.finance/">Snapshot governance</a>
          </p>
          <p class="pb-1">
            <a class="link" href="https://duneanalytics.com/projects/balancer">Dune analytics</a>
          </p>
          <p class="pb-1">
            <a class="link" href="https://forum.balancer.finance/">Forum</a>
          </p>
          <p>
            <a class="link"
              href="https://forum.balancer.finance/t/ecosystem-fund-grant-process/166"
              >Grants</a
            >
          </p>
        </div>

        <div class="">
          <p class="text-gray-400 pb-2">Community</p>
          <div class="flex">
            <a class="mr-2" href="https://twitter.com/BalancerLabs"
              >
              <icon-twitter />
              </a>

            <a class="mr-2" href="https://discord.com/invite/ARJWaeF"
              ><icon-discord /></a>

            <a class="mr-2" href="https://medium.com/balancer-protocol"
              ><icon-medium /></a>

            <a class="mr-2" href="https://github.com/balancer-labs/"
              ><icon-github /></a>

            <a class="mr-2" href="mailto:contact@balancer.finance"
              ><icon-mail /></a>

            <a href="https://www.linkedin.com/company/balancer-labs/"
              ><icon-linkedin /></a>              
          </div>
        </div>

        <!-- <div class="">
          <p class="text-gray-400 pb-1">Stay in touch</p>
          <div class="flex relative items-center">
          <input
            class="my-2 px-3 py-4 w-full rounded-2xl focus:outline-none focus:border-yellow-400 text-black"
            type="email"
            placeholder="Your email address"
            name="email"
          />
          <button class="btn-email btn-primary">-></button>
          </div>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script>
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconMedium from "@/components/icons/IconMedium.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";

export default {
  components: {  
    IconExternalLink, 
    IconTwitter, 
    IconDiscord, 
    IconMedium, 
    IconGithub,
    IconMail, 
    IconLinkedin
  }
};
</script>

<style scoped>

.link {
  transition: all 0.2s ease-out;
}

.link:hover, .link:focus-visible {
  @apply text-defaultRed;
}

.link:focus:not(:focus-visible) {
  outline: none;
}

footer {
  @apply bg-black;
}
.btn-email {
  @apply p-2 flex justify-center items-center absolute right-2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-family: Inter, sans-serif;
  font-feature-settings: "calt";
}
</style>
