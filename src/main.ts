import { createApp } from 'vue'
import router from './router'
import { store, key } from './store'
import App from './App.vue'

createApp(App)
  .use(store, key)
  .use(router)
  .mount('#app')
