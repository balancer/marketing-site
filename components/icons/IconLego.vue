<template>
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <path class="icon" d="M15 1a4 4 0 014 4v5h3V5a4 4 0 014-4h8a4 4 0 014 4v5h3V5a4 4 0 014-4h8a4 4 0 014 4l.001 5.536A3.998 3.998 0 0159 14v17a3.99 3.99 0 01-1.355 3.001A3.983 3.983 0 0159 37v17a4 4 0 01-4 4H5a4 4 0 01-4-4V37a3.99 3.99 0 011.355-3.001A3.983 3.983 0 011 31V14c0-1.48.804-2.773 2-3.465V5a4 4 0 014-4h8zm40 34H5a2 2 0 00-1.995 1.85L3 37v17a2 2 0 001.85 1.995L5 56h50a2 2 0 001.995-1.85L57 54V37a2 2 0 00-1.85-1.995L55 35zm0-23H5a2 2 0 00-1.995 1.85L3 14v17a2 2 0 001.85 1.995L5 33h50a2 2 0 001.995-1.85L57 31V14a2 2 0 00-1.85-1.995L55 12zm-2-9h-8a2 2 0 00-1.995 1.85L43 5v5h12V5a2 2 0 00-1.85-1.995L53 3zM15 3H7a2 2 0 00-1.995 1.85L5 5v5h12V5a2 2 0 00-1.85-1.995L15 3zm19 0h-8a2 2 0 00-1.995 1.85L24 5v5h12V5a2 2 0 00-1.85-1.995L34 3z" fill-rule="nonzero"/>
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
