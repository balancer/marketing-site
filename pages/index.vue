<script setup>

definePageMeta({
  pageTransition: {
    name: 'slideup'
  }
})

</script>
<template>
  <div>
    <HeroHome />
    <Ecosystem />
    <Aave />
    <Backers />
    <StatsHome />
  </div>
</template>

<script>
import HeroHome from "@/components/pages/home/HeroHome.vue";
import Ecosystem from "@/components/pages/home/Ecosystem.vue";
import Aave from "@/components/case-studies/Aave.vue";
import Backers from "@/components/pages/home/Backers.vue";
import StatsHome from "@/components/pages/home/StatsHome.vue";

export default {
  components: {
    HeroHome,
    Ecosystem,
    Aave,
    Backers,
    StatsHome,
  },
  transition: 'slideup',
  head() {
    // return {
    //   link: [{ rel: 'preload', as:'image', href: '/images/hero-home.svg' }]
    // }
  },
}
</script>


