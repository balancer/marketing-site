<script setup>

import anime from 'animejs/lib/anime.es.js';

function buildHeroAnimation() {
  anime
    .timeline({ loop: false })
    .add(
      {
        targets: ["#h1-hero", "#img-hero", "#p-hero", "#btns-hero"],
        opacity: [0, 1],
        translateZ: 0,
        translateY: [40, 0],        
        scale: [0.9, 1],        
        easing: "easeOutQuart",
        delay: anime.stagger(80),
        duration: 1000,
      },
      "+=150"
    )
}

onMounted(buildHeroAnimation);

</script>

<template>
  <section class="hero-build">
    <div class="hero-build-content">
      <div class="order-1 md:order-2 md:pl-4 xl:pl-16">
        <img
          id="img-hero"
          width="1000"
          height="1000"
          class="mx-auto w-full max-w-3xl px-4 pt-1 pb-10 md:px-12 lg:px-16 xl:px-20"
          src="~/assets/images/hero-build.png"
          alt=""
        >
      </div>
      <div class="max-w-lg text-white md:order-1 md:pl-8">
        <h1
          id="h1-hero"
          class="text-5xl font-normal text-white"
        >
          A core building block&nbsp;of&nbsp;DeFi
        </h1>
        

        <p
          id="p-hero"
          class="p-hero"
        >
          A reliable, open-source, permissionless protocol. Build on
          Balancer to create new innovative types of pools and financial dApps.
        </p>
        <div
          id="btns-hero"
          class="flex pb-4 md:pb-0"
        >
          <a
            class="btn btn-primary btn-hero mr-3"
            href="https://docs.balancer.fi"
          >Developer docs</a>
          <a
            class="btn btn-skeleton-white btn-hero"
            href="https://github.com/balancer-labs/"
          >Github code</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-build {
  @apply px-4 py-8 bg-white;

  overflow: hidden;
  background-color: #01203D;
}

@media (orientation: landscape) {
  .hero-build {
    @apply flex items-center;
  }
  .hero-build-content {
    @apply flex items-center justify-center mx-auto max-w-screen-2xl;
  }
}

.p-hero {
  @apply pb-6 font-medium;
}

@media (min-width: 768px) {
  .p-hero {
    max-width: 380px;
  }
}

.h1-enter {
  transform: translateY(20px) scale(0.98);
  opacity: 0;
}

.h1-enter-to {
  transform: translateY(0px) scale(1);
  opacity: 1;
}

.h1-enter-active,
.h1-leave-active {
  transition: all 0.5s ease-out;
}

.p-enter {
  transform: translateY(20px) scale(0.98);
  opacity: 0;
}

.p-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.p-enter-active,
.p-leave-active {
  transition: all 0.5s ease-out 0.1s;
}

.buttons-enter {
  transform: translateY(20px) scale(0.98);
  opacity: 0;
}

.buttons-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.buttons-enter-active,
.buttons-leave-active {
  transition: all 0.5s ease-out 0.2s;
}

.img-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.img-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.img-enter-active,
.img-leave-active {
  transition: all 0.5s ease-out;
}

@media (min-screen: 768px) {
  .img-enter-active,
  .img-leave-active {
    transition: all 0.7s ease-out;
  }
}
</style>
