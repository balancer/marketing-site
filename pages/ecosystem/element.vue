<template>
  <div class="partner-content">
    <div class="flex flex-col md:flex-row gap-8">
      <div>
        <logo-element />
      </div>
      <div>
        <div class="header">
          <h1 class="text-white text-5xl">Element Finance</h1>
          <p class="font-semibold">Fixed & variable yield</p>
          <a class="link font-semibold" href="https://www.element.fi/"
            >element.fi

            <icon-base width="14" height="14" icon-name="external-link"
              ><icon-external-link class="fill"
            /></icon-base>
          </a>
        </div>
        <div class="content">
          <h2>About</h2>
          <p>
            Element is an open source protocol for fixed and variable yield markets.
          </p>
          <h2>How it uses Balancer protocol</h2>
          <p>Element Finance uses Balancer V2’s custom AMM functionality to enable markets for assets that converge in value over time. Plugging into the V2 ecosystem allows users to swap fixed yield assets from any other major asset in the V2 vault with the gas efficiency of multihop order routing.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import IconBase from "@/components/icons/IconBase.vue";
import LogoElement from "@/components/icons/LogoElement.vue";

export default {
  components: {
    IconBase,
    IconExternalLink,
    LogoElement,
  },
  layout: "partnerLayout",
};
</script>
<style scoped>


.partner-content::after {
  background: var(--color-element) !important;
}

</style>