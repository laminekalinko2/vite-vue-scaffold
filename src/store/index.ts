import { App } from 'vue'
import { createStore, createLogger, Plugin } from 'vuex'

import { isDevMode } from '@/utils/env'

const isDev = isDevMode()
const plugins: Plugin<unknown>[] = isDev ? [createLogger()] : []

const store = createStore({
   strict: isDev,
   plugins,
   state: {},
   mutations: {},
   actions: {},
   modules: {},
})

export function setupStore(app: App): void {
   console.log('Setting up store')
   app.use(store)
}
