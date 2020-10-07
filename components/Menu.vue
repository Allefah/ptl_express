<template>
  <header class="site-header p-8 lg:p-0 lg:bg-white bg-primary text-white lg:text-secondary  lg:sticky z-10">
    <div class="top-header container flex">
      <div class="logo relative flex items-center bg-primary z-10">
        <a href="/"><img src="~assets/images/Logo_AlphaWhite.png" alt="Logo de PTL Express"></a>
      </div>

      <div class="hidden lg:flex lg:flex-col lg:flex-1 bg-white">
        <div class="before relative" />
        <div class="text-right p-4">
          <div class="relative lang-selector inline-block">
            <div class="relative">
              <div id="lang-selector-fr" class="lang-selector-drap inline-block px-4 cursor-pointer" @click="changeLanguage('fr')">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20">
                  <rect width="30" height="600" fill="#ED2939" />
                  <rect width="20" height="600" fill="#fff" />
                  <rect width="10" height="600" fill="#002395" />
                </svg>
              </div>

              <div id="lang-selector-en" class="lang-selector-drap inline-block px-4 cursor-pointer" @click="changeLanguage('en')">
                <svg
                  width="30"
                  height="20"
                  version="1.1"
                  viewBox="0 0 50 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <clipPath>
                    <path d="m25 15h25v15zv15h-25zh-25v-15zv-15h25z" />
                  </clipPath>
                  <g>
                    <rect
                      x="9.8296e-6"
                      y="-1.8681e-6"
                      width="50"
                      height="30"
                      fill="#fff"
                      style="paint-order:markers fill stroke"
                    />
                    <path
                      d="m-7e-6 -5e-7v2.3321l12.779 7.6678 3.8871-1e-4zm22 0v11.999h-22v5.9961h22v12.005h5.9998v-12.005h22v-5.9961h-22v-11.999zm24.112 0-16.113 9.6675v0.33232h3.3336l16.666-9.9998zm-29.488 20-16.625 10h3.8873l16.112-9.668v-0.33203zm16.709 0 16.666 10v-2.3323l-12.777-7.6677z"
                      fill="#c8102e"
                      style="paint-order:markers fill stroke"
                    />
                    <path
                      d="m5.85-5e-7 14.15 8.5002v-8.5002zm24.15 0v8.5016l14.17-8.5016zm-30 3.4985v6.5006l10.836 7.55e-4zm50 2.1e-4 -10.835 6.5011h10.835zm-50 16.501v6.5021l10.835-6.5021zm39.169 0 10.831 6.576v-6.576zm-9.1689 1.4986v8.5014h14.17zm-10 3.99e-4 -14.169 8.501h14.169z"
                      fill="#012169"
                      style="paint-order:markers fill stroke"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex text-primary py-6 px-16">
          <div class="flex p-5">
            <div class="text-xl">
              <font-awesome-icon icon="phone-alt" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1 class="text-primary text-l font-bold leading-none">
                (0033) 360 800 070
              </h1>
              <p class="text-ts font-bold leading-none">
                transport@ptlexpress.com
              </p>
            </div>
          </div>
          <div class="flex p-4">
            <div class="text-xl">
              <font-awesome-icon icon="building" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1 class="text-primary text-l font-bold leading-none">
                5 av. Georges Bataille
              </h1>
              <p class="text-ts font-semibold leading-none">
                60800 Plessis-Belleville, France
              </p>
            </div>
          </div>
          <div class="flex p-4">
            <div class="text-xl">
              <font-awesome-icon icon="clock" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1 class="text-primary text-l font-bold leading-none">
                Lu-Ve : 08h00-19h00
              </h1>
              <p class="text-ts font-semibold leading-none">
                {{ isOpen() }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="menu lg:hidden flex items-center m-1 pl-8 text-2xl">
        <font-awesome-icon icon="bars" />
      </div>
    </div>

    <div class="hidden lg:block bg-secondary z-100">
      <div class="container">
        <ul class="menu-hor text-xs text-white font-semibold uppercase py-4">
          <li id="who" class="my-2 ml-16 mr-16 inline active" @click="goTo('who')">
            <a href="#societe">{{ $t('menu.who') }}</a>
          </li>
          <li id="servicesm" class="my-2 mr-16 inline" @click="goTo('servicesm')">
            <a href="#services">{{ $t('menu.services') }}</a>
          </li>
          <li id="devism" class="my-2 mr-16 inline" @click="goTo('devism')">
            <a href="#devis">{{ $t('menu.devis') }}</a>
          </li>
          <li id="contactm" class="my-2 mr-3 inline" @click="goTo('contactm')">
            <a href="#footer">{{ $t('menu.contact') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted () {
    this.setLangOpacity()
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
      this.setLangOpacity()
    },
    setLangOpacity () {
      switch (this.$i18n.locale) {
        case ('fr'):
          document.querySelector('#lang-selector-en').classList.remove('active')
          document.querySelector('#lang-selector-fr').classList.add('active')
          break
        case ('en'):
          document.querySelector('#lang-selector-fr').classList.remove('active')
          document.querySelector('#lang-selector-en').classList.add('active')
          break
      }
    },
    isOpen () {
      if (new Date().getHours() < 8 || new Date().getHours() > 19) {
        return this.$t('dict.close')
      } else {
        return this.$t('dict.open')
      }
    },
    goTo (el) {
      console.log(document.querySelector('.active'))
      document.querySelector('.menu-hor > .active').classList.remove('active')
      document.querySelector('#' + el).classList.add('active')
    }
  }
}
</script>

<style>
@media screen and (min-width: 640px) {
  .container {
    max-width: 70rem;
    margin: auto;
  }
}
.site-header{
  top: -171px;
}
.top-header{
  height: 170px;
}
.before:before {
  content: "";
  position: absolute;
  left: -900px;
  right: -900px;
  height: 1px;
  top: 55px;
  background-color: #ddd;
  z-index: 0;
}
.lang-selector:before {
  content: "";
  top: -40px;
  bottom: -15px;
  position: absolute;
  right: 0px;
  left: -20px;
  display: block;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  -webkit-transform: skew(30deg, 0);
  -moz-transform: skew(30deg, 0);
  -ms-transform: skew(30deg, 0);
  -o-transform: skew(30deg, 0);
}
.logo:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1000px;
  width: 1000px;
  background: #204566;
}
.logo:after {
  content: "";
  border-color: #204566;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 170px 0 0 90px;
  border-top-color: transparent;
  position: absolute;
  top: 0;
  right: -90px;
}

.menu-hor .active {
  @apply text-white;
  @apply font-extrabold;
  border-bottom: 2px solid white;
}
.menu-hor > li {

    &:hover {
      color: #95a5a6;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
}

.lang-selector-drap {
  opacity: 0.5;
}
.lang-selector .active {
  opacity: 1;
}
</style>
