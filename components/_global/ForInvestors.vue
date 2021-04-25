<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 py-8 md:py-16 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">For investors</p>
          <h1 class="h1-sans-serif">
            Continuous self-balancing&nbsp;portfolios
          </h1>
          <p class="pb-4">
            Balancer turns the concept of an index fund on its head: instead of paying fees to portfolio managers
            to rebalance your portfolio, you collect fees from traders who
            rebalance your portfolio by following arbitrage opportunities.
          </p>
          <div class="grid grid-cols-1 pb-5">
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-moon.svg" alt="" />
              <p class="font-medium">High risk-adjusted returns</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-shield.svg" alt="" />
              <p class="font-medium">Battle tested and secure</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-lightning.svg" alt="" />
              <p class="font-medium">Capital and gas efficient</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-sparkles.svg" alt="" />
              <p class="font-medium">Liquidity mining incentives</p>
            </div>

            <!-- <FeaturedBenefit benefit="Designed to earn you more"  iconPath="icon-moon.svg" /> -->
          </div>
        </div>
        <div>
          <div>
            <div class="grid grid-cols-2 gap-4 max-w-lg">
              <div class="pool relative">
                <div class="relative flex justify-center items-center">
                  <img
                    class="p-4"
                    src="~assets/images/featured-pools/weth-dai.webp"
                    alt=""
                  />
                  <div class="absolute text-center">
                    <p class="my-0 text-xs md:text-sm leading-4 font-semibold">APY</p>
                    <p class="my-0 text-xl lg:text-2xl font-semibold">
                      12.51<span class="superscript">%</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="pb-4 text-center font-medium">
                    <p>50/50 WETH/BTC</p>
                  </div>
                </div>
              </div>

              <div class="pool relative">
                <div class="relative flex justify-center items-center">
                  <img
                    class="p-4"
                    src="~assets/images/featured-pools/weth-dai.webp"
                    alt=""
                  />
                  <div class="absolute text-center">
                    <p class="my-0 text-xs md:text-sm leading-4 font-semibold">APY</p>
                    <p class="my-0 text-xl lg:text-2xl font-semibold">
                      16.25<span class="superscript">%</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="pb-4 text-center font-medium">
                    <p>50/50 WETH/DAI</p>
                  </div>
                </div>
              </div>
              <div class="pool relative">
                <div class="relative flex justify-center items-center">
                  <img
                    class="p-4"
                    src="~assets/images/featured-pools/weth-dai.webp"
                    alt=""
                  />
                  <div class="absolute text-center">
                    <p class="my-0 text-xs md:text-sm leading-4 font-semibold">APY</p>
                    <p class="my-0 text-xl lg:text-2xl font-semibold">
                      24.26<span class="superscript">%</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="pb-4 text-center font-medium">
                    <p>50/50 WETH/BAL</p>
                  </div>
                </div>
              </div>
              <div class="pool relative">
                <div class="relative flex justify-center items-center">
                  <img
                    class="p-4"
                    src="~assets/images/featured-pools/weth-dai.webp"
                    alt=""
                  />
                  <div class="absolute text-center">
                    <p class="my-0 text-xs md:text-sm leading-2 font-semibold">APY</p>
                    <p class="my-0 text-xl lg:text-2xl font-semibold">
                      8.35<span class="superscript">%</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="pb-4 text-center font-medium">
                    <p>STABLE POOL</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="pt-4 text-gray-400">Featured investment pools</p>
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
.superscript {
  font-family: Inter, sans-serif;
font-feature-settings: 'kern' 1, 'numr' 1;
    -webkit-font-feature-settings: 'kern' 1, 'numr' 1;
    -ms-font-feature-settings: 'kern' 1, 'numr' 1;
    -moz-font-feature-settings: 'kern' 1, 'numr' 1;
  font-size: 10px;
  position: relative;
  top: -6px;
  left: 1px;
}
</style>
