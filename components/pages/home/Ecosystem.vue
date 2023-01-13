<template>
  <section class="ecosystem divider">
    <div class="pt-0 pb-8 md:pb-20 md:pt-2 lg:px-8 lg:pb-32">
      <div class="partner-title pb-16 text-center">
        <h2 class="pb-4 text-3xl">
          Partners & Integrations
        </h2>
        <p class="pb-8 text-gray-500">
          Built on or integrated with the Balancer&nbsp;protocol
        </p>
      </div>
      <section>
        <div class="partners">
          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Balancer app"
                category="AMM & DEX"
                bg-image-style="balancer"
                link-label="app.balancer.fi"
                url="https://app.balancer.fi"
                fathom-code="X9TTIGSY"
                description="Pool explorer and infrastructure for Balancer ecosystem. The original proof-of-concept. Pool and
                  swap tokens. Get veBAL to vote for and claim liquidity mining incentives."
              >
                <template #logo>
                  <logo-balancer />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Balancer app"
                description="Pool explorer and infrastructure for Balancer ecosystem. The original proof-of-concept. Pool and
                  swap tokens. Get veBAL to vote for and claim liquidity mining incentives."
                url="https://app.balancer.fi"
              />
            </template>
          </v-tooltip>


          <div @click="showModal = true">
            <Partner
              title="Beethoven X"
              category="AMM on Fantom & Optimism"
              bg-image-style="beets"
              link-label="op.beets.fi"
              url="/ecosystem/beets"
              description="Official friendly fork of Balancer on Optimism and Fantom. Designed to evolve and adapt, Beethoven X provides all the tools necessary for anyone to participate in the future of finance."
            >
              <template #logo>
                <logo-beets />
              </template>
            </Partner>
          </div>


          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Aura"
                category="DeFi yield booster"
                bg-image-style="aura"
                link-label="aura.finance"
                url="https://aura.finance/"
                description="Boosting DeFi stakeholders' yield potential and governance power, starting with Balancer. Aura to the Balancer ecosystem is similar to Convex to Curve."
              >
                <template #logo>
                  <logo-aura />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Aura"
                description="Boosting DeFi stakeholders' yield potential and governance power, starting with Balancer. Aura to the Balancer ecosystem is similar to Convex to Curve."
                url="https://aura.finance/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Element"
                category="Fixed & variable yield"
                bg-image-style="element"
                link-label="element.fi"
                url="https://element.fi"
                description="Element Finance uses Balancer V2’s custom AMM functionality to enable markets for assets that converge in value over time. Plugging into the V2 ecosystem allows users to swap fixed yield assets from any other major asset in the V2 vault with the gas efficiency of multihop order routing."
              >
                <template #logo>
                  <logo-element />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Element Finance"
                description="Element Finance uses Balancer V2’s custom AMM functionality to enable markets for assets that converge in value over time. Plugging into the V2 ecosystem allows users to swap fixed yield assets from any other major asset in the V2 vault with the gas efficiency of multihop order routing."
                url="https://element.fi"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Fjord Foundry"
                category="LBPs for tokens & NFTs"
                bg-image-style="fjord"
                link-label="fjordfoundry.com"
                url="https://fjordfoundry.com/"
                description="Fjord (formerly Copper Launch), empowers teams to openly and fairly launch their token and generate liquidity.
              It utilizes a configuration of Balancer's Liquidity Boostrapping Pools (LBPs)."
              >
                <template #logo>
                  <logo-fjord />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Fjord Foundry"
                description="Fjord (formerly Copper Launch), empowers teams to openly and fairly launch their token and generate liquidity.
              It utilizes a configuration of Balancer's Liquidity Boostrapping Pools (LBPs)."
                url="https://fjordfoundry.com/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Aave"
                category="Lend & borrow protocol"
                bg-image-style="aave"
                link-label="aave.com"
                url="https://aave.com/"
                description="Aave is the cornerstone of DeFi lending and borrowing. Aave is a core partner with many joint projects like Boosted Pools and their 80/20 AAVE/ETH Safety Incentive pool."
              >
                <template #logo>
                  <logo-aave />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Aave"
                description="Aave is the cornerstone of DeFi lending and borrowing. Aave is a core partner with many joint projects like Boosted Pools and their 80/20 AAVE/ETH Safety Incentive pool."
                url="https://aave.com/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Gyroscope"
                category="Novel stablecoin architecture"
                bg-image-style="gyro"
                link-label="gyro.finance"
                url="https://gyro.finance/"
                description="Gyroscope is a new stablecoin that, like a physical gyroscope, remains stable as the surrounding environment changes. It is a revolution in stablecoin architecture, risk control and AMM design. Gyroscope is fully-backed, automates monetary policy, and features new AMMs designed for resilient liquidity. Gyroscope AMMs -- Concentrated Liquidity Pools (CLPs) -- leverage Balancer V2's customizable AMM logic."
              >
                <template #logo>
                  <logo-gyro />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Gyroscope"
                description="Gyroscope is a new stablecoin that, like a physical gyroscope, remains stable as the surrounding environment changes. It is a revolution in stablecoin architecture, risk control and AMM design. Gyroscope is fully-backed, automates monetary policy, and features new AMMs designed for resilient liquidity. Gyroscope AMMs -- Concentrated Liquidity Pools (CLPs) -- leverage Balancer V2's customizable AMM logic."
                :coming-soon="true"
                url="https://gyro.finance/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="CoW Protocol"
                category="DEX liquidity aggregator"
                bg-image-style="cow"
                link-label="cow.fi"
                url="https://cow.fi/"
                description="The Balancer CoW Protocol leverages the gas efficiency of Balancer V2 multihop swaps to give users the best price and execution possible along with with MEV protection."
              >
                <template #logo>
                  <logo-cow />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="CoW Protocol"
                description="The Balancer CoW Protocol leverages the gas efficiency of Balancer V2 multihop swaps to give users the best price and execution possible along with with MEV protection."
                url="https://cow.fi/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="1inch"
                category="DEX liquidity aggregator"
                bg-image-style="1inch"
                link-label="1inch.io"
                url="https://1inch.io/"
                description="A leading aggregator of liquidity in DeFi. 1inch integrates new and innovative Balancer pool types like Boosted Pools to facilitate cost-efficient swaps.
              "
              >
                <template #logo>
                  <logo-1inch />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="1inch"
                description="A leading aggregator of liquidity in DeFi. 1inch integrates new and innovative Balancer pool types like Boosted Pools to facilitate cost-efficient swaps."
                url="https://1inch.io/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Stake DAO"
                category="DeFi yield booster"
                bg-image-style="stakedao"
                link-label="stakedao.org"
                url="https://stakedao.org/"
                description="Stake DAO is a non-custodial platform where you can do more with your money. Easily grow, track, and control your assets right from your wallet."
              >
                <template #logo>
                  <logo-stakedao />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Stake DAO"
                description="Stake DAO is a non-custodial platform where you can do more with your money. Easily grow, track, and control your assets right from your wallet."
                url="https://stakedao.org/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Tetu"
                category="DeFi yield booster"
                bg-image-style="tetu"
                link-label="tetu.io"
                url="https://tetu.io/"
                description="Tetu is the money lego asset management that provides automated DeFi solutions. "
              >
                <template #logo>
                  <logo-tetu />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Tetu"
                description="Tetu is the money lego asset management that provides automated DeFi solutions. "
                url="https://tetu.io/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Mycelium"
                category="Perpetual swaps & pools"
                bg-image-style="mycelium"
                link-label="mycelium.xyz"
                url="https://mycelium.xyz/"
                description="Mycelium (formerly TracerDAO), is an open-source protocol for derivative markets. It utilizes Balancer Protocol for aggregated liquidity and creating a market for leveraged tokens."
              >
                <template #logo>
                  <logo-mycelium />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Mycelium"
                description="Mycelium (formerly TracerDAO), is an open-source protocol for derivative markets. It utilizes Balancer Protocol for aggregated liquidity and creating a market for leveraged tokens."
                url="https://mycelium.xyz/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Cron Finance"
                category="TWAMM for large swaps"
                bg-image-style="cron"
                link-label="Medium post"
                url="https://medium.com/@BalancerGrants/cron-finance-is-developing-twamm-on-top-of-balancer-d5d6bc17919a"
                description="A novel on-chain trade execution engine called TWAMM for permissionless, transparent & gas efficient large token swaps. Cron is building this TWAMM on Balancer."
              >
                <template #logo>
                  <logo-cron />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Cron Finance"
                :coming-soon="true"
                description="A novel on-chain trade execution engine called TWAMM for permissionless, transparent & gas efficient large token swaps. Cron is building this TWAMM on Balancer."
                url="https://medium.com/@BalancerGrants/cron-finance-is-developing-twamm-on-top-of-balancer-d5d6bc17919a"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Tempus"
                category="Fixed income protocol"
                bg-image-style="tempus"
                link-label="tempus.finance"
                url="https://tempus.finance/"
                description="An innovative fixed income protocol allowing people to securely lock in a fixed rate on any lending or staking income."
              >
                <template #logo>
                  <logo-tempus />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Tempus"
                description="An innovative fixed income protocol allowing people to securely lock in a fixed rate on any lending or staking income."
                url="https://tempus.finance/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="PowerPool"
                category="Automated Defi products"
                bg-image-style="powerpool"
                link-label="powerpool.finance"
                url="https://powerpool.finance/"
                description="PowerPool protocol offers automated DeFi products such as vaults and smart token baskets built on top of Power Agent automation network executing transactions according to defined strategies."
              >
                <template #logo>
                  <logo-powerpool />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="PowerPool"
                description="PowerPool protocol offers automated DeFi products such as vaults and smart token baskets built on top of Power Agent automation network executing transactions according to defined strategies."
                url="https://powerpool.finance/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="PrimeDAO"
                category="DAO coordination tools"
                bg-image-style="prime"
                link-label="prime.xyz"
                url="https://www.prime.xyz/"
                description="DAOs are growing in power but remain isolated digital organisations. PrimeDAO creates next-generation coordination tools to connect them - built the DAO native way. PrimeDAO uses Balancer for Prime Launch and Prime Pools."
              >
                <template #logo>
                  <logo-prime />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="PrimeDAO"
                description="DAOs are growing in power but remain isolated digital organisations. PrimeDAO creates next-generation coordination tools to connect them - built the DAO native way. PrimeDAO uses Balancer for Prime Launch and Prime Pools."
                url="https://www.prime.xyz/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Sense Finance"
                category="Fixed income protocol"
                bg-image-style="sense"
                link-label="sense.finance"
                url="https://sense.finance/"
                description="Sense is a protocol for DeFi yield primitives, and Sense Space, an AMM built on Balancer, facilitates efficient swaps between yield and principle tokens."
              >
                <template #logo>
                  <logo-sense />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Sense Finance"
                description="Sense is a protocol for DeFi yield primitives, and Sense Space, an AMM built on Balancer, facilitates efficient swaps between yield and principle tokens."
                url="https://sense.finance/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Index Coop"
                category="Structured DeFi products"
                bg-image-style="coop"
                link-label="indexcoop.com"
                url="https://indexcoop.com/"
                description="Index Coop builds decentralized structured products that make crypto simple, accessible, and secure. Index Coop is building the first Balancer Managed Pool."
              >
                <template #logo>
                  <logo-indexcoop />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Index Coop"
                description="Index Coop builds decentralized structured products that make crypto simple, accessible, and secure. Index Coop is building the first Balancer Managed Pool."
                url="https://indexcoop.com/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Xave Finance"
                category="Remittances & Savings"
                bg-image-style="xave"
                link-label="xave.co"
                url="https://www.xave.co/"
                description="Xave (pronounced “Save”) allows financial services companies (“fintechs”) to leverage next generation payments systems for real time remittance transfers and high yield consumer savings"
              >
                <template #logo>
                  <logo-xave />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Xave Finance"
                description="Xave (pronounced “Save”) allows financial services companies (“fintechs”) to leverage next generation payments systems for real time remittance transfers and high yield consumer savings."
                url="https://www.xave.co/"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            offset="16"
            placement="top"
          >
            <button class="tooltip-target w-full">
              <Partner
                title="Qi DAO"
                category="Mai stablecoin protocol"
                bg-image-style="qi"
                link-label="mai.finance"
                url="https://www.mai.finance/"
                description="Creators of $MAI (miMatic) Stablecoin. Mai Finance is an open source and non-custodial stable protocol for extracting value out of priced assets."
              >
                <template #logo>
                  <logo-qi />
                </template>
              </Partner>
            </button>

            <template #popper>
              <CaseStudy
                title="Qi DAO"
                description="Creators of $MAI (miMatic) Stablecoin. Mai Finance is an open source and non-custodial stable protocol for extracting value out of priced assets."
                url="https://www.mai.finance/"
              />
            </template>
          </v-tooltip>
        </div>
      </section>
    </div>
    <partnerModal
      v-show="showModal"
      title="hola"
      @close-modal="showModal = false"
    />
  </section>
</template>

<script setup>

import anime from 'animejs/lib/anime.es.js';

const showModal = ref(false);

function partnerAnimation() {
  anime
    .timeline({ loop: false })
    .add(
      {
        targets: ".ecosystem",
        opacity: [0, 1],
        easing: "easeOutBack",
        duration: 800,
      },
      "+=1150"
    )
    .add(
      {
        targets: ".partner-title",
        scale: [0.9, 1],
        opacity: [0, 1],
        translateZ: 0,
        translateY: [20, 0],
        easing: "easeOutBack",
        duration: 800,
      },
      "-=800"
    )
    .add(
      {
        targets: ".partner",
        scale: [0.8, 1],
        opacity: [0, 1],
        translateZ: 0,
        translateY: [20, 0],
        easing: "easeOutBack",
        duration: 800,
        delay: anime.stagger(40),
      },
      "-=300"
    );
}

onMounted(partnerAnimation);

</script>

  <style scoped>
.ecosystem {
  @apply pt-24 px-4 relative overflow-hidden;
}

h2.title {
  @apply text-2xl pb-8 font-normal text-gray-600;
}
.partners {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;
  max-width: 1280px;
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

@media (min-width: 1240px) {
  .partners {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 64px;
  }
}
</style>
