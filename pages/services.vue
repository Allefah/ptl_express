<template>
  <div class="services-container bg-black">
    <div class="grid grid-row-1 h-full md:grid-cols-2">
      <div class="service-block service-express">
        <div class="h-full md:hover:bg-secondaryLight">
          <h1 class="text-primary text-center uppercase p-4 font-bold">
            {{ this.$t('service.s1') }}
          </h1>
        </div>
      </div>

      <div class="service-block service-palette">
        <div class="h-full md:hover:bg-secondaryLight">
          <h1 class="text-primary text-center uppercase p-4 font-bold">
            {{ this.$t('service.s2') }}
          </h1>
        </div>
      </div>

      <div class="service-block service-logistique">
        <div class="h-full md:hover:bg-secondaryLight">
          <h1 class="text-primary text-center uppercase p-4 font-bold">
            {{ this.$t('service.s3') }}
          </h1>
        </div>
      </div>

      <div class="service-block service-salon">
        <div class="h-full md:hover:bg-secondaryLight">
          <h1 class="text-primary text-center uppercase p-4 font-bold">
            {{ this.$t('service.s4') }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.services-container {
  height: 100%;
  overflow: auto;
}
.service-block {
  /* height: 400px; */
}
.service-logistique {
  background-image: url("~assets/images/0022536498.jpg");
  background-size: cover;
  background-position: center;
}
.service-palette {
  background-image: url("~assets/images/2358480.jpg");
  background-size: cover;
  background-position: center;
}
.service-express {
  background-image: url("~assets/images/1647763.jpg");
  background-size: cover;
  background-position: center;
}
.service-salon {
  background-image: url("~assets/images/00253569.jpg");
  background-size: cover;
  background-position: center;
}
</style>
