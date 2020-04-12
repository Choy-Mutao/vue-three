<template>
    <div>
        <three-view ref="basic-scene" :ifStats="true" :panelType='0'></three-view>
    </div>
</template>

<script>
import * as THREE from 'three';

export default {
    name: 'BasicScene',
    mounted() {
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = this.$refs['basic-scene'].getScene();

        // create a camera, which defines where we're looking at.
        var camera = this.$refs['basic-scene'].getCamera();

        // create a render and set the size
        var renderer = this.$refs['basic-scene'].getRenderer();


        // ======================

    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x3c3c3c);
    scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff, 1.2, 150, 120);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // call the render function
    // var step = 0;
    }
}
</script>