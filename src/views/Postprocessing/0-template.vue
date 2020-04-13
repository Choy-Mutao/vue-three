<template>
    <div>
        <three-view ref="template"></three-view>
    </div>
</template>

<script>

import * as THREE from 'three';

import '../../../public/libs/three/controls/TrackballControls';
import '../../../public/libs/util/Stats.js';

import { initTrackballControls } from '../../utils/js/util.js';
import { addEarth } from './js/util.js';

export default {
    name: 'Template',
    mounted() {
        // use the defaults
        // var stats = initStats();
        var renderer =  this.$refs['template'].getRenderer();

        // var camera = initCamera(new THREE.Vector3(0, 20, 40));
        var camera = this.$refs['template'].getCamera();

        var trackballControls = initTrackballControls(camera, renderer);
        var clock = new THREE.Clock();

        // create a scene and add a light
        var scene = this.$refs['template'].getScene();
        var earthAndLight = addEarth(scene);
        var earth = earthAndLight.earth;
        var pivot = earthAndLight.pivot;

        // setup effects
        var renderPass = new THREE.RenderPass(scene, camera);
        var effectFilm = new THREE.FilmPass(0.8, 0.325, 256, false);
        effectFilm.renderToScreen = true;

        var composer = new THREE.EffectComposer(renderer);
        composer.addPass(renderPass);
        composer.addPass(effectFilm);

        // setup controls
        //var gui = new dat.GUI();
        //var controls = {};
        //addFilmPassControls(gui, controls, effectFilm);
    }
}
</script>

<style lang="less" scoped>

</style>
