<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <three-view ref="home"></three-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';

import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = this.$refs["lensflares"].getScene();
        // create a camera, which defines where we're looking at.
        var camera = this.$refs["lensflares"].getCamera();
        // create a render and set the size
        var renderer = this.$refs["lensflares"].getRenderer();


  }
}
</script>
