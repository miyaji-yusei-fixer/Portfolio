import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/vue-router'
import vuetify from '@/plugins/vuetify'
// import vuex from '@/plugins/vuex'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  // vuex,
  render: h => h(App)
}).$mount('#app')
