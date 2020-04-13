import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'ThreeTest',
    component: () => import('../views/Scene/ThreeTest.vue')
  },
  {
    path: '/demo1',
    name: 'DEMO-1',
    component: () => import('../views/Scene/CreateFirstScene.vue')
  },
  {
    path: '/ambientLight',
    name: 'AmbientLight',
    component: () => import('../views/Light/AmbientLight.vue')
  },
  {
    path: '/areaLight',
    name: 'AreaLight',
    component: () => import('../views/Light/AirLight.vue')
  },
  {
    path: '/postprocesssing',
    name: 'Postprocessing',
    component: () => import('../views/Postprocessing/0-template.vue')
  },
  {
    path: '/component1',
    name: 'Component-1',
    component: () => import('../views/Capter2/1-basic-scene.vue')
  },
  {
    path: '/component2',
    name: 'FoggyScene',
    component: () => import('../views/Capter2/2-foggy-scene.vue')
  },
  {
    path: '/component3',
    name: 'ForcedMaterials',
    component: () => import('../views/Capter2/3-forced-material.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
