import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.scss'
import router from './router'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import 'swiper/css/swiper.css'

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api/'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
