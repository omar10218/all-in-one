import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'
import MenuView from '../views/menu/MenuView.vue'

//advertise
import AdvertiseView1 from '../views/advertise/AdvertiseView1.vue'

//coupon
import CouponView1 from '../views/coupon/CouponView1.vue'

//demand-list
import DemandListView1 from '../views/demand-list/DemandListView1.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu/:name/:pass',
    name: 'menu',
    component: MenuView,
    props: true,
    children:[
      {
        path: '/advertiseView1',
        component: AdvertiseView1
      },
      {
        path: '/couponView1',
        component: CouponView1
      },
      {
        path: '/demandListView1',
        component: DemandListView1
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
