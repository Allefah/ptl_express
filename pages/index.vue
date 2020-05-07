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
      <h1 class="text-center uppercase font-black text-lg text-primary pb-12">
        Nos services
      </h1>

      <div class="pb-5">
        <div class="flex bg-secondary text-white items-center" @click="show('serviceExpress')">
          <div class="bg-primary p-5">
            <font-awesome-icon id="serviceExpressDown" icon="arrow-down" />
            <font-awesome-icon id="serviceExpressRight" icon="arrow-right" class="hidden" />
          </div>
          <div class="p-4">
            Service express
          </div>
        </div>

        <transition name="fade">
          <div id="serviceExpress" class="p-4 border border-gray-100">
            Blala blal balablblbazlbabl...
          </div>
        </transition>
      </div>

      <div class="pb-5">
        <div class="flex bg-secondary text-white items-center" @click="show('serviceExpos')">
          <div class="bg-primary p-5">
            <font-awesome-icon id="serviceExposDown" icon="arrow-down" />
            <font-awesome-icon id="serviceExposRight" icon="arrow-right" class="hidden" />
          </div>
          <div class="p-4">
            Service expos
          </div>
        </div>

        <transition name="fade">
          <div id="serviceExpos" class="p-4 border border-gray-100">
            Blala blal balablblbazlbabl...
          </div>
        </transition>
      </div>

      <div class="pb-5">
        <div class="flex bg-secondary text-white items-center" @click="show('servicePalette')">
          <div class="bg-primary p-5">
            <font-awesome-icon id="servicePaletteDown" icon="arrow-down" />
            <font-awesome-icon id="servicePaletteRight" icon="arrow-right" class="hidden" />
          </div>
          <div class="p-4">
            Service palettes
          </div>
        </div>

        <transition name="fade">
          <div id="servicePalette" class="p-4 border border-gray-100">
            Blala blal balablblbazlbabl...
          </div>
        </transition>
      </div>

      <div>
        <div class="flex bg-secondary text-white items-center" @click="show('serviceLogistique')">
          <div class="bg-primary p-5">
            <font-awesome-icon id="serviceLogistiqueDown" icon="arrow-down" />
            <font-awesome-icon id="serviceLogistiqueRight" icon="arrow-right" class="hidden" />
          </div>
          <div class="p-4">
            Service exploitation
          </div>
        </div>

        <transition name="fade">
          <div id="serviceLogistique" class="p-4 border border-gray-100">
            Blala blal balablblbazlbabl...
          </div>
        </transition>
      </div>
    </div>

    <div id="contact" class="bg-secondary mt-8 py-16 px-6 text-white">
      <div>
        <h1 class="text-center uppercase font-black text-lg text-white pb-12">
          Devis transport
        </h1>
        <p class="text-lightGray">
          Vous avez besoin d'un devis? Nous vous aidons à assurer chaque transport, même le plus exigeant. Nous sommes disponibles 24h/24, 7j/7. Pendant l’ouverture de nos bureaux (8h – 18h), nous garantissons le devis sous 30 minutes.
        </p>
        <div class="flex flex-col pt-5">
          <input type="text" class="text-white bg-gray border border-ddd my-2 p-3" placeholder="Lieu de chargement">
          <input type="text" class="text-white bg-gray border border-ddd my-2 p-3" placeholder="Lieu de livraison">
          <input type="text" class="text-white bg-gray border border-ddd my-2 p-3" placeholder="Description de la marchandise">
          <input type="text" class="text-white bg-gray border border-ddd my-2 p-3" placeholder="Email">
          <textarea
            id=""
            name=""
            cols="30"
            rows="5"
            class="text-white bg-gray border border-ddd my-2 p-3"
            placeholder="Informations complémentaire..."
          />
          <button class="bg-primary uppercase p-3 my-3">
            Envoyer
          </button>
        </div>
      </div>
    </div>

    <footer class="flex flex-col bg-secondary mt-3 py-16 px-6">
      <div class="mb-6">
        <div class="">
          <h2 class="footer-title text-lg text-white uppercase">
            <span>Notre societe</span>
          </h2>
        </div>

        <div class="text-lightGray">
          <img src="~assets/images/Logo_AlphaWhite.png" alt="" class="w-1/2 mb-3">
          <p>Nous sommes une jeune société de transport et d'affrètement en plein développement. Nous nous spécialisons dans le transport express de petit volume dans toute l'Europe.</p>
        </div>
      </div>

      <div class="mb-6">
        <div class="">
          <h2 class="footer-title text-lg text-white uppercase">
            <span>Nous contacter</span>
          </h2>
        </div>

        <div class="infos text-lightGray grid grid-cols-2 mb-6">
          <div><font-awesome-icon id="serviceExposDown" icon="map-marker-alt" /></div>
          <div class="pl-5">
            5 avenue Georges Bataille<br>60800 Le Plessis Belleville
          </div>
          <div><font-awesome-icon id="serviceExposDown" icon="phone-alt" /></div>
          <div class="pl-5">
            06 38 95 85 10
          </div>
          <div><font-awesome-icon id="serviceExposDown" icon="envelope" /></div>
          <div class="pl-5">
            transport@ptlexpress.com
          </div>
          <div><font-awesome-icon id="serviceExposDown" icon="clock" /></div>
          <div class="pl-5">
            Lu - Ve : 8h00 - 19h00
          </div>
        </div>

        <img width="640" src="https://maps.googleapis.com/maps/api/staticmap?center=Ptl+express+plessis+belleville&zoom=17&scale=false&size=640x600&maptype=roadmap&key=AIzaSyDPwNPGPcWaoJGomJ3LMzlV0XjNJqMFN9U&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C5avenue+georges+bataille+plessis+belleville&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CPtl+express+plessis+belleville" alt="Google Map of Ptl express plessis belleville">
      </div>
    </footer>
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
  },
  methods: {
    show: (elementId) => {
      const el = document.getElementById(elementId)
      if (el.style.display === 'none') {
        el.style.display = 'block'
        document.getElementById(elementId + 'Down').style.display = 'flex'
        document.getElementById(elementId + 'Right').style.display = 'none'
      } else {
        el.style.display = 'none'
        document.getElementById(elementId + 'Right').style.display = 'flex'
        document.getElementById(elementId + 'Down').style.display = 'none'
      }
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
.infos {
   grid-template-columns: min-content auto;
   grid-gap: 7px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
.footer-title span:after{
  border-color: transparent transparent transparent ;
  border-left-color: #204566;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 0 0 50px;
  position: absolute;
  top: 0;
  right: -50px;
}
.footer-title span {
  background-color: #204566;
    position: relative;
    display: inline-block;
    padding: 10px 10px 10px 20px;
}

.footer-title {
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .05em;
}

.footer-title:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
