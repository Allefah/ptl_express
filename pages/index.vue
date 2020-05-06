<template>
  <div class="-mt-6">
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item">
          <img :src="item.path" alt="">
        </div>
      </template>
    </vue-horizontal-list>

    <div id="societe" class="bg-primary mt-8 py-16 px-6 text-white">
      <div>
        <h1 class="pb-3 font-bold">
          PTL EXPRESS
        </h1>
        <p>Nous sommes une jeune société de transport et d'affrètement en plein développement. Nous nous spécialisons dans le transport express de petit volume dans toute l'Europe. Nous sommes devenus en peu de temps une société polonaise dominante sur le marché français. Notre équipe est jeune, dynamique et qualifiée, prête à relever chaque défi.</p>
      </div>
      <div class="pt-16">
        <img src="~assets/images/societe.jpg" alt="">
      </div>
    </div>

    <div id="services" class="py-16 px-6 ">
      <h1 class="text-center uppercase font-black text-lg text-primary">
        Nos services
      </h1>
      <div>
        <div class="flex bg-secondary text-white items-center">
          <div class="bg-primary p-4">
            <font-awesome-icon icon="arrow-right" />
          </div>
          <div class="p-4">
            Service exploitation
          </div>
        </div>

        <div class="p-4 border border-gray-100">
          Blala blal balablblbazlbabl...
        </div>
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
        item: {
          class: 'p-0 pt-0',
          padding: 12
        },
        responsive: [
          { start: 1, size: 1 }
        ],
        list: {
          windowed: 200
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
