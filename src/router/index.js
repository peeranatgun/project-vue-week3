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
    component: () => import( '../views/AboutView.vue')
  },
   {
    path: '/customer',
    name: 'customer',
    component: () => import( '../views/customer.vue')
  },
  {
    path: '/employee',
    name: 'employee',
    component: () => import( '../views/employee.vue')
  } ,
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import( '../views/Add_customer.vue')
  } ,
    {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import( '../views/Add_employee.vue')
  },
   {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/contact.vue')
  },
   {
    path: '/add_contact',
    name: 'add_contact',
    component: () => import( '../views/add_contact.vue')
  },
  {
    path: '/customer_crud',
    name: 'customer_crud',
    component: () => import( '../views/Customer_crud.vue')
  },
  {
    path: '/employee_crud',
    name: 'employee_crud',
    component: () => import( '../views/employee_crud.vue')
  },
  {
    path: '/contact_crud',
    name: 'contact_crud',
    component: () => import( '../views/contact_crud.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
