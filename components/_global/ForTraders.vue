<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 lg:px-0 py-8 md:py-16 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-md pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">For traders</p>
          <h1 class="h1-sans-serif">
            An automated market maker with cheap asset&nbsp;swaps
          </h1>
          <p class="pb-4">
            Balancer facilitates cheap trades by utilizing the crowd-sourced
            liquidity pools from investor’s self-balancing portfolios. Balancer
            looks across all these different liquidity pools and smartly routes
            the exchange to give the trader the best available price.
          </p>
          <div class="grid grid-cols-1 pb-4">
            <div class="flex pb-5">
              <img
                class="mr-3"
                src="~/assets/svg/icon-smart-routing.svg"
                alt=""
              />
              <p class="font-medium">Best prices via Smart Order Routing</p>
            </div>
            <div class="flex pb-5">
              <img
                class="mr-3"
                src="~/assets/svg/icon-crystal-ball.svg"
                alt=""
              />
              <p class="font-medium">Simulate amounts to optimize trades</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-key.svg" alt="" />
              <p class="font-medium">Trade with no counter party risk</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-sparkles.svg" alt="" />
              <p class="font-medium">
                Gas subsidies to lower trading costs
              </p>
            </div>

            <!-- <FeaturedBenefit benefit="Designed to earn you more"  iconPath="icon-moon.svg" /> -->
          </div>
        </div>
        <div>
          <div>
            <div class="grid grid-cols-2 gap-4 max-w-lg">
              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/dai-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>ETH: <span>$1,962.65</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/dai-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>DAI: <span>$1.00</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/dai-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>BAL: <span>$56.24</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/dai-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>WBTC: <span>$59,456</span></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <p class="pt-4 text-gray-400">
              Featured tokens
            </p>
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
  @apply rounded-lg shadow;
  max-width: 300px;
}
.cover-img {
  border-radius: 10px 10px 0 0;
}
</style>
