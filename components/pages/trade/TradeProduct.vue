<template>
  <section>
    <div class="max-w-screen-2xl mx-auto pt-16 md:pt-32">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 xl:px-0 pb-16 lg:pb-32 items-center bg-white"
      >
        <div class="md:mx-auto max-w-lg pr-4 pb-8 md:pb-0">          
          <h1 class="h1-sans-serif">
            Trade now without&nbsp;barriers
          </h1>
          <p class="pb-4">
            The Balancer Protocol is an open financial marketplace that enables
            fast and secure trading. Get started immediately without needing to
            create an account or receive anyone’s approval.
          </p>
        </div>
        <div>
          <img
            class="w-full max-w-2xl"
            :src="require('~/assets/images/hero-protocol.png')"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.pool {
  max-width: 248px;  
  @apply border border-gray-200 rounded-3xl shadow;
}
.case-study {
  @apply mx-auto;
  max-width: 75.9375rem;
}
</style>
