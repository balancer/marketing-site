<template>
  <section class="p-4">
    <div class="content-container">
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div class="stat-group justify-self-center">
          <p class="label">Fees earned (7d)</p>
          <p class="stat">$2.28m</p>
        </div>
        <div class="stat-group justify-self-center">
          <p class="label">Trade vol (7d)</p>
          <p class="stat">$326.4m</p>
        </div>
        <div class="stat-group justify-self-center">
          <p class="label">Invested</p>
          <p class="stat">$2.01b</p>
        </div>
        <div class="stat-group justify-self-center">
          <p class="label">Total investors</p>
          <p class="stat">26.9k</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.stat-group {
}
.stat {
  @apply text-2xl font-semibold;
}
</style>
