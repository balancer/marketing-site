<template>
  <div
    class="px-4 xl:px-0 w-full max-w-7xl mx-auto pb-32 lg:pb-40 pt-16 lg:pt-0"
  >
    <div class="grid md:grid-cols-3 gap-4 xl:gap-8">
      <div class="order-1 md:order-2 card flex flex-col justify-between w-full">
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>
            {{ content.quote1.quote }}
          </p>
        </div>
        <a :href="content.quote1.link">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img
                width="80"
                height="80"
                
                :src="require(`~/assets/images/people/${content.quote1.img}`)"
                alt=""
              />
            </div>
            <div class="pl-4">
              <p class="font-medium">{{ content.quote1.person }}</p>
              <p class="font-medium">{{ content.quote1.company }}</p>
            </div>
          </div>
        </a>
      </div>
      <div
        class="
          order-2
          md:order-1 md:relative md:top-12
          card
          flex flex-col
          justify-between
          w-full
        "
      >
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>
            {{ content.quote2.quote }}
          </p>
        </div>
        <a :href="content.quote2.link">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img
                width="80"
                height="80"
                :src="require(`~/assets/images/people/${content.quote2.img}`)"
                alt=""
              />
            </div>
            <div class="pl-4">
              <p class="font-medium">{{ content.quote2.person }}</p>
              <p class="font-medium">{{ content.quote2.company }}</p>
            </div>
          </div>
        </a>
      </div>
      <div
        class="
          order-3
          md:relative md:top-12
          card
          flex flex-col
          justify-between
          w-full
        "
      >
        <div class="pb-6">
          <div class="md:mb-4 lg:mb-6">
            <icon-quotemark />
          </div>
          <p>
            {{ content.quote3.quote }}
          </p>
        </div>

        <a :href="content.quote3.link">
          <div class="flex items-center">
            <div class="w-20 rounded-full overflow-hidden">
              <img
                width="80"
                height="80"
                :src="require(`~/assets/images/people/${content.quote3.img}`)"
                alt=""
              />
            </div>
            <div class="pl-4">
              <p class="font-medium">{{ content.quote3.person }}</p>
              <p class="font-medium">{{ content.quote3.company }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import IconQuotemark from "@/components/icons/IconQuotemark.vue";

export default {
  components: {
    IconBase,
    IconQuotemark,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
  transition: 0.2s all ease-out;
  @apply rounded-lg p-4 md:p-6 lg:p-8;
}

.card:hover {
  box-shadow: 8px 8px 30px #e6e6e6, -8px -8px 30px #ffffff;
}
</style>
