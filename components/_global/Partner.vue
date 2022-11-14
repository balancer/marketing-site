<template>
  <div class="partner group">
    <div :class="'relative partner__graphic partner__graphic--' + bgImageStyle">
      <img
        class="partner-logo"
        :src="require('~/assets/svg/partners/' + logo)"
        alt=""
      />
    </div>
    <div class="partner__details">
      <div class="partner__summmary">
        <div class="relative">
          <div>
            <h2
              class="pb-0 text-lg group-hover:text-defaultBlue transition-all"
            >
              {{ title }}
            </h2>
            <a
              class="
                link
                text-greyDark
                block
                mb-2
                group-hover:text-defaultBlue
                transition-all
                text-sm
              "
              :href="url"
              >{{ linkLabel }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
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
    logo: {
      type: String,
      required: true,
    },
    linkLabel: {
      type: String,
      required: true,
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
};
</script>
  
  <style scoped>
.partner {
  width: 100%;
  height: auto;
}
.partner__graphic {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  @apply mb-4 flex items-center justify-center;
  background-size: cover;
  border-radius: 50%;
  height: 100%;
  position: relative;
  z-index: 84;
  transition: all 0.2s ease-in-out;
}


.partner__graphic--balancer {
  background: #091f3b;
}



.partner__graphic--balancer::before {
  content: "";
  background: #091f3b;
  transition: all 0.5s ease-in-out;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  border-radius: 50%;
}

.partner__graphic--aura {
  background: #ae50ff;
  box-shadow: 0 50px 100px 0 rgba(174, 80, 255, 0.2);
  @apply border border-white;
  /* background: url(~assets/svg/partners/background/bg-aura.png); */
}

.partner__graphic--aave {
  background: #0f172a;
  /* background: url(~assets/svg/partners/background/bg-aave.png); */
}

.partner__graphic--gyro {
  background: #0f172a;
  /* background: url(~assets/svg/partners/background/bg-gyro.png); */
}

.partner__graphic--element {
  background: #8fd8e7;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--fjord {
  background: #6e64ff;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--mycelium {
  background: #06bc9c;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--aave {
  background: #5eb7c4;
  /* background: url(~assets/svg/partners/background/bg-aave.png);
  background-size: cover; */
}

.partner__graphic--gyro {
  background: #febaf0;
}

.partner:hover .partner__graphic--gyro {
  background: url(~assets/svg/partners/background/bg-gyro.png);
  background-size: cover;
}

.partner__graphic--cow {
  background: #0f47c6;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--1inch {
  /* background: #C6362E; */
  background: #f43f5e;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--cron {
  @apply bg-yellow-400;
}

.partner__graphic--coop {
  /* background: #C6362E; */
  background: #343a3f;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--sense {
  /* background: #C6362E; */
  background: #0ea5e9;
  /* background: url(~assets/svg/partners/background/bg-element.png); */
}

.partner__graphic--balancer::after {
  content: "";
  display: inline-block;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
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

.partner:hover .partner__graphic--balancer::after {
  opacity: 1;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.partner:hover .partner__graphic--balancer::before {
  opacity: 0;
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
  box-shadow: 0 10px 20px 0 rgba(174, 80, 255, 0.4);
}

.partner:hover .partner__graphic--cron {
  @apply bg-yellow-400;
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

.partner__graphic--blue {
  @apply bg-blue-500;
  background: #0f172a;
}
.partner__graphic--purple {
  @apply bg-purple-500;
  background: #0f172a;
}
.partner__graphic--yellow {
  @apply bg-yellow-500;
  background: #0f172a;
}

.partner-logo {
  width: 42px;
  height: auto;
  transition: all 0.1s ease-out 0.05s;
}

.partner:hover .partner-logo,
.partner:focus .partner-logo {
  transform: scale(1.5);
}
</style>
  