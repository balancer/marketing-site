<template>
  <section>
    <div class="max-w-screen-2xl mx-auto pt-16 md:pt-32">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 xl:px-0 pb-32 xl:pb-32 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4">
          <p class="eyebrow gradient-text pb-2 font-medium">HODL For traders</p>
          <h1 class="h1-sans-serif">
            Trade at the best price with low gas costs
          </h1>
          <p class="pb-4">
            The Balancer Protocol facilitates cheap asset exchanges
            because it has access to the global liquidity pools from
            investor’s self-balancing portfolios. Balancer looks across all
            these different liquidity pools and makes the exchange giving
            traders the best available price. 
          </p>
        </div>
        <div>
          <img
            class="w-full max-w-2xl"
            src="~assets/images/hero-protocol.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.pool {
  @apply border border-gray-200 rounded-3xl shadow;
  max-width: 240px;
}
.case-study {
  @apply mx-auto;
  max-width: 75.9375rem;
}
</style>
