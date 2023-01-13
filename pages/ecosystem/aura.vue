<template>
  <div class="partner-content">
    <div class="flex flex-col md:flex-row gap-8">
      <div>
        <logo-aura />
      </div>
      <div>
        <div class="header">
          <h1 class="text-white text-5xl">Aura</h1>
          <p class="font-semibold">DeFi yield booster</p>
          <a class="link font-semibold" href="https://aura.finance/"
            >aura.finance

            <icon-base width="14" height="14" icon-name="external-link"
              ><icon-external-link class="fill"
            /></icon-base>
          </a>
        </div>
        <div class="content">
          <h2>About</h2>
          <p>
            Boosting DeFi stakeholders' yield potential and governance power, starting with Balancer. Aura to the Balancer ecosystem is similar to Convex to Curve.
          </p>
          <h2>How it uses Balancer protocol</h2>
          <p>Aura is built with the Balancer protocol ve80/20 tokenomics system.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import IconBase from "@/components/icons/IconBase.vue";
import LogoAura from "@/components/icons/LogoAura.vue";

export default {
  components: {
    IconBase,
    IconExternalLink,
    LogoAura,
  },
  layout: "partnerLayout",
};
</script>
<style scoped>


.partner-content::after {
  background: var(--color-aura) !important;
}

</style>