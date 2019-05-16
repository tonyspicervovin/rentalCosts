import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
//import vuerouter library
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//configuring bootstrap
import billAPIService from '@/services/billService'
Vue.use(BootstrapVue)
Vue.prototype.$billAPIService = billAPIService
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
//instantiating my view app