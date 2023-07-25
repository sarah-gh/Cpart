import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/sass/style.scss'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import VueCookies from 'vue3-cookies'
library.add(fas)
library.add(fab)
library.add(far)
dom.watch()

const app = createApp(App)

app.use(VueSweetalert2)
app.use(store).use(router).use(VueAxios, axios).component('font-awesome-icon', FontAwesomeIcon).use(VueCookies).mount('#app')

// Or to set default config:
app.use(VueCookies, {
  expireTimes: '1d',
  path: '/',
  domain: 'localhost',
  secure: true,
  sameSite: 'None'
})
