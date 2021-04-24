<template>
  <div class="py-3">
    <a href="">
      <h4 class="font-semibold">{{title}}</h4>
      <p>{{description}}</p>
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

<style scoped></style>
