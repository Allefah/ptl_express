<template>
  <div class="menu flex items-center justify-center border-solid border-b-4 border-primary">
    <div class="menu-navigation">
      <nuxt-link to="/" class="text-primary font-bold uppercase text-lg-900 pr-6">Accueil</nuxt-link>
      <nuxt-link to="/societe" class="text-greywhite font-bold uppercase text-lg pr-6">PTL Express</nuxt-link>
      <nuxt-link to="/services" class="text-greywhite font-bold uppercase text-lg pr-6">Nos services</nuxt-link>
      <nuxt-link to="/contacts" class="text-greywhite font-bold uppercase text-lg pr-6">Contacts</nuxt-link>
      <nuxt-link to="/propos" class="text-greywhite font-bold uppercase text-lg pr-6">A propos</nuxt-link>
      <nuxt-link to="/login" class="text-greywhite font-bold uppercase text-lg">Acces client</nuxt-link>
    </div>
    <div class="menu-lang items-center justify-right">
      <div class="lang-selector text-primary font-bold uppercase text-xl-900 pr-6">FR</div>
      <div class="vs bg-primary h-full w-5"></div>
      <div class="lang-selector text-greywhite font-bold uppercase text-lg-900 pr-6">EN</div>
    </div>
  </div>
</template>

<style>
.menu {
    height: 70px;
    background-color: rgba(0,0,0,0.65);
}
</style>
