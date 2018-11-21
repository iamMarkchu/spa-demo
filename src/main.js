import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'jquery'
import 'popper.js'
import 'bootstrap'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
