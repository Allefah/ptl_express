<template>
  <div>
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item">
          <img :src="item.path" alt="">
        </div>
      </template>
    </vue-horizontal-list>

    <div id="societe" class="bloc bg-primary">
      <div>
        <h1>PTL EXPRESS</h1>
        <p>Nous sommes une jeune société de transport et d'affrètement en plein développement. Nous nous spécialisons dans le transport express de petit volume dans toute l'Europe. Nous sommes devenus en peu de temps une société polonaise dominante sur le marché français. Notre équipe est jeune, dynamique et qualifiée, prête à relever chaque défi.</p>
      </div>
      <div>
        <img src="~assets/images/societe.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      options: {
        responsive: [
          { start: 1, size: 1 }
        ],
        list: {
          windowed: 1
        }
      },
      navigation: {
        start: 200,
        color: '#F3F3F3'
      },
      items: [
        { path: require('../assets/images/banner1.jpg') },
        { path: require('../assets/images/banner1.jpg') },
        { path: require('../assets/images/banner1.jpg') },
        { path: require('../assets/images/banner1.jpg') }
      ]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
