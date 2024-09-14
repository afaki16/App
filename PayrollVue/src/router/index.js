import { createRouter, createWebHistory } from 'vue-router'
import EmployeeList from '../components/EmployeeList.vue'
import PayList from '../components/PayList.vue'
import EmployeePays from '../components/EmployeePays.vue'
import CreateEmployee from '../components/CreateEmployee.vue'
import CreatePay from '../components/CreatePay.vue'

const routes = [
  { path: '/employee', component: EmployeeList },
//  { path: '/employee/:id', component: EmployeeDetail },
  { path: '/pay', component: PayList },
  { path: '/employeePays', component: EmployeePays },
  { path: '/employee/create', component: CreateEmployee },
  { path: '/pay/create', component: CreatePay }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
