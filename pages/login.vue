<template>
  <div class="login-container pt-6 text-center">
    <h1 class="text-primary uppercase font-bold">
      Accées client
    </h1>

    <div class="w-2/3 m-auto text-right mt-3">
      <input type="text" placeholder="Login" class="w-full my-3 px-2 py-1">
      <input type="password" placeholder="Mot de passe" class="w-full my-3 px-2 py-1">
      <button class="bg-primary hover:bg-secondary text-white font-bold py-1 px-4 my-3 rounded">
        {{ this.$t("dict.connexion") }}
      </button>
    </div>
  </div>
</template>
