<template>
  <div class="text-center hover:cursor-pointer" @click="showModal = true">
  <!-- <NuxtLink class="text-center" :to="url" @click="animation"> -->
    <div class="partner group">
      <div
        :class="'relative partner__graphic partner__graphic--' + bgImageStyle"
      >
        <slot name="logo" />
      </div>
      <div class="partner__details">
        <div class="partner__summmary">
          <div class="relative">
            <div>
              <h2 class="title">
                {{ title }}
              </h2>
              <p class="synopsis">{{ category }}</p>
              <p class="learn-more">Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </NuxtLink> -->
</template>
  
  <script>

import partnerModal from "@/components/_global/partnerModal.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    comingSoon: {
      type: Boolean,
      default: false,
    },
    bgImageStyle: {
      type: String,
      required: true,
    },
    fathomCode: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    linkLabel: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    linkClickHandler() {
      fathom?.trackGoal(fathomCode || "", 0);
    },
    animation() {      
      this.$anime
        .timeline({ loop: false })
        .add(
          {
            targets: ".partner .partner--g",
            scale: [5, 5],
            easing: "easeOutBack",
            duration: 20000,
          },
        )         
    },
  },
};
</script>
  
  <style scoped>
.title {
  text-shadow: 0px 2px 0px rgba(255, 255, 255, 1);
  text-shadow: 0px 1.5px 0px rgba(255, 255, 255, 1);
  @apply pb-0 text-lg group-hover:text-defaultBlue transition-all;
}
.link {
  text-shadow: 0px 2px 0px rgba(255, 255, 255, 1);
  text-shadow: 0px 1.5px 0px rgba(255, 255, 255, 1);
  @apply text-greyDark block mb-2 group-hover:text-defaultBlue transition-all text-sm;
}
.synopsis {
  @apply text-sm pb-1 group-hover:text-defaultBlue transition-colors;
}
.learn-more {
  @apply text-gray-500 text-sm opacity-0 transition-opacity duration-500;
}

@media (hover: hover) {
  .partner:hover .learn-more {
    opacity: 1;
  }
}

@media (hover: none) {
  .learn-more {
    opacity: 1;
  }
}

.partner {
  width: 100%;
  height: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.partner-logo {
  transition: all 0.1s ease-out 0.05s;
  @apply scale-50 transform-gpu;
}

.partner:hover .partner-logo,
.partner:focus .partner-logo {
  @apply scale-75 transform-gpu;
}

.partner__graphic {
  aspect-ratio: 1 / 1;
  @apply mb-4 flex items-center justify-center;
  transition: all 0.2s ease-out;
  @apply w-full h-full relative z-0 rounded-full bg-cover border border-white border-2;
}

.partner__graphic::before {
  content: "";
  transition: all 0.2s ease-in-out;
  z-index: -1;
  @apply w-full h-full absolute rounded-full;
}

.partner__graphic::after {
  content: "";
  z-index: -1;
  transition: all 0.4s ease-in-out;
  @apply inline-block absolute opacity-0 rounded-full;
}

.partner:hover .partner__graphic::after {
  transition: all 0.4s ease-in-out;
  @apply opacity-100 inline-block w-full h-full;
}

.partner:hover .partner__graphic::before {
  transition: all 0.4s ease-in-out;
  @apply opacity-0;
}

/* Specific partner colors sets the initial colored box-shadow the flash on hover exit */
.partner__graphic--balancer {
  background: hsla(240, 91%, 12%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(240, 91%, 12%, 0.15);
}

.partner__graphic--beets {
  background: hsla(163, 68%, 54%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(163, 68%, 54%, 0.15);
}

.partner__graphic--aura {
  background: hsla(269, 90%, 65%, 0.6);
  box-shadow: 0 50px 100px 0 rgba(174, 80, 255, 0.15);
}

.partner__graphic--element {
  background: hsla(190, 64%, 73%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(190, 64%, 73%, 0.15);
}

.partner__graphic--fjord {
  background: hsla(243, 89%, 67%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(243, 89%, 67%, 0.15);
}

.partner__graphic--aave {
  background: hsla(185, 58%, 48%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(185, 58%, 48%, 0.15);
}

.partner__graphic--gyro {
  background: hsla(313, 97%, 86%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(313, 97%, 86%, 0.15);
}

.partner__graphic--cow {
  background: hsla(226, 71%, 44%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(226, 71%, 44%, 0.15);
}

.partner__graphic--mycelium {
  background: hsla(163, 42%, 53%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(163, 42%, 53%, 0.15);
}

.partner__graphic--1inch {
  background: hsla(352, 71%, 60%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(352, 71%, 60%, 0.15);
}

.partner__graphic--coop {
  background: hsla(149, 37%, 48%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(149, 37%, 48%, 0.15);
}

.partner__graphic--cron {
  background: rgba(251, 191, 36, 0.6);
  box-shadow: 0 50px 100px 0 rgba(251, 191, 36, 0.15);
}

.partner__graphic--sense {
  background: hsla(205, 73%, 59%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(205, 73%, 59%, 0.15);
}

.partner__graphic--prime {
  background: hsla(344, 77%, 58%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(344, 77%, 58%, 0.15);
}

.partner__graphic--powerpool {
  background: hsla(107, 56%, 52%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(107, 56%, 52%, 0.15);
}

.partner__graphic--tempus {
  background: hsla(25, 85%, 56%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(25, 85%, 56%, 0.15);
}

.partner__graphic--tetu {
  background: hsla(222, 79%, 57%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(222, 79%, 57%, 0.15);
}

.partner__graphic--xave {
  background: hsla(209, 80%, 48%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(209, 80%, 48%, 0.15);
}

.partner__graphic--stakedao {
  background: hsla(268, 74%, 55%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(268, 74%, 55%, 0.15);
}

.partner__graphic--qi {
  background: hsla(4, 80%, 61%, 0.6);
  box-shadow: 0 50px 100px 0 hsla(4, 80%, 61%, 0.15);
}

/* Background animation solid color before */

.partner__graphic--balancer::before {
  background: #091f3b;
}

.partner__graphic--beets::before {
  background: hsla(163, 100%, 43%, 1);
}

.partner__graphic--aura::before {
  background: hsla(269, 90%, 65%, 1);
}

.partner__graphic--element::before {
  background-color: hsla(190, 64%, 73%, 1);
}

.partner__graphic--fjord::before {
  background: hsla(243, 89%, 68%, 1);
}

.partner__graphic--aave::before {
  background: hsla(186, 58%, 49%, 1);
}

.partner__graphic--gyro::before {
  background: hsla(313, 97%, 86%, 1);
}

.partner__graphic--cow::before {
  background-color: hsla(226, 71%, 44%, 1);
}

.partner__graphic--mycelium::before {
  background: hsla(163, 42%, 53%, 1);
}

.partner__graphic--1inch::before {
  background: hsla(352, 71%, 60%, 1);
}
.partner__graphic--coop::before {
  background: hsla(149, 37%, 48%, 1);
}

.partner__graphic--cron::before {
  background: rgba(251, 191, 36, 1);
}

.partner__graphic--sense::before {
  background: hsla(205, 73%, 59%, 1);
}

.partner__graphic--prime::before {
  background: hsla(344, 77%, 58%, 1);
}

.partner__graphic--powerpool::before {
  background: hsla(107, 56%, 52%, 1);
}

.partner__graphic--tempus::before {
  background: hsla(25, 85%, 56%, 1);
}
.partner__graphic--tetu::before {
  background: hsla(222, 79%, 57%, 1);
}
.partner__graphic--xave::before {
  background: hsla(209, 80%, 48%, 1);
}
.partner__graphic--stakedao::before {
  background: hsla(268, 74%, 55%, 1);
}
.partner__graphic--qi::before {
  background: hsla(4, 80%, 61%, 1);
}

/* Partner specific radial gradients on hover */

.partner__graphic--balancer::after {
  background-color: hsla(240, 91%, 12%, 1);
  background-image: radial-gradient(
      at 85% 27%,
      hsla(222, 85%, 61%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 44%, hsla(0, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 45% 86%, hsla(49, 76%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 11% 99%, hsla(9, 100%, 45%, 1) 0px, transparent 50%),
    radial-gradient(at 82% 68%, hsla(247, 66%, 65%, 1) 0px, transparent 50%),
    radial-gradient(at 59% 48%, hsla(359, 100%, 57%, 1) 0px, transparent 50%),
    radial-gradient(at 39% 13%, hsla(258, 96%, 19%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--balancer {
  box-shadow: 0 5px 10px 0 hsla(240, 91%, 12%, 0.4);
}

.partner__graphic--beets::after {
  background-color: hsla(153, 100%, 4%, 1);

  background-image: radial-gradient(
      at 35% 23%,
      hsla(359, 100%, 65%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 10% 11%, hsla(359, 100%, 65%, 1) 0px, transparent 50%),
    radial-gradient(at 72% 28%, hsla(157, 81%, 45%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 3%, hsla(161, 98%, 46%, 1) 0px, transparent 50%),
    radial-gradient(at 22% 100%, hsla(156, 100%, 60%, 1) 0px, transparent 50%),
    radial-gradient(at 62% 0%, hsla(157, 100%, 48%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--beets {
  box-shadow: 0 5px 10px 0 hsla(163, 68%, 54%, 0.4);
}

.partner__graphic--element::after {
  background-color: hsla(190, 64%, 73%, 1);
  background-image: radial-gradient(
      at 0% 97%,
      hsla(211, 94%, 33%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 53% 100%, hsla(190, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 0%, hsla(197, 100%, 57%, 1) 0px, transparent 50%),
    radial-gradient(at 98% 98%, hsla(212, 100%, 32%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--element {
  box-shadow: 0 5px 10px 0 hsla(190, 64%, 73%, 0.4);
}

.partner__graphic--fjord::after {
  background-color: hsla(243, 89%, 67%, 1);
  background-image: radial-gradient(
      at 36% 95%,
      hsla(178, 90%, 48%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 0% 63%, hsla(256, 59%, 29%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 28%, hsla(201, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 44% 23%, hsla(267, 100%, 57%, 1) 0px, transparent 50%),
    radial-gradient(at 6% 17%, hsla(211, 93%, 33%, 1) 0px, transparent 50%),
    radial-gradient(at 75% 52%, hsla(240, 100%, 53%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--fjord {
  box-shadow: 0 5px 10px 0 hsla(243, 89%, 67%, 0.4);
}

.partner__graphic--aave::after {
  background-color: hsla(185, 58%, 48%, 1);
  background-image: radial-gradient(
      at 46% 31%,
      hsla(250, 85%, 77%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 73% 15%, hsla(197, 70%, 65%, 1) 0px, transparent 50%),
    radial-gradient(at 18% 7%, hsla(230, 72%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 67% 68%, hsla(273, 62%, 63%, 1) 0px, transparent 50%),
    radial-gradient(at 62% 5%, hsla(97, 98%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 19% 82%, hsla(212, 60%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 59% 24%, hsla(214, 63%, 71%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--aave {
  box-shadow: 0 5px 10px 0 hsla(185, 58%, 48%, 0.4);
}

.partner__graphic--gyro::after {
  background: hsla(313, 97%, 86%, 1);
  background-image: radial-gradient(
      at 54% 29%,
      hsla(67, 98%, 80%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 0% 66%, hsla(181, 85%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 14% 8%, hsla(181, 85%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 1% 31%, hsla(181, 85%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 96% 4%, hsla(68, 98%, 80%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--gyro {
  box-shadow: 0 5px 10px 0 hsla(313, 97%, 86%, 0.4);
}

.partner__graphic--cow::after {
  background: hsla(226, 71%, 44%, 1);
  background-image: radial-gradient(
      at 0% 83%,
      hsla(204, 90%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 0% 31%, hsla(201, 100%, 54%, 1) 0px, transparent 50%),
    radial-gradient(at 54% 44%, hsla(300, 48%, 68%, 1) 0px, transparent 50%),
    radial-gradient(at 89% 8%, hsla(300, 66%, 84%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--cow {
  box-shadow: 0 5px 10px 0 hsla(226, 71%, 44%, 0.4);
}

.partner__graphic--mycelium::after {
  background: hsla(163, 42%, 53%, 1);
  background-image: radial-gradient(
      at 58% 25%,
      hsla(306, 100%, 80%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 0% 66%, hsla(195, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 2% 2%, hsla(195, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 1% 31%, hsla(195, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 96% 4%, hsla(306, 100%, 80%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--mycelium {
  box-shadow: 0 5px 10px 0 hsla(163, 42%, 53%, 0.4);
}

.partner__graphic--1inch::after {
  background: hsla(352, 71%, 60%, 1);
  background-image: radial-gradient(
      at 0% 64%,
      hsla(237, 100%, 50%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 20% 22%, hsla(237, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 93% 1%, hsla(279, 100%, 50%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--1inch {
  box-shadow: 0 5px 10px 0 hsla(352, 71%, 60%, 0.4);
}

.partner__graphic--coop::after {
  background: hsla(149, 37%, 48%, 1);
  background-image: radial-gradient(
      at 29% 88%,
      hsla(181, 85%, 76%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 1% 5%, hsla(181, 85%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 82% 16%, hsla(68, 98%, 80%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--coop {
  box-shadow: 0 5px 10px 0 hsla(149, 37%, 48%, 0.4);
}

.partner__graphic--sense::after {
  background-color: hsla(205, 73%, 59%, 1);
  background-image: radial-gradient(
      at 52% 76%,
      hsla(219, 79%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 42% 42%, hsla(269, 73%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 72% 57%, hsla(50, 71%, 78%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 1%, hsla(235, 69%, 68%, 1) 0px, transparent 50%),
    radial-gradient(at 65% 47%, hsla(298, 81%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 63% 29%, hsla(247, 61%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 39% 22%, hsla(234, 73%, 75%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--sense {
  box-shadow: 0 5px 10px 0 hsla(205, 73%, 59%, 0.4);
}

.partner:hover .partner__graphic--cron::after {
  background: rgba(251, 191, 36, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--cron {
  box-shadow: 0 5px 10px 0 rgba(251, 191, 36, 0.4);
}

.partner__graphic--prime::after {
  background: hsla(344, 77%, 58%, 1);
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #43e 0%,
    #f35 80%
  );
}

.partner:hover .partner__graphic--prime {
  box-shadow: 0 5px 10px 0 hsla(344, 77%, 58%, 0.4);
}

.partner__graphic--powerpool::after {
  background: hsla(107, 56%, 52%, 1);
  background-image: radial-gradient(
      at 98% 55%,
      hsla(102, 100%, 34%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 58% 34%, hsla(107, 67%, 66%, 1) 0px, transparent 50%),
    radial-gradient(at 4% 34%, hsla(107, 83%, 29%, 1) 0px, transparent 50%),
    radial-gradient(at 20% 54%, hsla(107, 100%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 25% 98%, hsla(107, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 39% 87%, hsla(107, 72%, 49%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 16%, hsla(107, 92%, 24%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--powerpool {
  box-shadow: 0 5px 10px 0 hsla(107, 56%, 52%, 0.4);
}

.partner__graphic--tempus::after {
  background: hsla(25, 85%, 56%, 1);
  background: linear-gradient(
    45deg,
    rgba(238, 127, 49, 1) 20%,
    rgba(30, 9, 199, 1) 100%
  );
}

.partner:hover .partner__graphic--tempus {
  box-shadow: 0 5px 10px 0 hsla(25, 85%, 56%, 0.4);
}

.partner__graphic--tetu::after {
  background-color: #99f0ff;
  background-image: radial-gradient(
      at 33% 16%,
      hsla(50, 66%, 77%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 46% 40%, hsla(164, 75%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 8% 4%, hsla(22, 67%, 62%, 1) 0px, transparent 50%),
    radial-gradient(at 19% 22%, hsla(192, 89%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 83% 33%, hsla(215, 97%, 63%, 1) 0px, transparent 50%),
    radial-gradient(at 48% 35%, hsla(200, 65%, 71%, 1) 0px, transparent 50%),
    radial-gradient(at 28% 50%, hsla(220, 71%, 70%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--tetu {
  box-shadow: 0 5px 10px 0 hsla(222, 79%, 57%, 0.4);
}

.partner__graphic--xave::after {
  background-color: #ffb699;
  background-image: radial-gradient(
      at 42% 28%,
      hsla(167, 87%, 63%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 30% 84%, hsla(320, 78%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at 76% 25%, hsla(218, 89%, 65%, 1) 0px, transparent 50%),
    radial-gradient(at 34% 7%, hsla(55, 69%, 78%, 1) 0px, transparent 50%),
    radial-gradient(at 92% 51%, hsla(295, 96%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 76% 57%, hsla(289, 79%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 97% 46%, hsla(106, 60%, 73%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--xave {
  box-shadow: 0 5px 10px 0 hsla(209, 80%, 48%, 0.4);
}

.partner__graphic--stakedao::after {
  background-color: #ff99da;
  background-image: radial-gradient(
      at 74% 19%,
      hsla(350, 61%, 70%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 73% 52%, hsla(293, 95%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 73% 12%, hsla(268, 70%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 6%, hsla(156, 69%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 76% 40%, hsla(118, 84%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 67%, hsla(235, 96%, 64%, 1) 0px, transparent 50%),
    radial-gradient(at 84% 92%, hsla(271, 64%, 63%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--stakedao {
  box-shadow: 0 5px 10px 0 hsla(268, 74%, 55%, 0.4);
}

.partner__graphic--qi::after {
  background-color: hsla(4, 80%, 61%, 1);
  background-image: radial-gradient(
      at 65% 16%,
      hsla(357, 100%, 85%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 100% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 54%, hsla(239, 70%, 67%, 0.6) 0px, transparent 50%);
}
.partner:hover .partner__graphic--qi {
  box-shadow: 0 5px 10px 0 hsla(4, 80%, 61%, 0.4);
}

.partner:hover .partner__graphic--aura {
  background: #ae50ff;
  background-image: radial-gradient(
      at 40% 20%,
      hsla(254, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
}

.partner:hover .partner__graphic--aura {
  box-shadow: 0 5px 10px 0 rgba(174, 80, 255, 0.4);
}
</style>
