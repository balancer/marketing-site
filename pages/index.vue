<script setup>
import HeroHome from "@/components/pages/home/HeroHome.vue";
import Ecosystem from "@/components/pages/home/Ecosystem.vue";
import Aave from "@/components/case-studies/Aave.vue";
import Backers from "@/components/pages/home/Backers.vue";
import StatsHome from "@/components/pages/home/StatsHome.vue";

definePageMeta({
  documentDriven: false,
  layout: 'default',
  pageTransition: {
    name: 'slideup'
  },
  components: {
    HeroHome,
    Ecosystem,
    Aave,
    Backers,
    StatsHome,
  },
  transition: 'slideup',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <HeroHome />
      <Ecosystem />
      <Aave />
      <Backers />
      <StatsHome />
    </NuxtLayout>
  </div>
</template>
