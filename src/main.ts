import { createApp } from 'vue'
import router from './router'
import { store, key } from './store'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App)
  .use(store, key)
  .use(router)
  .mount('#app')
