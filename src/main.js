import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCookies from 'vue-cookies-reactive'
import vmodal from 'vue-js-modal'

Vue.use(VueCookies)

Vue.use(vmodal, {'maxWidth': '50px'})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.$cookies.set("LoggedIn", false)
