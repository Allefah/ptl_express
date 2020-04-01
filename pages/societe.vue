<template>
  <div class="societe-container">
    <div class="societe-content margin-auto">

      <div class="break-line hidden lg:block" />
      <div class="content-1">
        <h1 class="title mt-5 text-primary text-center">
          <span class="lg:text-6xl text-4xl">PTL</span> <span class="text-2xl lg:text-4xl text-secondary">EXPRESS</span>
        </h1>
        <div class="break-line lg:hidden m-auto" />
        <div class="text-white mt-4" v-html="this.$t('societe.pitch')" />
      </div>

      <h2 class="hero-title text-xl lg:text-2xl text-white font-bold text-center mt-4">POURQUOI NOUS ?</h2>

      <div class="hero-container grid grid-rows-4 lg:grid-cols-4 text-primary ml-6 mr-6 ">
        <div class="hero flex-grow m-6 bg-primary">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">{{this.$t("societe.hero1")}}</h3>
        </div>
        <div class="hero flex-grow m-6 bg-primary">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">{{this.$t("societe.hero2")}}</h3>
        </div>
        <div class="hero flex-grow m-6 bg-primary">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">{{this.$t("societe.hero3")}}</h3>
        </div>
        <div class="hero flex-grow m-6 bg-primary">
          <h3 class="hero-title text-primary text-lg font-bold text-center uppercase">{{this.$t("societe.hero4")}}</h3>
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
  height: 100vh;
  background-image: url("~assets/images/332857.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.80;
}
.societe-content {
  padding-top: 183px;
  overflow: auto;
  height: 100%;
}
.break-line {
  height : 3px;
  width: 376px;
  background-image: linear-gradient(
    90deg,
    #F2994A 0%,
    rgba(242, 153, 74, 0.66) 33.33%,
    rgba(242, 153, 74, 0.3073) 51.04%,
    rgba(242, 153, 74, 0.66) 72.4%,
    #F2994A 100%);
}
.content-1 {
  margin-left: 300px;
  max-width: 50%;
  text-align: justify;
}
.hero {
  background-color: rgba(0,0,0,0.65);
}
@media (max-width: 900px) {
  .societe-content {
    padding-top: 100px;
    overflow: scroll;
  }
  .content-1{
    margin: auto;
    max-width: 80%;
  }
  .break-line {
    width: 50%;
  }
}
.title {
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
