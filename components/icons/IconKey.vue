<template>
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <path class="icon" d="M55.733 2a1 1 0 010 1.414L51.47 7.676l8.516 8.516L48.638 27.54l-8.516-8.515-10.267 10.269a16.612 16.612 0 013.784 14.998l-.091.36a16.61 16.61 0 01-27.885 7.396C-.632 45.53-.542 35.17 5.865 28.762c6.144-6.144 15.922-6.479 22.462-.946l.094.082.032-.031 10.963-10.963L49.35 6.97 54.319 2a1 1 0 011.414 0zM27.497 29.75c-5.745-5.285-14.667-5.124-20.218.427-5.635 5.635-5.715 14.748-.185 20.474a14.61 14.61 0 1020.661-20.663l.098.1zM50.056 9.09l-8.519 8.52 7.1 7.101 8.52-8.52-7.101-7.1z" fill="#000" fill-rule="nonzero"/>
</svg>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  fill: #000;
  transition: fill 0.2s ease-out;
}

@media (min-width: 768px) {
  .icon {
    transform: scale(1);
  }
}

.card:hover .icon {
  fill: #0000ff;
}
</style>
