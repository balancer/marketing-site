<template>
  <section class="divider relative overflow-hidden p-4">
    <div class="content-container py-16 lg:px-8">
      <div class="pb-8 text-left md:text-center">
        <h2 class="title">
          Balancer stats
        </h2>
        <p class="pb-4 text-gray-500">
          Mainnet, Polygon, Arbitrum
        </p>
      </div>
      <transition
        name="stats"
        appear
      >
        <div class="grid grid-cols-2 md:grid-cols-4">
          <!-- Volume from https://dune.com/balancerlabs/balancer-exchange -->
          <Stat
            label="Trade vol (7d) *"
            stat="$302m"
          />

          <!-- TVL from https://dune.com/balancerlabs/balancer-pools -->
          <Stat
            label="Total liquidity *"
            stat="$1.32b"
          />

          <!-- LPs from https://dune.com/balancerlabs/balancer-pools -->
          <Stat
            label="Liquidity Providers *"
            stat="23.0k"
          />

          <!-- Pools from https://dune.com/balancerlabs/balancer-pools -->
          <Stat
            label="Total pools *"
            stat="3,759"
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Stat from "@/components/_global/Stat.vue";

export default {
  components: {
    Stat
  },
  data() {
    return {
      loading: true,
      success: false,
      data: undefined,
    }
  },
  methods: {
    async getProtocolStats() {
      try {
        const res = await fetch('https://test-api-v3.balancer.fi/graphql', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `{
            protocolMetricsAggregated(chainIds: ["1", "137", "42161", "100"]) { #add additional chains here
            totalLiquidity
            totalSwapVolume
            totalSwapFee
            poolCount
            swapFee7d
            swapVolume7d
            swapFee24h
            swapVolume24h
            yieldCapture24h
            numLiquidityProviders
            chains {
              chainId
              totalLiquidity
              totalSwapVolume
              totalSwapFee
              poolCount
              swapFee7d
              swapVolume7d
              swapFee24h
              swapVolume24h
              yieldCapture24h
              numLiquidityProviders
            }
          }
          }`
          }),
        });


        const { data } = await res.json();

        this.data = data.protocolMetricsAggregated;
        this.loading = false;
        this.success = true;

        console.log('data', data.protocolMetricsAggregated);
      }catch {
        this.loading = false;
        this.success = false;
      }

    }
  },
  mounted() {
    this.getProtocolStats()
  }
}
</script>

<style scoped>

.divider::before {
  @apply bg-pink-500/10;
}

h2.title {
  @apply text-2xl md:text-3xl;
}

.stats-enter {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.stats-enter-to {
  opacity: 1;
}

.stats-enter-active,
.stats-leave-active {
  transition: all 0.5s ease-out 0.3s;
}
</style>
