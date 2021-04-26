<template>
  <div>
    <div class="main">
      <!-- <AnnouncementBar /> -->
      <Header />
      <Sidebar />
      <Nuxt />
      <Footer />
    </div>
    <div class="drawer-footer">
        <img class="w-full max-w-sm mx-auto" src="@/assets/images/built-on-ethereum.png" alt="">
        <h2>Built on Ethereum</h2>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/menu/Sidebar.vue";

export default {
  components: {
    Sidebar
  }
};
</script>

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


/* .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */

.slideup-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.slideup-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.slideup-enter,
.slideup-leave-to {
  opacity: 0;
  transform: translate3d(0, 3px, 0);
}

.mobile-hide .nuxt-link-exact-active {
  @apply text-blue-500;
}

.sidebar-panel .nuxt-link-exact-active, footer .nuxt-link-exact-active {
  @apply text-yellow-300;
}
</style>
