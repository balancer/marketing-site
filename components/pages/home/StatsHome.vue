<template>
  <section class="p-4 bg-white">
    <div class="content-container pt-8 pb-8 md:pb-20 md:pt-2 lg:px-8">
      <div class="pb-8 text-center">
        <h2>Ethereum Mainnet stats</h2>
        <p class="text-gray-500">As at 11 November 2022</p>
      </div>
      <transition name="stats" appear>
        <div class="grid grid-cols-2 md:grid-cols-4">
          <!-- Volume from https://dune.com/balancerlabs/balancer-exchange -->
          <Stat label="Trade vol (7d)*" stat="$963m" /> 
          
          <!-- TVL from https://dune.com/balancerlabs/balancer-pools -->
          <Stat label="Total liquidity*" stat="$1.20b" />

          <!-- LPs from https://dune.com/balancerlabs/balancer-pools -->
          <Stat label="Liquidity Providers*" stat="21.7k" />

          <!-- Pools from https://dune.com/balancerlabs/balancer-pools -->
          <Stat label="Total pools*" stat="3,663" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
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
