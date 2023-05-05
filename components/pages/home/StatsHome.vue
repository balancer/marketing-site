<template>
  <section class="divider relative overflow-hidden p-4">
    <div class="content-container py-16 lg:px-8">
      <div class="pb-8 text-left md:text-center">
        <h2 class="title">
          Balancer V2 protocol stats
        </h2>
        <p class="pb-4 text-gray-500">
          Ethereum Mainnet, Polygon, Arbitrum & Gnosis
        </p>
      </div>
      <transition
        name="stats"
        appear
      >
        <div class="grid grid-cols-2 md:grid-cols-4">
          <Stat
            label="Total liquidity"
            :stat="success ? formatNumber(data.totalLiquidity) : '...'"
          />

          
          <Stat
            label="Swap vol (24h)"
            :stat="success ? formatNumber(data.swapVolume24h) : '...'"
          />
          
          <Stat
            label="Liquidity Providers"
            :stat="success ? formatNumber(data.numLiquidityProviders) : '...'"
          />

          <Stat
            label="Total pools"
            :stat="success ? formatNumber(data.poolCount) : '...'"
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
      loading: false,
      success: false,
      data: undefined,
    }
  },
  mounted() {
    this.getProtocolStats()
  },
  methods: {
    formatNumber(value) {
      if (!value) return '—';

        const absValue = Math.abs(value);
        const billion = 1000000000;
        const million = 1000000;
        const thousand = 1000;

        let formattedValue = '';
        let suffix = '';

        if (absValue >= billion) {
          formattedValue = (value / billion).toFixed(2);
          suffix = 'b';
        } else if (absValue >= million) {
          formattedValue = (value / million).toFixed(2);
          suffix = 'm';
        } else if (absValue >= thousand) {
          formattedValue = (value / thousand).toFixed(2);
          suffix = 'k';
        } else {
          formattedValue = value;
        }

        return `${formattedValue}${suffix}`;
    }, 
    async getProtocolStats() {
      this.loading = true;
      
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
