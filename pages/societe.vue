<template>
  <div class="societe-container">
    <div class="societe-content margin-auto">
      <div class="break-line hidden lg:block lg:mt-6" />

      <div class="content text-justify m-auto">
        <h1 class="pageTitle lg:m-0 text-primary text-center lg:text-left">
          <span class="lg:text-6xl text-4xl">PTL</span> <span class="text-2xl lg:text-4xl text-secondary">EXPRESS</span>
        </h1>
        <div class="break-line lg:hidden m-auto" />
        <!-- eslint-disable-next-line -->
        <div class="text-white mt-4 lg:pl-6" v-html="this.$t('societe.pitch')" />
      </div>

      <h2 class="content m-auto hero-title text-xl lg:text-2xl text-white font-bold text-center lg:text-left mt-4 lg:mt-6 lg:pt-6">
        POURQUOI NOUS ?
      </h2>

      <div class="hero-container grid grid-rows-4 lg:grid-cols-4 text-primary ml-6 mr-6 ">
        <div class="hero flex-grow m-6 bg-blackLight">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">
            {{ this.$t("societe.hero1") }}
          </h3>
        </div>
        <div class="hero flex-grow m-6 bg-blackLight">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">
            {{ this.$t("societe.hero2") }}
          </h3>
        </div>
        <div class="hero flex-grow m-6 bg-blackLight">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">
            {{ this.$t("societe.hero3") }}
          </h3>
        </div>
        <div class="hero flex-grow m-6 bg-blackLight">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">
            {{ this.$t("societe.hero4") }}
          </h3>
          Quelque soit votre problème ensemble nous trouverons une solution.
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
.societe-container {
  flex-grow: 1;
  background-image: url("~assets/images/traffic-332857.png");
  background-size: cover;
  background-position: center;
  overflow: auto;
  padding-top: 40px;
}
.break-line {
  height : 3px;
  width: 25%;
  background-image: linear-gradient(
    90deg,
    #F2994A 0%,
    rgba(242, 153, 74, 0.66) 33.33%,
    rgba(242, 153, 74, 0.3073) 51.04%,
    rgba(242, 153, 74, 0.66) 72.4%,
    #F2994A 100%);
}

.content {
    max-width: 80%;
}
.pageTitle {
  display: block;
  font-family: "Helvetica Neue", Arial, Arial, sans-serif;
  font-style: italic;
  font-weight: bold;
}

.hr {
  margin: auto;
  margin-top:10px;
  margin-bottom: 15px;
  height: 2px;
  width: 215px;
  background: linear-gradient(
      90deg,
      #F2994A 0%,
      rgba(242, 153, 74, 0.66) 33%,
      rgba(242, 153, 74, 0.30) 51%,
      rgba(242, 153, 74, 0.66) 72%,
      #F2994A 100%);
}

.subtitle {
  font-family: "Helvetica Neue", Arial, Arial, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
}
</style>
