<script setup>

</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-2xl pt-16 lg:pt-32">
      <div
        class="grid grid-cols-1 items-center gap-4 bg-white px-4 pb-16 md:grid-cols-2 xl:px-0"
      >
        <div class="max-w-lg pr-4 md:mx-auto">
          <p class="eyebrow gradient-text pb-2 font-medium">
            Launch a token
          </p>
          <h1>
            LBPs for a fair and liquid&nbsp;launch
          </h1>
          <p class="pb-4">
            A Liquidity Bootstrapping pool is a dynamic
            Balancer Pool designed for fair distribution
            and price discovery of new assets. Create and fair launch your token to build your
            community the right way. 
          </p>
          <div class="grid grid-cols-1 pb-2">
            <Feature
              title="Permissionless"
              icon="icon-ticket.svg"
            />
            <Feature
              title="Capital efficient"
              icon="icon-lightning.svg"
            />
            <Feature
              title="Fair distribution"
              icon="icon-scale.svg"
            />
          </div>
          <div>          
            <a
              class="btn btn-skeleton-black btn-inline group mr-3"
              href="https://docs.balancer.fi/concepts/pools/liquidity-bootstrapping.html"
            ><span>View LBP docs&nbsp;</span>
          
              <icon-base
                icon-color="bg-yellow-500"
                width="14"
                height="14"
                icon-name="external-link"
              >
                <icon-external-link class="fill-gray-900 group-hover:fill-defaultBlue" />
              </icon-base>
          
          
            </a>
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="pb-12">
            <p class="featured-stat lbp-stat pb-4">
              130+
            </p>
            <p class="featured-stat lbp-stat-label">
              Token launches
            </p>
          </div>

          <div>
            <p class="featured-stat lbp-stat pb-4">
              $750m+
            </p>
            <p class="featured-stat lbp-stat-label">
              Raised
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full max-w-7xl px-4 pb-16 xl:px-0 xl:pb-32">
        <div
          class="grid gap-4 text-center md:grid-cols-2 lg:grid-cols-4 xl:gap-8"
        >
          <div
            class="card order-1 flex w-full flex-col justify-between md:order-2"
          >
            <div class="pb-5">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">
                $106m
              </p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <img
                class="mb-5 h-20 w-20"
                src="~/assets/svg/tokens/merit-circle.svg"
                alt=""
              >
              <p class="text-lg font-semibold">
                Merit Circle
              </p>                            
            </div>
          </div>
          
   
          <div
            class="card order-1 flex w-full flex-col justify-between md:order-2"
          >
            <div class="pb-5">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">
                $140m
              </p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <picture>
                <source
                  type="image/avif"
                  srcset="/images/tokens/guildfi.avif"
                >  
                <source
                  type="image/webp"
                  srcset="/images/tokens/guildfi.webp"
                > 
                <img
                  class="w-20 pb-5"
                  src="/images/tokens/guildfi.png"
                > 
              </picture>
              <p class="text-lg font-semibold">
                GuildFi
              </p>
            </div>
          </div>
          
          
          <div
            class="card order-1 flex w-full flex-col justify-between md:order-2"
          >
            <div class="pb-5">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">
                $28m
              </p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <img
                class="w-20 pb-5"
                src="~/assets/svg/tokens/tempus.svg"
                alt=""
              >
              <p class="text-lg font-semibold">
                Tempus
              </p>
            </div>
          </div>
          

          <div
            class="card order-1 flex w-full flex-col justify-between md:order-2"
          >
            <div class="pb-5">
              <p class="text-greyDark">
                Raised
              </p>
              <p class="text-3xl font-bold">
                $27m
              </p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/tokens/avocado.webp"
                > 
                <img
                  class="w-20 pb-5"
                  src="/images/tokens/avocado.png"
                > 
              </picture>
              <p class="text-lg font-semibold">
                Avocado DAO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pool {
  @apply rounded-lg;
  max-width: 300px;
  box-shadow: 4px 4px 15px #e6e6e6, -4px -4px 15px #ffffff;
}

.cover-img {
  border-radius: 10px 10px 0 0;
}
</style>
