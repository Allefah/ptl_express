<template>
  <header class="site-header p-8 lg:p-0 lg:bg-white bg-primary text-white lg:text-secondary  lg:sticky z-10">
    <div class="top-header container flex">
      <div class="logo relative flex items-center bg-primary z-10">
        <img src="~assets/images/Logo_AlphaWhite.png" alt />
      </div>

      <div class="hidden lg:flex lg:flex-col lg:flex-1 bg-white">
        <div class="before relative" />
        <div class="text-right p-4">
          <div class="relative lang-selector inline-block">
            <ul>
              <li class="inline-block px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20">
                  <rect width="30" height="600" fill="#ED2939" />
                  <rect width="20" height="600" fill="#fff" />
                  <rect width="10" height="600" fill="#002395" />
                </svg>
              </li>
              <li class="inline-block px-4">
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
              </li>
            </ul>
          </div>
        </div>

        <div class="flex text-primary py-6 px-16">
          <div class="flex p-5">
            <div class="text-xl">
              <font-awesome-icon icon="phone-alt" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1 class="text-primary text-l font-bold leading-none">(0033) 360 800 070</h1>
              <p class="text-ts font-semibold leading-none">transport@ptlexpress.com</p>
            </div>
          </div>
          <div class="flex p-4">
            <div class="text-xl">
              <font-awesome-icon icon="building" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1 class="text-primary text-l font-bold leading-none">5 av. Georges Bataille</h1>
              <p class="text-ts font-semibold leading-none">60800 Plessis-Belleville, France</p>
            </div>
          </div>
          <div class="flex p-4">
            <div class="text-xl">
              <font-awesome-icon icon="clock" />
            </div>
            <div class="whitespace-no-wrap pl-3 flex flex-col">
              <h1 class="text-primary text-l font-bold leading-none">Lu-Ve : 08h00-19h00</h1>
              <p class="text-ts font-semibold leading-none">Ouvert actuellement</p>
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
        <ul class="text-xs text-white font-semibold uppercase py-4">
          <li class="my-2 ml-16 mr-16 inline">
            <a href="#societe">Qui sommes nous ?</a>
          </li>
          <li class="my-2 mr-16 inline">
            <a href="#services">Nos services</a>
          </li>
          <li class="my-2 mr-16 inline">
            <a href="#contact">Devis transport</a>
          </li>
          <li class="my-2 mr-3 inline">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeLanguage (lang) {
      const currentActiveLangs = document.querySelectorAll(
        'li.lang-selector.text-primary'
      )
      const toActivateLangs = document.querySelectorAll(
        'li.lang-selector.text-greywhite'
      )

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
</style>
