import { RouteRecordRaw } from 'vue-router'

import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

export const HOME_PATH = '/home'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: HOME_PATH },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: HOME_PATH,
    name: 'Home',
    component: Home
  },
]
