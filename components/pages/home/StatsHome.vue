<template>
  <section class="p-4 bg-white">
    <div class="content-container">
      <transition name="stats" appear>
      <div class="grid grid-cols-2 md:grid-cols-4 pt-8 pb-8 md:pb-16 md:pt-2">        
        <Stat label="Trade vol (7d)" stat="$2.28m" />
        <Stat label="Fees earned" stat="$326.4m" />
        <Stat label="Total invested" stat="$2.01b" />
        <Stat label="Total investors" stat="26.9k" />
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
