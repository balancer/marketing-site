<template>
  <section class="bg-white">
    <div class="max-w-screen-2xl mx-auto py-16 lg:py-32">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 xl:px-0 py-8 md:py-16 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">SMART POOLs</p>
          <h1 class="h1-sans-serif">
            Customizable AMM logic with Smart Pools
          </h1>
          <p class="pb-4">
            Smart Pools are dynamic liquidity pools with parameters that can be
            adjusted via smart contract code. Pool owners can specify who can
            join the pool. Innovate freely on Balancer’s open-source code.
          </p>

          <p class="pb-4 italic">New Balancer V2 Smart Pools are coming soon.</p>
            <a
              class="btn btn-tertiary btn-hero btn-inline mb-8 md:mb-4"
              href="https://docs.balancer.fi/v/v1/smart-contracts/smart-pools"
              >V1 Smart Pool docs</a
            >
        </div>
        <div>
          <div>
            <div class="grid grid-cols-2 gap-4 max-w-lg">
              <a href="https://docs.balancer.fi/getting-started/faqs/pools-and-lbps">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      :src="require('~/assets/images/smart-pools/fair-launch.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Fair token launch</p>
                      <p class="hidden">
                        Via a Liquidity Bootstrapping Pool (LBP)
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://docs.balancer.fi/v/v1/guides/smart-pool-templates-gui/swing-trading-pool">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      :src="require('~/assets/images/smart-pools/index-fund.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Indices</p>
                      <p class="hidden">Via a Swing Trading Pool</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://docs.balancer.fi/v/v1/guides/smart-pool-templates-gui/smart-treasury">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      :src="require('~/assets/images/smart-pools/smart-treasury.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Smart treasuries</p>
                      <p class="hidden">Via a Swing Trading Pool</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://docs.balancer.fi/v/v1/guides/smart-pool-templates-gui/investors-club">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      :src="require('~/assets/images/smart-pools/investor-clubs.jpg')"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Investor clubs</p>
                      <p class="hidden">Via a Swing Trading Pool</p>
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
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}
.cover-img {
  border-radius: 10px 10px 0 0;
}
</style>
