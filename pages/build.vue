<template>
  <div>
  
    <BuildHero />
    <section class="bg-white">
      <div class="max-w-7xl md:mx-auto px-4 pt-16 lg:pt-40 pb-32 lg:pb-40">
        <div class="md:text-center pb-4">
        <h1 class="h1-sans-serif pb-4">
          Start building
        </h1>
        <p class="pb-4">Focus on new AMM logic rather than low-level accounting.</p>
        </div>
        <!-- <div class="md:flex"> -->

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-lg mx-auto">

              <a href="https://docs.balancer.finance/guides/smart-pool-templates-gui">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/start-building/smart.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Create a Smart Pool</p>
                      <p class="hidden">
                        A quick code walkthrough
                      </p>
                    </div>
                  </div>
                </div>
              </a>              
              <a href="https://docs.balancer.finance/smart-contracts/smart-pools/liquidity-bootstrapping-faq">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/start-building/launch-token.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Launch a token</p>
                      <p class="hidden">
                        Via a Liquidity Bootstrapping Pool (LBP)
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://thegraph.com/explorer/subgraph/balancer-labs/balancer">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/start-building/data.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Get Balancer data</p>
                      <p class="hidden">
                        Via the Balancer subgraph
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://docs-v2.balancer.finance/getting-started/faqs/trading#what-are-balancer-price-oracles-coming-soon">
                <div class="pool relative">
                  <div class="relative flex justify-center items-center">
                    <img
                      class="cover-img"
                      src="@/assets/images/start-building/oracle.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div class="p-2 md:p-3 text-center">
                      <p class="font-semibold">Use price oracles</p>
                      <p class="hidden">
                        Via the 'Instant' or 'Resilient' oracles
                      </p>
                    </div>
                  </div>
                </div>
              </a>                                          
            </div>

          <!-- <LinkCard
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
          /> -->
        <!-- </div> -->
      </div>
    </section>

    <section class="bg-white">
      <div class="flex flex-col justify-center px-4 pb-4 lg:pb-32">
        <div class="flex justify-between w-full max-w-6xl mx-auto pb-16">
          <div class="h-40 md:h-80 flex items-end">
            <img
              class="integrations-logo"
              src="@/assets/svg/tokens/gno.svg"
              alt=""
            />
          </div>
          <div class="h-40 md:h-80 flex items-start">
            <img
              class="integrations-logo"
              src="@/assets/svg/tokens/aave.svg"
              alt=""
            />
          </div>
          <div class="h-40 md:h-80 flex items-end">
            <img
              class="integrations-logo"
              src="@/assets/svg/tokens/elementfi.svg"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center items-center pb-16">
          <p class="featured-stat">
            50+ <span class="featured-stat-label">DeFi integrations</span>
          </p>
        </div>
        <div class="flex justify-between w-full max-w-6xl mx-auto pb-16">
          <div class="h-40 md:h-80 flex items-start">
            <img
              class="integrations-logo"
              src="@/assets/svg/tokens/ocean.svg"
              alt=""
            />
          </div>
          <div class="h-40 md:h-80 flex items-end">
            <img
              class="integrations-logo"
              src="@/assets/svg/tokens/enzyme.svg"
              alt=""
            />
          </div>
          <div class="h-40 md:h-80 flex items-start">
            <img
              class="integrations-logo"
              src="@/assets/svg/tokens/powerpool.svg"
              alt=""
            />
          </div>
        </div>
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

    <!-- <section class="bg-white">
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
            title="The Balancer Protocol"
            description="The Protocol vault handles token management and accounting, security checks and smart order routing."
            icon="icon-balancer-protocol.svg"
          />
          <Feature
            title="Developers & Entrepreneurs"
            description="Configure pools with custom AMM logic to build use-case specific apps for your community's needs."
            icon="icon-developer.svg"
          />
        </div>
      </div>
    </section> -->

    <!-- <section class="bg-white">
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
    </section> -->

    <SmartPools />
    <LBPs />
  </div>
</template>

<script>
import BuildHero from "@/components/pages/build/BuildHero.vue";
import SmartPools from "@/components/pages/build/SmartPools.vue";
import LBPs from "@/components/pages/build/LBPs.vue";
import { headMeta } from "@/lib/meta";

export default {
  transition: "slideup",
  components: {
    BuildHero, 
    SmartPools,
    LBPs
  },
  head() {
    return {
      title: 'Build on Balancer – a core building block of DeFi ', 
      description: 'yolo',
      ...headMeta({
        description: 'description lorem',
      })
    }
  }
};
</script>

<style>

.card {
  @apply rounded-lg p-4 md:p-6 lg:p-8;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  transition: box-shadow 0.2s ease-out;
}

.pool {
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  transition: box-shadow 0.2s ease-out;
}
.card:hover, .pool:hover {
  box-shadow: 8px 8px 30px #e6e6e6, -8px -8px 30px #ffffff;
}


.cover-img {
  border-radius: 10px 10px 0 0;
}

.integrations-logo {
  height: 72px;
  width: 72px;
  transition: 0.2s all ease-in-out;
}
.integrations-logo:hover,
.integrations-logo:focus {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .integrations-logo {
    height: 84px;
    width: 84px;
  }
}

@media (min-width: 1024px) {
  .integrations-logo {
    height: 100px;
    width: 100px;
  }
}

@media (min-width: 1024px) {
  .integrations-logo {
    height: 120px;
    width: 120px;
  }
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
  font-size: 21vw;
}

.featured-stat.lbp-stat-label {
  font-size: 32px;
  letter-spacing: -0.5px;
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
    font-size: 7vw;
  }
  .featured-stat.lbp-stat {
    font-size: 80px;
  }
}

@media (min-width: 1024px) {
  .featured-stat.lbp-stat {
    font-size: 100px;
  }
}
@media (min-width: 1280px) {
  .featured-stat.lbp-stat {
    font-size: 120px;
  }
}
</style>
