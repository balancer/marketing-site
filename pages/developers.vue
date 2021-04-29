<template>
  <div>
    <section class="px-4 pb-32 md:pb-32 py-8 md:pt-16">
      <div class="md:flex md:items-center mx-auto max-w-screen-xl">
        <div class="order-1 md:order-2">
          <img
            width="1000"
            height="618"
            class="pt-1 pb-10"
            src="~assets/images/hero-protocol.png"
            alt=""
          />
        </div>
        <div class=" max-w-lg md:order-1">
          <h1 class="h1-sans-serif">A core building block of&nbsp;DeFi</h1>
          <p class="pb-4">
            Balancer is reliable, open-source, permissionless protocol. Build on
            Balancer to create new innovative types of financial dapps and
            treasury management systems.
          </p>
          <div class="flex md:pb-0">
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
      </div>
    </section>
    <section>
      <div class="px-4 pb-32 flex justify-center items-center">
        <p class="featured-stat">
          50+ <span class="featured-stat-label">DeFi integrations</span>
        </p>
      </div>
    </section>

    <!-- <section class="px-4 pb-16">
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
    </section> -->
    <!-- <section>
      <div class="grid grid-cols-2 pt-8 md:pt-0 my-8 md:my-2 px-4">
        <Stat label="Global liquidity" stat="$2.3B+" />
        <Stat label="DeFi integrations" stat="50+" />
      </div>
    </section> -->

    <section>
      <div class="md:mx-auto max-w-7xl px-4 pb-16">
        <div>
          <p class="eyebrow gradient-text">
            Developer-friendly
          </p>
          <h1 class="h1-sans-serif">
            Quickly set up liquidity management systems
          </h1>
          <p class="pb-4">
            Balancer is a launchpad for developers building use-case specific
            AMMs with different trade-offs optimizing for different goals and
            communities.
          </p>
        </div>
        <div class="pb-4">
          <h3 class="text-xl pb-4 font-bold">
            Focus on new AMM logic rather than low-level accounting
          </h3>
          <p>
            Innovate with different AMM strategies without having to worry about
            low-level token transfers, balance accounting, security checks and
            smart order routing. With Balancer V2, this all comes out of the
            box.
          </p>
        </div>
        <div class="pb-4">
          <Feature
            title="Balancer protocol"
            description="The Balancer protocol vault handles low level token management and balance accounting."
            icon="icon-balancer-protocol.svg"
          />
          <Feature
            title="Developers"
            description="Developers create pools with custom AMM logic to build use-case specific financial applications."
            icon="icon-developer.svg"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-7xl md:mx-auto px-4 pb-12">
        <h1 class="h1-sans-serif pb-6">I want to</h1>
        <div class="md:flex">
          <LinkCard
            title="Create a smart pool"
            description="A quick code walkthrough"
            url="https://stackoverflow.com/questions/64858782/how-can-i-pass-props-through-an-anchor-tag"
          />
          <LinkCard
            title="Make a Liquidity Bootstrapping Pool"
            description="Tips on how to successfully launch"
          />
          <LinkCard
            title="Get Balancer data"
            description="Via the Balancer subgraph"
          />
          <LinkCard
            title="Get Balancer pool pricing data"
            description="Via the 'Instant' or 'Resilient' oracles"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-7xl md:mx-auto px-4 pb-12">
        <h1 class="h1-sans-serif">Projects building on Balancer</h1>
        <div class="flex py-3 items-center">
          <div class="mr-3">
            <img src="@/assets/svg/tokens/aave.svg" alt="" />
          </div>
          <div>
            <h4 class="font-semibold">Aave</h4>
            <p>Asset Manager &amp; 80/20 Safety Pool</p>
          </div>
        </div>
        <div class="flex py-3 items-center">
          <div class="mr-3">
            <img src="@/assets/svg/tokens/gno.svg" alt="" />
          </div>
          <div>
            <h4 class="font-semibold">Gnosis</h4>
            <p>Asset Manager &amp; 80/20 Safety Pool</p>
          </div>
        </div>
        <div class="flex py-3 items-center">
          <div class="mr-3">
            <img src="@/assets/images/tokens/element.png" alt="" />
          </div>
          <div>
            <h4 class="font-semibold">Element</h4>
            <p>Asset Manager &amp; 80/20 Safety Pool</p>
          </div>
        </div>
        <div class="flex py-3 items-center">
          <div class="mr-3">
            <img src="@/assets/images/tokens/element.png" alt="" />
          </div>
          <div>
            <h4 class="font-semibold">Powerpool</h4>
            <p>Asset Manager &amp; 80/20 Safety Pool</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-7xl md:mx-auto px-4 pb-16">
        <h1 class="h1-sans-serif">
          Create a Smart pool
        </h1>
        <p class="pb-4">
          Smart pools are dynamic liquidity pools with parameters that can be
          adjusted via smart contract code. Pool owners can specify who can join
          the pool. Innovate freely on Balancer’s open-source code.
        </p>
        <div class="md:flex">
          <LinkCard
            title="A fair token launch event"
            description="Via a Liquidity Bootstrapping Pool (LBP)"
          />
          <LinkCard
            title="An index fund"
            description="Via a Swing Trading Pool"
          />
          <LinkCard
            title="A Smart Treasury"
            description="Via a Buyback &amp; Make mechanism"
          />
          <LinkCard
            title="An investors club"
            description="Create an exclusive list of pool participants, like for KYC investors only"
          />
          <LinkCard
            title="Pool settings for experimentation"
            description="Capped token supply pools for testing"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-7xl md:mx-auto px-4 pb-16">
        <div class="pb-16">
          <p class="eyebrow gradient-text pb-2 font-medium">
            LAUNCH A TOKEN
          </p>
          <h1 class="h1-sans-serif">
            LBPs for a fair and liquid&nbsp;launch
          </h1>
          <p class="pb-4 max-w-2xl">
            A Liquidity Bootstrapping Pool (LBP) is an adjustable Balancer smart
            pool designed for initial distribution and price discovery of new
            assets. LBPs are smart pools that continually change each asset’s
            weight in the pool. The weighting is dynamic and shifts throughout
            the token sale’s lifespan.
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

        <div>
          <h2 class="pb-2">LBPs are extremely customizable</h2>
          <p class="pb-4 max-w-2xl">
            Instead of a permanent 50%&nbsp;/&nbsp;50% or 90%&nbsp;/&nbsp;10%
            weighting, LBP weightings can be programmed to continually change to
            match a project's needs.
          </p>
          <div class="md:flex md:pb-12">
            <div class="md:pr-2 lg:pr-4 pb-4">
              <div>
                <img
                  class="pb-4"
                  src="@/assets/images/lbp-90-10-10-90.png"
                  alt=""
                />
                <p class="pb-4 text-greyDark text-sm">
                  Example 1: An LBP starting at 90% / 10% weighting which
                  continually changes in one direction to 10% / 90% over 3 days.
                </p>
              </div>
            </div>
            <div class="md:pl-2 lg:pl-4 pb-8">
              <img
                class="pb-4"
                src="@/assets/images/lbp-90-10-50-50.png"
                alt=""
              />
              <p class="pb-4 text-greyDark text-sm">
                Example 2: This LBP moves from 90%&nbsp;/&nbsp;10% to
                50%&nbsp;/&nbsp;50%. After the sale, the pool continues unpaused
                to serve as a classic 50%&nbsp;/&nbsp;50% AMM.
              </p>
            </div>
          </div>
        </div>
        <div class="md:flex">
          <div class="lbp-features pb-12 md:pb-0">
            <h2 class="pb-4">LBP features</h2>

            <icon-base width="20" height="20" icon-color="#0000ff" icon-hover-color="#ff0000" icon-name="ticket"><icon-ticket /></icon-base>

            <Feature
              title="Free & permissionless"
              description="No middle-man or monopoly resulting in unnecessarily high listing fees"
              icon="icon-ticket.svg"
            />
            <Feature
              title="Capital efficient"
              description="Distribute more of your tokens with less initial capital investment"
              icon="icon-lightning.svg"
            />
            <Feature
              title="Fair distribution"
              description="The constant downward pressure on the price disincentivizes front-running and large buys from whales, giving people ample opportunity to participate at a fair price which itself naturally results in an even and fair distribution."
              icon="icon-scale.svg"
            />
            <!-- <Feature
              title="Flexible"
              description="Smart order routing means that users can trade any token in exchange for the new one at the price of higher slippage."
              icon="icon-filter.svg"
            /> -->
            <!-- <Feature
              title="Accessible"
              description="Smart order routing means that users can trade any token in exchange for the new one at the price of higher slippage."
              icon="icon-shield.svg"
            /> -->
          </div>
          <div class="md:pl-4 lg:pl-4">
            <div>
              <div>
                <p class="font-semibold">Raised with LBPs</p>
                <p class="featured-stat lbp-stat">$200+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  transition: "slideup",
};
</script>

<style>
.lbp-features {
}
.featured-stat {
  @apply font-black;
  font-size: 45vw;
  letter-spacing: -5px;
  line-height: 1;

  background: url("~assets/svg/hero-home3.svg");
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.featured-stat.lbp-stat {
  font-size: 28vw;
}

.featured-stat-label {
  @apply block md:inline font-black;
  letter-spacing: -1.5px;
  font-size: 10.5vw;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .featured-stat,
  .featured-stat-label {
    font-size: 8vw;
  }
  .featured-stat.lbp-stat {
    font-size: 12vw;
  }
  .lbp-features {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .featured-stat.lbp-stat {
    font-size: 140px;
  }
}
@media (min-width: 1280px) {
  .featured-stat.lbp-stat {
    font-size: 170px;
  }
}
</style>
