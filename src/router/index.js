import Vue from 'vue'
import Router from 'vue-router'

import SignUp from '@/components/auth/SignUp'
import Login from '@/components/auth/Login'
import Home from '@/components/chats/Home'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
