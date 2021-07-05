<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 xl:px-0 pb-16 lg:pb-20 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4 pb-12 md:pb-0">
          <p class="eyebrow gradient-text pb-2 font-medium">For builders</p>
          <h1 class="h1-sans-serif">
            A protocol for programmable liquidity
          </h1>
          <p class="pb-4">
            The Balancer Protocol is a core building block of DeFi
            infrastructure—a unique financial primitive and permissionless
            development platform. Balancer is the most flexible and versatile
            Automated Market Maker, giving developers unprecedented
            customizability.
          </p>
          <div class="pb-1">
            <div class="flex pb-5">
              <img 
              width="24"
              height="24"
              class="mr-3" :src="require('~/assets/svg/icon-sliders.svg')" alt="" />
              <p class="font-medium">Custom token weights & swap fees</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" :src="require('~/assets/svg/icon-curve.svg')" alt="" />
              <p class="font-medium">
                Liquidity pools can operate on any price curve
              </p>
            </div>
            <div class="flex pb-5">
              <img
                width="24"
                height="24"
                class="mr-3"
                :src="require('~/assets/svg/icon-asset-manager.svg')"
                alt=""
              />
              <p class="font-medium">
                Asset managers re-utilize dormant liquidity (coming soon)
              </p>
            </div>
          </div>
          <div class="flex pb-4 md:pb-0">
            <NuxtLink class="btn btn-tertiary btn-hero" to="build">
              Start building
            </NuxtLink>
          </div>
        </div>
        <div>
          <div
            class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 text-center max-w-2xl"
          >
            <img
              width="120"
              height="120"
              class="integrations-logo"
              :src="require('~/assets/svg/tokens/gno.svg')"
              alt="Gnosis logo"
            />
            <img
              width="120"
              height="120"                
              class="integrations-logo"
              :src="require('~/assets/svg/tokens/aave.svg')"
              alt="Aave logo"
            />
            <img
              width="120"
              height="120"                
              class="integrations-logo"
              :src="require('~/assets/svg/tokens/elementfi.svg')"
              alt="Element logo"
            />
            <img
              width="120"
              height="120"                
              class="integrations-logo"
              :src="require('~/assets/svg/tokens/ocean.svg')"
              alt="Ocean logo"
            />
            <img
              width="120"
              height="120"                
              class="integrations-logo"
              :src="require('~/assets/images/tokens/gyroscope.png')"
              alt="Gyroscope logo"
            />
            <img
              width="120"
              height="120"                
              class="integrations-logo"
              :src="require('~/assets/svg/tokens/powerpool.svg')"
              alt="PowerPool logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaseStudy from "@/components/case-studies/CaseStudy.vue";

export default {
  components: {
    CaseStudy
  }
};
</script>

<style scoped>
.pool {
  max-width: 240px;  
  @apply border border-gray-200 rounded-3xl shadow;
}
.case-study {
  @apply mx-auto;
  max-width: 75.9375rem;
}
.integrations-logo {
  height: 120px;
  width: 120px;
}
</style>
