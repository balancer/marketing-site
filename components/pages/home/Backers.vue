<script setup>
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 md:pb-32 lg:pb-40 lg:pt-0 xl:px-0">
    <div class="grid gap-4 md:grid-cols-3 xl:gap-8">
      <div class="card order-1 flex w-full flex-col justify-between md:order-2">
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>
            The most informed see the writing on the wall for how integral
            Balancer is becoming to DeFi liquidity. It is beloved by builders
            for allowing them to build a vast array of liquidity pools to solve
            pressing problems. Over time, it will find itself at the center of
            more & more pivotal liquidity&nbsp;experiments.
          </p>
        </div>
        <a
          href="https://twitter.com/cburniske"
          class="group"
        >
          <div class="flex items-center">
            <div class="w-20 overflow-hidden rounded-full">
              <img
                width="80"
                height="80"
                src="~/assets/images/people/cb.jpg"
                alt=""
              >
            </div>
            <div class="pl-4">
              <p class="font-medium transition-colors group-hover:text-defaultBlue">Chris Burniske</p>
              <p class="font-medium transition-colors group-hover:text-defaultBlue">Placeholder VC</p>
            </div>
          </div>
        </a>
      </div>
      <div
        class="card order-2 flex w-full  flex-col justify-between md:relative md:top-12 md:order-1"
      >
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>
            Balancer is the epitome of technical excellence and innovation in
            the DeFi space. Balancer V2 is another
            testimony of continued effort to innovate through clever design.
            DeFiance Capital is proud to support Balancer in this
            exciting&nbsp;journey.
          </p>
        </div>
        <a
          href="https://twitter.com/Arthur_0x"
          class="group"
        >
          <div class="flex items-center">
            <div class="w-20 overflow-hidden rounded-full">
              <img
                width="80"
                height="80"
                src="~/assets/images/people/ax.png"
                alt=""
              >
            </div>
            <div class="pl-4">
              <p class="font-medium transition-colors group-hover:text-defaultBlue">Arthur_0x</p>
              <p class="font-medium transition-colors group-hover:text-defaultBlue">DeFiance Capital</p>
            </div>
          </div>
        </a>
      </div>
      <div
        class="card order-3 flex w-full flex-col justify-between md:relative md:top-12"
      >
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>
            Balancer's thoughtful architecture enables a wide range of innovative liquidity strategies. No other exchange or asset management
            protocol provides as much flexibility for&nbsp;builders.
          </p>
        </div>

        <a
          href="https://twitter.com/delitzer"
          class="group"
        >
          <div class="flex items-center">
            <div class="w-20 overflow-hidden rounded-full">
              <img
                width="80"
                height="80"
                src="~/assets/images/people/de.jpg"
                alt=""
              >
            </div>
            <div class="group pl-4">
              <p class="font-medium transition-colors group-hover:text-defaultBlue">Dan Elitzer</p>
              <p class="font-medium transition-colors group-hover:text-defaultBlue">Nascent</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: 0.2s all ease-out;
  @apply rounded-2xl p-4 md:p-6 lg:p-8 shadow-none;
}

.card:hover {
  box-shadow: 8px 8px 30px #e6e6e6, -8px -8px 30px #ffffff;
}
</style>
