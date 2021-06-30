<template>
  <section class="pb-12 bg-white">
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 lg:px-0 pt-8 pt-16 pb-16 lg:pb-32 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">HODL Smarter</p>

          <h1 class="h1-sans-serif">
            Sophisticated investing, simplified
          </h1>
          <p class="pb-4">
            Balancer is a set-and-forget protocol for investors, which
            algorithmically manages assets by rapidly rebalancing positions and
            earning trading fees over time.
          </p>

          <p class="pb-4">
            Over 25,000 investors use Balancer’s flexible pool structures to
            choose the ideal configuration for their investment goals.
          </p>
        </div>

        <div>
          <div class="grid grid-cols-2 gap-4 max-w-lg">
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  class="cover-img"
                  :src="require('~/assets/images/pool-types/classic.jpg')"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center font-medium">
                  <p class="text-sm truncate">
                    Regular AMM<span class="block">50/50 pools</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  class="cover-img"
                  :src="require('~/assets/images/pool-types/weighted.jpg')"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center font-medium">
                  <p class="text-sm truncate">
                    Weighted pools<span class="block">up to 8 tokens</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  class="cover-img"
                  :src="require('~/assets/images/pool-types/stable.jpg')"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center font-medium">
                  <p class="text-sm truncate">
                    Curve-style<span class="block">stable pools</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="pool relative">
              <div class="relative flex justify-center items-center">
                <img
                  class="cover-img"
                  :src="require('~/assets/images/pool-types/smart.jpg')"
                  alt=""
                />
              </div>
              <div>
                <div class="p-2 md:p-3 text-center font-medium">
                  <p class="text-sm truncate">
                    Custom logic<span class="block">Smart Pools</span>
                  </p>
                </div>
              </div>
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
