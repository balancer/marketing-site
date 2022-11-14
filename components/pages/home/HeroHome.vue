<template>
  <section class="hero bg-white">
    <div>
      <div class="title-container">
        <h1 class="title">
          Build DeFi liquidity
          <span class="title-rotator relative">
            <span class="word word1 text-yellow-500">applications</span>
            <span class="word word2">integrations</span>
            <span class="word word3">ve-tokenomics</span>
            <span class="word word4">pricing curves</span>
            <span class="word word5">front-ends</span>
            <span class="word word6">fair launches</span>
          </span>
        </h1>
        <p class="text-xl max-w-md text-center">
          An open-source, battle-tested, permissionless protocol for
          programmable liquidity.
        </p>
      </div>

      <transition name="buttons" appear>
        <div class="flex justify-center pb-4">
          <a
            onclick="fathom.trackGoal('YZKHSNU0', 0);"
            class="btn btn-skeleton-black btn-hero mr-3"
            href="https://app.balancer.fi/#/"
            >
            <span>
            Explore pools
          </span>
            <!-- <icon-base width="14" height="14" icon-name="docs-external-link"
              ><icon-external-link /></icon-base
          > -->
            
            </a
          >

          <a
            onclick="fathom.trackGoal('OUY5RF8L', 0);"
            class="btn btn-tertiary btn-hero"
            href="https://docs.balancer.fi/"
            >View docs</a
          >
        </div>
      </transition>
    </div>
  </section>
</template>

<script>

import IconBase from "@/components/icons/IconBase.vue";
import IconExternalLink from "@/components/icons/IconExternalLink.vue";

export default {
  mounted() {
    this.wrapLetters();
    this.setAnimation();
  },

  methods: {
    wrapLetters() {
      var textWrapper = document.querySelector(".word1");
      var textWrapper2 = document.querySelector(".word2");
      var textWrapper3 = document.querySelector(".word3");
      var textWrapper4 = document.querySelector(".word4");
      var textWrapper5 = document.querySelector(".word5");
      var textWrapper6 = document.querySelector(".word6");

      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      textWrapper2.innerHTML = textWrapper2.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      textWrapper3.innerHTML = textWrapper3.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      textWrapper4.innerHTML = textWrapper4.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      textWrapper5.innerHTML = textWrapper5.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );

      textWrapper6.innerHTML = textWrapper6.textContent.replace(
        /\S/g,
        "<span class='letter inline-block'>$&</span>"
      );
    },

    setAnimation() {
      this.$anime
        .timeline({ loop: true })        
        .add({
          targets: ".word1 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: this.$anime.stagger(30),
        })
        .add({
          targets: ".word1 .letter",
          opacity: 0,
          translateZ: 0,
          translateY: [0, 50],
          scale: [1, 0.8],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 5000 }),
        })
        .add({
          targets: ".word2 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: this.$anime.stagger(30),
        })
        .add({
          targets: ".word2 .letter",
          opacity: 0,
          translateZ: 0,
          translateY: [0, 50],
          scale: [1, 0.8],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 5000 }),
        })
        .add({
          targets: ".word3 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: this.$anime.stagger(30),
        })
        .add({
          targets: ".word3 .letter",
          opacity: 0,
          scale: [1, 0.8],
          translateZ: 0,
          translateY: [0, 50],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 5000 }),
        })
        .add({
          targets: ".word4 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: this.$anime.stagger(30),
        })
        .add({
          targets: ".word4 .letter",
          opacity: 0,
          scale: [1, 0.8],
          translateZ: 0,
          translateY: [0, 50],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 5000 }),
        })
        .add({
          targets: ".word5 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: this.$anime.stagger(30),
        })
        .add({
          targets: ".word5 .letter",
          opacity: 0,
          scale: [1, 0.8],
          translateZ: 0,
          translateY: [0, 50],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 5000 }),
        })
        .add({
          targets: ".word6 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 1000,
          delay: this.$anime.stagger(30),
        })
        .add({
          targets: ".word6 .letter",
          opacity: 0,
          scale: [1, 0.8],
          translateZ: 0,
          translateY: [0, 50],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 5000 }),
        });
        
    },
  },
  components: {
    IconBase,
    IconExternalLink
  },
};
</script>

<style scoped>
.title,
.word1 {
  position: relative;
}

.word {
  display: block;
  position: relative;
}

.word1 {
  color: #0ea5e9;
}
.word2 {
  @apply text-yellow-600;
}

.word3 {
  @apply text-purple-600;
}

.word4 {
  color: #ff7759;
}

.word5 {
  color: #06bc9c;
}

.word6 {
  color: #febaf0;
}

.word2,
.word3,
.word4,
.word5,
.word6 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.word .letter {
  display: inline-block;
  line-height: 1;
  transform-origin: bottom left;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.title {
  font-size: min(9.5vw, 90px);
  line-height: 1.1;
  @apply text-center pb-5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title-rotator {
  display: block;
  font-size: min(10vw, 100px);
}

.hero {
  padding: 5rem 0;
}

.hero-content {
  max-width: 1000px;

  @apply p-4 md:p-8 md:rounded-3xl text-center text-white;
}

.h1-hero {
  font-family: "Tiempos Headline Medium";
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: -0.5px;
  @apply font-extrabold pb-4 md:text-6xl text-white;
}

.p-hero {
  max-width: 280px;
  @apply font-medium mx-auto pb-2;
}

@media (min-width: 768px) {
  .h1-hero {
    font-size: 48px;
  }
  .p-hero,
  .btn-hero {
    font-size: 18px;
  }
  .p-hero {
    max-width: 320px;
  }
}

@media (min-width: 1200px) and (min-height: 768px) {
  .h1-hero {
    font-size: 72px;
    margin-bottom: 16px;
  }
  .p-hero,
  .btn-hero {
    font-size: 20px;
  }
  .p-hero {
    margin-bottom: 16px;
  }
}

.h1-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.h1-enter-to {
  transform: translateY(0px) scale(1);
  opacity: 1;
}

.h1-enter-active,
.h1-leave-active {
  transition: all 0.4s ease-out;
}

.p-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.p-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.p-enter-active,
.p-leave-active {
  transition: all 0.4s ease-out 0.1s;
}

.buttons-enter {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.buttons-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.buttons-enter-active,
.buttons-leave-active {
  transition: all 0.4s ease-out 0.2s;
}

.bg-enter {
  opacity: 0;
}

.bg-enter-to {
  opacity: 1;
}

.bg-enter-active,
.bg-leave-active {
  transition: all 0.3s ease-out;
}
</style>
