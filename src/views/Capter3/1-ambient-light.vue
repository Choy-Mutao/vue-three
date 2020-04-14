<template>
    <div>
        <three-view ref="ambient-light"></three-view>
    </div>
</template>

<script>

  import * as THREE from 'three'

  export default {
    name: 'AmbientLight',
    mounted () {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      var scene = this.$refs['ambient-light'].getScene()
      // create a camera, which defines where we're looking at.
      var camera = this.$refs['ambient-light'].getCamera()
      // create a render and set the size
      var renderer = this.$refs['ambient-light'].getRenderer()

      // ===================================================
      var ambientLight = new THREE.AmbientLight('#606088', 1)
      scene.add(ambientLight)

      var spotLight = new THREE.SpotLight('#ffffff', 1, 100, Math.PI / 4);
      spotLight.shadow.mapSize.set(2048, 2048)
      spotLight.position.set(-30, 40, -10);
      spotLight.castShadow = true;
      scene.add(spotLight);

      // add a simple scene
      this.addHouseAndTree(scene)
    },
    methods: {
      addHouseAndTree(scene) {

        createBoundingWall(scene);
        createGroundPlane(scene);
        createHouse(scene);
        createTree(scene);

        function createBoundingWall(scene) {
          var wallLeft = new THREE.CubeGeometry(70, 2, 2);
          var wallRight = new THREE.CubeGeometry(70, 2, 2);
          var wallTop = new THREE.CubeGeometry(2, 2, 50);
          var wallBottom = new THREE.CubeGeometry(2, 2, 50);

          var wallMaterial = new THREE.MeshPhongMaterial({
            color: 0xa0522d
          });

          var wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial);
          var wallRightMesh = new THREE.Mesh(wallRight, wallMaterial);
          var wallTopMesh = new THREE.Mesh(wallTop, wallMaterial);
          var wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial);

          wallLeftMesh.position.set(15, 1, -25);
          wallRightMesh.position.set(15, 1, 25);
          wallTopMesh.position.set(-19, 1, 0);
          wallBottomMesh.position.set(49, 1, 0);

          scene.add(wallLeftMesh);
          scene.add(wallRightMesh);
          scene.add(wallBottomMesh);
          scene.add(wallTopMesh);

        }

        function createGroundPlane(scene) {
          // create the ground plane
          var planeGeometry = new THREE.PlaneGeometry(70, 50);
          var planeMaterial = new THREE.MeshPhongMaterial({
            color: 0x9acd32
          });
          var plane = new THREE.Mesh(planeGeometry, planeMaterial);
          plane.receiveShadow = true;

          // rotate and position the plane
          plane.rotation.x = -0.5 * Math.PI;
          plane.position.x = 15;
          plane.position.y = 0;
          plane.position.z = 0;

          scene.add(plane)
        }

        function createHouse(scene) {
          var roof = new THREE.ConeGeometry(5, 4);
          var base = new THREE.CylinderGeometry(5, 5, 6);

          // create the mesh
          var roofMesh = new THREE.Mesh(roof, new THREE.MeshPhongMaterial({
            color: 0x8b7213
          }));
          var baseMesh = new THREE.Mesh(base, new THREE.MeshPhongMaterial({
            color: 0xffe4c4
          }));

          roofMesh.position.set(25, 8, 0);
          baseMesh.position.set(25, 3, 0);

          roofMesh.receiveShadow = true;
          baseMesh.receiveShadow = true;
          roofMesh.castShadow = true;
          baseMesh.castShadow = true;

          scene.add(roofMesh);
          scene.add(baseMesh);
        }

        /**
         * Add the tree to the scene
         * @param scene The scene to add the tree to
         */
        function createTree(scene) {
          var trunk = new THREE.CubeGeometry(1, 8, 1);
          var leaves = new THREE.SphereGeometry(4);

          // create the mesh
          var trunkMesh = new THREE.Mesh(trunk, new THREE.MeshPhongMaterial({
            color: 0x8b4513
          }));
          var leavesMesh = new THREE.Mesh(leaves, new THREE.MeshPhongMaterial({
            color: 0x00ff00
          }));

          // position the trunk. Set y to half of height of trunk
          trunkMesh.position.set(-10, 4, 0);
          leavesMesh.position.set(-10, 12, 0);

          trunkMesh.castShadow = true;
          trunkMesh.receiveShadow = true;
          leavesMesh.castShadow = true;
          leavesMesh.receiveShadow = true;

          scene.add(trunkMesh);
          scene.add(leavesMesh);
        }
      }
    }
  }
</script>

<style scoped>

</style>
