<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="h1">Balancer is an automated portfolio manager and trading&nbsp;platform</h1>
      <div class="pb-4">
          <p class="head1">
        High risk-adjusted returns for investors. <br /> Cheap crypto-asset exchanges for
        traders.
      </p>
      </div>
      <div class="flex pb-2 md:pb-0">
        <a class="btn btn-primary btn-hero" href="https://app.balancer.fi/invest">Invest</a>
        <a class="btn btn-secondary btn-hero" href="https://app.balancer.fi/trade">Trade</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  @apply min-h-screen flex justify-center items-end md:items-center bg-cover bg-no-repeat bg-center;
  background-color: #eee;
  /* background-image: url(~assets/svg/hero-home-bg.svg); */
  min-height: calc(100vh - 160px);
}

.hero-content {
  @apply p-4 md:p-8 md:rounded-3xl md:max-w-md;
  background: rgba(255,255,255,0.90);
}



</style>



