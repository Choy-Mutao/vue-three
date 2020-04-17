<template>
  <div>
    <three-view ref="point-light"></three-view>
  </div>
</template>

<script>

import * as THREE from 'three'

import { addHouseAndTree } from '../../utils/js/util.js'

import dat from 'three/examples/jsm/libs/dat.gui.module.js'

export default {
  name: "PointLight",
  mounted() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = this.$refs["point-light"].getScene();
    // create a camera, which defines where we're looking at.
    var camera = this.$refs["point-light"].getCamera();
    // create a render and set the size
    var renderer = this.$refs["point-light"].getRenderer();

    // add a simple scene
    addHouseAndTree(scene)

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight("#0c0c0c");
    scene.add(ambientLight);

    // the point light where working with
    var pointColor = "#ccffcc";
    var pointLight = new THREE.PointLight(pointColor);
    pointLight.decay = 0.1

    pointLight.castShadow = true;

    scene.add(pointLight);

    var helper = new THREE.PointLightHelper(pointLight);
    // scene.add(helper);

    var shadowHelper = new THREE.CameraHelper(pointLight.shadow.camera)
    // scene.add(shadowHelper)



    // add a small sphere simulating the pointlight
    var sphereLight = new THREE.SphereGeometry(0.2);
    var sphereLightMaterial = new THREE.MeshBasicMaterial({
        color: 0xac6c25
    });
    var sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial);
    sphereLightMesh.localToWorld(new THREE.Vector3(3, 0, 5));
    scene.add(sphereLightMesh);

    // call the render function
    var step = 0;

    // used to determine the switch point for the light animation
    var invert = 1;
    var phase = 0;

    var controls = setupControls();
    function setupControls() {
            var controls = new function () {
            this.rotationSpeed = 0.01;
            this.bouncingSpeed = 0.03;
            this.ambientColor = ambientLight.color.getStyle();
            this.pointColor = pointLight.color.getStyle();
            this.intensity = 1;
            this.distance = pointLight.distance;
            };

            

            var gui = new dat.GUI();
            gui.addColor(controls, 'ambientColor').onChange(function (e) {
            ambientLight.color = new THREE.Color(e);
            });

            gui.addColor(controls, 'pointColor').onChange(function (e) {
            pointLight.color = new THREE.Color(e);
            });

            gui.add(controls, 'distance', 0, 100).onChange(function (e) {
            pointLight.distance = e;
            });

            gui.add(controls, 'intensity', 0, 3).onChange(function (e) {
            pointLight.intensity = e;
            });

            return controls;
        }
  }
};
</script>

<style lang="less" scoped></style>
