// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './components/api'

Vue.prototype.ajax = Api
Vue.config.productionTip = false

Vue.component('el-input', {
  template: '<input type="text" />'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
