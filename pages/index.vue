<template>
  <div>
    <HeroHome :title="page.title" :description="page.description" :buttonPrimary="page.buttonPrimary" :buttonSecondary="page.buttonSecondary" />
    <StatsHome />
    <ForInvestors :eyebrow="page.forInvestorsEyebrow" :title="page.forInvestorsTitle" :description="page.forInvestorsDescription" :feature1="page.forInvestorsFeature1" :feature2="page.forInvestorsFeature2" :feature3="page.forInvestorsFeature3" :buttonPrimary="page.forInvestorsButtonPrimary" :buttonSecondary="page.forInvestorsButtonSecondary" />
    <ForTraders :eyebrow="page.forTradersEyebrow" :title="page.forTradersTitle" :description="page.forTradersDescription" :feature1="page.forTradersFeature1" :feature2="page.forTradersFeature2" :feature3="page.forTradersFeature3" :buttonPrimary="page.forTradersButtonPrimary" :buttonSecondary="page.forTradersButtonSecondary" />
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
