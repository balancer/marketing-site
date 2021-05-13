<template>
<div>
  <HeroHome />
  <StatsHome />
  <ForInvestors />
  <ForTraders />
  <ForBuilders />
  <Aave />
  <Backers />
  </div>
</template>

<script>

import HeroHome from "@/components/pages/home/HeroHome.vue";
import StatsHome from "@/components/pages/home/StatsHome.vue";
import ForInvestors from "@/components/pages/home/ForInvestors.vue";
import ForTraders from "@/components/pages/home/ForTraders.vue";
import ForBuilders from "@/components/pages/home/ForBuilders.vue";
import Aave from "@/components/case-studies/Aave.vue";
import Backers from "@/components/pages/home/Backers.vue";

export default {
  head: {
    link: [{ rel: 'preload', as:'image', href: '@/assets/svg/hero-home.svg' }]
  },
  transition: 'slideup', 
  components: {
    HeroHome, 
    StatsHome, 
    ForInvestors, 
    ForTraders, 
    ForBuilders,
    Aave,
    Backers
  }
}
</script>

<style>

</style>
