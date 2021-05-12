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
        <a href="https://twitter.com/cburniske">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img 
              width="80"
              height="80"              
              src="@/assets/images/people/cb.png" alt="" />
            </div>
            <div class="pl-4">
              <p class="font-medium">Chris Burniske</p>
              <p class="font-medium">Placeholder VC</p>
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
            the DeFi space. The soon to be released Balancer V2 is another
            testimony of continued effort to innovate through clever design.
            DeFiance Capital is proud to support Balancer in this
            exciting&nbsp;journey.
          </p>
        </div>
        <a href="https://twitter.com/Arthur_0x">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img 
              width="80"
              height="80"              
              src="@/assets/images/people/ax.png" alt="" />
            </div>
            <div class="pl-4">
              <p class="font-medium">Arthur_0x</p>
              <p class="font-medium">DeFiance Capital</p>
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
          <p>
            Balancer has pioneered a great deal of innovation in the DeFi space
            and is one of the most widely used liquidity protocols. We are
            excited to help them expand&nbsp;further.
          </p>
        </div>

        <a href="https://twitter.com/zhusu">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img 
              width="80"
              height="80"
              src="@/assets/images/people/sz.png" alt="" />
            </div>
            <div class="pl-4">
              <p class="font-medium">Su Zhu</p>
              <p class="font-medium">Three Arrows Capital</p>
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
  @apply rounded-lg p-4 md:p-6 lg:p-8;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  transition: 0.2s all ease-out;
}

.card:hover {
  box-shadow: 8px 8px 30px #e6e6e6, -8px -8px 30px #ffffff;
}
</style>
