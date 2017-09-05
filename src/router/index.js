import Vue from 'vue'
import Router from 'vue-router'
import config from './router'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  console.log(this.isBack)
  window.history.go(-1)
}
export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: config
})
