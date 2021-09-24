import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/sass/style.scss'
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(store).use(router).use(VueAxios, axios).mount('#app')
