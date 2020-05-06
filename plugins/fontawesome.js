import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faBars, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
