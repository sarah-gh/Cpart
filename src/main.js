import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/sass/style.scss'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import VueCookies from 'vue3-cookies'

const app = createApp(App);

app.use(store).use(router).use(VueAxios, axios).component("font-awesome-icon", FontAwesomeIcon).use(VueCookies).mount('#app')

// Or to set default config:
app.use(VueCookies, {
    expireTimes: "1d",
    path: "/",
    domain: "localhost",
    secure: true,
    sameSite: "None"
});