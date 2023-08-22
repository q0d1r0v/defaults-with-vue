// imports
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import pinia
import { createPinia } from 'pinia'

// import quasar
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// router
import { router } from './routes/router'

// store
const store = createPinia()

createApp(App)
    .use(router)
    .use(store)
    .use(Quasar, {})
    .mount('#app')
