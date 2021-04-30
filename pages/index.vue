<template>
<div>
  <HeroHome />
  <StatsHome />
  <ForInvestors />
  <ForTraders />
  <ForBuilders />
  <Backers />
  </div>
</template>

<script>

import HeroHome from "@/components/pages/home/HeroHome.vue";
import StatsHome from "@/components/pages/home/StatsHome.vue";
import ForInvestors from "@/components/pages/home/ForInvestors.vue";
import ForTraders from "@/components/pages/home/ForTraders.vue";
import ForBuilders from "@/components/pages/home/ForBuilders.vue";
import Backers from "@/components/pages/home/Backers.vue";

export default {
  transition: 'slideup', 
  components: {
    HeroHome, 
    StatsHome, 
    ForInvestors, 
    ForTraders, 
    ForBuilders,
    Backers
  }
}
</script>

<style>

/* h1 {
    @apply font-extrabold text-3xl pb-4;
    font-family:"Tiempos Headline Medium";
    line-height: 34px;
} */

</style>
