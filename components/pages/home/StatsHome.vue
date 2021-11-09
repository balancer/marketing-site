<template>
  <section class="p-4 bg-white">
    <div class="content-container">
      <transition name="stats" appear>
        <div class="grid grid-cols-2 md:grid-cols-4 pt-8 pb-8 md:pb-16 md:pt-2 lg:px-8">        
          <Stat label="Trade vol (7d)" stat="$716m" />
          <Stat label="Total fees earned" stat="$72.3m" />
          <Stat label="Total liquidity" stat="$3.7b" />
          <Stat label="Liquidity Providers" stat="17.1k" />        
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
