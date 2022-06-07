<template>
  <div>
    <HeroHome :content="page.hero" />
    <StatsHome :content="page.stats" />
    <ForInvestors :content="page.forInvestors" />
    <ForTraders :content="page.forTraders" />
    <ForBuilders :content="page.forBuilders" />
    <Aave :content="page.caseStudy" />
    <Backers :content="page.backers" />
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
  head() {
    return {
      link: [{ rel: "preload", as: "image", href: "/images/hero-home.svg" }],
    };
  },
  transition: "slideup",
  components: {
    HeroHome,
    StatsHome,
    ForInvestors,
    ForTraders,
    ForBuilders,
    Aave,
    Backers,
  },
  async asyncData({ $content }) {
    const page = await $content("index").fetch();
    return {
      page,
    };
  },
};
</script>
