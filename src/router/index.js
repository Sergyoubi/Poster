import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import GetAll from '../views/GetAll.vue'
import GetOnePost from '../views/GetOnePost.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create/post',
    name: 'Create',
    component: Create
  },
  {
    path: '/all/post',
    name: 'GetAll',
    component: GetAll
  },
  {
    path: '/all/post/id',
    name: 'GetOnePost',
    component: GetOnePost
  },
  {
    path: '/404', 
    name: 'NotFound', 
    component: NotFound
  },
  {
    path: '/:catchAll(.*)', 
    redirect:'/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
