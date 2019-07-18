import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    ]
  })
}
