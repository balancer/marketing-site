<template>
  <footer>
    <div class="content-container">
      <div
        class="
          px-4
          py-16
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5
          text-white
        "
      >
        <div class="flex flex-col mb-8 sidebar">
          <p class="text-gray-400 pb-2">Balancer.fi</p>
          <p class="pb-2">
            <NuxtLink class="link-featured" to="/">Home</NuxtLink>
          </p>
          <p class="pb-2">
            <NuxtLink class="link-featured" to="build">Build</NuxtLink>
          </p>
        </div>

        <div class="pb-8 md:pb-16 lg:pb-0">
          <p class="text-gray-400 pb-2">Infrastructure</p>
          <p class="pb-2">
            <a class="link" href="https://app.balancer.fi/#/">Explore pools</a>
          </p>
          <p class="pb-2">
            <a class="link" href="https://app.balancer.fi/#/vebal">Vote with veBAL</a>
          </p>
          <p>
            <a class="link" href="https://app.balancer.fi/#/claim">Claim incentives</a>
          </p>
        </div>
        <div class="pb-8 md:pb-0">
          <p class="text-gray-400 pb-2">Learn</p>
          <p class="pb-2">
            <a class="link" href="https://docs.balancer.fi">Documentation</a>
          </p>
          <p class="pb-2">
            <a class="link" href="https://quark-ceres-740.notion.site/09da662a80ab44ed8c2f25e89d4d5c67?v=621e7fb70f374b1dbc74e12079d321e7">Knowledge Center</a>
          </p>
          <p class="pb-2">
            <a class="link" href="https://quark-ceres-740.notion.site/Question-Center-2e37a8cdf46c4663b86e916f21afaaf8">Question Center</a>
          </p>                    
          <p class="pb-2">
            <a class="link" href="whitepaper.pdf">Whitepaper</a>
          </p>
          <p>
            <a class="link" href="https://angel.co/company/balancer-labs-1"
              >Careers</a
            >
          </p>
        </div>
        <div class="pb-8 md:pb-16 lg:pb-0">
          <p class="text-gray-400 pb-2">Ecosystem</p>
          <p class="pb-2">
            <a class="link" href="https://vote.balancer.finance/"
              >Snapshot governance</a
            >
          </p>
          <p class="pb-2">
            <a class="link" href="https://immunefi.com/bounty/balancer/"
              >Immunefi bug bounty</a
            >
          </p>          
          <p class="pb-2">
            <a class="link" href="https://dune.xyz/balancerlabs"
              >Dune analytics</a
            >
          </p>
          <p class="pb-2">
            <a class="link" href="https://forum.balancer.finance/">Forum</a>
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://docs.balancer.fi/ecosystem/community/grants"
              >Grants</a
            >
          </p>
        </div>

        <div class="">
          <p class="text-gray-400 pb-2">Community</p>
          <div class="flex lg:flex-col">
            <div class="flex pb-3 mr-3 lg:mr-0">
              <a class="mr-3" href="https://twitter.com/Balancer">
                <icon-twitter />
              </a>

              <a class="mr-3" href="https://discord.balancer.fi"
                ><icon-discord
              /></a>

              <a class="mr-3" href="https://medium.com/balancer-protocol"
                ><icon-medium
              /></a>

              <a
                class=""
                href="https://www.youtube.com/channel/UCBRHug6Hu3nmbxwVMt8x_Ow"
                ><icon-youtube
              /></a>
            </div>
            <div class="flex">
              <a class="mr-3" href="https://github.com/balancer-labs/"
                ><icon-github
              /></a>

              <a
                class="mr-3"
                href="https://www.linkedin.com/company/balancer-labs/"
                ><icon-linkedin
              /></a>
              <a class="" href="mailto:contact@balancer.finance"
                ><icon-mail
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconMedium from "@/components/icons/IconMedium.vue";
import IconYoutube from "@/components/icons/IconYoutube.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";

export default {
  components: {
    IconExternalLink,
    IconTwitter,
    IconDiscord,
    IconMedium,
    IconYoutube,
    IconGithub,
    IconMail,
    IconLinkedin,
  },
};
</script>

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
