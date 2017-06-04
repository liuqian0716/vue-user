import Login from '@/components/user/login'
import Enroll from '@/components/user/resgister'
import Res from '@/components/user/res'

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
    path: '/re',
    name: 're',
    component: Res
  }
]
