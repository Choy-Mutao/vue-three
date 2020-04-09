<template>
    <div>
        <three-view ref="ambientlight"></three-view>
    </div>
</template>

<script>
import * as THREE from 'three';
import dat from 'three/examples/jsm/libs/dat.gui.module'

export default {
    name: 'AmbientLight',
    mounted() {

        // 临时加入一个场景

        var scene = this.$refs['ambientlight'].getScene()

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        scene.position.set(0, 0, 0);

        var ambientLight = new THREE.AmbientLight("#606008");
        scene.add(ambientLight)

        // 添加光源的控制工具
        var controls = {
            intensity: ambientLight.intensity,
            ambientColor: ambientLight.color.getStyle(),
            disableSpotlight: false
        }

        var gui = new dat.GUI();
        gui.add(controls, 'intensity', 0.3, 0.1).onChange( () => {
            ambientLight.color = new THREE.Color(controls.ambientColor);
            ambientLight.intensity = controls.intensity;
        })

    }
}
</script>

<style lang="less" scoped>

</style>