<script setup></script>

<template>
  <section class="bg-white pb-12">
    <div class="mx-auto max-w-screen-2xl">
      <div
        class="grid grid-cols-1 items-center gap-4 bg-white px-4 py-16 pt-8 md:grid-cols-2 lg:px-0 lg:pb-32"
      >
        <div class="max-w-lg pr-4 md:mx-auto">
          <p class="eyebrow gradient-text pb-2 font-medium">
            HODL Smarter
          </p>

          <h1 class="h1-sans-serif">
            Sophisticated investing, simplified
          </h1>
          <p class="pb-4">
            Balancer is a set-and-forget protocol for investors, which algorithmically
            manages assets by rapidly rebalancing positions and earning trading fees over
            time.
          </p>

          <p class="pb-4">
            Over 25,000 investors use Balancer’s flexible pool structures to choose the
            ideal configuration for their investment goals.
          </p>
        </div>

        <div>
          <div class="grid max-w-lg grid-cols-2 gap-4">
            <div class="pool relative">
              <div class="relative flex items-center justify-center">
                <img
                  class="cover-img"
                  src="~/assets/images/pool-types/classic.jpg"
                  alt=""
                >
              </div>
              <div>
                <div class="p-2 text-center font-medium md:p-3">
                  <p class="truncate text-sm">
                    Regular AMM<span class="block">50/50 pools</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="pool relative">
              <div class="relative flex items-center justify-center">
                <img
                  class="cover-img"
                  src="~/assets/images/pool-types/weighted.jpg"
                  alt=""
                >
              </div>
              <div>
                <div class="p-2 text-center font-medium md:p-3">
                  <p class="truncate text-sm">
                    Weighted pools<span class="block">up to 8 tokens</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="pool relative">
              <div class="relative flex items-center justify-center">
                <img
                  class="cover-img"
                  src="~/assets/images/pool-types/stable.jpg"
                  alt=""
                >
              </div>
              <div>
                <div class="p-2 text-center font-medium md:p-3">
                  <p class="truncate text-sm">
                    Curve-style<span class="block">stable pools</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="pool relative">
              <div class="relative flex items-center justify-center">
                <img
                  class="cover-img"
                  src="~/assets/images/pool-types/smart.jpg"
                  alt=""
                >
              </div>
              <div>
                <div class="p-2 text-center font-medium md:p-3">
                  <p class="truncate text-sm">
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
