import { createRouter, createWebHistory } from 'vue-router'
import Token from '../views/Token.vue'
import Form from '../views/Form.vue'
import Calender from '../views/Calender.vue'
import Home from '../views/Home.vue'
import Reservation from '../views/Reservation.vue'
import Logout from '../views/Logout.vue'
import Update from '../views/Update.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/token',
    name: 'token',
    component: Token
  },
  {
    path: '/calender',
    name: 'calender',
    component: Calender
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token != undefined) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token == undefined) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/update/:token',
    name: 'udpate',
    component: Update
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router