<template>
  <footer>
    <div class="content-container">
      <div class="px-4 py-16 grid grid-cols-1 md:grid-cols-4 text-white">
        <div class="pb-8 md:pb-0">
          <p class="text-gray-400 pb-1">Products</p>
          <p class="pb-1"><a href="https://balancer.fi/invest">Invest</a></p>
          <p><a href="https://balancer.fi/trade">Trade</a></p>
        </div>
        <div class="pb-8 md:pb-0">
          <p class="text-gray-400 pb-1">Learn</p>
          <p class="pb-1">
            <a href="https://medium.com/balancer-protocol">Blog</a>
          </p>
          <p class="pb-1">
            <a href="https://docs.balancer.finance/">Documentation</a>
          </p>
          <p class="pb-1">
            <a href="https://balancer.finance/whitepaper/">Whitepaper</a>
          </p>
          <p><a href="https://github.com/balancer-labs/">Github code</a></p>
        </div>
        <div class="pb-8 md:pb-0">
          <p class="text-gray-400 pb-1">Ecosystem</p>
          <p class="pb-1">
            <a href="https://medium.com/balancer-protocol"
              >Snapshot governance</a
            >
          </p>
          <p class="pb-1">
            <a href="https://forum.balancer.finance/">Forum</a>
          </p>
          <p>
            <a
              href="https://forum.balancer.finance/t/ecosystem-fund-grant-process/166"
              >Grants</a
            >
          </p>
        </div>
        <div class="pb-8 md:pb-0">
          <p class="text-gray-400 pb-1">Stay in touch</p>
          <div class="flex relative items-center">
          <input
            class="my-2 px-3 py-4 w-full rounded-2xl focus:outline-none focus:border-yellow-400 text-black"
            type="email"
            placeholder="Your email address"
            name="email"
          />
          <button class="btn-email btn-primary">-></button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  @apply bg-black;
}
.btn-email {
    @apply p-2 flex justify-center items-center absolute right-2;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: Inter, sans-serif;
    font-feature-settings: "calt";
}
</style>
