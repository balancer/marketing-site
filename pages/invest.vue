<template>
  <div>
    <InvestHero />
    <ProtocolAMMs />

    <section class="bg-white">
      <div class="px-4 xl:px-0 max-w-7xl mx-auto pb-16 md:pb-32">
        <div
          class="grid md:grid-cols-2 md:grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 xl:gap-16"
        >
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-lego />
            </div>
            <h2>Plug and play options</h2>
            <p>
              Balancer offers easy portfolio configurations that have been
              designed and used by thousands of individual and institutional
              investors.
            </p>
          </div>
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-filter />
            </div>
            <h2>Customizability and choice</h2>
            <p>
              Balancer allows advanced investors to choose their level of
              exposure to each asset in their portfolio and to set custom price
              curves, enabling infinite strategies.
            </p>
          </div>

          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-shield />
            </div>
            <h2>Built for security</h2>
            <p>
              Balancer’s battle-tested smart contracts are designed with
              security of investor funds as the top priority. They carry a
              history of security audits by elite firms and a 1,000 ETH bug
              bounty— the largest in the industry.
            </p>
          </div>

          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-fees />
            </div>
            <h2>Maximize earnings from fees</h2>
            <p>
              Dynamic fee pools take advantage of market conditions to adjust
              trading fees and optimize revenue for investors.
            </p>
          </div>
          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-sparkles />
            </div>
            <h2>$BAL incentives</h2>
            <p>
              Investors on Balancer receive $BAL token liquidity mining
              distributions for depositing assets into incentivized liquidity
              pools. <a class="text-link" href="https://claim.balancer.fi">Claim $BAL</a> weekly on Tuesdays.
            </p>
          </div>

          <div class="card pb-12 max-w-lg">
            <div class="mb-4">
              <icon-key />
            </div>
            <h2>Permissionless platform</h2>
            <p>
              Balancer is a non-custodial protocol, so investor funds are always
              controlled by the investors themselves and not a centralized team
              or third party.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InvestHero from "@/components/pages/invest/InvestHero.vue";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
import IconLego from "@/components/icons/IconLego.vue";
import IconFilter from "@/components/icons/IconFilter.vue";
import IconFees from "@/components/icons/IconFees.vue";
import IconShield from "@/components/icons/IconShield.vue";
import IconKey from "@/components/icons/IconKey.vue";
import IconSparkles from "@/components/icons/IconSparkles.vue";

export default {
  transition: "slideup",
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
    InvestHero,
    IconLego,
    IconFilter,
    IconFees,
    IconShield,
    IconKey,
    IconSparkles
  }
};
</script>

IconSparkles<style scoped>
.messari-logo {
  @apply py-4;
  width: 100%;
  max-width: 180px;
}
</style>

<style>
/* #TODO: how can i keep this global? */

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
  -webkit-tap-highlight-color: transparent;
  border-top: 1px solid #eee;
}

.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  @apply text-blue-500;
  background-color: #fff;
}

.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after {
  @apply bg-blue-500;
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
