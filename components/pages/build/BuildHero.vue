<template>
  <section class="hero-build">
    <div class="hero-build-content">
      <div class="order-1 md:order-2 md:pl-4 xl:pl-16">
        <transition name="img" appear>
          <img
            width="1000"
            height="618"
            class="pt-1 pb-10 px-4 md:px-12 lg:px-16 xl:px-20 mx-auto"
            src="@/assets/svg/hero-developers2.svg"
            alt=""
          />
        </transition>
      </div>
      <div class="md:pl-8 max-w-lg md:order-1 text-white">
        <transition name="h1" appear>
          <h1 class="h1-sans-serif text-white">
            A core building block&nbsp;of&nbsp;DeFi
          </h1>
        </transition>
        <transition name="p" appear>
          <p class="p-hero">
            A reliable, open-source, permissionless protocol. Build on
            Balancer to create new innovative types of financial dapps.
          </p>
        </transition>
        <!-- <div class="pb-2">
            <Feature
              description="The Balancer Protocol vault handles token management and accounting, security checks and smart order routing."
              icon="icon-balancer-protocol.svg"
            />
            <Feature
              description="You configure liquidity pools with custom AMM logic to build use-case specific apps for your community's needs."
              icon="icon-developer.svg"
            />
          </div> -->
        <transition name="buttons" appear>
          <div class="flex pb-4 md:pb-0">
            <a
              class="btn btn-primary btn-hero mr-3"
              href="https://docs.balancer.finance/"
              >Developer docs</a
            >
            <a
              class="btn btn-skeleton-white btn-hero"
              href="https://github.com/balancer-labs/"
              >Github code</a
            >
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-build {
  @apply px-4 py-8 bg-white;

  overflow: hidden;
  background-image: linear-gradient(227deg, #353646 0%, #21222b 100%);
}

/* .hero-build-content {
  @apply md:flex md:items-center mx-auto max-w-screen-2xl;
  min-height: 640px;
} */

@media (orientation: landscape) {
  .hero-build {
    @apply flex items-center;
  }
  .hero-build-content {
    @apply flex items-center justify-center mx-auto max-w-screen-2xl;
  }
}

@media (orientation: landscape) and (min-height: 768px) {
  .hero-build {
    min-height: calc(100vh - 180px);
    height: 92vh;
  }
}

.p-hero {
  @apply pb-6 font-medium;

  /* line-height: 1.3; */
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
