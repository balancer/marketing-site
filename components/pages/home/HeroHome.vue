<template>
  <section class="hero bg-white">
    <div>
      <div class="title-container">
        <transition name="content" appear>
          <h1 class="title">
            Build DeFi liquidity
            <span class="title-rotator relative">
              <span class="word word1 text-yellow-500">applications</span>
              <span class="word word2">integrations</span>
              <span class="word word3">ve-tokenomics</span>
              <span class="word word4">price curves</span>
              <span class="word word5">front-ends</span>
              <span class="word word6">fair launches</span>
            </span>
          </h1>
        </transition>
      </div>
      <transition name="content" appear>
        <div class="btn-animation flex justify-center pb-4">
          <a
            onclick="fathom.trackGoal('YZKHSNU0', 0);"
            class="btn btn-skeleton-black btn-hero mr-3"
            href="https://app.balancer.fi"
            ><span>Explore pools</span></a
          >
          <a
            onclick="fathom.trackGoal('OUY5RF8L', 0);"
            class="btn btn-tertiary btn-hero"
            href="/build"
            >Start building</a
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
    this.buttonAnimation();
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
        .add(
          {
            targets: ".word1 .letter",
            scale: [0, 1],
            opacity: [0, 1],
            translateZ: 0,
            translateY: [50, 0],
            easing: "easeOutExpo",
            duration: 800,
            delay: this.$anime.stagger(30),
          },
          "+=300"
        )
        .add({
          targets: ".word1 .letter",
          opacity: 0,
          translateZ: 0,
          translateY: [0, 50],
          scale: [1, 0.8],
          duration: 200,
          easing: "easeInExpo",
          delay: this.$anime.stagger(5, { start: 2000 }),
        })
        .add({
          targets: ".word2 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 800,
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
          delay: this.$anime.stagger(5, { start: 2000 }),
        })
        .add({
          targets: ".word3 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 800,
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
          delay: this.$anime.stagger(5, { start: 2000 }),
        })
        .add({
          targets: ".word4 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 800,
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
          delay: this.$anime.stagger(5, { start: 2000 }),
        })
        .add({
          targets: ".word5 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 800,
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
          delay: this.$anime.stagger(5, { start: 2000 }),
        })
        .add({
          targets: ".word6 .letter",
          scale: [0, 1],
          opacity: [0, 1],
          translateZ: 0,
          translateY: [50, 0],
          easing: "easeOutExpo",
          duration: 800,
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
          delay: this.$anime.stagger(5, { start: 2000 }),
        });
    },
    buttonAnimation() {
      this.$anime.timeline({ loop: false }).add(
        {
          targets: ".btn-hero",
          opacity: [0, 1],
          translateY: [5, 0],
          easing: "easeOutExpo",
          duration: 800,
          delay: this.$anime.stagger(100),
        },
        "+=900"
      );
    },
  },
  components: {
    IconBase,
    IconExternalLink,
  },
};
</script>

<style scoped>
.title,
.word1 {
  @apply relative;
}

.word {
  @apply relative block;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply absolute w-full;
}

.word .letter {
  transform-origin: bottom left;
  @apply inline-block leading-none;
}

.title-container {
  @apply mb-7 md:mb-10 flex flex-col items-center;
}
.title {
  font-size: min(9vw, 90px);
  line-height: 1.1;
  @apply text-center pb-0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title-rotator {
  font-size: min(10vw, 100px);
  @apply block;
}

.hero {
  @apply pt-12 pb-8 md:py-20;
}
</style>
