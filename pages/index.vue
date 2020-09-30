<template>
  <div class="">
    <!-- <vue-horizontal-list class="caroussel" :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item">
          <img :src="item.path" alt="">
        </div>
      </template>
    </vue-horizontal-list> -->

    <div class="caroussel relative h-1/2">
      <div class="logoContainer">
        <div class="logoAnimate text-center w-1/2">
          <img src="../assets/images/Group2.png" alt="">
        </div>
        <div class="flex justify-center">
          <a href="#services"><button class="bg-primary p-4 text-white uppercase font-bold">Decouvrez nos services</button></a>
        </div>
      </div>
    </div>

    <div id="societe" class="bg-secondary mt-8 py-16 px-6 text-white">
      <div class="container lg:flex">
        <div class="flex-1">
          <h1 class="pb-3 text-xl font-bold">
            PTL EXPRESS
          </h1>
          <p>Nous sommes une jeune société de transport et d'affrètement en plein développement. Nous nous spécialisons dans le transport express de petit volume dans toute l'Europe. Nous sommes devenus en peu de temps une société polonaise dominante sur le marché français. Notre équipe est jeune, dynamique et qualifiée, prête à relever chaque défi.</p>
          <p><br>Nos atouts:<br>Disponibilité – 24h/24 et 7j/7.<br>Réactivité – Devis immédiat de votre transport.<br>Engagement – Nous nous efforçons de répondre à toutes vos demandes.<br>Qualité – Notre équipe assure le suivi de vos transports et veille au respect des délais de chargement et de livraison.<br>Multilinguisme – Français, anglais, allemand, espagnol, italien.<br></p>
        </div>
        <div class="flex-1 pt-16 lg:pt-0 lg:p-6">
          <img src="~assets/images/egb2.jpg" alt="" width="500">
        </div>
      </div>
    </div>

    <div id="services" class="py-6 px-6 ">
      <h1 class="text-center uppercase font-black text-2xl text-secondary pt-6 pb-12">
        Nos services
      </h1>

      <div class="container">
        <!--

            BLOC SERVICE EXPRESS

         -->
        <div class="pb-16">
          <div class="serviceHeader flex bg-secondary text-white items-center" @click="show('serviceExpress')">
            <div class="bg-primary p-5">
              <font-awesome-icon id="serviceExpressDown" icon="arrow-down" />
              <font-awesome-icon id="serviceExpressRight" icon="arrow-right" class="hidden" />
            </div>
            <div class="p-4 font-bold uppercase">
              Service express
            </div>
          </div>

          <transition name="fade">
            <div id="serviceExpress" class="p-4 border border-gray-100">
              <div class="flex">
                <div class="flex-1">
                  <img src="~assets/images/vls.jpg" alt="">
                </div>

                <div class="flex-1 text-primary font-semibold px-4">
                  Pour tous vos envois <span class="font-bold text-secondary">urgent</span> en France ou à l'International.<br><br>
                  Tout type de conditionement jusqu'à <span class="text-secondary font-bold">25 tonnes</span>, tarif ajusté grâce à un flotte complètes qui permet de s'adapter a la nature de la marchandise.<br><br>
                  Transport dédié <span class="text-secondary font-bold">sans rupture de charges</span>.<br>
                  <span class="font-bold text-secondary">Assurance ad valorem</span> pour vos envois sensibles sur demande.<br><br>
                  Demander votre devis immédiat.
                </div>
              </div>

              <div class="flex mt-6">
                <div class="flex flex-1 text-center font-bold text-secondary">
                  <div class="serviceIcon flex items-center flex text-secondary">
                    <font-awesome-icon icon="stopwatch" size="4x" class="p-2 text-secondary" /><br>24/48h*
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="truck-loading" size="4x" class="ml-4 p-2" />Jusqu'à 22T**
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="location-arrow" size="4x" class="ml-4 p-2" />Tracking GPS
                  </div>
                </div>

                <div class="flex text-right justify-end">
                  <a href="mailto:transport@ptlexpress.com?subject=Demande%20devis%20transport">
                    <button class="bg-primary text-white uppercase p-3 my-3">
                      Demander votre devis
                    </button>
                  </a>
                </div>
              </div>

              <div class=" flex text-lightGray">
                <div class="flex">
                  * Transit time variable selon destination.<br>
                  ** Hors alcools et denrées périsables. Tout conditionement.
                </div>
                <div class="flex flex-1 text-right flex-col">
                  <div>
                    <font-awesome-icon icon="envelope" />
                    <a href="mailto:transport@ptlexpress.com">transport@ptlexpress.com</a>
                  </div>
                  <div>
                    <font-awesome-icon icon="phone-alt" />
                    <a href="phone:+33380700080">+33 3.60.80.00.70</a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!--

            BLOC SERVICE EXPO

         -->
        <div class="pb-16">
          <div class="serviceHeader flex bg-secondary text-white items-center" @click="show('serviceExpos')">
            <div class="bg-primary p-5">
              <font-awesome-icon id="serviceExposDown" icon="arrow-down" class="flex" />
              <font-awesome-icon id="serviceExposRight" icon="arrow-right" class="hidden" />
            </div>
            <div class="p-4 font-bold uppercase">
              Service expos
            </div>
          </div>

          <transition name="fade">
            <div id="serviceExpos" class="p-4 border border-gray-100">
              <div class="flex flex-row-reverse">
                <div class="flex-1">
                  <img src="~assets/images/salon.png" alt="">
                </div>

                <div class="flex-1 text-primary font-semibold px-4">
                  Notre equipe est là pour vous soutenir pendant toute la durée de votre exposition.<br><br>
                  Grâce à notre <span class="font-bold text-secondary">expérience</span> dans la logistique de salon, nous vous proposons nos services pour la préparation et la mise en place de votre stand.<br><br>
                  <span class="font-bold text-secondary">Transport</span> de vos marchandises, meubles et stand. <span class="text-secondary font-bold">Livraison sur stand.</span><br>
                  <span class="font-bold text-secondary">Stockage</span> de vos emballages.<br>
                  <span class="font-bold text-secondary">Montage, démontage</span> de stand, fabrication sur mesure sur demande.<br><br>
                  Ainsi que de multiples services annexes.<br><br>
                  Vous pourrez comptez sur une équipe experimenté. Devis personalisé.<br><br>
                </div>
              </div>

              <div class="flex mt-6">
                <div class="flex flex-1">
                  <a href="mailto:expos@ptlexpress.com?subject=Demande%20devis%20expos%20service">
                    <button class="bg-primary text-white uppercase p-3 my-3">
                      Devis personalisé
                    </button>
                  </a>
                </div>

                <div class="flex text-secondary font-bold">
                  <div class="serviceIcon flex items-center flex text-secondary">
                    <font-awesome-icon icon="ruler-combined" size="4x" class="p-2 mr-2 text-secondary" /><br>Prestation<br>sur mesure
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="handshake" size="4x" class="p-2 ml-4 mr-2" />Service client<br>dédié
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="clock" size="4x" class="p-2 ml-4 mr-2" />Astreinte<br>24h/24h
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="flex flex-1 flex-col text-lightGray">
                  <div>
                    <font-awesome-icon icon="envelope" />
                    <a href="mailto:expo@ptlexpress.com">expo@ptlexpress.com</a>
                  </div>
                  <div>
                    <font-awesome-icon icon="phone-alt" />
                    <a href="phone:+33380700080">+33 3.60.80.00.71</a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!--

            BLOC SERVICE SPECIAL

         -->
        <div class="pb-16">
          <div class="serviceHeader flex bg-secondary text-white items-center" @click="show('serviceSpecial')">
            <div class="bg-primary p-5">
              <font-awesome-icon id="serviceSpecialDown" icon="arrow-down" class="flex" />
              <font-awesome-icon id="serviceSpecialRight" icon="arrow-right" class="hidden" />
            </div>
            <div class="p-4 font-bold uppercase">
              Special service
            </div>
          </div>

          <transition name="fade">
            <div id="serviceSpecial" class="p-4 border border-gray-100">
              <div class="flex flex-row">
                <div class="flex-1">
                  <img src="~assets/images/heavy.jpg" alt="">
                </div>

                <div class="flex-1 text-primary font-semibold px-4">
                  Vuus êtes embetez avec un transport qui sors de l'ordinaire. Nous avons la <span class="font-bold text-secondary">solution</span>.<br><br>
                  Transport de charges lourdes, de produits délicats. Rendez-vous de livraison, livraison dans centre commerciaux, manutention, accèes difficile.<br><br>
                  Transport avec contrainte de rendez-vous, de charges lourdes, avec manutention lourdes, ou tout ce qui sort de l'ordinaire.<br><br>
                  Contactez-nous.<br><br>
                </div>
              </div>

              <div class="flex mt-6">
                <div class="flex flex-1 text-center text-secondary font-bold">
                  <div class="serviceIcon flex items-center flex text-secondary">
                    <font-awesome-icon icon="weight-hanging" size="4x" class="p-2 text-secondary" /><br>Charges<br>lourdes
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="glass-martini" size="4x" class="ml-4 p-2" />Transport délicat
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="people-carry" size="4x" class="ml-4 p-2" />Manutention
                  </div>
                </div>

                <div class="flex">
                  <a href="mailto:transport@ptlexpress.com?subject=Demande%20devis%special%20service">
                    <button class="bg-primary text-white uppercase p-3 my-3">
                      Devis personalisé
                    </button>
                  </a>
                </div>
              </div>

              <div class="flex flex-1 text-right text-lightGray flex-col">
                <div>
                  <font-awesome-icon icon="envelope" />
                  <a href="mailto:transport@ptlexpress.com">transport@ptlexpress.com</a>
                </div>
                <div>
                  <font-awesome-icon icon="phone-alt" />
                  <a href="phone:+33380700080">+33 3.95.00.70.80</a>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!--

            BLOC SERVICE DEM

         -->
        <div class="pb-8">
          <div class="serviceHeader flex bg-secondary text-white items-center" @click="show('serviceDem')">
            <div class="bg-primary p-5">
              <font-awesome-icon id="serviceDemDown" icon="arrow-down" class="flex" />
              <font-awesome-icon id="serviceDemRight" icon="arrow-right" class="hidden" />
            </div>
            <div class="p-4 font-bold uppercase">
              Service demenagement
            </div>
          </div>

          <transition name="fade">
            <div id="serviceDem" class="p-4 border border-gray-100">
              <div class="flex flex-row-reverse">
                <div class="flex-1">
                  <img src="~assets/images/dem.webp" alt="">
                </div>

                <div class="flex-1 text-primary font-semibold px-4">
                  Au fil des années, nous avons su développer notre expertise du <span class="font-bold text-secondary">déménagement</span>.<br><br>

                  Du simple transport de vos cartons et meubles, à l'emballage, démontage et la protection de vos affaires fragile. Notre vaste gamme de services conviendra à tous les budgets aux exigences les plus pointues.
                  <br><br>Nous pouvons vous fournir tout le matériel necessaire.<br><br>

                  Devis gratuit suite à une visite préalable.
                </div>
              </div>

              <div class="flex mt-6">
                <div class="flex flex-1">
                  <a href="mailto:transport@ptlexpress.com?subject=Demande%20devis%20demenagement%20">
                    <button class="bg-primary text-white uppercase p-3 my-3">
                      Devis personalisé
                    </button>
                  </a>
                </div>

                <div class="flex text-secondary font-bold">
                  <div class="serviceIcon flex items-center flex text-secondary">
                    <font-awesome-icon icon="ruler-combined" size="4x" class="p-2 mr-2 text-secondary" /><br>Prestation<br>sur mesure
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="handshake" size="4x" class="p-2 ml-4 mr-2" />Service client<br>dédié
                  </div>
                  <div class="serviceIcon flex items-center flex">
                    <font-awesome-icon icon="clock" size="4x" class="p-2 ml-4 mr-2" />Astreinte<br>24h/24h
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="flex flex-1 flex-col text-lightGray">
                  <div>
                    <font-awesome-icon icon="envelope" />
                    <a href="mailto:transport@ptlexpress.com">transport@ptlexpress.com</a>
                  </div>
                  <div>
                    <font-awesome-icon icon="phone-alt" />
                    <a href="phone:+33380700080">+33 3.60.80.00.71</a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div id="devis" class="bg-secondary lg:bg-white mt-8 mt-16 px-6 text-white">
      <div class="container lg:grid lg:grid-cols-2">
        <div class="bg-transparent" />
        <div class="form relative">
          <h1 class="text-center uppercase font-black text-lg text-white pb-12 pt-12">
            Devis transport
          </h1>
          <p class="text-lightGray">
            Vous avez besoin d'un devis? Nous vous aidons à assurer chaque transport, même le plus exigeant. Nous sommes disponibles 24h/24, 7j/7. Pendant l’ouverture de nos bureaux (8h – 18h), nous garantissons le devis sous 30 minutes.
          </p>
          <div class="flex flex-col pt-5">
            <form id="formcontact" action="https://mailthis.to/contact@ptlexpress.com" method="POST" encType="multipart/form-data">
              <div class="lg:grid lg:grid-cols-2 lg:gap-3">
                <input type="text" name="Chargement" class="w-full text-white bg-gray border border-ddd my-2 p-3" placeholder="Lieu de chargement">
                <input type="text" name="Livraison" class="w-full text-white bg-gray border border-ddd my-2  p-3" placeholder="Lieu de livraison">
                <input type="text" name="Marchandise" class="w-full text-white bg-gray border border-ddd my-2 p-3" placeholder="Description de la marchandise">
                <input type="email" name="_replyto" class="w-full text-white bg-gray border border-ddd my-2 p-3" placeholder="Votre email">
              </div>

              <div class="">
                <textarea
                  id=""
                  name="Informations"
                  cols="30"
                  rows="4"
                  class="text-white bg-gray border border-ddd my-2 p-3 lg:w-full"
                  placeholder="Informations complémentaire..."
                />
              </div>

              <div class="flex justify-center pb-12">
                <input type="hidden" name="_subject" value="Devis site">
                <input type="hidden" name="_after" value="https://ptlexpress.com">
                <input type="hidden" name="_honeypot" value="">
                <button type="submit" form="formcontact" value="Submit" class="bg-primary uppercase p-3 my-3">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer id="footer" class="bg-secondary mt-3 py-16 px-6">
      <div class="container flex flex-col lg:flex-row">
        <div class="mb-6 p-6 flex-1">
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

        <div class="mb-6 p-6 flex-1">
          <div class="">
            <h2 class="footer-title text-lg text-white uppercase">
              <span>Nous contacter</span>
            </h2>
          </div>

          <div class="infos text-lightGray grid grid-cols-2 mb-6">
            <div><font-awesome-icon icon="map-marker-alt" /></div>
            <div class="pl-5">
              5 avenue Georges Bataille<br>60800 Le Plessis Belleville
            </div>
            <div><font-awesome-icon icon="phone-alt" /></div>
            <div class="pl-5">
              06 38 95 85 10
            </div>
            <div><font-awesome-icon icon="envelope" /></div>
            <div class="pl-5">
              transport@ptlexpress.com
            </div>
            <div><font-awesome-icon icon="clock" /></div>
            <div class="pl-5">
              Lu - Ve : 8h00 - 19h00
            </div>
          </div>
        </div>

        <div class="p-6 flex-1">
          <img width="640" height="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=Ptl+express+plessis+belleville&zoom=17&scale=false&size=640x600&maptype=roadmap&key=AIzaSyASRAw2wo36_2sAm2wz4PR8ZycKGJRNIn4&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C5avenue+georges+bataille+plessis+belleville&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CPtl+express+plessis+belleville" alt="Google Map of Ptl express plessis belleville">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
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
        { path: require('../assets/images/012362541.png') },
        { path: require('../assets/images/01251619.jpg') },
        { path: require('../assets/images/1647763.jpg') }
      ]
    }
  },
  mounted () {
    setTimeout(
      function () {
        document.querySelector('.logoAnimate').classList.add('animateLogo')
      }, 1000)
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

.caroussel {
  background-image: url("../assets/images/transport_1920.png");
  background-position: center;
  background-size: cover;
}

.logoContainer {
  height: 80vh;
  background: rgba(0,0,0,0.2);
}
.logoAnimate {
  margin: auto;
  padding-top: 100px;
  padding-bottom: 50px;
  width: 10px;
  /* display: none; */
}
.animateLogo {
    display: block;
    width: 500px;
    transition: 1s ease-in-out;
}

button {
  width: max-content;
}
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

.caroussel {
  max-height: 80vh;
  overflow: hidden;
}
.caroussel img {
  object-fit: cover;
}
.vhl-navigation {
  padding-left: 150px;
  padding-right: 150px;
}

.serviceHeader {
  cursor: pointer;
}

@media screen and (min-width: 500px) {

#devis {
  overflow: hidden;
  background-image: url("http://globalprospect.eu/wp-content/uploads/2015/06/parallax021.jpg");
  background-position: center;
  background-size: cover;
}
.form {
  opacity: .95;
  background-color: #232331;
}
.form::before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 300px 700px 0;
  border-color: transparent transparent transparent transparent;
      border-right-color: transparent;
  position: absolute;
  left: -300px;
  border-right-color: #232331;
}
.form:after {
  content: '';
  position: absolute;
  right: -800px;
  width: 800px;
  top: 0;
  bottom: 0;
  background-color: #232331;
}
}

</style>
