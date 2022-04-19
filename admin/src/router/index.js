import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/hone'),
    children: [{ path: '/users', component: () => import('../views//users') }],
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login')
  }

]

const router = new VueRouter({
  routes
})

export default router
