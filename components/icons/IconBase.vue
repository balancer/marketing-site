<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g 
    class="icon-group"
    :fill="isHover ? iconHoverColor : iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      // default: "currentColor"
    },
    iconHoverColor: {
      type: String,
      // default: "currentColor"
    }
  },
  data() {
    return {
      isHover: false
    };
  }
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}

.nav-link:hover .icon-group {
  fill: theme('colors.defaultBlue');
}

.icon-group {
  transition: fill 0.2s ease-in-out;
}


</style>
