<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="h1-hero transition-standard">Balancer is an automated portfolio manager and trading&nbsp;platform</h1>
      <div class="pb-4">
          <p class="p-hero transition-standard">
        High risk-adjusted returns for investors. <br /> Cheap crypto-asset exchanges for
        traders.
      </p>
      </div>
      <div class="flex justify-center pb-2 md:pb-0">
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
  @apply min-h-screen flex justify-center items-end items-center bg-cover bg-no-repeat bg-center;
  background-color: #eee;
  background-image: url(~assets/svg/hero-home3.svg);
  min-height: 640px;
}
@media (min-height: 768px) {
  .hero {
    min-height: calc(100vh - 200px);
  }
}

.hero-content {
  @apply p-4 md:p-8 md:rounded-3xl text-center text-white;
  max-width: 1000px;
}

.h1-hero {
  @apply font-extrabold pb-4 md:text-6xl text-white;
  font-family: "Tiempos Headline Medium";
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.5px;  
}

@media (min-width: 768px) and (min-height: 768px) {
  .h1-hero {
    font-size: 48px;
  }
  .p-hero, .btn-hero {
    font-size: 18px;
  }

}

@media (min-width: 1200px) and (min-height: 768px) {
  .h1-hero {
    font-size: 72px;
    margin-bottom: 16px;
  }
  .p-hero, .btn-hero {
    font-size: 20px;
  }
  .p-hero{
    margin-bottom: 16px;
  }  
}


</style>



