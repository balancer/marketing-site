<template>
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <path class="icon" d="M50 42a8 8 0 110 16 8 8 0 010-16zm-20 0a8 8 0 110 16 8 8 0 010-16zm-20 0a8 8 0 110 16 8 8 0 010-16zm40 2a6 6 0 100 12 6 6 0 000-12zm-20 0a6 6 0 100 12 6 6 0 000-12zm-20 0a6 6 0 100 12 6 6 0 000-12zm40-22a8 8 0 110 16 8 8 0 010-16zm-20 0a8 8 0 110 16 8 8 0 010-16zm20 2a6 6 0 100 12 6 6 0 000-12zm-20 0a6 6 0 100 12 6 6 0 000-12zM50 2a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12z" fill="#000" fill-rule="nonzero"/>
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
