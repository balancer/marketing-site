<template>
  <section class="ecosystem divider">
    <div class="pt-0 pb-20 md:pt-2 lg:px-8 lg:pb-32">
      <div class="partner-title pb-16 text-center">
        <h2 class="pb-4 font-display text-4xl">
          Partners & Integrations
        </h2>
        <p class="pb-0 text-gray-500 md:pb-8">
          Built on or integrated with the Balancer&nbsp;protocol
        </p>
      </div>
      <section>
        <div class="partners">              
          <NuxtLink to="ecosystem/balancer">
            <button class="tooltip-target w-full">
              <Partner
                title="Balancer app"
                category="AMM / DEX"
                bg-image-style="balancer"
              >
                <template #logo>
                  <logo-balancer />
                </template>
              </Partner>
            </button>
          </NuxtLink>
          <NuxtLink to="ecosystem/beethoven-x">
            <button class="tooltip-target w-full">
              <div @click="showModal = true">
                <Partner
                  title="Beethoven X"
                  category="AMM / DEX"
                  bg-image-style="beethovenx"
                >
                  <template #logo>
                    <logo-beethovenx />
                  </template>
                </Partner>
              </div>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/aura">
            <button class="tooltip-target w-full">
              <Partner
                title="Aura"
                category="DeFi yield booster"
                bg-image-style="aura"
              >
                <template #logo>
                  <logo-aura />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/gyroscope">
            <button class="tooltip-target w-full">
              <Partner
                title="Gyroscope"
                category="Stablecoin protocol"
                bg-image-style="gyroscope"
              >
                <template #logo>
                  <logo-gyroscope />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/plutus">
            <button class="tooltip-target w-full">
              <Partner
                title="Plutus"
                category="Liquid Staking Derivatives & Governance"
                bg-image-style="plutus"
              >
                <template #logo>
                  <logo-plutus />
                </template>
              </Partner>
            </button>
          </NuxtLink>       

          <NuxtLink to="ecosystem/kassandra">
            <button class="tooltip-target w-full">
              <Partner
                title="Kassandra"
                category="Asset Management"
                bg-image-style="kassandra"
              >
                <template #logo>
                  <logo-kassandra />
                </template>
              </Partner>
            </button>
          </NuxtLink>         

          <NuxtLink to="ecosystem/raft">
            <button class="tooltip-target w-full">
              <Partner
                title="Raft"
                category="Lending and borrowing protocol"
                bg-image-style="raft"
              >
                <template #logo>
                  <logo-raft />
                </template>
              </Partner>
            </button>
          </NuxtLink>  

          <NuxtLink to="ecosystem/xave-finance">
            <button class="tooltip-target w-full">
              <Partner
                title="Xave Finance"
                category="FX Market Infrastructure"
                bg-image-style="xave"
              >
                <template #logo>
                  <logo-xave />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/cron-finance">
            <button class="tooltip-target w-full">
              <Partner
                title="Cron Finance"
                category="TWAMM for large swaps"
                bg-image-style="cron"
              >
                <template #logo>
                  <logo-cron />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/fjord-foundry">
            <button class="tooltip-target w-full">
              <Partner
                title="Fjord Foundry"
                category="Fair token launch LBPs"
                bg-image-style="fjord"
              >
                <template #logo>
                  <logo-fjord />
                </template>
              </Partner>
            </button>
          </NuxtLink>          

          <NuxtLink to="ecosystem/aave">
            <button class="tooltip-target w-full">
              <Partner
                title="Aave"
                category="Lend & borrow protocol"
                bg-image-style="aave"
              >
                <template #logo>
                  <logo-aave />
                </template>
              </Partner>
            </button>
          </NuxtLink>
          
          <NuxtLink to="ecosystem/cow-protocol">
            <button class="tooltip-target w-full">
              <Partner
                title="CoW Protocol"
                category="DEX aggregator"
                bg-image-style="cow-protocol"
              >
                <template #logo>
                  <logo-cow />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/1inch">
            <button class="tooltip-target w-full">
              <Partner
                title="1inch"
                category="DEX aggregator"
                bg-image-style="1inch"                
              >
                <template #logo>
                  <logo-1inch />
                </template>
              </Partner>
            </button>
          </NuxtLink>     

          <NuxtLink to="ecosystem/fjord-nfts">
            <button class="tooltip-target w-full">
              <Partner
                title="Fjord NFTs"
                category="Fair launch NFT drops"
                bg-image-style="fjord"
              >
                <template #logo>
                  <logo-fjordnfts />
                </template>
              </Partner>
            </button>
          </NuxtLink>                  

          <NuxtLink to="ecosystem/idle">
            <button class="tooltip-target w-full">
              <Partner
                title="Idle"
                category="Yield Aggregator"
                bg-image-style="idle"
              >
                <template #logo>
                  <logo-idle />
                </template>
              </Partner>
            </button>
          </NuxtLink>     

          <NuxtLink to="ecosystem/paraswap">
            <button class="tooltip-target w-full">
              <Partner
                title="ParaSwap"
                category="DEX aggregator"
                bg-image-style="paraswap"
              >
                <template #logo>
                  <logo-paraswap />
                </template>
              </Partner>
            </button>
          </NuxtLink>          

          <NuxtLink to="ecosystem/element-finance">
            <button class="tooltip-target w-full">
              <Partner
                title="Element"
                category="Fixed & variable yield"
                bg-image-style="element"                
              >
                <template #logo>
                  <logo-element />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/stake-dao">
            <button class="tooltip-target w-full">
              <Partner
                title="Stake DAO"
                category="DeFi yield booster"
                bg-image-style="stake-dao"
              >
                <template #logo>
                  <logo-stakedao />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/tetu">
            <button class="tooltip-target w-full">
              <Partner
                title="Tetu"
                category="DeFi yield booster"
                bg-image-style="tetu"
              >
                <template #logo>
                  <logo-tetu />
                </template>
              </Partner>
            </button>
          </NuxtLink>          

          <NuxtLink to="ecosystem/tempus">
            <button class="tooltip-target w-full">
              <Partner
                title="Tempus"
                category="Fixed income protocol"
                bg-image-style="tempus"
              >
                <template #logo>
                  <logo-tempus />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/prime-dao">
            <button class="tooltip-target w-full">
              <Partner
                title="PrimeDAO"
                category="DAO coordination tools"
                bg-image-style="prime"
              >
                <template #logo>
                  <logo-prime />
                </template>
              </Partner>
            </button>
          </NuxtLink>
          
          <NuxtLink to="ecosystem/powerpool">
            <button class="tooltip-target w-full">
              <Partner
                title="PowerPool"
                category="Automated Defi products"
                bg-image-style="powerpool"
              >
                <template #logo>
                  <logo-powerpool />
                </template>
              </Partner>
            </button>
          </NuxtLink>

          <NuxtLink to="ecosystem/sense-finance">
            <button class="tooltip-target w-full">
              <Partner
                title="Sense Finance"
                category="Fixed income protocol"
                bg-image-style="sense"
              >
                <template #logo>
                  <logo-sense />
                </template>
              </Partner>
            </button>
          </NuxtLink>
        </div>
      </section>
    </div>
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
        duration: 400,
      },
      "+=250"
    )
    .add(
      {
        targets: ".partner-title",
        scale: [0.9, 1],
        opacity: [0, 1],
        translateZ: 0,
        translateY: [40, 0],
        easing: "easeOutBack",
        duration: 600,
      },
      "-=600"
    )
    .add(
      {
        targets: ".partner",
        scale: [0.8, 1],
        opacity: [0, 1],
        translateZ: 0,
        translateY: [20, 0],
        easing: "easeOutBack",
        duration: 600,
        delay: anime.stagger(30),
      },
      "-=500"
    );
}

onMounted(partnerAnimation);

</script>

  <style scoped>
.ecosystem {
  @apply pt-24 px-4 relative overflow-hidden opacity-0;
}

h2.title {
  @apply text-2xl pb-8 font-normal text-gray-600;
}
.partners {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
  
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 72px;
  }
}

@media (min-width: 820px) {
  .partners {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column-gap: 40px;
    grid-row-gap: 64px;
  }
}

@media (min-width: 1240px) {
  .partners {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-column-gap: 40px;
    grid-row-gap: 64px;
  }
}
</style>
