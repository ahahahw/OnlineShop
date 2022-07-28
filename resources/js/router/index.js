import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'some',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'product',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/products/:id',
      name: 'product.show',
      component: () => import('../views/product/Show.vue')
    },

  ]
})

export default router
