import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/test',
    name: 'ThreeTest',
    component: () => import('../views/Scene/ThreeTest')
  },
  {
    path: '/demo1',
    name: 'DEMO-1',
    component: () => import('../views/Scene/CreateFirstScene')
  },
  // {
  //   path: '/ambientLight',
  //   name: 'AmbientLight',
  //   component: () => import('../views/Light/AmbientLight')
  // },
  // {
  //   path: '/areaLight',
  //   name: 'AreaLight',
  //   component: () => import('../views/Light/AirLight')
  // },
  {
    path: '/postprocesssing',
    name: 'Postprocessing',
    component: () => import('../views/Postprocessing/0-template')
  },
  {
    path: '/component1',
    name: 'Component-1',
    component: () => import('../views/Capter2/1-basic-scene')
  },
  {
    path: '/component2',
    name: 'FoggyScene',
    component: () => import('../views/Capter2/2-foggy-scene')
  },
  {
    path: '/component3',
    name: 'ForcedMaterials',
    component: () => import('../views/Capter2/3-forced-material')
  },
  {
    path: '/component4',
    name: 'Geometries',
    component: () => import('../views/Capter2/4-geometries')
  },
  {
    path: '/component5',
    name: 'CustomGeometry',
    component: () => import('../views/Capter2/5-custom-geometry')
  },
  {
    path: '/component6',
    name: 'MeshProperties',
    component: () => import('../views/Capter2/6-mesh-properties')
  },
  {
    path: '/component7',
    name: 'BothCameras',
    component: () => import('../views/Capter2/7-both-cameras')
  },
  {
    path: '/component8',
    name: 'CamerasLookAt',
    component: () => import('../views/Capter2/8-cameras-lookat')
  },
  {
    path: '/component31',
    name: 'AmbientLight',
    component: () => import('../views/Capter3/1-ambient-light')
  },
  {
    path: '/component32',
    name: 'SpotLight',
    component: () => import('../views/Capter3/2-spot-light')
  },
  {
    path: '/component33',
    name: 'PointLight',
    component: () => import('../views/Capter3/3-point-light')
  },
  {
    path: '/component34',
    name: 'DirectionLight',
    component: () => import('../views/Capter3/4-direction-light')
  },
  {
    path: '/component35',
    name: 'HemisphereLight',
    component: () => import('../views/Capter3/5-hemisphere-light')
  },
  {
    path: '/component36',
    name: 'AreaLight',
    component: () => import('../views/Capter3/6-area-light')
  },
  {
    path: '/component37',
    name: 'LensFlares',
    component: () => import('../views/Capter3/7-lensflares')
  },
  {
    path: '/lensflares',
    name: 'Threejs-Lensflares',
    component: () => import('../views/ThreejsExample/Lensflares.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
