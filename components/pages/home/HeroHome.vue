<template>
  <section class="hero bg-white">
    <transition name="bg" appear>
      <div class="hero-content">
        <transition name="h1" appear>
          <h1 class="h1-hero transition-standard">
            Automated portfolio manager and trading&nbsp;platform
          </h1>
        </transition>
        <div class="pb-4">
          <transition name="p" appear>
            <p class="p-hero transition-standard font-medium max-w-sm mx-auto">
              Put your cryptoassets to work and get the best prices for trades
            </p>
          </transition>
        </div>
        <transition name="buttons" appear>
          <div class="flex justify-center pb-2 md:pb-0">
            <a
              onclick="fathom.trackGoal('YZKHSNU0', 0);"
              class="btn btn-secondary btn-hero"
              href="https://app.balancer.fi/#/"
              >Invest</a
            >
            <a
              onclick="fathom.trackGoal('OUY5RF8L', 0);"
              class="btn btn-skeleton-white btn-hero"
              href="https://app.balancer.fi/#/trade"
              >Trade</a
            >
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  @apply min-h-screen flex justify-center items-end items-center bg-cover bg-no-repeat bg-center;
  background-color: #21222c;
  background-image: url(~assets/svg/hero-home.svg);
  min-height: 640px;
}
@media (min-height: 768px) {
  .hero {
    min-height: calc(100vh - 200px);
  }
}

.btn-hero {
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

@media (min-width: 768px) {
  .h1-hero {
    font-size: 48px;
  }
  .p-hero,
  .btn-hero {
    font-size: 18px;
  }
}

@media (min-width: 1200px) and (min-height: 768px) {
  .h1-hero {
    font-size: 72px;
    margin-bottom: 16px;
  }
  .p-hero,
  .btn-hero {
    font-size: 20px;
  }
  .p-hero {
    margin-bottom: 16px;
  }
}

.h1-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.h1-enter-to {
  transform: translateY(0px) scale(1);
  opacity: 1;
}

.h1-enter-active,
.h1-leave-active {
  transition: all 0.4s ease-out;
}

.p-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.p-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.p-enter-active,
.p-leave-active {
  transition: all 0.4s ease-out 0.1s;
}

.buttons-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.buttons-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.buttons-enter-active,
.buttons-leave-active {
  transition: all 0.4s ease-out 0.2s;
}

.bg-enter {
  opacity: 0;
}

.bg-enter-to {
  opacity: 1;
}

.bg-enter-active,
.bg-leave-active {
  transition: all 0.3s ease-out;
}
</style>
