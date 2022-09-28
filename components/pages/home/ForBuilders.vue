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
                       <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"
                  class="integrations-logo"
                  :src="require('~/assets/svg/tokens/cow.svg')"
                  alt="Balancer CoW Protocol"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Balancer CoW Protocol"
                  description="The Balancer CoW Protocol leverages the gas efficiency of Balancer V2 multihop swaps to give users the best price and execution possible along with with MEV protection."
                  url="https://cow.fi"
                />
              </template>
            </v-popover>

            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  :src="require('~/assets/svg/tokens/aave.svg')"
                  alt="Aave logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Aave"
                  description="With over $10 billion of assets supplied, Aave has become the cornerstone of DeFi lending and borrowing. As the first asset manager built for Balancer V2, liquidity providers on V2 will be able to lend a portion of their supplied liquidity on Aave to earn increased yield and in turn have improved capital efficiency."
                  url="https://aave.com/"
                />
              </template>
            </v-popover>

            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  :src="require('~/assets/svg/tokens/elementfi.svg')"
                  alt="Element logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Element"
                  description="Element Finance uses Balancer V2’s custom AMM functionality to enable markets for assets that converge in value over time. Plugging into the V2 ecosystem allows users to swap fixed yield assets from any other major asset in the V2 vault with the gas efficiency of multihop order routing."
                  url="https://element.fi/"
                />
              </template>
            </v-popover>
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  :src="require('~/assets/svg/tokens/ocean.svg')"
                  alt="Ocean logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Ocean"
                  description="Ocean Protocol will use Balancer V2 to enable automatic price discovery for data and staking on data assets which is critical for an open data economy. By leveraging the flexible AMM’s available in V2, Ocean can reduce impermanent loss and improve upon Initial Data Offerings."
                  url="https://oceanprotocol.com/"
                />
              </template>
            </v-popover>
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  :src="require('~/assets/images/tokens/gyroscope.png')"
                  alt="Gyroscope logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Gyroscope"
                  description="Gyroscope is a new stablecoin that, like a physical gyroscope, remains stable as the surrounding environment changes. It is a revolution in stablecoin architecture, risk control and AMM design. Gyroscope is fully-backed, automates monetary policy, and features new AMMs designed for resilient liquidity. Gyroscope AMMs -- Concentrated Liquidity Pools (CLPs) -- leverage Balancer V2's customizable AMM logic."
                  url="https://gyro.finance/"
                />
              </template>
            </v-popover>
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  :src="require('~/assets/svg/tokens/powerpool.svg')"
                  alt="PowerPool logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="PowerPool"
                  description="PowerPool leverages the vault architecture and increased gas efficiency of Balancer V2 for next generation crypto indexes using dynamic AMM pools. The ability to create a variety of customizable AMM’s that get the benefits of smart order routing, the gas efficiency of the vault, and the increased capital efficiency of asset managers will be a game changer for crypto indexes."
                  url="https://powerpool.finance/"
                />
              </template>
            </v-popover>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaseStudy from "@/components/case-studies/CaseStudy.vue";

import Vue from "vue";
import { VTooltip, VPopover, VClosePopover } from "v-tooltip";
Vue.directive("tooltip", VTooltip);
Vue.directive("close-popover", VClosePopover);
Vue.component("v-popover", VPopover);

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
