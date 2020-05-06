<template>
  <header class="site-header p-8 bg-primary text-white">
    <div class="container flex">
      <div class="logo m-1">
        <img src="~assets/images/Logo_AlphaWhite.png" alt="">
      </div>

      <div class="menu lg:hidden flex items-center m-1 pl-8 text-2xl">
        <font-awesome-icon icon="bars" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeLanguage (lang) {
      const currentActiveLangs = document.querySelectorAll('li.lang-selector.text-primary')
      const toActivateLangs = document.querySelectorAll('li.lang-selector.text-greywhite')

      currentActiveLangs.forEach((currentActiveLang) => {
        currentActiveLang.classList.remove('text-primary')
        currentActiveLang.classList.add('text-greywhite')
      })

      toActivateLangs.forEach((toActivateLang) => {
        toActivateLang.classList.remove('text-greywhite')
        toActivateLang.classList.add('text-primary')
      })

      this.$i18n.locale = lang
    }
  }
}
</script>

<style>
</style>
