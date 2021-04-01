<template>
  <section class="grid grid-cols-1 md:grid-cols-2 px-4 py-16 items-center">
    <div class="md:mx-auto max-w-md">
      <h1>For investors: Continuous self-balancing&nbsp;portfolios</h1>
      <p class="pb-4">
        Balancer is an automated portfolio manager turning the concept of an
        index fund on its head: instead of paying fees to portfolio managers to
        rebalance your portfolio, you collect fees from traders who rebalance
        your portfolio by following arbitrage opportunities.
      </p>
      <div class="grid grid-cols-1">
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-moon.svg" alt="" />
          <p class="font-medium">Designed to earn you more</p>
        </div>
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-shield.svg" alt="" />
          <p class="font-medium">Battle tested and secure</p>
        </div>
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-lightning.svg" alt="" />
          <p class="font-medium">Capital and gas efficient</p>
        </div>
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-sparkles.svg" alt="" />
          <p class="font-medium">Liquidity mining rewards</p>
        </div>
      </div>
    </div>
    <div>
      <div>
        <p class="pb-2">Featured pools</p>
        <div class="grid grid-cols-2 gap-4 max-w-lg">
          <div class="pool relative">
            <div class="relative flex justify-center items-center">
              <img
                class="p-4"
                src="~assets/images/featured-pools/weth-dai.webp"
                alt=""
              />
              <div class="absolute text-center">
                <p class="my-0">APY</p>
                <p class="my-0">12.51%</p>
              </div>
            </div>
            <div>
              <div class="pb-4 text-center"><p>50/50 WETH/BTC</p></div>
            </div>
          </div>
          <div class="pool">
            <div class="relative">
              <img
                class="p-4"
                src="~assets/images/featured-pools/weth-dai.webp"
                alt=""
              />
              <div class="pb-4 text-center"><p>50/50 WETH/DAI</p></div>
            </div>
          </div>
          <div class="pool">
            <div class="relative">
              <img
                class="p-4"
                src="~assets/images/featured-pools/weth-dai.webp"
                alt=""
              />
              <div class="pb-4 text-center"><p>50/50 WETH/BAL</p></div>
            </div>
          </div>
          <div class="pool">
            <div class="relative">
              <img
                class="p-4"
                src="~assets/images/featured-pools/weth-dai.webp"
                alt=""
              />
              <div class="pb-4 text-center"><p>STABLE POOL</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.pool {
  @apply border border-gray-200 rounded-3xl shadow;
  max-width: 240px;
}
</style>
