<template>
  <section>
    <div class="case-study max-w-7xl mx-auto">
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          gap-8
          items-center
          mb-0
          lg:mb-32
          py-16
          md:py-16
          text-white
          bg-aave
          px-4
        "
      >
        <div class="md:mx-auto max-w-md">
          <p class="py-4 uppercase tracking-widest">Case Study</p>
          <img
            width="120"
            height="33"
            class="py-4"
            :src="require('~/assets/svg/logo-aave.svg')"
            alt=""
          />
          <ol class="font-medium pb-12 md:pb-0">
            <li class="py-4">
              Aave and Balancer have a long history of working together to bring
              capital efficiency and value to both communities. This includes
              Aave launching their 80/20 AAVE/ETH Safety Incentive pool on
              Balancer and the recent Boosted Pool integration.
            </li>
            <li>
              The DAOs recently completed a token swap to further align the
              interests of both communities.
            </li>
          </ol>
        </div>
        <div class="md:mx-auto max-w-md">
          <img
            class="profile-pic"
            width="80"
            height="80"
            :src="require('~/assets/images/people/stani.jpg')"
            alt=""
          />
          <p class="py-4 italic font-medium">
            “Part of what makes DeFi so exciting is its composability, and with
            Balancer this has resulted in a partnership that optimises the
            experience for liquidity providers through the Aave-Balancer Asset
            Manager and opens up new possibilities for Aave stakers with the
            AAVE/ETH Safety Incentive pool. We look forward to exploring more
            synergies with Balancer in the future.”
          </p>
          <p class="font-medium">
            Stani Kulechov <br />
            Founder and CEO of Aave
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-pic {
  border-radius: 50%;
  @apply md:py-4;
}
</style>
