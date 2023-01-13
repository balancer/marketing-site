<script setup>
</script>

<template>
  <div>
    <div class="main">
      <Header />
      <Sidebar />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,

*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  min-height: 100vh;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px 0 rgba(0,0,0,0.20);
}

.drawer-footer {
  /* place on the bottom */
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #eee;
  display: grid;
  place-items: center;
  padding: 20px 20px 30px 20px;
}

.slideup-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-out;
}

.slideup-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-out;
}

.slideup-enter,
.slideup-leave-to {
  opacity: 0;
}

.mobile-hide .nuxt-link-exact-active {
  @apply text-defaultBlue;
}

.sidebar-panel .nuxt-link-exact-active, footer .link-featured.nuxt-link-exact-active {
  @apply text-yellow-300;
}
</style>
