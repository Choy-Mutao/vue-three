<template>
    <div>
        <three-view ref="ambientlight"></three-view>
    </div>
</template>

<script>
import * as THREE from 'three';
// import dat from 'three/examples/jsm/libs/dat.gui.module'

export default {
    name: 'AirLight',
    mounted() {

        // 临时加入一个场景

        var scene = this.$refs['ambientlight'].getScene()

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        scene.position.set(0, 0, 0);

        // var ambientLight = new THREE.AmbientLight("#606008");
        // scene.add(ambientLight);

        // 添加环境光
        var areaLight = new THREE.RectAreaLight('#ff0000', 500, 4, 6);
        areaLight.position.set(4, 5, -4);
        scene.add(areaLight);

        // 环境光辅助器
        var areaLightHelper = new THREE.BoxHelper(cube, '#ff0000');
        scene.add(areaLightHelper);

        var axesHelper = new THREE.AxesHelper(10);
        scene.add(axesHelper);
    }
}
</script>

<style lang="less" scoped>

</style>