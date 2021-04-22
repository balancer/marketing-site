<template>
  <div>
    <Header />
    <section class="px-4 pb-16">
      <div>
        <img class="pt-1 pb-8" src="~assets/images/hero-protocol.png" alt="" />
      </div>
      <div>
        <h1>The most flexible protocol for programmable liquidity</h1>
        <p>
          Balancer algorithmically manages liquidity to mutually benefit
          investors and traders. Built on Ethereum.
        </p>
        <div class="flex py-3 md:pb-0">
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
    </section>

    <section class="pb-12">
      <div class="px-4">
        <img class="py-4" src="~assets/images/ui.png" alt="" />
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
    </section>

    <ProtocolAMMs />

    <section>
      <div class="px-4">
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
    </section>
    <section>
        <div class="px-4 ">

        <h1 class="h1-sans-serif py-6">
          Balancer core tenants
        </h1>
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
        icon="icon-lightning.svg"
      />            
      </div>       
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.messari-logo {
  @apply py-4;
  width: 100%;
  max-width: 180px;
}
</style>
