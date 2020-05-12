<template>
  <div id="nuxt_default">
    <nav id="menu" class="hidden bg-lightwhite absolute inset-y-0 left-0 min-w-3/4">
      <div class="flex flex-col">
        <div class="text-center text-xblack p-2">
          <h1>Menu</h1>
        </div>

        <hr class="text-xblack">

        <div class="uppercase">
          <ul class="text-sm ml-4">
            <li class="my-2 mr-3">
              Qui sommes nous ?
            </li>
            <hr class="text-xblack">
            <li class="my-2 mr-3">
              Nos services
            </li>
            <hr class="text-xblack">
            <li class="my-2 mr-3">
              Devis transport
            </li>
            <hr class="text-xblack">
            <li class="my-2 mr-3">
              Devis transport
            </li>
            <hr class="text-xblack">
          </ul>
        </div>
      </div>
    </nav>
    <menu-h />
    <nuxt />
  </div>
</template>

<script>
import MenuH from '~/components/Menu.vue'

export default {
  components: {
    MenuH
  },
  data () {
    return {
      title: this.$t('page.title')
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('page.description') }
      ]
    }
  }
}
</script>

<style >
html, body {
  font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

html, body, #__nuxt, #__layout, #nuxt_default {
  width:100%;
  height: 100%;
}
#nuxt_default {
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
