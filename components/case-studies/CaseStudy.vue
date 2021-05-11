<template>
  <div class="popover-container">
    <div
      class="flex justify-between items-center border-b border-gray-100 px-4 py-2 md:py-3"
    >
      <div>
        <h3 class="m-0 p-0  @apply text-xl font-bold">{{ title }}</h3>
      </div>
      <div>
        <a class="icon-link flex items-center justify-end" v-close-popover>
          <icon-close />
        </a>
      </div>
    </div>

    <div class="p-4">
      <p class="pb-3 leading-6">
        {{ description }}
      </p>
      <p>
        <a class="case-study-link" :href=url
          >Visit {{ title }}
          <icon-base width="14" height="14" icon-name="external link"
            ><icon-external-link
          /></icon-base>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import IconClose from "@/components/icons/IconClose.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconExternalLink from "@/components/icons/IconExternalLink.vue";

export default {
  components: {
    IconClose,
    IconBase,
    IconExternalLink
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    url: {
      type: String
    }
  }
};
</script>

<style scoped>
.case-study-link {
  @apply text-defaultBlue hover:text-defaultPink fill-current;
  transition: 0.2s all ease-out;
}
.popover-container {
  background: #ffffff;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%), 0 0 40px 0 rgb(0 0 0 / 20%);
  border-radius: 10px;
  overflow: hidden;
  outline: none;
}
.icon-link {
  cursor: pointer;
  width: 36px;
  height: 36px;
}
</style>
