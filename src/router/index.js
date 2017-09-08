import Vue from 'vue'
import Router from 'vue-router'
import config from './router'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  // scrollBehavior (to, from, savePosition) {
  //   console.log(to)
  //   console.warn(from)
  //   console.log(savePosition)
  //   if (savePosition) {
  //     // return savePosition
  //     console.log(savePosition)
  //     return {x: 0, y: 0}
  //   } else {
  //     return {x: 0, y: 0}
  //   }
  // },
  routes: config
})
