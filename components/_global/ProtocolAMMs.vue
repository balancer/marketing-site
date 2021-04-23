<template>
  <section class="pb-12">
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 lg:px-0 py-8 md:py-16 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">SMARTER POOLS</p>

          <h1 class="h1-sans-serif">
            A generalized Automated Market Maker (AMM)
          </h1>
          <p class="pb-4">
            Balancer enables anyone to create a pool with it’s own custom AMM
            logic. Nearly unlimited options for choosing the number of tokens,
            their weights, and fees.
          </p>

          <p class="pb-4">
            For example, create an equally weighted 50/50 Uniswap style pool, or
            a stable soft pegged pool like Curve. But that’s just the start.
            Dream big with smart pools to create almost any kind of asset
            management system.
          </p>
        </div>

        <div>
          <div>
            <div class="grid grid-cols-2 gap-4 max-w-lg">
              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/pool-types/50-50.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>
                        Uniswap-style <span class="block">50/50 pools</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/pool-types/stable.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>Curve-style <span class="block">stable pools</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/pool-types/8-pool.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>
                        Weighted pools<span class="block">up to 8 tokens</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.balancer.fi/trade/weth">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="~assets/images/pool-types/smart.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center font-medium">
                      <p>Custom logic<span class="block">Smart pools</span></p>
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
.pool {
  @apply rounded-lg shadow;
  max-width: 300px;
}
.cover-img {
  border-radius: 10px 10px 0 0;
}
</style>
