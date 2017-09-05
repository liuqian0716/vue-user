// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './components/api'
import store from './store'
import jquery from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/* 妙味课件学习 */
import '@/assets/css/app'

Vue.use(ElementUI)
Vue.prototype.ajax = Api
Vue.config.productionTip = false
// Vue.http.defaults.withCredentials = true
window.jquery = window.$ = jquery

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
