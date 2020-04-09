<template>
    <div>
        <button @click="toCamera1">getCamera1</button>
        <button @click="toCamera2">getCamera2</button>
        <button @click="toCamera3">getCamera3</button>
        <three-view ref="demo1"></three-view>
    </div>
</template>

<script>

import * as THREE from 'three'

export default {
    name: 'CreateFirstScene',
    mounted() {
        var scene = this.$refs['demo1'].getScene();
        var axes = new THREE.AxesHelper(20);

        var camera = this.$refs['demo1'].getCamera();
        camera.aspect = 1;

        var renderer = this.$refs['demo1'].getRenderer();

        scene.add(axes);
        
        // 创建平面模型
        var planeGeometry = new THREE.PlaneGeometry(60, 20);
        // var planeMaterial = new THREE.MeshBasicMaterial( { color: '#AAAAAA'} );
        var planeMaterial = new THREE.MeshLambertMaterial( { color: '#ffffff'} );

        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.set(15, 0, 0);
        scene.add(plane);

        // 创建一个立方体
        var cubeGeometry = new THREE.BoxGeometry(4, 4, 4,);
        // var cubeMaterial = new THREE.MeshBasicMaterial( { color: '#FF0000', wireframe: false });
        var cubeMaterial = new THREE.MeshLambertMaterial( { color: '#FF0000' });
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(-4, 2, 0);
        scene.add(cube)

        // 创建一个球体
        var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        // var sphereMaterial = new THREE.MeshBasicMaterial( { color: '#7777FF', wireframe: false });
        var sphereMaterial = new THREE.MeshLambertMaterial( { color: '#7777FF' });
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(20, 4, 0);
        scene.add(sphere);

        // 设置项目的位置和点面向场景的中心位置
        camera.position.set(-30, 40, 30);
        camera.lookAt(scene.position);

        // 添加点光源
        var spotLight = new THREE.SpotLight('#FFFFFF');
        spotLight.position.set(-40, 40, -15);
        spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
        spotLight.shadow.camera.far = 1300;
        spotLight.shadow.camera.near = 400;
        spotLight.intensity = 1.3;

        // todo 没有出现阴影
        // 调试出阴影
        renderer.setClearColor(new THREE.Color('#000000'));
        renderer.shadowMap.Enabled = true;
        console.log('THis is shadowmap status');
        console.log(renderer.shadowMap.Enabled);

        plane.receiveShadow = true;
        cube.castShadow = true;
        sphere.castShadow = true;

        spotLight.castShadow = true;
        scene.add(spotLight);
        
        // 查看fps
        // this.$refs['demo1'].showStats();

    },
    methods: {
        toCamera1() {
            var camera = this.$refs['demo1'].getCamera();
            camera.position.set(0, 0, 0);
            camera.lookAt(camera.position);
        },
        toCamera2() {
            var camera = this.$refs['demo1'].getCamera();
            camera.position.set(0, 10, 0);
        },
        toCamera3() {
            var camera = this.$refs['demo1'].getCamera();
            camera.position.set(10, 10, 10);
            camera.lookAt(camera.position);
        }
    }
}
</script>

<style lang="less">

</style>