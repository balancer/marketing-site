<template>
  <section class="p-4 bg-white">
    <div class="content-container pt-8 pb-8 md:pb-20 md:pt-2 lg:px-8">
      <transition name="stats" appear>
        <div class="grid grid-cols-2 md:grid-cols-4">                  
          <Stat label="Trade vol (7d)*" stat="$462m" />          
          <Stat label="Total liquidity*" stat="$1.05b" />
          <Stat label="Liquidity Providers*" stat="21.7k" />        
          <Stat label="Total pools*" stat="3,621" />          
        </div>        
      </transition>
      <p class="md:text-center pt-6 md:pt-8 text-gray-500 text-sm">* Stats from Ethereum mainnet as at 16 September 2022</p>
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
