<template>
    <div>
        <three-view id='threetest' ref='threetest' />
    </div>
</template>

<script>

import * as THREE from 'three';

export default {
    name: 'ThreeTest',
    mounted() {
        var scene = this.$refs['threetest'].getScene()

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        scene.position.set(0, 0, 0);

        var camera = this.$refs['threetest'].getCamera()
        camera.position.set(1, 1, 2);
        camera.lookAt(scene.position);
    }
}
</script>

<style lang="less" scoped>

</style>