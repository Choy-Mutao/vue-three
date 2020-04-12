<template>
    <div>
        <div id='three_view' ref='three_view'></div>
    </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Stats from '../../public/libs/util/Stats.js';

export default {
    name: 'ThreeView',
    data() {
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
            default: 0,
            required: this.ifStats
        }
    },
    mounted() {

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 25, 0);
        this.camera.lookAt(this.scene.position)
        
        this.initRenderer();
        this.initStats(this.panelType);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.animate();

    },
    created() {

        window.addEventListener('resize', () => {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
        })
    },
    methods: {
        /**
         * Initialize a simple default renderer and binds it to the "webgl-output" dom
        * element.
        * 
        * @param additionalProperties Additional properties to pass into the renderer
        */
         initRenderer(additionalProperties) {
            var props = (typeof additionalProperties !== 'undefined' && additionalProperties) ? additionalProperties : {};
            var renderer = new THREE.WebGLRenderer(props);
            renderer.shadowMap.enabled = true;
            renderer.shadowMapSoft = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            renderer.setClearColor(new THREE.Color(0x000000));
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            this.$refs['three_view'].appendChild(renderer.domElement);

            this.renderer =  renderer;
        },
        /**
         * Initialize the statistics domelement
         * 
         * @param {Number} type 0: fps, 1: ms, 2: mb, 3+: custom
         * @returns stats javascript object
         */
        initStats(type) {

            if (this.ifStats === true) {

                var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
                var stats = new Stats();

                stats.showPanel(panelType); // 0: fps, 1: ms, 2: mb, 3+: custom
                // document.body.appendChild(stats.dom);
                this.$refs['three_view'].appendChild(stats.dom);

                // return stats;
                this.Stats = stats;
            }
        },
        animate() {
        /** If we want to animate the scene, the first thing that we need to do is find
            some way to re-render the scene at a specific interval. Before HTML5 and the
            related JavaScript APIs came along, the way to do this was using the
            `setInterval`(function,interval) function. With setInterval , we could specify a
            function that, for instance, would be called every 100 milliseconds. The
            problem with this function is that it doesn't take into account what is
            happening in the browser. If you were browsing another tab, this function
            would still be fired every couple of milliseconds. Besides that, setInterval isn't
            synchronized with the redrawing of the screen. This can lead to higher CPU
            usage, flickering, and generally poor performance.
         */
            requestAnimationFrame(this.animate);
            var stats = new Stats();
            stats.update();
            this.$refs['three_view'].appendChild(stats.dom);
            this.render();
        },
        render() {
            this.renderer.render(this.scene, this.camera);
        },
        getScene() {
            return this.scene;
        },
        getCamera() {
            return this.camera;
        },
        getRenderer() {
            return this.renderer;
        }
    }
}
</script>

<style lang="less">

</style>