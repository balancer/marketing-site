<template>
  <section class="bg-white">
    <div class="max-w-screen-2xl mx-auto">
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
              class="btn btn-secondary btn-inline mb-8 md:mb-4"
              href="https://docs.balancer.finance/guides/creating-a-smart-pool"
              >V1 Smart Pool docs</a
            >

          <!-- <div class="grid grid-cols-1 pb-4">
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
          </div> -->
        </div>
        <div>
          <div>
            <div class="grid grid-cols-2 gap-4 max-w-lg">
              <a href="https://docs.balancer.finance/guides/smart-pool-templates-gui/liquidity-bootstrapping-pool">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/smart-pools/fair-launch.jpg"
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

              <a href="https://docs.balancer.finance/guides/smart-pool-templates-gui/swing-trading-pool">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/smart-pools/index-fund.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Index funds</p>
                      <p class="hidden">Via a Swing Trading Pool</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://docs.balancer.finance/guides/smart-pool-templates-gui/smart-treasury">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/smart-pools/smart-treasury.jpg"
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

              <a href="https://docs.balancer.finance/guides/smart-pool-templates-gui/investors-club">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/smart-pools/investor-clubs.jpg"
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
            <p class="pt-4 text-gray-400">
              Example use cases
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
