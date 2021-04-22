<template>
  <div class="stat-group pb-4 md-pb-0">
    <p class="label">{{label}}</p>
    <p class="stat">{{stat}}</p>
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String, 
            required: true
        },
        stat: {
            type: String, 
            required: true
        }                
    }
};
</script>

<style scoped>
.stat-group {
  @apply justify-self-start md:justify-self-center;
}
.stat {
  @apply text-2xl md:text-2xl font-bold;
}
.label {
  @apply py-1;
}
</style>
