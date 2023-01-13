<template>
  <div class="partner-content">
    <div class="flex flex-col md:flex-row gap-8">
      <div>
        <logo-beets />
      </div>
      <div>
        <div class="header">
          <h1 class="text-white text-5xl">Beethoven X</h1>
          <p class="font-semibold">AMM on Fantom & Optimism</p>
          <a class="link font-semibold" href="https://beets.fi/"
            >beets.fi

            <icon-base width="14" height="14" icon-name="external-link"
              ><icon-external-link class="fill"
            /></icon-base>
          </a>
        </div>
        <div class="content">
          <h2>About</h2>
          <p>
            Official friendly fork of Balancer on Optimism and Fantom. Designed
            to evolve and adapt, Beethoven X provides all the tools necessary
            for anyone to participate in the future of finance.
          </p>
          <h2>How it uses Balancer protocol</h2>
          <p>Beethoven was the first friendly fork of the Balancer protocol.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconExternalLink from "@/components/icons/IconExternalLink.vue";
import IconBase from "@/components/icons/IconBase.vue";
import LogoBeets from "@/components/icons/LogoBeets.vue";

export default {
  components: {
    IconBase,
    IconExternalLink,
    LogoBeets,
  },
  layout: "partnerLayout",
};
</script>
<style scoped>


.partner-content::after {
    background: var(--color-beets) !important;
}

</style>