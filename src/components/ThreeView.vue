<template>
    <div>
        <div id='webgl-output' ref='webgl-output'></div>
    </div>
</template>

<script>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

  import Stats from 'three/examples/jsm/libs/stats.module.js'
  import dat from 'three/examples/jsm/libs/dat.gui.module.js'

  export default {
    name: 'ThreeView',
    data () {
      return {
        scene: '',
        camera: '',
        renderer: '',
        controls: '',
        Stats: ''
      }
    },
    props: {
      ifStats: {
        type: Boolean,
        default: false
      },
      panelType: {
        type: Number,
        default: 0
      },
      cameraPosition: {
        type: THREE.Vector3,
        default: undefined
      }
    },
    mounted () {

      this.scene = new THREE.Scene()

      this.initCamera(this.cameraPosition)
      this.initStats(this.panelType)
      this.initRenderer()

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.render()

    },
    created () {

      window.addEventListener('resize', () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
      })

    },
    methods: {

      setUpControls(func) {
        var gui = new dat.GUI();
        for(var key in func.keys()) {
          gui.add(func, key);
        }
        // todo unfinished
        return gui
      },

      /**
       * Initialize a simple camera and point it at the center of a scene
       *
       * @param {THREE.Vector3} [initialPosition]
       */
      initCamera (initialPosition) {
        var position = (initialPosition !== undefined) ? initialPosition : new THREE.Vector3(-30, 40, 30)

        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.copy(position)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        this.camera = camera
      },
      /**
       * Initialize a simple default renderer and binds it to the "webgl-output" dom
       * element.
       *
       * @param additionalProperties Additional properties to pass into the renderer
       */
      initRenderer (additionalProperties) {
        var props = (typeof additionalProperties !== 'undefined' && additionalProperties) ? additionalProperties : {}
        var renderer = new THREE.WebGLRenderer(props)
        renderer.shadowMap.enabled = true
        renderer.shadowMapSoft = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap

        renderer.setClearColor(new THREE.Color(0x000000))
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.shadowMap.enabled = true
        this.$refs['webgl-output'].appendChild(renderer.domElement)

        this.renderer = renderer
      }
      ,
      /**
       * Initialize the statistics domelement
       *
       * @param {Number} type 0: fps, 1: ms, 2: mb, 3+: custom
       * @returns stats javascript object
       */
      initStats (type) {

        if (this.ifStats === true) {

          var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0
          var stats = new Stats()

          stats.showPanel(panelType) // 0: fps, 1: ms, 2: mb, 3+: custom
          this.$refs['webgl-output'].appendChild(stats.dom)

          // return stats;
          this.Stats = stats
        }
      },
      render () {
        requestAnimationFrame(this.render)
        this.renderer.render(this.scene, this.camera)
      },
      getScene () {
        return this.scene
      },
      getCamera () {
        return this.camera
      },
      getRenderer () {
        return this.renderer
      }
    }
  }
</script>

<style lang="less">

</style>
