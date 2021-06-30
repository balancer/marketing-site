<template>
  <div class="link-card py-4 mb-4 p-4">
    <a :href="url">
      <div class="flex items-center justify-between">
        <div class="pr-4">
          <h4 class="font-semibold leading-5 pb-1">{{ title }}</h4>
          <p class="leading-5">{{ description }}</p>
        </div>
        <div class="chevron"><img :src="require('~/assets/svg/chevron-right.svg')" alt="" /></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
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
.link-card {
  background: #ffffff;
  border-radius: 10px;
  background: linear-gradient(145deg, #ffffff, #fafafa);
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}




.link-card:hover .icon-chevron-right {
  stroke: green;
}
.chevron {
  @apply md:hidden;
  min-width: 20px;
}


@media (min-width: 768px) {
  .link-card {
    @apply mr-4;
    width: 320px;    
  }
  .link-card:last-child {
    @apply mr-0;
  }
}

</style>
