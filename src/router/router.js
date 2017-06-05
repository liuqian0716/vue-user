import Login from '@/components/user/login'
import Enroll from '@/components/user/resgister'
import Success from '@/components/user/success'
import malf from '@/components/user/error'

export default[
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
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/error',
    name: 'error',
    component: malf
  }
]
