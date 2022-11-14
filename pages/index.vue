<template>
  <div>
    <HeroHome />
    <Ecosystem />
    <!-- <ForInvestors />
    <ForTraders /> -->
    <Aave />
    <!-- <ForBuilders /> -->
    <Backers />
    <StatsHome />
  </div>
</template>

<script>
import HeroHome from "@/components/pages/home/HeroHome.vue";
import Ecosystem from "@/components/pages/home/Ecosystem.vue";
import ForInvestors from "@/components/pages/home/ForInvestors.vue";
import ForTraders from "@/components/pages/home/ForTraders.vue";
import ForBuilders from "@/components/pages/home/ForBuilders.vue";
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
    StatsHome, 
    ForInvestors, 
    ForTraders, 
    ForBuilders,
    Aave,
    Backers
  }
}
</script>
