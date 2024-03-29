<script setup>
import anime from "animejs/lib/anime.es.js";

function startHoverAnimation() {
  anime.timeline({}).add({
    targets: ".bg-aave",
    backgroundImage: [
      "linear-gradient(223deg, #AF52A0 0%, #2FB6C6 100%)",
      "linear-gradient(223deg, #AF52A0 0%, #2FB6C6 180%)",
      "linear-gradient(223deg, #AF52A0 0%, #2FB6C6 100%)",
    ],
    easing: "linear",
    duration: 3000,
  });
}
</script>

<template>
  <section>
    <div class="case-study relative mx-auto max-w-7xl">
      <div
        class="bg-aave mb-0 grid grid-cols-1 items-center gap-8 py-16 px-4 text-white md:grid-cols-2 md:py-16 lg:mb-32"
        @mouseenter="startHoverAnimation"
      >
        <div class="max-w-md md:mx-auto">
          <p class="py-4 uppercase tracking-widest">
            Case Study
          </p>
          <img
            width="120"
            height="33"
            class="py-4"
            src="~/assets/svg/logo-aave.svg"
            alt=""
          >
          <ol class="pb-12 font-medium md:pb-0">
            <li class="py-4">
              Aave and Balancer have a long history of working together to bring capital
              efficiency and value to both communities. This includes Aave launching their
              80/20 AAVE/ETH Safety Incentive pool on Balancer and the recent Boosted Pool
              integration.
            </li>
            <li>
              The DAOs recently completed a token swap to further align the interests of
              both communities.
            </li>
          </ol>
        </div>
        <div class="max-w-md md:mx-auto">
          <picture class="profile-pic">
            <source
              type="image/avif"
              srcset="~/assets/images/people/stani.avif"
            >  
            <img                  
              width="80"
              height="80"
              alt="Stani Kulechov photo"
              class="h-20 w-20 rounded-full"
              src="~/assets/images/people/stani.jpg"
            > 
          </picture>            
          <p class="py-4 font-medium italic">
            “Part of what makes DeFi so exciting is its composability, and with Balancer
            this has resulted in a partnership that optimises the experience for liquidity
            providers through the use of Balancer Aave Boosted Pools and opens up new
            possibilities for Aave stakers with the AAVE/ETH Safety Incentive pool. We
            look forward to exploring more synergies with Balancer in the future.”
          </p>
          <p class="font-medium">
            Stani Kulechov <br>
            Founder and CEO of Aave
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-pic {
  border-radius: 50%;
  @apply md:py-4;
}

.case-study:before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(-45deg, #af52a0 0%, #2fb6c6 100%);
  transform: translate3d(0px, 20px, 0) scale(0.95);
  filter: blur(50px);
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  border-radius: inherit;
}

.case-study::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  border-radius: inherit;
}

.case-study:hover::before {
  filter: blur(8px);
}
</style>
