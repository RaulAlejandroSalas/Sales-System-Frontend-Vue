import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:3000/api/'

//http://ec2-18-156-80-201.eu-central-1.compute.amazonaws.com:3000/
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
