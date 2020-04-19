<template>
  <div>
    <three-view ref="lensflares" controls-type="fly"></three-view>
  </div>
</template>

<script>
import * as THREE from "three";

import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import {
  Lensflare,
  LensflareElement
} from "three/examples/jsm/objects/Lensflare.js";

export default {
  name: "Lensflares",
  mounted() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = this.$refs["lensflares"].getScene();
    // create a camera, which defines where we're looking at.
    var camera = this.$refs["lensflares"].getCamera();
    // create a render and set the size
    var renderer = this.$refs["lensflares"].getRenderer();

    scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01);
    scene.fog = new THREE.Fog(scene.background, 3500, 15000);

    // world

    var s = 250;

    var geometry = new THREE.BoxBufferGeometry(s, s, s);
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 50
    });

    for (var i = 0; i < 3000; i++) {
      var mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
      mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
      mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;

      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();

      scene.add(mesh);
    }

    // lights

    var dirLight = new THREE.DirectionalLight(0xffffff, 0.05);
    dirLight.position.set(0, -1, 0).normalize();
    dirLight.color.setHSL(0.1, 0.7, 0.5);
    scene.add(dirLight);

    // lensflares
    var textureLoader = new THREE.TextureLoader();

    var textureFlare0 = textureLoader.load("textures/lensflare/lensflare0.png");
    var textureFlare3 = textureLoader.load("textures/lensflare/lensflare3.png");

    addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
    addLight(0.08, 0.8, 0.5, 0, 0, -1000);
    addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

    function addLight(h, s, l, x, y, z) {
      var light = new THREE.PointLight(0xffffff, 1.5, 2000);
      light.color.setHSL(h, s, l);
      light.position.set(x, y, z);
      scene.add(light);

      var lensflare = new Lensflare();
      lensflare.addElement(
        new LensflareElement(textureFlare0, 700, 0, light.color)
      );
      lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
      lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
      light.add(lensflare);
    }
  }
};
</script>

<style lang="less" scoped>
</style>