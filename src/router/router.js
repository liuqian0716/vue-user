import Login from '@/components/user/login'
import Success from '@/components/user/success'
import malf from '@/components/user/error'
import input from '@/components/user/input'
import Child from '@/components/user/child'
import Test from '@/components/user/test'
import pageA from '@/components/user/pageA'
import pageB from '@/components/user/pageB'
import Add from '@/components/test/add'
import Select from '@/components/data/select'
import Directive from '@/components/data/directive'
import PageTransition from '@/components/user/PageTransition'
/* miaov例子 */
import Home from '@/components/miaov-eg/home'
import About from '@/components/miaov-eg/about'
import Document from '@/components/miaov-eg/document'
import Work from '@/components/miaov-eg/work'
import Hobby from '@/components/miaov-eg/hobby'
import Study from '@/components/miaov-eg/study'

export default [{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/PageTransition',
  component: PageTransition,
  children: [{
    path: '',
    component: Login,
    name: 'PageTransition'
  }, {
    path: 'pageA',
    component: pageA
  }, {
    path: 'pageB',
    component: pageB
  }]
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
},
{
  path: '/',
  component: Home
},
{
  path: '/home',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  component: About,
  children: [
    {
      path: '',
      component: Study,
      name: 'about'
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: Hobby
    }
  ]
},
{
  path: '/document',
  name: 'document',
  component: Document
},
{
  path: '*',
  // component: noFound
  // 重定向
  // redirect: '/home'
  // redirect: {path: '/home'}
  // redirect: {name: 'About'}
  redirect: (to) => {  // 动态设置重定向的目标
    // 目标路由对象，就是访问的路径的路由信息
    console.log(to)
    if (to.path === '/123') {
      return '/home'
    } else if (to.path === '/456') {
      return {path: '/document'}
    } else {
      return {name: 'about'}
    }

    // return '/home'
  }
}
]
