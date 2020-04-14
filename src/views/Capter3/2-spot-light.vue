<template>
    <div>
        <three-view ref="spot-light"></three-view>
    </div>
</template>

<script>

  import * as THREE from 'three'
  import { addGroundPlane, addDefaultCubeAndSphere } from '../../utils/js/util'

  export default {
    name: 'SpotLight',
    mounted () {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      var scene = this.$refs['spot-light'].getScene()
      // create a camera, which defines where we're looking at.
      var camera = this.$refs['spot-light'].getCamera()
      // create a render and set the size
      var renderer = this.$refs['spot-light'].getRenderer()

      // ===================================
      var cubeAndSphere = addDefaultCubeAndSphere(scene)
      var cube = cubeAndSphere.cube
      var sphere = cubeAndSphere.sphere
      var plane = addGroundPlane(scene)

      // add subtle ambient lighting
      var ambiColor = '#1c1c1c'
      var ambientLight = new THREE.AmbientLight(ambiColor)
      scene.add(ambientLight)

      // add spotlight for a bit of light
      var spotLight0 = new THREE.SpotLight(0xcccccc)
      spotLight0.position.set(-40, 30, -10)
      spotLight0.lookAt(plane)
      scene.add(spotLight0)

      // add target and light
      var target = new THREE.Object3D()
      target.localToWorld(new THREE.Vector3(5, 0, 0))

      var spotLight = new THREE.SpotLight('#ffffff')
      spotLight.position.set(-40, 60, -10)
      spotLight.castShadow = true
      spotLight.shadow.camera.near = 1
      spotLight.shadow.camera.far = 100
      spotLight.target = plane
      spotLight.distance = 0
      spotLight.angle = 0.4
      spotLight.shadow.camera.fov = 120
      scene.add(spotLight)
      var debugCamera = new THREE.CameraHelper(spotLight.shadow.camera)

      var pp = new THREE.SpotLightHelper(spotLight)
      scene.add(pp)

      // add a small sphere simulating the pointlight
      var sphereLight = new THREE.SphereGeometry(0.2)
      var sphereLightMaterial = new THREE.MeshBasicMaterial({
        color: 0xac6c25
      })
      var sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial)
      sphereLightMesh.castShadow = true

      sphereLightMesh.localToWorld(new THREE.Vector3(3, 20, 3))
      scene.add(sphereLightMesh)

      // for controlling the rendering
      var step = 0
      var invert = 1
      var phase = 0

    }
  }
</script>

<style scoped>

</style>
