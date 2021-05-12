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

    <CaseStudies />
    <SmartPools />
    <LBPs />
  </div>
</template>

<script>
import BuildHero from "@/components/pages/build/BuildHero.vue";
import SmartPools from "@/components/pages/build/SmartPools.vue";
import LBPs from "@/components/pages/build/LBPs.vue";
import Element from "@/components/case-studies/Element.vue";
import CaseStudies from "@/components/case-studies/CaseStudies.vue";

import { headMeta } from "@/lib/meta";

export default {
  transition: "slideup",
  components: {
    BuildHero,
    SmartPools,
    Element,
    CaseStudies,
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
  
  width: 80px;
  height: auto;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
}
.integrations-logo:hover,
.integrations-logo:focus {
  transform: scale(1.1);
}

.v-popover.open .integrations-logo {
  transform: scale(1.1);
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
    font-size: 8vw;
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
  transition: all 0.2s ease-out;
}

.tooltip:focus:not(:focus-visible), .wrapper:focus:not(:focus-visible), .tooltip-inner:focus:not(:focus-visible) {
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
