<template>
  <section class="bg-white">
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 xl:px-0 pb-16 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">Launch a token</p>
          <h1 class="h1-sans-serif">
            LBPs for a fair and liquid&nbsp;launch
          </h1>
          <p class="pb-4">
            A Liquidity Bootstrapping Pool is an adjustable Balancer Smart Pool
            designed for initial distribution and price discovery of new assets.
            Typically, the weight of assets in an LBP are programmed to
            continually change during the token sale.
          </p>
          <div class="grid grid-cols-1 pb-2">
            <Feature title="Free & permissionless" icon="icon-ticket.svg" />
            <Feature title="Capital efficient" icon="icon-lightning.svg" />
            <Feature title="Fair distribution" icon="icon-scale.svg" />
          </div>
          <div>
            <a
              class="btn btn-tertiary btn-hero btn-inline mb-8 md:mb-4"
              href="https://docs.balancer.fi/getting-started/faqs/pools-and-lbps"
              >View LBP docs</a
            >
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="pb-12">
            <p class="featured-stat lbp-stat pb-4">45+</p>
            <p class="featured-stat lbp-stat-label">Token launches</p>
          </div>

          <div>
            <p class="featured-stat lbp-stat pb-4">$500m+</p>
            <p class="featured-stat lbp-stat-label">Raised</p>
          </div>
        </div>
      </div>
      <div class="px-4 xl:px-0 w-full max-w-7xl mx-auto pb-16 xl:pb-32">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 text-center"
        >
          <div
            class="order-1 md:order-2 card flex flex-col justify-between w-full"
          >
            <div class="pb-6">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">$21.7m</p>
            </div>
            <div class="flex justify-center">
              <div class="w-20">
                <img class="pb-2" :src="require('~/assets/svg/tokens/hydra.svg')" alt="" />
                <p class="font-medium">Hydra</p>
              </div>
            </div>
          </div>
          <div
            class="order-1 md:order-2 card flex flex-col justify-between w-full"
          >
            <div class="pb-6">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">$24.7m</p>
            </div>
            <div class="flex justify-center">
              <div class="w-20">
                <img
                  class="pb-2"
                  :src="require('~/assets/svg/tokens/radicle.svg')"
                  alt=""
                />
                <p class="font-medium">Radicle</p>
              </div>
            </div>
          </div>
          <div
            class="order-1 md:order-2 card flex flex-col justify-between w-full"
          >
            <div class="pb-6">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">$38.2m</p>
            </div>
            <div class="flex justify-center">
              <div class="w-20">
                <img
                  class="pb-2"
                  :src="require('~/assets/images/tokens/illuvium.png')"
                  alt=""
                />
                <p class="font-medium">Illuvium</p>
              </div>
            </div>
          </div>
          <div
            class="order-1 md:order-2 card flex flex-col justify-between w-full"
          >
            <div class="pb-6">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">$39.0m</p>
            </div>
            <div class="flex justify-center">
              <div class="w-20">
                <img class="pb-2" :src="require('~/assets/svg/tokens/mask.svg')" alt="" />
                <p class="font-medium">Mask</p>
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
