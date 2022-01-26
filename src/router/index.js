import { createRouter, createWebHistory } from 'vue-router'

import PatientsView from '../views/PatientsView.vue'
import SinglePatientView from '@/views/SinglePatientView.vue'

const routes = [
  {
    path: '/',
    name: 'PatientsView',
    component: PatientsView,
    props: true,
  },
  {
    path: '/patient/:id',
    name: 'SinglePatientView',
    component: SinglePatientView,
    props: true,
  },
   {
    path: '/:pathMatch(.*)*',
    redirect: "/",
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router