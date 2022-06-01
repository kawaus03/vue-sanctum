import { createApp } from 'vue'
import router from './router'
import { store, key } from './store'
import i18n from './plugins/i18n'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App)
  .use(i18n)
  .use(store, key)
  .use(router)
  .mount('#app')
