import axiosBase, { AxiosInstance, AxiosError } from 'axios'
import router from '~/router/index'

export interface ApiResponse<T> {
  payload: T;
  errorMessages: string[];
}

const config = {
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
}

const axios: AxiosInstance = axiosBase.create(config)

axios.interceptors.response.use(
  response => response,
  (error: AxiosError<ApiResponse<undefined>>) => {
    if (error.response) {
      if (error.response.status === 403) {
        router.push('/not-found')
      }
      if (error.response.status === 422) {
        console.error('422 Unprocessable Entity', error.response.data.errorMessages)
      }
      if (error.response.status === 500) {
        console.error('500 Internal Server Error')
      }
    }
    return Promise.reject(error)
  }
)

export { axios }
