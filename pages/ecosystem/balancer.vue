<template>
  <div class="partner-content">
    <div class="flex flex-col md:flex-row gap-8">
      <div>
        <logo-balancer />
      </div>
      <div>
        <div class="header">
          <h1 class="text-white text-5xl">Balancer App</h1>
          <p class="font-semibold">AMM & DEX</p>
          <a class="link font-semibold" href="https://app.balancer.fi"
            >app.balancer.fi

            <icon-base width="14" height="14" icon-name="external-link"
              ><icon-external-link class="fill"
            /></icon-base>
          </a>
        </div>
        <div class="content">
          <h2>About</h2>
          <p>
            Pool explorer and infrastructure for Balancer ecosystem. Pool and swap tokens. Get veBAL to vote for and claim liquidity mining incentives.
          </p>
          <h2>How it uses Balancer protocol</h2>
          <p>The Balancer App was the original proof-of-concept built on the Balancer Protocol technology. It uses all of the major Balancer protocol smart contracts and displays pools from across the ecosystem.</p>
          <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”<br> <br><span class="not-italic">Tristian Ipsum</br>Balancer OpCo</span></blockquote>
          <h2>Walkthrough</h2>
          <img class="video" src="~assets/images/walkthrough.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import IconBase from "@/components/icons/IconBase.vue";
import LogoBalancer from "@/components/icons/LogoBalancer.vue";

export default {
  components: {
    IconBase,
    IconExternalLink,
    LogoBalancer,
  },
  layout: "partnerLayout",
};
</script>
<style scoped>

</style>