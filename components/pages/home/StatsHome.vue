<template>
  <section class="relative p-4 divider overflow-hidden">
    <div class="content-container pt-16 pb-16 lg:px-8">
      <div class="pb-8 text-left md:text-center">
        <h2 class="title">Ethereum Mainnet stats</h2>
        <p class="text-gray-500 pb-4">* As at 11 November 2022</p>
      </div>
      <transition name="stats" appear>
        <div class="grid grid-cols-2 md:grid-cols-4">
          <!-- Volume from https://dune.com/balancerlabs/balancer-exchange -->
          <Stat label="Trade vol (7d) *" stat="$963m" /> 
          
          <!-- TVL from https://dune.com/balancerlabs/balancer-pools -->
          <Stat label="Total liquidity *" stat="$1.20b" />

          <!-- LPs from https://dune.com/balancerlabs/balancer-pools -->
          <Stat label="Liquidity Providers *" stat="21.7k" />

          <!-- Pools from https://dune.com/balancerlabs/balancer-pools -->
          <Stat label="Total pools *" stat="3,663" />
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
