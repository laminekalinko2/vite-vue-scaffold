import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupRoutes } from '@/routes'
import './index.scss'

const app = createApp(App)

// vuex
setupStore(app)

// routes
setupRoutes(app)

app.mount('#app')
