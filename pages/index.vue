<template>
  <div class="home-container">
    <div class="home-content flex justify-center text-center">
      <div class="mt-5">
        <logo width="139" height="107" color="#FF6600" />
        <h1 class="title mt-5">
          PTL EXPRESS
        </h1>
        <div class="hr mt-5" />
        <h2 class="subtitle mt-5">
          {{ this.$t('home.catchPrahse') }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.home-container {
  height: 100vh;
  background-image: url("~assets/images/012362541.png");
  background-size: cover;
  background-position: center;
  opacity: 0.80;
}
.home-content {
  padding-top: 100px;
}

.title {
  display: block;
  font-family: "Helvetica Neue", Arial, Arial, sans-serif;
  font-size: 40px;
  font-style: italic;
  font-weight: bold;
  color: theme('colors.primary');
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
