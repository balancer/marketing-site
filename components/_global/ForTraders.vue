<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 px-4 py-16 mb-8 items-center bg-white shadow"
  >
    <div class="md:mx-auto max-w-md">
      <h1>
        For traders: An automated market marker with cheap asset&nbsp;swaps
      </h1>
      <p class="pb-4">
        Balancer facilitates cheap trades by utilizing the crowd-sourced
        liquidity pools from investor’s self-balancing portfolios. Balancer
        looks across all these different liquidity pools and smartly routes the
        exchange to give the trader the best available price.
      </p>
      <div class="grid grid-cols-1">
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-smart-routing.svg" alt="" />
          <p class="font-medium">Best prices via Smart Order Routing</p>
        </div>
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-crystal-ball.svg" alt="" />
          <p class="font-medium">Simulate to optimize trades</p>
        </div>
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-key.svg" alt="" />
          <p class="font-medium">Stay safe with no counter party risk</p>
        </div>
        <div class="flex gap-4 pb-4">
          <img src="~/assets/svg/icon-sparkles.svg" alt="" />
          <p class="font-medium">Get gas subsidies to lower trading costs</p>
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
                <img class="p-4" src="~assets/svg/tokens/dai.svg" alt="" />
              </div>
              <div>
                <div class="pb-4 text-center font-medium">
                  <p>ETH: <span>$1,962.65</span></p>
                </div>
              </div>
            </div>
          </a>

          <div class="pool relative">
            <div class="relative flex justify-center items-center">
              <img class="p-4" src="~assets/svg/tokens/dai.svg" alt="" />
            </div>
            <div>
              <div class="pb-4 text-center font-medium">
                <p>DAI: <span>$1.00</span></p>
              </div>
            </div>
          </div>
          <div class="pool relative">
            <div class="relative flex justify-center items-center">
              <img class="p-4" src="~assets/svg/tokens/dai.svg" alt="" />
            </div>
            <div>
              <div class="pb-4 text-center font-medium">
                <p>WBTC: <span>$59,456.45</span></p>
              </div>
            </div>
          </div>
          <div class="pool relative">
            <div class="relative flex justify-center items-center">
              <img class="p-4" src="~assets/svg/tokens/dai.svg" alt="" />
            </div>
            <div>
              <div class="pb-4 text-center font-medium">
                <p>BAL: <span>$56.24</span></p>
              </div>
            </div>
          </div>
        </div>
        <p class="pt-4 text-gray-400">
          Featured tokens: Click one to trade for it
        </p>
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
