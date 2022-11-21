<template>
  <div class="px-4 xl:px-0 w-full max-w-7xl mx-auto pb-32 lg:pb-40 pt-16 lg:pt-0">
    <div class="grid md:grid-cols-3 gap-4 xl:gap-8">
      <div class="order-1 md:order-2 card flex flex-col justify-between w-full">
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
        <a href="https://twitter.com/cburniske" class="group">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img 
              width="80"
              height="80"              
              :src="require('~/assets/images/people/cb.jpg')" alt="" />
            </div>
            <div class="pl-4">
              <p class="font-medium group-hover:text-defaultBlue transition-colors">Chris Burniske</p>
              <p class="font-medium group-hover:text-defaultBlue transition-colors">Placeholder VC</p>
            </div>
          </div>
        </a>
      </div>
      <div
        class="order-2 md:order-1 md:relative md:top-12  card flex flex-col justify-between w-full"
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
        <a href="https://twitter.com/Arthur_0x" class="group">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img 
              width="80"
              height="80"              
              :src="require('~/assets/images/people/ax.png')" alt="" />
            </div>
            <div class="pl-4">
              <p class="font-medium group-hover:text-defaultBlue transition-colors">Arthur_0x</p>
              <p class="font-medium group-hover:text-defaultBlue transition-colors">DeFiance Capital</p>
            </div>
          </div>
        </a>
      </div>
      <div
        class="order-3 md:relative md:top-12 card flex flex-col justify-between w-full"
      >
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>Balancer's thoughtful architecture enables a wide range of innovative liquidity strategies. No other exchange or asset management
              protocol provides as much flexibility for&nbsp;builders. 
          </p>
        </div>

        <a href="https://twitter.com/delitzer" class="group">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img 
              width="80"
              height="80"
              :src="require('~/assets/images/people/de.jpg')" alt="" />
            </div>
            <div class="pl-4 group">
              <p class="font-medium group-hover:text-defaultBlue transition-colors">Dan Elitzer</p>
              <p class="font-medium group-hover:text-defaultBlue transition-colors">Nascent</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import IconQuotemark from "@/components/icons/IconQuotemark.vue";

export default {
  components: {
    IconBase,
    IconQuotemark
  }
};
</script>

<style scoped>
.card {
  transition: 0.2s all ease-out;  
  @apply rounded-2xl p-4 md:p-6 lg:p-8 shadow-none;
}

.card:hover {
  box-shadow: 8px 8px 30px #e6e6e6, -8px -8px 30px #ffffff;
}
</style>
