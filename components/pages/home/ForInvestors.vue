<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 xl:px-0 pb-16 lg:pb-32 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">For investors</p>
          <h1 class="h1-sans-serif">
            Continuous self-balancing&nbsp;portfolios
          </h1>
          <p class="pb-4">
            Balancer turns the concept of an index fund on its head: instead of
            paying fees to portfolio managers to rebalance your portfolio, you
            collect fees from traders who rebalance your portfolio by following
            arbitrage opportunities.
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
              <a href="https://app.balancer.fi/#/pool/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000200000000000000000003">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/featured-pools/pool-weth-wbtc.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">50 WETH 50 WBTC</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://app.balancer.fi/#/pool/0x647c1fd457b95b75d0972ff08fe01d7d7bda05df000200000000000000000002">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/featured-pools/pool-bal-weth.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">80 BAL 20 WETH</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://app.balancer.fi/#/pool/0x61d5dc44849c9c87b0856a2a311536205c96c7fd000100000000000000000001">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/featured-pools/pool-dpi-weth-wbtc.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">
                        33 DPI 33 WETH 33&nbsp;WBTC
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://app.balancer.fi/#/pool/0x571046eae58c783f29f95adba17dd561af8a871200020000000000000000000c">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/featured-pools/pool-weth-dai.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">50 WETH 50 DAI</p>
                    </div>
                  </div>
                </div>
              </a>
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
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}
.cover-img {
  border-radius: 10px 10px 0 0;
}

.superscript {
  font-family: Inter, sans-serif;
  font-feature-settings: "kern" 1, "numr" 1;
  -webkit-font-feature-settings: "kern" 1, "numr" 1;
  -ms-font-feature-settings: "kern" 1, "numr" 1;
  -moz-font-feature-settings: "kern" 1, "numr" 1;
  font-size: 10px;
  position: relative;
  top: -6px;
  left: 1px;
}
</style>
