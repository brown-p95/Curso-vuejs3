import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
  },
  {
    path: '/seccion3',
    name: 'seccion3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seccion3View.vue')
  },
  {
    path: '/seccion4',
    name: 'seccion4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seccion4View.vue')
  },
  {
    path: '/blog/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
