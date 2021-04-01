<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="h1">Balancer is an automated portfolio manager and trading&nbsp;platform</h1>
      <div class="pb-4">
          <p>
        High risk-adjusted returns for investors. <br /> Cheap crypto-asset exchanges for
        traders.
      </p>
      </div>
      <div class="flex gap-3">
        <a class="btn btn-primary btn-hero" href="https://balancer.fi/">Invest</a>
        <a class="btn btn-secondary btn-hero" href="https://balancer.fi/trade">Trade</a>
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
  background-image: url(~assets/svg/hero-home-bg.svg);
  min-height: calc(100vh - 120px);
}

.hero-content {
    @apply p-4 md:p-8 md:rounded-3xl md:max-w-md;
    background: rgba(255,255,255,0.90);
}
.h1 {
    @apply font-extrabold text-3xl pb-4;
    font-family:"Tiempos Headline Medium";
    line-height: 34px;
}
.btn {
    @apply p-4 bg-blue-900 rounded-lg text-white font-semibold text-center shadow-xl;
}
.btn-primary {
    background-image: linear-gradient(225deg, #FF00FF 0%, #0000FF 100%);    
}
.btn-secondary {
    @apply bg-white text-black;
}
.btn-hero {
    min-width: 140px;
}


</style>



