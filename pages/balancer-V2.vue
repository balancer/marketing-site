<template>
  <div>
    <section class="px-4 pb-16 md:pb-32 py-8 md:pt-16">
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
          <h1>The most flexible and efficient AMM is live</h1>
          <p class="pb-4">
            Trade at the best price with low gas costs and a fully redesigned
            interface. Get high returns on your liquidity.
          </p>
          <div class="flex md:pb-0">
            <a
              class="btn btn-primary btn-hero"
              href="https://app.balancer.fi/invest"
              >Launch V2 app</a
            >
            <a
              class="btn btn-secondary btn-hero"
              href="https://docs.balancer.finance/"
              >View docs</a
            >
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="pb-16 px-4 max-w-2xl mx-auto">
        <h1 class="h1-sans-serif pb-8">
          V2 key features
        </h1>

        <vsa-list>
          <!-- Here you can use v-for to loop through items  -->
          <vsa-item>
            <vsa-heading>
              Improved gas efficiency
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
              <p class="pb-4">
                In Balancer V1—and all AMMs we are aware of—trading with two or
                more pools is gas inefficient because users have to send and
                receive ERC-20 tokens from all pools.
              </p>
              <p class="pb-4">
                With Balancer's new Protocol Vault, even though trades are
                carried out in batches against multiple pools, only the final
                net token amounts are transferred from and to the vault, saving
                a significant amount of gas in the process.
              </p>
              <p class="pb-4">
                Since only final net amounts are transferred, arbitrage trades
                are also significantly easier. An arber who has no tokens but
                detects a price asymmetry between Balancer pools could trade DAI
                for MKR in pool 1, MKR for BAL in pool 2 then BAL for DAI in
                pool 3 and end up making a profit in DAI.
              </p>
              <img src="@/assets/images/v2-gas-efficiency.png" alt="" />
              <p class="pb-4">
                Balancer V2 allows users to hold internal token balances. This
                is extremely useful for high-frequency trader efficiency.
              </p>
              <p class="pb-8">
                For example, if you trade token A for token B but know that you
                will trade back B for A in a few hours, then you probably don’t
                need to take delivery of B after the first trade. Balancer can
                keep both tokens in the vault which may be used for the next
                trades, avoiding any ERC20 transactions altogether. We expect to
                see aggregators and other curators using Balancer’s internal
                balances to be able to provide trades with the lowest gas costs
                to their users.
              </p>
            </vsa-content>
          </vsa-item>

          <vsa-item>
            <vsa-heading>
              Asset managers
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
              <img src="@/assets/images/v2-asset-managers.png" alt="" />

              <p class="pb-4">
                AMMs have been extremely successful in 2020. However, a lack of
                capital efficiency arises as most of the assets in an AMM are
                not actually used at any given time. Balancer V2 has a simple
                yet powerful feature that addresses this and revolutionizes the
                way AMMs are designed: Asset Managers.
              </p>
              <p class="pb-4">
                Asset Managers are external smart contracts nominated by pools
                that have full power over the underlying tokens the pool has
                deposited in the vault.
              </p>
              <p class="pb-4">
                The Asset Manager can lend tokens to a lending protocol to
                improve the pool’s yield. It’s important to note that a buffer
                must always be kept in the vault, or else trades could fail: the
                vault cannot trade out assets it does not currently hold on
                behalf of a pool. A more detailed blog post focusing entirely on
                Asset Managers will be released in the coming weeks.
              </p>
            </vsa-content>
          </vsa-item>
          <vsa-item>
            <vsa-heading>
              Customizable AMM logic
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
              <p class="pb-4">
                We are in the first inning of automated market makers and aspire
                to be the go-to platform for developers, traders, and liquidity
                providers. In 2020, there was an influx of use-case specific
                AMMs with different trade-offs optimizing for different goals.
                This trend is very likely going to be even stronger in 2021.
              </p>
              <p class="pb-4">
                Balancer V2 pioneers customizable AMM logic by creating a
                launchpad for teams to innovate with different AMM strategies
                without having to worry about low-level token transfers, balance
                accounting, security checks and smart order routing. With
                Balancer V2, this all comes out of the box.
              </p>
              <p class="pb-4">
                At launch, Balancer V2 will offer weighted pools (constant
                weight, index fund style pools like in Balancer v1) and stable
                pools which are suitable for tokens that are soft pegged to each
                other (building on the great work by the Curve team). Shortly
                after launch, we will have smart pools — which allow for ongoing
                parameter changes — and many other types of pools being built by
                partners. All pools provide trading liquidity thanks to smart
                order router.
              </p>
            </vsa-content>
          </vsa-item>
          <vsa-item>
            <vsa-heading>
              Dynamic swap fees
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
              Low gas and resilient oracles
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
              <p class="pb-4">
                Balancer V2 will include oracles that are resistant to sandwich
                attacks using accumulators — as pioneered by Uniswap V2. In
                addition, dApps will be able to query prices with minimal gas
                costs and without having to store past accumulator states. We
                plan on offering two types of prices that can be queried with
                low gas costs:
              </p>
              <ul class="pb-4 ml-8">
                <li class="list-disc">
                  Instant: A more up-to-date price but less resilient to
                  manipulation
                </li>
                <li class="list-disc">
                  Resilient: A less up-to-date price but more resilient to
                  manipulation
                </li>
              </ul>
              <p class="pb-4">
                Choosing a price type will vary depending on each use case. For
                example, lending protocols will likely rely on the resilient
                price while prediction markets could use the instant price.
              </p>
            </vsa-content>
          </vsa-item>
          <vsa-item>
            <vsa-heading>
              Community-governed protocol fees
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
              <p class="pb-4">
                As Balancer transitions towards a community-driven protocol,
                Balancer V2 implements three different types of protocol level
                fees that are controlled by governance (BAL token holders):
              </p>
              <ul>
                <li class="pb-2">
                  Trading fees: A small percentage of the trading fees paid by
                  traders to pool LPs.
                </li>
                <li class="pb-2">
                  Withdrawal fees: A small percentage of any tokens that are
                  withdrawn from the Balancer Protocol Vault (trades not
                  included). Moving liquidity between Balancer pools does not
                  incur this fee.
                </li>
              </ul>
              <p class="pb-4">
                Flash Loan fees: A small percentage of assets that are used for
                flash loans from Balancer’s vault.
              </p>
              <p class="pb-4">
                Trading fees and withdrawal fees will be turned off at
                inception, while the Flash Loan fee will start at a small value
                to ensure there is always a cost of capital to create a flash
                loan on Balancer. At first, all protocol fees will be kept in
                the vault. It will be up to Balancer’s governance to decide if
                and how these fees are used.
              </p>
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>
    </section>

    <section>
      <div class="pb-16 px-4 max-w-2xl mx-auto">
        <h1 class="h1-sans-serif pb-8">
          V2 launch partners
        </h1>
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

<style></style>
