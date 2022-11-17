<template>
  <div>
    <ProtocolHero />

    <section class="pt-16 lg:pt-32 pb-12 lg:pb-32 bg-white">
      <div class="px-4 md:flex mx-auto max-w-screen-xl">
        <div class="md:pr-8 lg:pr-12">
          <img
            class="py-12 md:py-0"
            :src="require('~/assets/images/ui-in-device.jpg')"
            alt=""
          />
        </div>
        <div class="max-w-lg">
          <h1 class="h1-sans-serif py-6">
            An Automated Portfolio Manager and Decentralized Exchange
          </h1>
          <p class="italic">
            “The big idea of Balancer is, it is a new financial primitive that
            combines asset management and decentralized exchange. In traditional
            finance, this is similar to combining Fidelity Asset Management and
            NASDAQ’s exchange, and then distributing NASDAQ’s trading profits to
            Fidelity’s asset holders.”
          </p>
          <img class="messari-logo" :src="require('~/assets/images/messari.png')" alt="" />
        </div>
      </div>
    </section>

    <ProtocolAMMs />

    <section class="bg-white">
      <div class="px-4 xl:px-0 max-w-7xl mx-auto pb-16 md:pb-32">
        <div class="grid md:grid-cols-2 md:grid-rows-3 md:gap-8 lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 xl:gap-16">
          <FeatureDetailed
            title="Efficient Asset Managers"
            description="Asset Managers improve capital efficiency by putting idle pool assets to work to earn yield for investors on other DeFi protocols like Aave."
            icon="icon-lightning.svg"
          />
          <FeatureDetailed
            title="Dynamic swap fee pricing"
            description="Like ride-sharing app surge pricing, dynamic fees earn higher yields for investors while meeting the liquidity needs for traders."
            icon="icon-sliders.svg"
          />
          <FeatureDetailed
            title="Smart Order routing"
            description="Trades are split through a Smart Order Router which performs multi-path swaps and optimizations across all V1 and V2 pools for best price execution."
            icon="icon-smart-routing.svg"
          />

          <FeatureDetailed
            title="Less impermanent loss options"
            description="Invest in an uneven pool (e.g. an 80/20 pool) for less exposure to impermanent loss compared to standard equally weighted 50/50 pools."
            icon="icon-umbrella.svg"
          />
          <FeatureDetailed
            title="Resilient oracles"
            description="Two types of low gas cost, Sandwich Attack resistant oracles. An ‘Instant’ oracle with timely prices, and a harder to manipulate ‘Resilient’ oracle."
            icon="icon-crystal-ball.svg"
          />
          <FeatureDetailed
            title="Governable protocol fees"
            description="Community governance can vote on and update parameters which control Protocol fees (Trading fees, Withdrawal fees and Flash Loan fees)."
            icon="icon-thumbs-up.svg"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="case-study max-w-7xl mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center mb-0 lg:mb-32 py-16 md:py-16 text-white bg-aave px-4"
        >
          <div class="md:mx-auto max-w-md">
            <p class="py-4 uppercase tracking-widest">Case Study</p>
            <img class="py-4" :src="require('~/assets/svg/logo-aave.svg')" alt="" />
            <ol class="font-medium pb-12 md:pb-0">
              <li class="py-4 ">
                Aave launched their 80/20 AAVE/ETH Safety Incentive pool on
                Balancer, allowing LPs to help secure their protocol while
                earning rewards in both AAVE and BAL.
              </li>
              <li>
                Aave is also building the first Balancer V2 Asset
                Manager—allowing idle assets in Balancer V2 pools to earn yield
                on Aave. This partnership brings more capital efficiency to LPs
                who earn additional fees on top of swap fees and BAL from
                liquidity mining.
              </li>
            </ol>
          </div>
          <div class="md:mx-auto max-w-md">
            <img class="md:py-4" :src="require('~/assets/images/people/stani.jpg')" alt="" />
            <p class="py-4 italic font-medium">
              “Part of what makes DeFi so exciting is its composability, and
              with Balancer this has resulted in a partnership that optimises
              the experience for liquidity providers through the Aave-Balancer
              Asset Manager and opens up new possibilities for Aave stakers with
              the AAVE/ETH Safety Incentive pool. We look forward to exploring
              more synergies with Balancer in the future.”
            </p>
            <p class="font-medium">
              Stani Kulechov <br />
              Founder and CEO of Aave
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProtocolHero from "@/components/pages/protocol/ProtocolHero.vue";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";

export default {
  transition: "slideup",
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon, 
    ProtocolHero
  }
};
</script>

<style scoped>
.messari-logo {
  @apply py-4;
  width: 100%;
  max-width: 180px;
}

.vsa-list {
  --vsa-max-width: 100%;
  --vsa-bg-color: #fff;
  --vsa-default-icon-size: 0.5;
  --vsa-text-color: #000;
  --vsa-border-color: #eee;
  --vsa-heading-padding: 1rem 0;
  --vsa-content-padding: 1rem 0;
  --vsa-highlight-color: #0000ff;
  --vsa-border-style: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-tap-highlight-color: transparent;
  border-top: 1px solid #eee;
}

.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  @apply text-defaultBlue;
  background-color: #fff;
}

.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after {
  @apply bg-defaultBlue;
}

.vsa-item__trigger {
  @apply text-black;
  transition: all 0.2s ease-in-out;
}

.vsa-item__trigger__content {
  @apply text-lg;
}

.vsa-item:not(:last-of-type) {
  border-bottom: 1px solid #eee;
}

.vsa-item {
  border-bottom: 1px solid #eee;
}

/* Custom accordion header icons */

.vsa-item--is-active .vsa-item__trigger__icon .open {
  display: none;
}
.vsa-item--is-active .vsa-item__trigger__icon .close {
  display: block;
}
.vsa-item__trigger__icon .open {
  display: block;
}
.vsa-item__trigger__icon .close {
  display: none;
}

.accoridion-trigger-enter-from,
.accoridion-trigger-leave-to {
  opacity: 0;
}

.accoridion-trigger-enter-to,
.accoridion-trigger-leave-from {
  opacity: 1;
}

.accoridion-trigger-active {
  transition: 0.2s all ease-in-out;
}
</style>
