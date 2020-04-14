<template>
  <div class="contact-container pt-6">
    <div class="contact-content m-auto">
      <div class="break-line hidden lg:block lg:mt-6" />

      <h1 class="title contactBloc m-auto text-primary text-center lg:text-left">
        <span class="text-4xl text-secondary">{{ this.$t("contact.titre1") }}</span>
        <span class="text-4xl text-primary">{{ this.$t("contact.titre2") }}</span>
      </h1>

      <div class="break-line lg:hidden m-auto" />

      <div class="lg:flex lg:mt-6">
        <div class="contactBloc text-center m-6 p-4 m-auto lg:m-0 lg:flex-1">
          <h2 class="text-primary text-left text-2xl">
            {{ this.$t("contact.modeTel") }}
          </h2>
          <div class="text-white pt-4">
            {{ this.$t("contact.horaireTel") }}
          </div>
          <div class="text-primary text-2l font-bold pt-4">
            {{ this.$t("contact.numero") }}
          </div>
          <div class="text-white pt-4">
            {{ this.$t("dict.ou") }}
          </div>
          <div class="text-primary uppercase text-2l font-bold pt-4">
            {{ this.$t("contact.rappel") }}
          </div>
          <div class="w-3/4 text-primary uppercase text-2l font-bold pt-4 m-auto text-right">
            <input type="text" placeholder="Votre nom...*" class="w-full p-2">
            <input type="text" placeholder="Votre numer... *" class="w-full my-6 p-2"><br>
            <button class="bg-primary hover:bg-secondary text-white font-bold py-1 px-4 rounded">
              {{ this.$t("dict.envoyer") }}
            </button>
          </div>
        </div>

        <div class="vr w-px bg-primary mr-6" />

        <div class="contactBloc text-center m-6 p-4 m-auto lg:m-0 lg:flex-1">
          <h2 class="text-primary text-left text-2xl">
            {{ this.$t("contact.modeCourrier") }}
          </h2>
          <div class="text-white pt-4 py-1 w-2/3 m-auto">
            <p class="text-left">
              <span class="text-primary font-bold">
                PTL EXPRESS
              </span><br>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="this.$t('contact.adresse')" />
            </p>
          </div>
        </div>

        <div class="vr w-px bg-primary mr-6" />

        <div class="contactBloc text-center m-6 p-4 m-auto lg:m-0 lg:flex-1">
          <h2 class="text-primary text-left text-2xl">
            {{ this.$t("contact.modeFormulaire") }}
          </h2>
          <div class="w-3/4 text-primary uppercase text-2l font-bold pt-4 m-auto text-right">
            <input type="text" placeholder="Votre nom...*" class="w-full p-2">
            <input type="text" placeholder="Votre email... *" class="w-full mt-6 p-2"><br>
            <textarea placeholder="Votre message... *" class="w-full my-6 p-2" /><br>
            <button class="bg-primary hover:bg-secondary text-white font-bold py-1 px-4 rounded">
              {{ this.$t("dict.envoyer") }}
            </button>
          </div>
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
.contact-container {
  flex-grow: 1;
  background-image: url("~assets/images/traffic-332857.png");
  background-size: cover;
  background-position: center;
  overflow: auto;
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
.contactBloc {
  max-width: 80%;
}
</style>
