import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: HomePage
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// export default {router} salah
export default router
