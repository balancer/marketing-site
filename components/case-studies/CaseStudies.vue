<template>
  <section class="bg-gray-50 py-16 lg:py-32">
    <div class="grid md:grid-rows-3">
      <div class="partners">
        <div class="partner partner--bottom">
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
        </div>
        <div class="partner partner--top">
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
                description="Aave is the cornerstone of DeFi lending and borrowing. Aave is a core partner with many joint projects like Boosted Pools and their 80/20 AAVE/ETH Safety Incentive pool."
                url="https://aave.com/"
              />
            </template>
          </v-popover>
        </div>
        <div class="partner partner--bottom">
                    <v-popover offset="16" placement="top">
            <button class="tooltip-target b3">
              <img
                width="120"
                height="120"
                class="integrations-logo"
                :src="require('~/assets/images/tokens/element.png')"
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
        </div>
      </div>
      <div class="flex justify-center items-center py-10 md:py-0 xl:py-16">
        <p class="featured-stat">
          50+ <span class="featured-stat-label">DeFi integrations</span>
        </p>
      </div>
      <div class="partners">
        <div class="partner">
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
        </div>
        <div class="partner partner--bottom">
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
        </div>
        <div>
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
.partners {
  @apply grid grid-cols-3 justify-items-center text-center h-32 md:h-72 xl:h-80;
}

.partner--bottom {
  transform: translate3d(0, 80px, 0);
}

@media (min-width: 768px) {
  .partner--bottom {
    transform: translate3d(0, 160px, 0);
  }
}
</style>