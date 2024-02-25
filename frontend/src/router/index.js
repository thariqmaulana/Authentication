import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'


const routes = [
  {
    path: '/home',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// export default {router} salah
export default router
