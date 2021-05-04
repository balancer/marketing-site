<template>
  <section class="bg-white">
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 xl:px-0 pb-16 lg:pb-32 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">For traders</p>
          <h1 class="h1-sans-serif">
            Decentralized trades at optimal prices
          </h1>
          <p class="pb-4">
            <!-- Balancer facilitates cheap trades by utilizing the crowd-sourced
            liquidity pools from investor’s self-balancing portfolios. Balancer
            looks across all these different liquidity pools and smartly routes
            the exchange to give the trader the best available price. -->
            Balancer enables efficient trading by pooling crowdsourced liquidity
            from investor portfolios and using its Smart Order Router to find
            traders the best available price. Exchange any combination of ERC-20
            tokens permissionlessly, with ease.
          </p>
          <div class="grid grid-cols-1 pb-4">
            <div class="flex pb-5">
              <img
                class="mr-3"
                src="~/assets/svg/icon-smart-routing.svg"
                alt=""
              />
              <p class="font-medium">Intelligent price matching</p>
            </div>
            <div class="flex pb-5">
              <img
                class="mr-3"
                src="~/assets/svg/icon-crystal-ball.svg"
                alt=""
              />
              <p class="font-medium">MEV protection</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-key.svg" alt="" />
              <p class="font-medium">No counter party risk</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-sparkles.svg" alt="" />
              <p class="font-medium">
                Gas optimizations and subsidies
              </p>
            </div>

            <!-- <FeaturedBenefit benefit="Designed to earn you more"  iconPath="icon-moon.svg" /> -->
          </div>
        </div>
        <div>
          <div>
            <div class="grid grid-cols-2 gap-4 max-w-lg">
              <a
                href="https://app.balancer.fi/#/trade/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x6B175474E89094C44Da98b954EedeAC495271d0F/"
              >
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
                      <p class="text-sm truncate">DAI: <span>$1.00</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://app.balancer.fi/#/trade/0x6B175474E89094C44Da98b954EedeAC495271d0F/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/"
              >
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/weth-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">WETH: <span>$2,394</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://app.balancer.fi/#/trade/0x6B175474E89094C44Da98b954EedeAC495271d0F/0xba100000625a3754423978a60c9317c58a424e3D/"
              >
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/bal-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">BAL: <span>$56.24</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://app.balancer.fi/#/trade/0x6B175474E89094C44Da98b954EedeAC495271d0F/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/"
              >
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/tokens/wbtc-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-sm truncate">WBTC: <span>$59,456</span></p>
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
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}
.cover-img {
  border-radius: 10px 10px 0 0;
}
</style>
