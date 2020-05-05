<template>
  <header class="site-header p-8 bg-primary">
    <div class="container flex">
      <div class="logo m-1">
        <img src="~assets/images/Logo_AlphaBlue.png" alt="">
      </div>

      <div class="menu lg:hidden flex items-center m-1 pl-8">
        <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
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
