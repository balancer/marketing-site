<template>
  <section class="bg-white">
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 xl:px-0 pb-16 lg:pb-32 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4 pb-8 md:pb-0">
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
          <div class="grid grid-cols-1 pb-2">
            <div class="flex pb-5">
              <img
                class="mr-3"
                src="~/assets/svg/icon-smart-routing.svg"
                alt=""
              />
              <p class="font-medium">Intelligent pricing</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-umbrella.svg" alt="" />
              <p class="font-medium">MEV protection</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-sparkles.svg" alt="" />
              <p class="font-medium">
                Gas optimizations and subsidies
              </p>
            </div>
          </div>
          <div class="flex pb-4 md:pb-0">
            <a
              class="btn btn-primary btn-hero mr-3"
              href="https://app.balancer.fi/#/trade"
              >Start trading</a
            >
            <NuxtLink class="btn btn-tertiary btn-hero" to="trade"
              >Learn more</NuxtLink
            >            
          </div>
        </div>
        <div>
          <div>
            <div class="card-grid grid grid-cols-2 gap-4">
              <a
                href="https://app.balancer.fi/#/trade/ether/0x6B175474E89094C44Da98b954EedeAC495271d0F/"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      src="~assets/images/tokens/dai-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <!-- <p class="text-sm truncate">DAI: <span>$1.00</span></p> -->
                      <p class="text-label">DAI</p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://app.balancer.fi/#/trade/0x6B175474E89094C44Da98b954EedeAC495271d0F/ether/"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      src="~assets/images/tokens/weth-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <!-- <p class="text-label">ETH: <span>$2,394</span></p> -->
                      <p class="text-label">ETH</p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://app.balancer.fi/#/trade/ether/0xba100000625a3754423978a60c9317c58a424e3D/"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      src="~assets/images/tokens/bal-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-label">BAL</p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://app.balancer.fi/#/trade/ether/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      src="~assets/images/tokens/wbtc-cover.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-label">WBTC</p>
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

.card-grid {
  max-width: 38rem;
}
.pool {
  @apply rounded-lg overflow-hidden;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}

.image-container {
  @apply relative flex justify-center items-center overflow-hidden;
}

.pool:hover .cover-img {
  transform: scale(1.1);
  transition: 0.2s all ease-in-out;
}

.text-label {
  @apply text-sm truncate;
  transition: 0.2s all ease-out;
}

.pool:hover .text-label {
  @apply text-defaultBlue;
}

.cover-img {
  transition: 0.2s all ease-in-out;
}
</style>
