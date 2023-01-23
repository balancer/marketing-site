<template>
  <div class="partner-page">
    <div class="flex w-full justify-end overflow-hidden p-4">
      <button
        class="close-btn"
        @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      >
        <icon-close />
      </button>
    </div>
    <div class="partner-content">
      <ContentDoc />
    </div>
  </div>
</template>
<script>
console.log("Parter LAYOUT");

export default {
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
  },
};
</script>
<style scoped>
.partner-page {
  @apply bg-gray-900 overflow-hidden w-full;
  min-height: 100vh;
}
.partner-page::before {
  content: "";
  width: 600px;
  height: 600px;
  background: linear-gradient(225deg, #ff00ff 0%, #0000ff 100%);
  top: -100px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  @apply rounded-full;
  filter: blur(300px);
  overflow: hidden;
  max-width: 100vw;
}
.close-btn {
  width: 44px;
  height: 44px;
  @apply rounded-full bg-white flex justify-center items-center hover:bg-yellow-500 focus:bg-yellow-500 transition-colors relative;
}
.partner-page :deep(h2) {
  @apply pt-8 text-white;
  font-family: "Tiempos Headline Medium", "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
}
.partner-page :deep(.partner-content) {
  @apply mx-4 px-5 sm:px-8 max-w-4xl lg:m-auto py-10 bg-gray-900 rounded-3xl relative overflow-hidden text-white;
  min-height: calc(100vh - 76px);
}
.partner-page :deep(.partner-content::after) {
  content: "";
  width: 200px;
  height: 200px;
  background: linear-gradient(225deg, #ff00ff 0%, #ffd500 100%),
    linear-gradient(0deg, #ffffff, #ffffff);
  top: -100px;
  right: -100px;
  position: absolute;
  @apply rounded-full;
  filter: blur(180px);
}
.partner-page :deep(.content) {
  @apply pt-4;
}
.partner-page :deep(.link) {
  @apply text-yellow-500 font-medium hover:text-pink-500 focus:text-pink-500 transition-all;
}
.partner-page :deep(.fill) {
  fill: theme("colors.yellow.500");
}
.partner-page :deep(.link:hover .fil)l,
.partner-page :deep(.link:focus .fill) {
  fill: theme("colors.pink.500");
}
.partner-page :deep(blockquote) {
  @apply mt-5 px-5 italic;
  border-left: 1px solid #fff;
}
.partner-page :deep(.video) {
  @apply max-w-xs pt-4;
}
</style>