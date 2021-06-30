<template>
  <section class="bg-gray-50 py-16 lg:py-32">
    <div class="grid md:grid-rows-3">
      <div class="partners">
        <div class="partner partner--bottom">
          <img
            width="120"
            height="120"
            class="integrations-logo"
            :src="require('~/assets/svg/tokens/gno.svg')"
            alt="Gnosis logo"
          />
        </div>
        <div class="partner partner--top">
          <img
            width="120"
            height="120"
            class="integrations-logo"
            :src="require('~/assets/svg/tokens/aave.svg')"
            alt="Aave logo"
          />
        </div>
        <div class="partner partner--bottom">
          <img
            width="120"
            height="120"
            class="integrations-logo"
            :src="require('~/assets/images/tokens/element.png')"
            alt="Element logo"
          />
        </div>
      </div>
      <div class="flex justify-center items-center py-10 md:py-0 xl:py-16">
        <p class="featured-stat">
          50+ <span class="featured-stat-label">DeFi integrations</span>
        </p>
      </div>
      <div class="partners">
        <div class="partner">
          <img
            width="120"
            height="120"
            class="integrations-logo"
            :src="require('~/assets/svg/tokens/ocean.svg')"
            alt="Ocean logo"
          />
        </div>
        <div class="partner partner--bottom">
          <img
            width="120"
            height="120"
            class="integrations-logo"
            :src="require('~/assets/images/tokens/gyroscope.png')"
            alt="Gyroscope logo"
          />
        </div>
        <div>
          <img
            width="120"
            height="120"
            class="integrations-logo"
            :src="require('~/assets/svg/tokens/powerpool.svg')"
            alt="PowerPool logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaseStudy from "@/components/case-studies/CaseStudy.vue";

export default {
  components: {
    CaseStudy
  }
};
</script>

<style scoped>
.partners {
  @apply grid grid-cols-3 text-center h-32 md:h-72 xl:h-80;
}

.partner--bottom {
  transform: translate3d(0, 80px, 0);
}

@media (min-width: 768px) {
  .partner--bottom {
    transform: translate3d(0, 160px, 0);
  }
}
</style>
