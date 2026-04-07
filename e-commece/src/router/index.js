import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import LoginView from '@/views/LoginView.vue'
import CadItemView from '@/views/CadItemView.vue'
import CarrinhosView from '@/views/CarrinhosView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/produtos', name: 'Produtos', component: ProductsView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/cadastro', name: 'Cadastro', component: CadItemView },
  { path: '/Carrinho' , name: 'Carrinho', component: CarrinhosView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
