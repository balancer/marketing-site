<script setup>
import {buildPartnerIconUrl} from '~/lib/urls';
import anime from 'animejs/lib/anime.es.js';

const { id : partnerName } = useRoute().params;

const { id } = useRoute().params;

const { next, prev } = useContent();

function hasHistory() {
  return window.history.length > 2;
}


function appearAnimation() {
  console.log("animation")
  anime
    .timeline({ loop: false })
    .add(
      {
        targets: ".partner-content",
        opacity: [0, 1],
        translateY: [10, 0],
        easing: "easeOutBack",
        duration: 400,
      },
      "-=200"
    )
    .add(
      {
        targets: ".prose > *",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeOutQuart",
        delay: anime.stagger(25),
        duration: 800,
      },
      "-=200"
    )
    .add(
      {
        targets: ".logo",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeOutQuart",
        duration: 800,
      },
      "-=800"
    )    
}

onMounted(()=> {
  hasHistory();
  appearAnimation();
})

</script>

<template>
  <div
    class="partner-page"
    @click="$router.push('/')"
  >
    <Transition name="content">
      <div>
        <div class="flex w-full justify-end overflow-hidden p-4">
          <button
            class="close-btn"
            @click="$router.push('/ecosystem')"
          >
            <icon-close />
          </button>
        </div>
        <div class="partner-content-container">
          <div
            :class="'partner-content ' + id"
            @click.stop
          >
            <div class="flex flex-col gap-10 md:flex-row">
              <div class="logo">
                <img
                  class="partner-img w-full"
                  :src="buildPartnerIconUrl(partnerName)"
                >
              </div>
              <div class="md">
                <ContentDoc
                  class="prose prose-headings:prose-a:text-gray-50 prose-a:no-underline prose-a:text-white prose-p:text-gray-300 prose-ul:text-gray-300 prose-headings:my-0 prose-h3:mb-2 prose-h3:text-lg pb-20"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="next-previous"
          @click.stop
        >
          <div class="relative flex items-center justify-between px-4">
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
      </div>
    </Transition>
  </div>
</template>

<style scoped>

.md :deep(h3 a) {
  @apply font-semibold;
}

.content-enter-active,
.content-leave-active {
  transition: opacity 0.5s;
}
.content-enter,
.content-leave-to {
  opacity: 0;
  transform: translateY(2000px);
}

.next-previous{
  @apply relative border-t border-gray-800 px-5 h-16 bg-gray-900/60;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.close-btn {
  width: 44px;
  height: 44px;
  @apply rounded-full bg-white flex justify-center items-center hover:bg-yellow-500 focus:bg-yellow-500 transition-colors relative z-10 shadow-lg;
}

@media (min-height: 600px) {
  .next-previous{
    @apply w-full left-0 bottom-0 fixed;
  }
  .close-btn {
    @apply fixed right-4 top-4;
  }
}
.partner-img {
  width: 100px;
}

@media (min-width: 768px) {
  .logo {
    flex: 0 0 100px;
  }
  .partner-img {
    @apply w-full;
  }
}
  
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

.partner-page {
  @apply bg-gray-900 overflow-hidden w-full;
  
}

.partner-content-container {
  transform-style: preserve-3d;
  @apply max-w-4xl mx-auto;
}
.partner-content-container:hover::before {
  content: "";
  width: 600px;
  height: 600px;
  background: linear-gradient(225deg, #ff00ff 0%, #0000ff 100%);
  bottom: -100px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  @apply rounded-full;
  filter: blur(300px);
  overflow: hidden;
  max-width: 100vw;
  transition: 0.4s
   all ease-in-out;
   opacity: 0.1;
}

.partner-content-container::before {
  content: "";
  width: 600px;
  height: 600px;
  background: linear-gradient(225deg, #ff00ff 0%, #0000ff 100%);
  bottom: -100px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  @apply rounded-full;
  filter: blur(300px);
  overflow: hidden;
  max-width: 100vw;
  transition: 0.4s
   all ease-in-out;
   opacity: 1;
}
.partner-page :deep(h2) {
  @apply pt-8 text-white;
  font-family: "Tiempos Headline Medium", "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
}
.partner-page :deep(.partner-content) {
  @apply mx-4 px-5 sm:px-8 max-w-4xl lg:m-auto py-10 bg-gray-900 rounded-3xl relative overflow-hidden;
  min-height: 100vh;
  transition: 0.2s all ease-out;
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
  opacity: 1;
  transition: all 1s ease-in-out;
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
.partner-page :deep(.video) {
  @apply max-w-xs pt-4;
}
/* partner content colors */
.partner-page :deep(.partner-content.beethoven-x::after) {
  background: var(--beethoven-x);
}
.partner-page :deep(.partner-content.aura::after) {
  background: var(--aura);
}
.partner-page :deep(.partner-content.element-finance::after) {
  background: var(--element-finance);
}
.partner-page :deep(.partner-content.fjord-foundry::after) {
  background: var(--fjord-foundry);
}
.partner-page :deep(.partner-content.fjord-nfts::after) {
  background: var(--fjord-nfts);
}
.partner-page :deep(.partner-content.aave::after) {
  background: var(--aave);
}
.partner-page :deep(.partner-content.gyroscope::after) {
  background: var(--gyroscope);
}
.partner-page :deep(.partner-content.cow-protocol::after) {
  background: var(--cow-protocol);
}
.partner-page :deep(.partner-content.mycelium::after) {
  background: var(--mycelium);
}
.partner-page :deep(.partner-content.1inch::after) {
  background: var(--inch);
}
.partner-page :deep(.partner-content.index-coop::after) {
  background: var(--index-coop);
}
.partner-page :deep(.partner-content.cron-finance::after) {
  background: var(--cron-finance);
}
.partner-page :deep(.partner-content.sense-finance::after) {
  background: var(--sense-finance);
}
.partner-page :deep(.partner-content.prime-dao::after) {
  background: var(--prime-dao);
}

.partner-page :deep(.partner-content.powerpool::after) {
  background: var(--powerpool);
}
.partner-page :deep(.partner-content.tempus::after) {
  background: var(--tempus);
}
.partner-page :deep(.partner-content.tetu::after) {
  background: var(--tetu);
}
.partner-page :deep(.partner-content.xave-finance::after) {
  background: var(--xave-finance);
}
.partner-page :deep(.partner-content.stake-dao::after) {
  background: var(--stake-dao);
}
.partner-page :deep(.partner-content.qi-dao::after) {
  background: var(--qi-dao);
}

/* Targeting Firefox browsers which limit filtr:blur(); */
@-moz-document url-prefix() { 
  .partner-page::before {
    @apply opacity-30
  }
  .partner-page :deep(.partner-content::after) {
    opacity: 0.15;
    @apply opacity-10 h-80 w-80;
  }
}

</style>
