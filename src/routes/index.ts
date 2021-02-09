import type { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes: routes,
   strict: true,
   scrollBehavior: async (to, from, savedPosition) => {
      // await scrollWaiter.wait();
      if (savedPosition) {
         return savedPosition
      } else {
         if (to.matched.every((record, i) => from.matched[i] !== record)) {
            return { left: 0, top: 0 }
         }
         return false
      }
   },
})

export function setupRoutes(app: App<Element>): void {
   console.log('Setting up routes')
   app.use(router)
}

export default router
