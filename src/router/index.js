import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Enroll from '@/components/resgister'
import Res from '@/components/res'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: Enroll
    },
    {
      path: '/re',
      name: 're',
      component: Res
    }
  ]
})
