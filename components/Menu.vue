<template>
  <header class="navigationMenu lg:px-16 px-6 bg-white flex flex-wrap items-center py-2 text-primary">
    <div id="menu-active-highlight" class="hidden lg:block bg-primary" />

    <div class="flex-1 flex justify-between items-center">
      <a id="headerLogo" href="#">
        <svg
          width="32"
          height="40"
          viewBox="0 0 210 266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="layer1">
            <g id="layer1-6">
              <g id="Group">
                <g id="Verticale">
                  <path id="path4582-5" d="M49.001 75.1347C104.743 93.677 128.702 151.337 102.515 203.922C102.358 204.237 102.201 204.551 102.041 204.865" stroke="#FFB764" stroke-width="12.7901" stroke-linecap="round" />
                  <path id="path4582-5-6" d="M23.6107 114.751C63.223 130.196 81.5519 174.307 64.5495 213.276C64.4485 213.509 64.3457 213.741 64.2426 213.973" stroke="#FFB764" stroke-width="9.29939" stroke-linecap="round" />
                </g>
                <g id="Laterale">
                  <path id="path4582-5-6-9" d="M119.818 88.739C102.007 117.247 60.4441 142.97 26.9839 146.193C26.7828 146.214 26.5835 146.23 26.3835 146.25" stroke="#FFB764" stroke-width="6.55151" stroke-linecap="round" />
                  <path id="path4582-5-6-9-0" d="M142.135 141.066C123.535 172.157 79.6136 199.198 44.0336 201.464C43.8187 201.481 43.6096 201.491 43.3965 201.503" stroke="#FFB764" stroke-width="7.13762" stroke-linecap="round" />
                </g>
                <path
                  d="M12.5 46.8227C12.8674 46.6662 13.2355 46.5113 13.6043 46.3581C43.2365 34.0453 76.0759 32.8757 104.898 43.1067C133.72 53.3376 156.164 74.1311 167.292 100.913V100.913C178.42 127.694 177.322 158.27 164.237 185.914C151.153 213.558 127.155 236.005 97.5228 248.318C97.154 248.472 96.7846 248.623 96.4144 248.773"
                  stroke="#FF6600"
                  stroke-width="15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </g>
        </svg>
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

export default {
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
