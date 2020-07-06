import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars, faArrowRight, faArrowDown, faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock, faBuilding, faStopwatch, faTruckLoading, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faBars, faArrowRight, faArrowDown, faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock, faBuilding, faStopwatch, faTruckLoading, faLocationArrow)

Vue.component('font-awesome-icon', FontAwesomeIcon)
