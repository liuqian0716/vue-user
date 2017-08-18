import Login from '@/components/user/login'
import Success from '@/components/user/success'
import malf from '@/components/user/error'
import input from '@/components/user/input'
import Child from '@/components/user/child'
import Test from '@/components/user/test'
import Add from '@/components/test/add'
import Select from '@/components/data/select'
import Directive from '@/components/data/directive'

export default [{
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
},
{
  path: '/test',
  name: 'test',
  component: Test
},
{
  path: '/add',
  name: 'add',
  component: Add
},
{
  path: '/select',
  name: 'select',
  component: Select
},
{
  path: '/directive',
  name: 'directive',
  component: Directive
}
]
