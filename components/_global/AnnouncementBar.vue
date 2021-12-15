<template>
  <div>
    <a class="announcement" href="https://app.balancer.fi/#/pool/0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe/?utm_source=website&utm_medium=banner&utm_campaign=aaveboostedpools">
      <span class="announcement-text">
        Increased yields, greater capital efficiency, deeper liquidity. Try Balancer Boosted Pools&nbsp;now -></span
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
 @apply bg-yellow-300 hover:bg-yellow-400;   
  
  text-decoration: none;
  color: #000;
  display: flex;
  margin: 0;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
  font-family: Lato, sans-serif;
  text-align: center;
  line-height: 1.3;
  transition: 0.3s all ease-out;
  outline: none;

  font-family: Inter, sans-serif;
  font-feature-settings: "calt";
}


</style>
