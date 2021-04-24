<template>
  <div>
    <section class="px-4 pb-16">
      <div>
        <img
          width="1000"
          height="618"
          class="pt-1 pb-8"
          src="~assets/images/hero-protocol.png"
          alt=""
        />
      </div>
      <div>
        <h1>A core building block of DeFi</h1>
        <p>
          Balancer is reliable, open-source, permissionless protocol. Build on
          Balancer to create new innovative types of financial dapps and
          treasury management systems.
        </p>
        <div class="flex py-3 md:pb-0">
          <a
            class="btn btn-primary btn-hero"
            href="https://docs.balancer.finance/"
            >Developer docs</a
          >
          <a
            class="btn btn-secondary btn-hero"
            href="https://github.com/balancer-labs/"
            >Github code</a
          >
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-2 pt-8 md:pt-0 my-8 md:my-2 px-4">
        <Stat label="Global liquidity" stat="$2.3B+" />
        <Stat label="DeFi integrations" stat="50+" />
      </div>
    </section>

    <section>
      <div class="px-4 pb-12">
        <div>
          <p class="eyebrow gradient-text pb-2 font-medium">
            Developer-friendly foundation
          </p>
          <h1 class="h1-sans-serif">
            Quickly set up liquidity management systems
          </h1>
          <p class="pb-4">
            It's the first innings of AMMs. Balancer is a launchpad for
            developers building use-case specific AMMs with different trade-offs
            optimizing for different goals and communities.
          </p>
        </div>
        <div class="py-4">
          <h3>
            Balancer V2 lets you focus on new AMM logic instead of low-level
            accounting
          </h3>
          <p>
            Balancer V2 separates the AMM logic from the token management and
            accounting. So you can innovate with different AMM strategies
            without having to worry about low-level token transfers, balance
            accounting, security checks and smart order routing. With Balancer
            V2, this all comes out of the box.
          </p>
        </div>
        <div class="py-4">
          <Feature
            title="Balancer protocol"
            description="The Balancer protocol vault handles low level token management and balance accounting."
            icon="icon-moon.svg"
          />
          <Feature
            title="Developers"
            description="Developers create pools with custom AMM logic to build use-case specific financial applications."
            icon="icon-moon.svg"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="px-4 pb-12">
        <h1 class="h1-sans-serif">Start building</h1>
        <LinkCard title="Create a smart pool" description="A code walkthrough to create your first one" />
        <LinkCard title="Make a Liquidity Bootstrapping Pool" description="Tips on how to successfully launch" />
        <LinkCard title="Get Balancer data" description="Via the Balancer subgraph" />
        <LinkCard title="Get Balancer pool pricing data" description="Via the 'Instant' or 'Resilient' oracles" />        
      </div>
    </section>

        <section>
      <div class="px-4 pb-12">
        <h1 class="h1-sans-serif">Projects building on Balancer</h1>
          <div class="flex py-3 items-center gap-3">
            <div>
              <img src="@/assets/svg/tokens/aave.svg" alt="">
            </div>
            <div>
              <h4 class="font-semibold">Aave</h4>
              <p>Asset Manager &amp; 80/20 Safety Pool</p>
            </div>
          </div>
          <div class="flex py-3 items-center gap-3">
            <div>
              <img src="@/assets/svg/tokens/gno.svg" alt="">
            </div>
            <div>
              <h4 class="font-semibold">Gnosis</h4>
              <p>Asset Manager &amp; 80/20 Safety Pool</p>
            </div>
          </div>
          <div class="flex py-3 items-center gap-3">
            <div>
              <img src="@/assets/images/tokens/element.png" alt="">
            </div>
            <div>
              <h4 class="font-semibold">Element</h4>
              <p>Asset Manager &amp; 80/20 Safety Pool</p>
            </div>
          </div>
          <div class="flex py-3 items-center gap-3">
            <div>
              <img src="@/assets/images/tokens/element.png" alt="">
            </div>
            <div>
              <h4 class="font-semibold">Powerpool</h4>
              <p>Asset Manager &amp; 80/20 Safety Pool</p>
            </div>
          </div>                              
      </div>
    </section>

    <section>
            <div class="px-4 pb-12">
        <h1 class="h1-sans-serif">A few things you can build with Smart pools</h1>
<p>Smart pools are dynamic liquidity pools with parameters that can be adjusted via smart contract code. Pool owners can specify who can join the pool. Innovate freely on Balancer’s open-source code. Here’s a few ideas to get you started.</p>
        <LinkCard title="A fair token launch event" description="Via a Liquidity Bootstrapping Pool (LBP)" />
        <LinkCard title="An index fund" description="Via a Swing Trading Pool" />
        <LinkCard title="A Smart Treasury" description="Via a Buyback &amp; Make mechanism" />
        <LinkCard title="An investors club" description="e.g. Whitelist the pool to KYC investors only" />     
        <LinkCard title="Pool settings for experimentation" description="Capped token supply pools for testing" />     


            </div>
    </section>

    <section>
      <div class="px-4 pb-12">
        <p class="eyebrow gradient-text pb-2 font-medium">
          Liquidity Bootstapping Pools
        </p>
        <h1 class="h1-sans-serif">
          Launch your token fairly with less capital upfront
        </h1>
        <p class="pb-4">
          A Liquidity Bootstrapping Pool (LBP) is an adjustable Balancer pool
          designed for initial distribution and price discovery of new assets.
        </p>

        <p class="pb-4">
          Essentially, LBPs are smart pools that continually change each asset’s
          weight in the pool. The weighting is dynamic and shifts throughout the
          token sale’s lifespan. Instead of a permanent 50%/50% or 90%/10%
          weighting, LBP weightings continually change in one direction as
          programmed — say, from 90%/10% TKN/USDC to 10%/90% TKN/USDC.
        </p>

        <Feature
          title="Permissionless"
          description="No middle-man monopoly resulting in unnecessarily high listing fees"
          icon="icon-shield.svg"
        />
        <Feature
          title="Capital efficient"
          description="Distribute more of your tokens with less initial capital investment"
          icon="icon-shield.svg"
        />
        <Feature
          title="Fair distribution"
          description="The constant downward pressure on the price disincentivizes front-running and large buys from whales, giving people ample opportunity to participate at a fair price which itself naturally results in an even and fair distribution."
          icon="icon-shield.svg"
        />
        <Feature
          title="Flexible"
          description="Smart order routing means that users can trade any token in exchange for the new one at the price of higher slippage."
          icon="icon-shield.svg"
        />
        <Feature
          title="Accessible"
          description="Smart order routing means that users can trade any token in exchange for the new one at the price of higher slippage."
          icon="icon-shield.svg"
        />

        <div class="flex py-3 md:pb-0">
          <a
            class="btn btn-primary btn-hero"
            href="https://docs.balancer.finance/"
            >Developer docs</a
          >
          <a
            class="btn btn-secondary btn-hero"
            href="https://github.com/balancer-labs/"
            >Github code</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  transition: "slideup"
};
</script>

<style>
/* h1 {
    @apply font-extrabold text-3xl pb-4;
    font-family:"Tiempos Headline Medium";
    line-height: 34px;
} */
</style>
