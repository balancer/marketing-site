<template>
  <div>
    <TradeHero />
    <TradeProduct />

    <section class="bg-white">
      <div class="px-4 xl:px-0 max-w-7xl mx-auto pb-16 md:pb-32">
        <div
          class="grid md:grid-cols-2 md:grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 xl:gap-16"
        >
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-sparkles />
            </div>
            <h2>Earn $BAL with every trade</h2>
            <p>
              Balance out your gas costs by getting up to 90% of your gas fees
              paid back in $BAL—a helping hand from the Balancer DAO.
              <a class="text-link" href="https://claim.balancer.fi"
                >Claim $BAL</a
              >
              weekly on Tuesdays.
            </p>
          </div>

          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-liquidity />
            </div>
            <h2>Over $3.09b in liquidity</h2>
            <p>
              Balancer’s liquid market ensures that traders get the best
              possible prices for trades, large or small.
            </p>
          </div>
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-efficiency />
            </div>
            <h2>Optimized efficiency</h2>
            <p>
              Balancer lets traders maintain a token balance inside the
              protocol, executing trades without exiting the Balancer vault and
              making gas costs as low as possible—a high-frequency trader’s
              dream.
            </p>
          </div>
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-arbitrage />
            </div>
            <h2>Zero-capital arbitrage</h2>
            <p>
              Using Balancer’s flash swap feature, traders can execute arbitrage
              trades that rebalance liquidity pools and send profits directly to
              the trader, without spending any tokens.
            </p>
          </div>
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-protection />
            </div>
            <h2>MEV Protection</h2>
            <p>
              Traders on Balancer are protected from Miner Extractable Value
              (MEV) which otherwise can cause higher gas fees and excess price
              slippage for DEX traders.
            </p>
          </div>
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-key />
            </div>
            <h2>Permissionless platform</h2>
            <p>
              As a decentralized exchange, Balancer allows traders to transact
              without giving up custody of their assets to a third party; user
              funds are always controlled by the user.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TradeHero from "@/components/pages/trade/TradeHero.vue";
import TradeProduct from "@/components/pages/trade/TradeProduct.vue";
import IconSparkles from "@/components/icons/IconSparkles.vue";
import IconLiquidity from "@/components/icons/IconLiquidity.vue";
import IconProtection from "@/components/icons/IconProtection.vue";
import IconKey from "@/components/icons/IconKey.vue";
import IconArbitrage from "@/components/icons/IconArbitrage.vue";
import IconEfficiency from "@/components/icons/IconEfficiency.vue";

export default {
  head: {
    title: "Balancer | DeFi Trading Platform on Ethereum",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Trade on the decentralized Balancer exchange for the best prices for crypto asset swaps"
      }
    ]
  },
  transition: "slideup",
  components: {
    TradeHero,
    TradeProduct,
    IconSparkles,
    IconLiquidity,
    IconProtection,
    IconKey,
    IconArbitrage,
    IconEfficiency
  }
};
</script>

<style scoped>
.messari-logo {
  @apply py-4;
  width: 100%;
  max-width: 180px;
}
</style>

<style>
/* #TODO: how can i keep this global? */

.vsa-list {
  --vsa-max-width: 100%;
  --vsa-bg-color: #fff;
  --vsa-default-icon-size: 0.5;
  --vsa-text-color: #000;
  --vsa-border-color: #eee;
  --vsa-heading-padding: 1rem 0;
  --vsa-content-padding: 1rem 0;
  --vsa-highlight-color: #0000ff;
  --vsa-border-style: none;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-tap-highlight-color: transparent;
  border-top: 1px solid #eee;
}

.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  @apply text-blue-500;
  background-color: #fff;
}

.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after {
  @apply bg-blue-500;
}

.vsa-item__trigger {
  @apply text-black;
  transition: all 0.2s ease-in-out;
}

.vsa-item__trigger__content {
  @apply text-lg;
}

.vsa-item:not(:last-of-type) {
  border-bottom: 1px solid #eee;
}

.vsa-item {
  border-bottom: 1px solid #eee;
}

/* Custom accordion header icons */

.vsa-item--is-active .vsa-item__trigger__icon .open {
  display: none;
}
.vsa-item--is-active .vsa-item__trigger__icon .close {
  display: block;
}
.vsa-item__trigger__icon .open {
  display: block;
}
.vsa-item__trigger__icon .close {
  display: none;
}

.accoridion-trigger-enter-from,
.accoridion-trigger-leave-to {
  opacity: 0;
}

.accoridion-trigger-enter-to,
.accoridion-trigger-leave-from {
  opacity: 1;
}

.accoridion-trigger-active {
  transition: 0.2s all ease-in-out;
}
</style>
