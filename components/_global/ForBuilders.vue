<template>
  <section>
    <div class="max-w-screen-2xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 py-8 md:py-16 mb-8 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">For builders</p>
          <h1 class="h1-sans-serif">
            A protocol for programmable&nbsp;liquidity
          </h1>
          <p class="pb-4">
            The Balancer protocol has become a core part of DeFi
            infrastructure—a liquidity primative. Balancer is the most flexible
            and versatile Automated Market Maker with nearly unlimited options
            for customizing token ratios and fees. Developers can use Balancer
            as a permissionless building block to innovate freely and create new
            types of treasury management systems.
          </p>
        </div>
        <div>
          <img
            class="w-full max-w-lg"
            src="~assets/images/builders.webp"
            alt=""
          />
        </div>
        
      </div>
      <div class="case-study">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center mb-0 lg:mb-32 py-16 md:py-16 text-white bg-aave px-4"
        >
          <div class="md:mx-auto max-w-md">
            <p class="py-4 uppercase tracking-widest">Case Study</p>
            <img class="py-4" src="~assets/svg/logo-aave.svg" alt="" />
            <ol class="font-medium pb-12 md:pb-0">
              <li class="py-4 ">
                Aave launched their 80/20 AAVE/ETH Safety Incentive pool on
                Balancer, allowing LPs to help secure their protocol while
                earning rewards in both AAVE and BAL.
              </li>
              <li>
                Aave is also building the first Balancer V2 Asset
                Manager—allowing idle assets in Balancer V2 pools to earn yield
                on Aave. This partnership brings more capital efficiency to LPs
                who earn additional fees on top of swap fees and BAL from
                liquidity mining.
              </li>
            </ol>
          </div>
          <div class="md:mx-auto max-w-md">
            <img class="md:py-4" src="~assets/images/people/stani.png" alt="" />
            <p class="py-4 italic font-medium">
              “Part of what makes DeFi so exciting is its composability, and
              with Balancer this has resulted in a partnership that optimises
              the experience for liquidity providers through the Aave-Balancer
              Asset Manager and opens up new possibilities for Aave stakers with
              the AAVE/ETH Safety Incentive pool. We look forward to exploring
              more synergies with Balancer in the future.”
            </p>
            <p class="font-medium">
              Stani Kulechov <br />
              Founder and CEO of Aave
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
  @apply border border-gray-200 rounded-3xl shadow;
  max-width: 240px;
}
.case-study {
  @apply mx-auto;
  max-width: 75.9375rem;
}
</style>
