import Vue from 'vue'
import App from './App.vue'
import router from '@/router/mall'
import store from '@/store/mall'
// import 'base.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
