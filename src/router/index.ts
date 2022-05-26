import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import { routes } from './routes'

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes
}

const router = createRouter(routerOptions)

export default router
