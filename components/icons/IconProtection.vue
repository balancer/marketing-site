<template>
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <path class="icon" d="M30 1c15.02 0 27.57 11.654 28.996 26.907L59.098 29H30.999L31 49c0 4.535 3.02 8 7 8 3.047 0 5.882-3.488 5.996-7.734L44 49h2c0 5.382-3.671 10-8 10-5.061 0-8.867-4.266-8.997-9.712L29 49V29H.901l.102-1.093C2.43 12.654 14.981 1 30 1zm0 2C16.44 3 5.03 13.219 3.143 26.821L3.12 27H56.88l-.082-.581C54.766 13.157 43.66 3.209 30.418 3.003z" fill="#000" fill-rule="nonzero"/>
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
