<template>
  <div>
    <a class="announcement" href="https://medium.com/balancer-protocol">
      <span class="announcement-text">
        Balancer V2 is live! Learn&nbsp;more&nbsp;-></span
      >
    </a>
  </div>
</template>

<script>
export default {};
</script>



<style scoped>

/* #TODO: change into Tailwind */

.announcement {
 @apply bg-yellow-300;   
  
  text-decoration: none;
  color: #000;
  display: flex;
  margin: 0;
  padding: 10px 16px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-family: Lato, sans-serif;
  text-align: center;
  line-height: 1.2;
  transition: 0.2s color ease-in-out;
  outline: none;

  font-family: Inter, sans-serif;
  font-feature-settings: "calt";
}

.announcement:hover,
.announcement:focus {
  color: #0000ff;
}

.announcement-link {
  color: #0000ff;
}
</style>
