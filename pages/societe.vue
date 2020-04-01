<template>
  <div class="societe-container">
    <div class="societe-content">
      <div class="break-line" />
      <div class="mt-5">
        <h1 class="title mt-5 text-primary">
          <span class="text-6xl">PTL</span> <span class="text-4xl">EXPRESS</span>
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

export default {
  components: {
  }
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
