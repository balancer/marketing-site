<template>
  <section class="protocol-hero">
    <div class="protocol-hero-container">
      <div class="md:items items-center md:flex">
        <div class="order-1 pt-12 md:order-2 md:pt-0 md:pl-8 xl:pl-16">
          <transition
            name="img"
            appear
          >
            <img
              width="1000"
              height="618"
              class="pt-1 pb-10"
              src="~/assets/images/ui-in-device.jpg"
              alt=""
            >
          </transition>
        </div>
        <div class="protocol-hero-content">
          <transition
            name="h1"
            appear
          >
            <h1 class="h1-sans-serif">
              Make your crypto work for&nbsp;you
            </h1>
          </transition>
          <transition
            name="p"
            appear
          >
            <p class="pb-4 font-medium text-black">
              Invest and manage your portfolio like the pros, without the hard
              work or the price tag.
            </p>
          </transition>
          <transition
            name="buttons"
            appear
          >
            <div class="flex md:pb-0">
              <a
                onclick="fathom.trackGoal('EIRJSJHP', 0);"
                class="btn btn-primary btn-hero"
                href="https://app.balancer.fi/"
              >Launch Invest app</a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.protocol-hero {
  @apply px-4 pb-16 md:pb-0 md:flex;
  min-height: 600px;
  background-color: #f8f8f8;
}

.protocol-hero-content {
  @apply md:pl-8 xl:pl-0 md:order-1 text-white;
}

.protocol-hero-container {
  @apply flex items-center mx-auto max-w-screen-2xl;
}

@media (orientation: landscape) {
  .protocol-hero {
    @apply flex items-center;
    min-height: calc(100vh - 100px);
  }
  .protocol-hero-content {
    max-width: 400px;
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
