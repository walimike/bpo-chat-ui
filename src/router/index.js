import Vue from 'vue'
import Router from 'vue-router'

import SignUp from '@/components/SignUp'
import Login from '@/components/Login'

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
    }
  ]
})
