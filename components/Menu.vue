<template>
  <header class="navigationMenu lg:px-16 px-6 bg-white flex flex-wrap items-center py-2 text-primary">
    <div id="menu-active-highlight" class="hidden lg:block bg-primary" />

    <div class="flex-1 flex justify-between items-center">
      <a id="headerLogo" href="#">
        <logo width="40" height="40" color="#BDBDBDBD" />
      </a>
    </div>

    <label for="menu-toggle" class="cursor-pointer lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></label>
    <input id="menu-toggle" class="hidden" type="checkbox">

    <div id="menu" class="uppercase font-bold hidden lg:flex lg:items-center lg:w-auto w-full">
      <nav>
        <ul class="lg:flex items-center justify-between text-greywhite pt-4 lg:pt-0">
          <li>
            <a class="lg:pb-1 lg:pl-4 lg:pr-4 py-3 px-0 block border-transparent hover:border-indigo-400" href="#" to="/" @click.prevent="changePage">
              {{ this.$t('menu.accueil') }}
            </a>
          </li>
          <li>
            <a class="lg:pb-1 lg:pl-4 lg:pr-4 py-3 px-0 block border-transparent hover:border-indigo-400" href="#" to="/societe" @click.prevent="changePage">
              {{ this.$t('menu.ptl') }}
            </a>
          </li>
          <li>
            <a class="lg:pb-1 lg:pl-4 lg:pr-4 py-3 px-0 block border-transparent hover:border-indigo-400" href="#" to="/services" @click.prevent="changePage">
              {{ this.$t('menu.services') }}
            </a>
          </li>
          <li>
            <a class="lg:pb-1 lg:pl-4 lg:pr-4 py-3 px-0 block border-transparent hover:border-indigo-400" href="#" to="/contact" @click.prevent="changePage">
              {{ this.$t('menu.contact') }}
            </a>
          </li>
          <li>
            <a class="lg:pb-1 lg:pl-4 lg:pr-4 py-3 px-0 block border-transparent hover:border-indigo-400" href="#" to="/a-propos" @click.prevent="changePage">
              {{ this.$t('menu.apropos') }}
            </a>
          </li>
          <li>
            <a class="lg:pb-1 lg:pl-4 lg:pr-4 py-3 px-0 block border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#" to="/login" @click.prevent="changePage">
              {{ this.$t('menu.accees') }}
            </a>
          </li>
          <li>
            <ul class="flex lg:hidden">
              <li class="lang-selector text-primary font-bold uppercase text-xl-900 pr-3">
                <a href="#" @click="changeLanguage('fr')">FR</a>
              </li>
              <li class="vs bg-primary" />
              <li class="lang-selector text-greywhite font-bold uppercase text-xl-900 pl-3">
                <a href="#" @click="changeLanguage('en')">EN</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <div class="menu-lang lg:flex lg:flex-1 lg:text-right hidden justify-end ">
      <ul class="lg:flex items-center">
        <li class="lang-selector text-primary font-bold uppercase text-xl-900 pr-3">
          <a href="#" @click="changeLanguage('fr')">FR</a>
        </li>
        <li class="vs bg-primary h-full" />
        <li class="lang-selector text-greywhite font-bold uppercase text-xl-900 pl-3">
          <a href="#" @click="changeLanguage('en')">EN</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: {
    Logo
  },
  mounted () {
    document.querySelector('a[to=\\' + this.$route.path + ']').classList.add('active-link')
    this.clearLogo(this.$route.path)

    const menuHighlight = document.querySelector('div#menu-active-highlight')
    const activeLink = document.querySelector('a.active-link')
    const activeLinkPos = activeLink.getBoundingClientRect()
    const activeLinkHeight = activeLink.offsetHeight
    const verticalPosHighlight = activeLinkHeight + activeLinkPos.top

    menuHighlight.style.left = '-100px'
    menuHighlight.style.top = verticalPosHighlight + 'px'

    this.animateMenuHighlight()

    window.addEventListener('resize', this.onresize)
  },
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
    },
    changePage (event) {
      const currentActiveLink = document.querySelector('a.active-link')
      const newActiveLink = event.target

      currentActiveLink.classList.remove('active-link')
      newActiveLink.classList.add('active-link')

      this.animateMenuHighlight()
      const menuToogle = document.querySelector('#menu-toggle')
      if (menuToogle.checked) {
        menuToogle.checked = !menuToogle.checked
      }

      this.$router.push({
        path: event.target.getAttribute('to')
      })
      this.clearLogo(event.target.getAttribute('to'))
    },
    animateMenuHighlight () {
      const menuHighlight = document.querySelector('div#menu-active-highlight')

      const activeLink = document.querySelector('a.active-link')
      const activeLinkPos = activeLink.getBoundingClientRect()
      const activeLinkWidth = activeLink.offsetWidth

      const currentHorizontalPosHighlight = menuHighlight.getBoundingClientRect().left
      const newHorizontalPosHighlight = (activeLinkWidth / 2) + activeLinkPos.left - (menuHighlight.offsetWidth / 2)

      menuHighlight.animate([
        { // from
          left: currentHorizontalPosHighlight + 'px'
        },
        { // to
          left: newHorizontalPosHighlight + 'px'
        }
      ], {
        // timing options
        duration: 500,
        easing: 'ease'
      })
      menuHighlight.style.left = newHorizontalPosHighlight + 'px'
    },
    clearLogo (path) {
      if (path === '/') {
        document.querySelector('#headerLogo').classList.add('lg:hidden')
      } else {
        document.querySelector('#headerLogo').classList.remove('lg:hidden')
      }
    },
    onresize (e) {
      const menuHighlight = document.querySelector('div#menu-active-highlight')
      const activeLink = document.querySelector('a.active-link')
      const activeLinkHeight = activeLink.offsetHeight
      const activeLinkWidth = activeLink.offsetWidth
      const activeLinkPos = activeLink.getBoundingClientRect()

      const verticalPosHighlight = activeLinkHeight + activeLinkPos.top
      const horizontalPosHighlight = (activeLinkWidth / 2) + activeLinkPos.left - (menuHighlight.offsetWidth / 2)

      menuHighlight.style.left = horizontalPosHighlight + 'px'
      menuHighlight.style.top = verticalPosHighlight + 'px'
    }
  }
}
</script>

<style>
  .navigationMenu {
    /* position: absolute;
    top:0;
    right: 0;
    left: 0; */
    /* min-height: 70px; */
    background-color: rgba(0,0,0,0.65);
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(90deg, rgba(242,153,74,1) 0%, rgba(242,153,74,1) 51%, rgba(242,153,74,1) 73%, rgba(255,102,0,0) 100%) 10;
    z-index: 1000;
  }
  #menu-active-highlight{
    position: absolute;
    width: 35px;
    height: 2px;
  }

  .active-link {
    @apply text-primary;
  }

  #menu-toggle:checked + #menu {
    display: block;
  }
  .lang-selector{
    transition: all .5s ease;
  }
  .lang-selector:hover {
    font-size: 1.2em;
  }

  .vs {
    width: 1px;
  }
</style>
