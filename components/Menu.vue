<template>
  <header class="site-header p-8 lg:p-0 bg-primary text-white lg:text-secondary">
    <div class="container flex">
      <div class="logo m-1 flex items-center">
        <img src="~assets/images/Logo_AlphaWhite.png" alt="">
      </div>

      <div class="hidden lg:flex lg:flex-col lg:flex-1 bg-white">
        <div class="border">
          dcedzd
        </div>

        <div class="flex text-2xl">
          <div class="flex p-4">
            <div>
              <font-awesome-icon id="serviceExposDown" icon="phone-alt" />
            </div>
            <div class="pl-3">
              <h1>(0033)638958510</h1>
            </div>
          </div>
          <div class="flex p-4">
            <div>
              <font-awesome-icon id="serviceExposDown" icon="phone-alt" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1>5 avenue Georges Bataille</h1>
              <p>60800 Plessis Belleville, France</p>
            </div>
          </div>
          <div class="flex p-4">
            <div>
              <font-awesome-icon id="serviceExposDown" icon="phone-alt" />
            </div>
            <div class="whitespace-no-wrap pl-3">
              (0033) 6 38 95 85 10
            </div>
          </div>
        </div>
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
@media screen and (min-width: 640px){
  .container {
    max-width: 70rem;
    margin: auto;
  }
}
</style>
