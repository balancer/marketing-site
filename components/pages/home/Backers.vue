<template>
  <div class="px-4 xl:px-0 w-full max-w-7xl mx-auto pb-20  lg:pb-40">
    <!-- <h1 class="h1-sans-serif md:text-center pb-8">Backed by</h1> -->
    <div class="grid md:grid-cols-3 gap-4 xl:gap-8">
      <div class="order-1 md:order-2 card flex flex-col justify-between w-full">
        <div class="pb-6">
          <img class="w-10 mb-4 md:w-16 lg:w-20 lg:mb-6" src="@/assets/svg/icon-quotemark.svg" alt="" />
          <p>
            The most informed see the writing on the wall for how integral
            Balancer is becoming to DeFi liquidity. It is beloved by builders
            for allowing them to build a vast array of liquidity pools to solve
            pressing problems. Over time, it will find itself at the center of
            more & more pivotal liquidity&nbsp;experiments.
          </p>
        </div>
        <div class="flex items-center">
          <div class="w-20 rounded-full overflow-hidden">
            <img src="@/assets/images/people/cb.png" alt="" />
          </div>
          <div class="pl-4">
            <p class="font-medium">Chris Burniske</p>
            <p class="font-medium">Placeholder VC</p>
          </div>
        </div>
      </div>
      <div class="order-2 md:order-1 md:relative md:top-12  card flex flex-col justify-between w-full">
        <div class="pb-6">
          <img class="w-10 mb-4 md:w-16 lg:w-20 lg:mb-6" src="@/assets/svg/icon-quotemark.svg" alt="" />
          <p>
            The Balancer team is the epitome of technical excellence and
            innovation in the DeFi space. The soon to be released Balancer V2 is
            another testimony of the team’s continued effort to innovate through
            clever design. DeFiance Capital is proud to support Fernando and his
            team in this exciting&nbsp;journey.
          </p>
        </div>
        <div class="flex items-center">
          <div class="w-20 rounded-full overflow-hidden">
            <img src="@/assets/images/people/ax.png" alt="" />
          </div>
          <div class="pl-4">
            <p class="font-medium">Arthur_0x</p>
            <p class="font-medium">DeFiance Capital</p>
          </div>
        </div>
      </div>
      <div class="order-3 md:relative md:top-12 card flex flex-col justify-between w-full">
        <div class="pb-6">
          <img class="w-10 mb-4 md:w-16 lg:w-20 lg:mb-6" src="@/assets/svg/icon-quotemark.svg" alt="" />
          <p>
            The Balancer team has pioneered a great deal of innovation in the
            DeFi space and is one of the most widely used liquidity protocols.
            We are excited to help them expand&nbsp;further.
          </p>
        </div>
        <div class="flex items-center">
          <div class="w-20 rounded-full overflow-hidden">
            <img src="@/assets/images/people/sz.png" alt="" />
          </div>
          <div class="pl-4">
            <p class="font-medium">Su Zhu</p>
            <p class="font-medium">Three Arrows Capital</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  @apply rounded-lg p-4 md:p-6 lg:p-8;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}
</style>
