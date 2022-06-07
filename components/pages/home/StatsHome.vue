<template>
  <section class="p-4 bg-white">
    <div class="content-container">
      <transition name="stats" appear>
        <div
          class="
            grid grid-cols-2
            md:grid-cols-4
            pt-8
            pb-8
            md:pb-16 md:pt-2
            lg:px-8
          "
        >
          <Stat :label="content.volumeLabel" :stat="content.volumeAmount" />
          <Stat :label="content.feesLabel" :stat="content.feesAmount" />
          <Stat :label="content.liquidityLabel" :stat="content.liquidityAmount" />
          <Stat :label="content.lpLabel" :stat="content.lpAmount" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.stats-enter {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.stats-enter-to {
  opacity: 1;
}

.stats-enter-active,
.stats-leave-active {
  transition: all 0.5s ease-out 0.3s;
}
</style>
