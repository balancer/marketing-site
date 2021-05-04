<template>
  <section class="hero-build">
    <div class="hero-build-content">
      <div class="order-1 md:order-2 md:pl-4 xl:pl-16">
        <img
          width="1000"
          height="618"
          class="pt-1 pb-10 px-4 md:px-12 lg:px-16 xl:px-20 mx-auto" 
          src="@/assets/svg/hero-developers2.svg"
          alt=""
        />
      </div>
      <div class=" max-w-lg md:order-1 text-white">
        <h1 class="h1-sans-serif text-white">
          A core building block&nbsp;of&nbsp;DeFi
        </h1>
        <p class="p-hero">
          Balancer is reliable, open-source, permissionless protocol. Build on
          Balancer to create new innovative types of financial dapps and
          treasury management systems.
        </p>
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
        <div class="flex pb-4 md:pb-0">
          <a
            class="btn btn-primary btn-hero"
            href="https://docs.balancer.finance/"
            >Developer docs</a
          >
          <a
            class="btn btn-skeleton-white btn-hero"
            href="https://github.com/balancer-labs/"
            >Github code</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-build {
  @apply px-4 py-8 bg-white ;

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
    @apply flex items-center mx-auto max-w-screen-2xl;
  }
}

@media (orientation: landscape) and (min-height: 768px) {
  .hero-build {
    min-height: calc(100vh - 200px);
    height: 90vh;
  }
}

.p-hero {
  @apply pb-6 text-lg font-medium;
  max-width: 600px;
  line-height: 1.3;
}
</style>
