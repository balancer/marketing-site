<script setup>
import {buildPartnerIconUrl} from '~/lib/urls';

const { id : partnerName } = useRoute().params;
const { next, prev } = useContent();

function hasHistory() {
  return window.history.length > 2;
}

onMounted(()=> {
  hasHistory();
})

</script>

<template>
  <div class="partner-page">
    <div class="flex w-full justify-end overflow-hidden p-4">
      <button
        class="close-btn"
        @click="$router.push('/')"
      >
        <icon-close />
      </button>
    </div>
    <div class="partner-content">
      <div class="flex flex-col gap-8 md:flex-row">
        <div class="logo">
          <img
            class="partner-img"
            :src="buildPartnerIconUrl(partnerName)"
          >
        </div>
        <div class="md list-disc">
          <ContentDoc />
        </div>
      </div>
    </div>
    <div class="relative mx-8 flex items-center justify-between border-t border-gray-800 py-8 pt-10">
      <div
        v-if="prev"
        class="prev"
      >
        <NuxtLink
          class="link"
          :to="prev._path"
        >
          &lt;- {{ prev.name }}
        </NuxtLink>
      </div>
      <div
        v-if="next"
        class="next"
      >
        <NuxtLink
          class="link"
          :to="next._path"
        >
          {{ next.name }} <span>-&gt;</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.next {
  position: absolute;
  right: 0px;
  top: 20px;
}
.prev {
  position: absolute;
  left: 0px;
  top: 20px;
}

.md :deep(li) {
  @apply list-disc ml-6 mb-1;
}

.partner-page {
  @apply bg-gray-900 overflow-hidden w-full;
  
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
  min-height: calc(100vh - 141px);
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
