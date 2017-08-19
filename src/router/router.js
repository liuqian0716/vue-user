import Login from '@/components/user/login'
import Success from '@/components/user/success'
import malf from '@/components/user/error'
import input from '@/components/user/input'
import Child from '@/components/user/child'

export default[
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/error',
    name: 'error',
    component: malf
  },
  {
    path: '/input',
    name: 'input',
    component: input
  },
  {
    path: '/child/:pay',
    name: 'child',
    component: Child
  }
]
