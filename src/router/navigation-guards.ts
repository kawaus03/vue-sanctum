import { NavigationGuard } from 'vue-router'
import { axios } from '@/plugins/axios'
import { store } from '@/store/index'

export const authMiddleware: NavigationGuard = async (to, from, next) => {
  await axios.get('/user')
    .then(response => {
      store.commit('user/setUser', response.data)
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
