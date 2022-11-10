import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: () => import('../views/CatalogView.vue')

  },
  {
    path: '/add-good',
    name: 'add-good',
    component: () => import('../views/AddGoodView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
