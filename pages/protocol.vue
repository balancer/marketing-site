<template>
  <div class="bg-white">
    <section class="px-4 pb-16 md:pb-32 py-8 md:pt-16">
      
      <div class="protocol-hero flex items-center">
      <div class="md:flex md:items-center mx-auto max-w-screen-2xl">
        <div class="order-1 md:order-2 md:pl-8">
          <img
            width="1000"
            height="618"
            class="pt-1 pb-10"
            src="~assets/images/hero-protocol.png"
            alt=""
          />
        </div>
        <div class=" max-w-lg md:order-1">
          <h1 class="h1-sans-serif">Programmable liquidity</h1>
          <p class="pb-4">
            Balancer algorithmically manages liquidity to mutually benefit
            investors and traders. Built on&nbsp;Ethereum.
          </p>
          <div class="flex md:pb-0">
            <a
              class="btn btn-primary btn-hero"
              href="https://app.balancer.fi/invest"
              >Launch app</a
            >
            <a
              class="btn btn-secondary btn-hero"
              href="https://docs.balancer.finance/"
              >View docs</a
            >
          </div>
        </div>
        </div>
      </div>
    </section>

    <section class="pb-12 bg-white">
      <div class="px-4 md:flex mx-auto max-w-screen-xl">
        <div class="md:pr-8 lg:pr-12">
          <img
            class="py-12 md:py-0"
            src="~assets/images/ui-in-device.jpg"
            alt=""
          />
        </div>
        <div class="max-w-lg">
          <h1 class="h1-sans-serif gradient-text-alt py-6">
            An Automated Portfolio Manager and Decentralized Exchange
          </h1>
          <p class="italic">
            “The big idea of Balancer is, it is a new financial primitive that
            combines asset management and decentralized exchange. In traditional
            finance, this is similar to combining Fidelity Asset Management and
            NASDAQ’s exchange, and then distributing NASDAQ’s trading profits to
            Fidelity’s asset holders.”
          </p>
          <img class="messari-logo" src="~assets/images/messari.png" alt="" />
        </div>
      </div>
    </section>

    <ProtocolAMMs />

    <section class="bg-white">
      <div class="px-4 max-w-7xl mx-auto pb-16 md:pb-32">
        <div class="grid md:grid-cols-2 md:grid-rows-3 md:gap-4 ">
          <FeatureDetailed
            title="Capital efficient Asset Managers"
            description="Asset Managers improve capital efficiency by putting idle pool assets to work to earn yield for investors on other DeFi protocols like Aave."
            icon="placeholder-icon.svg"
          />
          <FeatureDetailed
            title="Dynamic swap fee pricing"
            description="Like ride-sharing app surge pricing, dynamic fees earn higher yields for investors while meeting the liquidity needs for traders."
            icon="placeholder-icon.svg"
          />
          <FeatureDetailed
            title="Smart Order routing"
            description="Trades are split through a Smart Order Router which performs multi-path swaps and optimizations across all V1 and V2 pools for best price execution."
            icon="placeholder-icon.svg"
          />

          <FeatureDetailed
            title="Pools with less impermanent loss"
            description="Invest in an uneven pool (e.g. an 80/20 pool) for less exposure to impermanent loss compared to standard equally weighted 50/50 pools."
            icon="placeholder-icon.svg"
          />
          <FeatureDetailed
            title="‘Instant’ and ‘Resilient’ oracles"
            description="Two types of low gas cost, Sandwich Attack resistant oracles. An ‘Instant’ oracle with timely prices, and a less timely, harder to manipulate ‘Resilient’ oracle."
            icon="placeholder-icon.svg"
          />
          <FeatureDetailed
            title="Governable protocol fees"
            description="Community governance can vote on and update parameters which control Protocol fees (Trading fees, Withdrawal fees and Flash Loan fees)."
            icon="placeholder-icon.svg"
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
            <img class="py-4" src="~assets/svg/logo-aave.svg" alt="" />
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
            <img class="md:py-4" src="~assets/images/people/stani.png" alt="" />
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

    <section class="bg-white">
      <div class="px-4 pb-16 max-w-3xl mx-auto">
        <h1 class="h1-sans-serif py-8">
          Core concepts
        </h1>

        <div class="pb-8">
          <h2 class="pb-4">Pool types</h2>
          <p class="pb-8">
            Liquidity pools are the fundamental building block of the Balancer
            Protocol. Pools are smart contracts that implement the Balancer
            Protocol, and hold value in two or more ERC-20 tokens. Balancer
            pools are essentially self-balancing index funds that are
            continuously rebalanced. This rebalancing happens through
            arbitrageurs who are incentivized to trade with pools, and by doing
            that they sync the pool prices with those on the external market.
          </p>
          <vsa-list>
            <!-- Here you can use v-for to loop through items  -->
            <vsa-item>
              <vsa-heading>
                Public pools
              </vsa-heading>

              <vsa-icon>
                <transition name="accordion-trigger">
                  <span class="open"
                    ><img src="@/assets/svg/icon-chevron-down.svg" alt=""
                  /></span>
                </transition>
                <span class="close"
                  ><img src="@/assets/svg/icon-chevron-up.svg" alt=""
                /></span>
              </vsa-icon>

              <vsa-content>
                This is the content
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Private pools
              </vsa-heading>

              <vsa-content>
                This isfdsafdsa the content
                <img src="@/assets/images/messari.png" alt="" />
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Smart pools
              </vsa-heading>

              <vsa-content>
                This isfdsafdsa the content
                <img src="@/assets/images/messari.png" alt="" />
              </vsa-content>
            </vsa-item>
          </vsa-list>
        </div>
        <div class="py-8">
          <h2 class="pb-4">Pool parameters</h2>
          <p class="pb-8">
            Dynamic liquidity pools have parameters that can be adjusted via
            smart contract code. Pool owners can specify who can join the pool.
          </p>
          <vsa-list>
            <!-- Here you can use v-for to loop through items  -->
            <vsa-item>
              <vsa-heading>
                Pool tokens
              </vsa-heading>
              <vsa-content>
                This is the content
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Token weights
              </vsa-heading>
              <vsa-content>
                Lorem ipsum dolor sit amet
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Swap fees
              </vsa-heading>
              <vsa-content>
                Lorem ipsum dolor sit amet
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Liquidity providers
              </vsa-heading>
              <vsa-content>
                Lorem ipsum dolor sit amet
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Deposit limit
              </vsa-heading>
              <vsa-content>
                Lorem ipsum dolor sit amet
              </vsa-content>
            </vsa-item>
            <vsa-item>
              <vsa-heading>
                Start / stop trading
              </vsa-heading>
              <vsa-content>
                Lorem ipsum dolor sit amet
              </vsa-content>
            </vsa-item>
          </vsa-list>
        </div>
      </div>
    </section>

    <section class="pb-16 bg-white">
      <div class="px-4 max-w-7xl mx-auto">
        <h1 class="h1-sans-serif py-6">
          Balancer core tenants
        </h1>
        <div class="grid md:grid-cols-2 md:grid-rows-3 md:gap-4 ">
          <Feature
            title="Security"
            description="Core smart contracts are formally verified and audited. Commited to safety by offering the largest bug bounty in DeFi history."
            icon="icon-shield.svg"
          />
          <Feature
            title="Flexibility"
            description="Developers can modify protocol parameters or customize the code to build new types of financial applications."
            icon="icon-filter.svg"
          />
          <Feature
            title="Capital efficiency"
            description="Optimized dynamic swap fees and Asset Managers put idle pool assets to work to maximize returns for investors."
            icon="icon-lightning.svg"
          />
          <Feature
            title="Gas efficiency"
            description="The cheapest gas fees in all of DeFi. Achieved by using internal balances of the V2 protocol vault. "
            icon="icon-dashboard.svg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
    VsaIcon
  }
};
</script>

<style scoped>

.protocol-hero {
  min-height: 600px;
  height: 70vh;
  max-height: calc(100vh - 200px);
}

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
