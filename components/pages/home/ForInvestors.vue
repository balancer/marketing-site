<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 xl:px-0 pb-16 lg:pb-32 mb-8 items-center gap-4 bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4 pb-8 md:pb-0">
          <p class="eyebrow gradient-text pb-2 font-medium">For investors</p>
          <h1 class="h1-sans-serif">
            Portfolios that generate yield and rebalance automatically
          </h1>
          <p class="pb-4">
            Balancer turns the concept of an index fund on its head: instead of
            paying fees to portfolio managers to rebalance your portfolio, you
            collect fees from traders who rebalance your portfolio by following
            arbitrage opportunities.
          </p>
          <div class="grid grid-cols-1 pb-5">
            <div class="pb-1">
              <div class="flex pb-5">
                <img class="mr-3" :src="require('~/assets/svg/icon-shield.svg')" alt="" />
                <p class="font-medium">Battle tested and secure</p>
              </div>
              <div class="flex pb-5">
                <img
                  class="mr-3"
                  :src="require('~/assets/svg/icon-lightning.svg')"
                  alt=""
                />
                <p class="font-medium">Capital and gas efficient</p>
              </div>
              <div class="flex pb-5">
                <img 
                width="26"
                height="25"
                class="mr-3" :src="require('~/assets/svg/icon-sparkles.svg')" alt="" />
                <p class="font-medium">Earn $BAL token incentives</p>
              </div>
            </div>
            <div class="flex pb-4 md:pb-0">
              <a
                class="btn btn-primary btn-hero mr-3"
                href="https://app.balancer.fi/#/"
                >Start investing</a
              >
              <NuxtLink class="btn btn-tertiary btn-hero" to="invest"
                >Invest features</NuxtLink
              >
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="card-grid grid grid-cols-2 gap-4 max-w-xl">
              <a
                href="https://app.balancer.fi/#/pool/0xa6f548df93de924d73be7d25dc02554c6bd66db500020000000000000000000e"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"
                      class="cover-img"
                      :src="require('~/assets/images/featured-pools/pool-weth-wbtc.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-label">50 WETH 50 WBTC</p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://app.balancer.fi/#/pool/0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      :src="require('~/assets/images/featured-pools/pool-bal-weth.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-label">80 BAL 20 WETH</p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://app.balancer.fi/#/pool/0x61d5dc44849c9c87b0856a2a311536205c96c7fd000100000000000000000001"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      :src="require('~/assets/images/featured-pools/pool-dpi-weth-wbtc.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-label">
                        33 DPI 33 WETH 33&nbsp;WBTC
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://app.balancer.fi/#/pool/0x0b09dea16768f0799065c475be02919503cb2a3500020000000000000000001a"
              >
                <div class="pool relative">
                  <div class="image-container">
                    <img
                      width="300"
                      height="300"                    
                      class="cover-img"
                      :src="require('~/assets/images/featured-pools/pool-weth-dai.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p class="text-label">60 WETH 40 DAI</p>
                    </div>
                  </div>
                </div>
              </a>
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
.card-grid {
  max-width: 38rem;
}

.pool {
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  overflow: hidden;
}

.image-container {
  @apply relative flex justify-center items-center overflow-hidden;
}

.cover-img {
  transition: 0.2s all ease-in-out;
}
.pool:hover .cover-img {
  transform: scale(1.1);
  transition: 0.2s all ease-in-out;
}

.text-label {
  transition: 0.2s all ease-out;  
  @apply text-sm truncate;
}

.pool:hover .text-label {
  @apply text-defaultBlue;
}

.superscript {
  font-family: 'Inter var', sans-serif;
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
