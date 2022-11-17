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
  head() {
    // return {
    //   link: [{ rel: 'preload', as:'image', href: '/images/hero-home.svg' }]
    // }
  },
  transition: 'slideup', 
  components: {
    HeroHome, 
    Ecosystem,
    Aave,
    Backers,
    StatsHome
  }
}
</script>
