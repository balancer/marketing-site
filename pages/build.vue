<template>
  <div>
    <BuildHero />
    <section class="bg-white">
      <div class="max-w-7xl md:mx-auto px-4 pt-16 lg:pt-40 pb-16 lg:pb-32">
        <div class="md:text-center pb-4">
          <h1 class="h1-sans-serif pb-4">
            Start building
          </h1>
          <p class="pb-4">
            Focus on new AMM logic rather than low-level accounting.
          </p>
        </div>
        <!-- <div class="md:flex"> -->

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-lg mx-auto"
        >
          <a
            href="https://docs.balancer.fi/v/v1/guides/creating-a-smart-pool"
          >
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  width="244"
                  height="244"
                  class="cover-img"
                  src="@/assets/images/start-building/smart.jpg"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center">
                  <p class="font-medium">Create a Smart Pool</p>
                  <p class="hidden">
                    A quick code walkthrough
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://docs.balancer.fi/getting-started/faqs/pools-and-lbps"
          >
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  width="244"
                  height="244"                
                  class="cover-img"
                  src="@/assets/images/start-building/launch-token.jpg"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center">
                  <p class="font-medium">Launch a token</p>
                  <p class="hidden">
                    Via a Liquidity Bootstrapping Pool (LBP)
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://thegraph.com/explorer/subgraph/balancer-labs/balancer"
          >
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  width="244"
                  height="244"                
                  class="cover-img"
                  src="@/assets/images/start-building/data.jpg"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center">
                  <p class="font-medium">Get Balancer data</p>
                  <p class="hidden">
                    Via the Balancer subgraph
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://docs-v2.balancer.finance/getting-started/faqs/trading#what-are-balancer-price-oracles-coming-soon"
          >
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  width="244"
                  height="244"                
                  class="cover-img"
                  src="@/assets/images/start-building/oracle.jpg"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center">
                  <p class="font-medium">Use price oracles</p>
                  <p class="hidden">
                    Via the 'Instant' or 'Resilient' oracles
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <div class="flex flex-col justify-center px-4 pb-4 py-16 lg:py-32">
        <div class="flex justify-between w-full max-w-6xl mx-auto pb-16">
          <div class="h-40 md:h-80 flex items-end">
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"
                  class="integrations-logo"
                  src="@/assets/svg/tokens/gno.svg"
                  alt="Gnosis logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Gnosis"
                  description="Gnosis Protocol V2 leverages the gas efficiency of Balancer V2 multihop swaps with MEV protection to give users the best price and execution possible. The unique architecture of using the vault to store all assets supplied on Balancer V2 leads to swaps that can use multiple pools for a minimal amount of gas."
                  url="https://gnosis.io/"
                />
              </template>
            </v-popover>
          </div>
          <div class="h-40 md:h-80 flex items-start">
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  src="@/assets/svg/tokens/aave.svg"
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
          </div>
          <div class="h-40 md:h-80 flex items-end">
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  src="@/assets/images/tokens/element.png"
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
        <div class="flex justify-center items-center pb-16">
          <p class="featured-stat">
            50+ <span class="featured-stat-label">DeFi integrations</span>
          </p>
        </div>
        <div class="flex justify-between w-full max-w-6xl mx-auto pb-16">
          <div class="h-40 md:h-80 flex items-start">
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  src="@/assets/svg/tokens/ocean.svg"
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
          <div class="h-40 md:h-80 flex items-end">
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  src="@/assets/images/tokens/gyroscope.png"
                  alt="Gyroscope logo"
                />
              </button>
              <template slot="popover">
                <CaseStudy
                  title="Gyroscope"
                  description="Gyroscope has designed a brand new AMM to power their all-weather stablecoin which is made possible by the customizable AMM logic system in Balancer V2. The incentive system which pegs the stablecoin to $1 using Gyroscope’s S-AMM and P-AMM leads to unparalleled liquidity boosting and greater liquidity within Balancer’s trading ecosystem."
                  url="https://gyro.finance/"
                />
              </template>
            </v-popover>
          </div>
          <div class="h-40 md:h-80 flex items-start">
            <v-popover offset="16" placement="top">
              <button class="tooltip-target b3">
                <img
                  width="120"
                  height="120"                
                  class="integrations-logo"
                  src="@/assets/svg/tokens/powerpool.svg"
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

    <SmartPools />
    <LBPs />
  </div>
</template>

<script>
import BuildHero from "@/components/pages/build/BuildHero.vue";
import SmartPools from "@/components/pages/build/SmartPools.vue";
import LBPs from "@/components/pages/build/LBPs.vue";
import Element from "@/components/case-studies/Element.vue";
import CaseStudy from "@/components/case-studies/CaseStudy.vue";

import { headMeta } from "@/lib/meta";
import Vue from "vue";
import { VTooltip, VPopover, VClosePopover } from "v-tooltip";

Vue.directive("tooltip", VTooltip);
Vue.directive("close-popover", VClosePopover);
Vue.component("v-popover", VPopover);

export default {
  transition: "slideup",
  components: {
    BuildHero,
    SmartPools,
    Element,
    CaseStudy,
    LBPs
  },
  head() {
    return {
      title: "Build on Balancer – a core building block of DeFi ",
      ...headMeta({
        description: "description lorem"
      })
    };
  }
};
</script>

<style>
.card {
  @apply rounded-lg p-4 md:p-6 lg:p-8;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  transition: box-shadow 0.2s ease-out;
}

.pool {
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  transition: box-shadow 0.2s ease-out;
}
.card:hover,
.pool:hover {
  box-shadow: 8px 8px 30px #e6e6e6, -8px -8px 30px #ffffff;
}

.cover-img {
  border-radius: 10px 10px 0 0;
}

.integrations-logo {
  height: 72px;
  width: 72px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
}
.integrations-logo:hover,
.integrations-logo:focus {
  transform: scale(1.1);
  /* box-shadow: 0 0 4px 0 rgba(0,0,0,0.10), 0 0 40px 0 rgba(0,0,0,0.20); */
}

.v-popover.open .integrations-logo {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .integrations-logo {
    height: 84px;
    width: 84px;
  }
}

@media (min-width: 1024px) {
  .integrations-logo {
    height: 100px;
    width: 100px;
  }
}

@media (min-width: 1024px) {
  .integrations-logo {
    height: 120px;
    width: 120px;
  }
}

.featured-stat {
  @apply font-black;
  font-size: 45vw;
  letter-spacing: -5px;
  line-height: 1;

  background: url("~assets/svg/hero-home3.svg");
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

/* Remove background-attachment: fixed interaction from Firefox */
@-moz-document url-prefix() { 
  .featured-stat {
     background-attachment: scroll;
  }
}

.featured-stat.lbp-stat {
  font-size: 21vw;
  background-attachment: scroll;
}

.featured-stat.lbp-stat-label {
  font-size: 32px;
  letter-spacing: -0.5px;
  background-attachment: scroll;
}

.featured-stat-label {
  @apply block md:inline font-black;
  letter-spacing: -1.5px;
  font-size: 10.5vw;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .featured-stat,
  .featured-stat-label {
    font-size: 7vw;
  }
  .featured-stat.lbp-stat {
    font-size: 80px;
  }
}

@media (min-width: 1024px) {
  .featured-stat.lbp-stat {
    font-size: 100px;
  }
}
@media (min-width: 1280px) {
  .featured-stat.lbp-stat {
    font-size: 120px;
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  @apply text-black;
  max-width: 348px;
  margin: 0 16px;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 10px 20px 0 rgba(0, 0, 0, 0.05); */
  transition: all 0.2s ease-out;
  outline: none;
}

.tooltip .tooltip-arrow {
  @apply border-gray-50;
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
