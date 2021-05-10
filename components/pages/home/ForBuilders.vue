<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 xl:px-0 pb-32 xl:pb-32 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">For builders</p>
          <h1 class="h1-sans-serif">
            A protocol for programmable&nbsp;liquidity
          </h1>
          <p class="pb-4">
            <!-- The Balancer protocol has become a core part of DeFi
            infrastructure—a liquidity primative. Balancer is the most flexible
            and versatile Automated Market Maker with nearly unlimited options
            for customizing token ratios and fees. Developers can use Balancer
            as a permissionless building block to innovate freely and create new
            types of treasury management systems.  -->

            The Balancer Protocol is a core building block of DeFi
            infrastructure—a unique financial primitive and permissionless
            development platform. Balancer is the most flexible and versatile
            Automated Market Maker, giving developers unprecedented
            customizability.
          </p>
          <div class="pb-1">
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-sliders.svg" alt="" />
              <p class="font-medium">Custom token weights & swap fees</p>
            </div>
            <div class="flex pb-5">
              <img class="mr-3" src="~/assets/svg/icon-curve.svg" alt="" />
              <p class="font-medium">
                Liquidity pools can operate on any price curve
              </p>
            </div>
            <div class="flex pb-5">
              <img
                class="mr-3"
                src="~/assets/svg/icon-asset-manager.svg"
                alt=""
              />
              <p class="font-medium">
                Asset managers re-utilize dormant liquidity (coming soon)
              </p>
            </div>
          </div>
          <div class="flex pb-4 md:pb-0">
            <NuxtLink class="btn btn-tertiary btn-hero" to="build"
              >Learn more</NuxtLink
            >
          </div>
        </div>
        <div>
          <img
            class="w-full max-w-xl"
            src="~assets/images/home-builders.jpg"
            alt=""
          />
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
  @apply border border-gray-200 rounded-3xl shadow;
  max-width: 240px;
}
.case-study {
  @apply mx-auto;
  max-width: 75.9375rem;
}
</style>
