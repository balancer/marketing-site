<template>
  <div class="pb-12">
    <img class="pb-4" :src="require('assets/svg/' + icon)" alt="" />
    <h2>{{title}}</h2>
    <p v-if="description">
      {{description}}
    </p>
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
        icon: {
            type: String
        }        
    }
};
</script>

<style scoped></style>
