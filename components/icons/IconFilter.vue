<template>
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <path class="icon" d="M49 2a1 1 0 01.993.883L50 3l.001 2.437a8.001 8.001 0 010 15.876L50 57a1 1 0 01-1.993.117L48 57V21.313a8.001 8.001 0 010-15.876V3a1 1 0 011-1zM9 2a1 1 0 01.993.883L10 3l.001 12.562a8.001 8.001 0 010 15.876L10 57a1 1 0 01-1.993.117L8 57V31.438a8.001 8.001 0 010-15.876V3a1 1 0 011-1zm20 0a1 1 0 01.993.883L30 3l.001 32.812a8.001 8.001 0 010 15.876L30 57a1 1 0 01-1.993.117L28 57v-5.312a8.001 8.001 0 010-15.876V3a1 1 0 011-1zm0 35.75a6 6 0 100 12 6 6 0 000-12zM9 17.5a6 6 0 100 12 6 6 0 000-12zM49 7.375a6 6 0 100 12 6 6 0 000-12z" fill="#000" fill-rule="nonzero"/>
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
