<template>
  <section class="p-4 bg-white">
    <div class="pt-0 pb-8 md:pb-20 md:pt-2 lg:px-8">
      <section>
        <div class="partners">
          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Balancer app"
                bgImageStyle="balancer"
                linkLabel="app.balancer.fi"
                url="https://app.balancer.fi"
                fathomCode="X9TTIGSY"
                description="Pool explorer and infrastructure for Balancer ecosystem. The original proof-of-concept. Pool and
                  swap tokens. Get veBAL to vote for and claim liquidity mining incentives."
              >
                <template #logo>
                  <logo-balancer />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Balancer app"
                description="Pool explorer and infrastructure for Balancer ecosystem. The original proof-of-concept. Pool and
                  swap tokens. Get veBAL to vote for and claim liquidity mining incentives."
                url="https://app.balancer.fi"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Aura"
                bgImageStyle="aura"
                linkLabel="aura.finance"
                url="https://aura.finance/"
                description="Boosting DeFi stakeholders' yield potential and governance power, starting with Balancer. Aura to the Balancer ecosystem is similar to Convex to Curve."
              >
                <template #logo>
                  <logo-aura />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Aura"
                description="Boosting DeFi stakeholders' yield potential and governance power, starting with Balancer. Aura to the Balancer ecosystem is similar to Convex to Curve."
                url="https://aura.finance/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Element"
                bgImageStyle="element"
                linkLabel="element.fi"
                url="https://element.fi"
                description="Element Finance uses Balancer V2’s custom AMM functionality to enable markets for assets that converge in value over time. Plugging into the V2 ecosystem allows users to swap fixed yield assets from any other major asset in the V2 vault with the gas efficiency of multihop order routing."
              >
                <template #logo>
                  <logo-element />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Element Finance"
                description="Element Finance uses Balancer V2’s custom AMM functionality to enable markets for assets that converge in value over time. Plugging into the V2 ecosystem allows users to swap fixed yield assets from any other major asset in the V2 vault with the gas efficiency of multihop order routing."
                url="https://element.fi"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Fjord Foundry"
                bgImageStyle="fjord"
                linkLabel="fjordfoundry.com"
                url="https://fjordfoundry.com/"
                description="Fjord (formerly Copper Launch), empowers teams to openly and fairly launch their token and generate liquidity.
              It utilizes a configuration of Balancer's Liquidity Boostrapping Pools (LBPs)."
              >
                <template #logo>
                  <logo-fjord />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Fjord Foundry"
                description="Fjord (formerly Copper Launch), empowers teams to openly and fairly launch their token and generate liquidity.
              It utilizes a configuration of Balancer's Liquidity Boostrapping Pools (LBPs)."
                url="https://fjordfoundry.com/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Aave"
                bgImageStyle="aave"
                linkLabel="aave.com"
                url="https://aave.com/"
                description="Aave is the cornerstone of DeFi lending and borrowing. Aave is a core partner with many joint projects like Boosted Pools and their 80/20 AAVE/ETH Safety Incentive pool."
              >
                <template #logo>
                  <logo-aave />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Aave"
                description="Aave is the cornerstone of DeFi lending and borrowing. Aave is a core partner with many joint projects like Boosted Pools and their 80/20 AAVE/ETH Safety Incentive pool."
                url="https://aave.com/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Gyroscope"
                bgImageStyle="gyro"
                linkLabel="gyro.finance"
                url="https://gyro.finance/"
                description="Gyroscope is a new stablecoin that, like a physical gyroscope, remains stable as the surrounding environment changes. It is a revolution in stablecoin architecture, risk control and AMM design. Gyroscope is fully-backed, automates monetary policy, and features new AMMs designed for resilient liquidity. Gyroscope AMMs -- Concentrated Liquidity Pools (CLPs) -- leverage Balancer V2's customizable AMM logic."
              >
                <template #logo>
                  <logo-gyro />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Gyroscope"
                description="Gyroscope is a new stablecoin that, like a physical gyroscope, remains stable as the surrounding environment changes. It is a revolution in stablecoin architecture, risk control and AMM design. Gyroscope is fully-backed, automates monetary policy, and features new AMMs designed for resilient liquidity. Gyroscope AMMs -- Concentrated Liquidity Pools (CLPs) -- leverage Balancer V2's customizable AMM logic."
                :comingSoon="true"
                url="https://gyro.finance/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="CoW Protocol"
                bgImageStyle="cow"
                linkLabel="cow.fi"
                url="https://cow.fi/"
                description="The Balancer CoW Protocol leverages the gas efficiency of Balancer V2 multihop swaps to give users the best price and execution possible along with with MEV protection."
              >
                <template #logo>
                  <logo-cow />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="CoW Protocol"
                description="The Balancer CoW Protocol leverages the gas efficiency of Balancer V2 multihop swaps to give users the best price and execution possible along with with MEV protection."
                url="https://cow.fi/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Mycelium"
                bgImageStyle="mycelium"
                linkLabel="mycelium.xyz"
                url="https://mycelium.xyz/"
                description="Mycelium (formerly TracerDAO), is an open-source protocol for derivative markets. It utilizes Balancer Protocol for aggregated liquidity and creating a market for leveraged tokens."
              >
                <template #logo>
                  <logo-mycelium />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Mycelium"
                description="Mycelium (formerly TracerDAO), is an open-source protocol for derivative markets. It utilizes Balancer Protocol for aggregated liquidity and creating a market for leveraged tokens."
                url="https://mycelium.xyz/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="1inch"
                bgImageStyle="1inch"
                linkLabel="1inch.io"
                url="https://1inch.io/"
                description="A leading aggregator of liquidity in DeFi. 1inch integrates new and innovative Balancer pool types like Boosted Pools to facilitate cost-efficient swaps.
              "
              >
                <template #logo>
                  <logo-1inch />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="1inch"
                description="A leading aggregator of liquidity in DeFi. 1inch integrates new and innovative Balancer pool types like Boosted Pools to facilitate cost-efficient swaps."
                url="https://1inch.io/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Index Coop"
                bgImageStyle="coop"
                linkLabel="indexcoop.com"
                url="https://indexcoop.com/"
                description="Index Coop builds decentralized structured products that make crypto simple, accessible, and secure. Index Coop is building the first Balancer Managed Pool."
              >
                <template #logo>
                  <logo-indexcoop />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Index Coop"
                description="Index Coop builds decentralized structured products that make crypto simple, accessible, and secure. Index Coop is building the first Balancer Managed Pool."
                url="https://indexcoop.com/"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Cron Finance"
                bgImageStyle="cron"
                linkLabel="Medium post"
                url="https://medium.com/@BalancerGrants/cron-finance-is-developing-twamm-on-top-of-balancer-d5d6bc17919a"
                description="A novel on-chain trade execution engine called TWAMM for permissionless, transparent & gas efficient large token swaps. Cron is building this TWAMM on Balancer."
                >
                <template #logo>
                  <logo-cron />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Cron Finance"
                :comingSoon="true"
                description="A novel on-chain trade execution engine called TWAMM for permissionless, transparent & gas efficient large token swaps. Cron is building this TWAMM on Balancer."
                url="https://medium.com/@BalancerGrants/cron-finance-is-developing-twamm-on-top-of-balancer-d5d6bc17919a"
              />
            </template>
          </v-popover>

          <v-popover offset="16" placement="top">
            <button class="tooltip-target w-full">
              <Partner
                title="Sense Finance"
                bgImageStyle="sense"
                linkLabel="sense.finance"
                url="https://sense.finance/"
                description="Sense is a protocol for DeFi yield primitives, and Sense Space, an AMM built on Balancer, facilitates efficient swaps between yield and principle tokens."
              >
                <template #logo>
                  <logo-sense />
                </template>
              </Partner>
            </button>

            <template slot="popover">
              <CaseStudy
                title="Sense Finance"
                description="Sense is a protocol for DeFi yield primitives, and Sense Space, an AMM built on Balancer, facilitates efficient swaps between yield and principle tokens."
                url="https://sense.finance/"
              />
            </template>
          </v-popover>
        </div>
      </section>
    </div>
  </section>
</template>
  
  <script>
import Partner from "@/components/_global/Partner.vue";
import LogoBalancer from "@/components/icons/LogoBalancer.vue";
import LogoAura from "@/components/icons/LogoAura.vue";
import LogoElement from "@/components/icons/LogoElement.vue";
import LogoFjord from "@/components/icons/LogoFjord.vue";
import LogoAave from "@/components/icons/LogoAave.vue";
import LogoGyro from "@/components/icons/LogoGyro.vue";
import LogoCow from "@/components/icons/LogoCow.vue";
import LogoMycelium from "@/components/icons/LogoMycelium.vue";
import Logo1inch from "@/components/icons/Logo1inch.vue";
import LogoIndexcoop from "@/components/icons/LogoIndexcoop.vue";
import LogoCron from "@/components/icons/LogoCron.vue";
import LogoSense from "@/components/icons/LogoSense.vue";

import CaseStudy from "@/components/case-studies/CaseStudy.vue";

import Vue from "vue";
import { VTooltip, VPopover, VClosePopover } from "v-tooltip";
Vue.directive("tooltip", VTooltip);
Vue.directive("close-popover", VClosePopover);
Vue.component("v-popover", VPopover);

export default {
  mounted() {
    this.partnerAnimation();
  },

  methods: {
    partnerAnimation() {
      this.$anime.timeline({ loop: false }).add(
        {
          targets: ".partner",
          scale: [0.8, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [20, 0],
          easing: "easeOutBack",
          duration: 800,
          delay: this.$anime.stagger(40),
        },
        "+=1150"
      );
    },
  },
  components: {
    CaseStudy,
    LogoBalancer,
    LogoAura,
    LogoElement,
    LogoFjord,
    LogoAave,
    LogoGyro,
    LogoCow,
    LogoMycelium,
    Logo1inch,
    LogoIndexcoop,
    LogoCron,
    LogoSense,
  },
};
</script>
  
  <style scoped>
h2.title {
  @apply text-2xl pb-8 font-normal text-gray-600;
}
.partners {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
}

.v-popover div {
  @apply w-full;
}

@media (min-width: 480px) {
  .partners {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 72px;
  }
}

@media (min-width: 820px) {
  .partners {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 64px;
  }
}
</style>
  