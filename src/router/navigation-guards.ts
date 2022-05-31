import { NavigationGuard } from 'vue-router'
import { axios } from '../plugins/axios'

export const authMiddleware: NavigationGuard = async (to, from, next) => {
  await axios.get('/user')
    .then(response => {
      console.log('/user', response.data)
      next()
    })
    .catch((error) => {
      if (error.response.status === 401) {
        next('/login')
      }
      next()
    })
}

export const guestMiddleware: NavigationGuard = async (to, from, next) => {
  await axios.get('/sanctum/csrf-cookie')
    .catch((error) => {
      console.error('/sanctum/csrf-cookie', error)
    })
    .finally(() => {
      next()
    })
}
