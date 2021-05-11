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
          <div class="grid grid-cols-1 pb-4">
            <Feature
              title="Free & permissionless"
              description="No middle-man or monopoly resulting in unnecessarily high listing fees"
              icon="icon-ticket.svg"
            />
            <Feature
              title="Capital efficient"
              description="Distribute more of your tokens with less initial capital investment"
              icon="icon-lightning.svg"
            />
            <Feature
              title="Fair distribution"
              description="Front-running and large whale buys can be disincentivized, giving everyone an opportunity to participate at a fair price."
              icon="icon-scale.svg"
            />
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="pb-12">
            <p class="featured-stat lbp-stat pb-4">20+</p>
            <p class="featured-stat lbp-stat-label">Token launches</p>
          </div>

          <div>
            <p class="featured-stat lbp-stat pb-4">$200m+</p>
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
                <img class="pb-2" src="@/assets/svg/tokens/hydra.svg" alt="" />
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
                  src="@/assets/svg/tokens/radicle.svg"
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
                  src="@/assets/images/tokens/illuvium.png"
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
                <img class="pb-2" src="@/assets/svg/tokens/mask.svg" alt="" />
                <p class="font-medium">Mask</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="w-full mx-auto max-w-7xl">
        <div class="max-w-xl">
          <h2 class="pb-4">Customize LBPs to match your project's needs</h2>
          <p class="pb-6">
            Instead of a permanent 50%&nbsp;/&nbsp;50% or 90%&nbsp;/&nbsp;10%
            weighting, LBP weightings can be programmed to continually change to
            match a project's needs.
          </p>
        </div>
        <div class="md:flex md:pb-12">
          <div class="md:pr-2 lg:pr-4 pb-4">
            <div>
              <img
                class="pb-4"
                src="@/assets/images/lbp-90-10-10-90.png"
                alt=""
              />
              <p class="pb-4 text-greyDark text-sm">
                Example token sale 1: An LBP starting at 90% / 10% weighting which
                continually changes in one direction to 10% / 90% over 3 days.
              </p>
            </div>
          </div>
          <div class="md:pl-2 lg:pl-4 pb-8">
            <img
              class="pb-4"
              src="@/assets/images/lbp-90-10-50-50.png"
              alt=""
            />
            <p class="pb-4 text-greyDark text-sm">
              Example token sale 2: This LBP moves from 90%&nbsp;/&nbsp;10% to
              50%&nbsp;/&nbsp;50%. After the sale, the pool continues unpaused
              to serve as a classic 50%&nbsp;/&nbsp;50% AMM.
            </p>
          </div>
        </div>
      </div> -->
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
