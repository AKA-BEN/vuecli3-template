import Vue from 'vue'
import App from './App.vue'
import router from '@/router/user'
import store from '@/store/user'
// import 'base.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
