// imports
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// router
import { router } from './routes/router'

// store
const store = createPinia()

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
