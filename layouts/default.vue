<template>
  <div id="nuxt_default">
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
  overflow: hidden;
}

html, body, #__nuxt, #__layout, #nuxt_default {
  width:100%;
  height: 100%;
}
#nuxt_default {
  display: flex;
  flex-direction: column;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
