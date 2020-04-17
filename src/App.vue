<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Three-Test</router-link> |
      <router-link to="/demo1">DEMO-1</router-link> |
      <router-link to="/ambientLight">AmbientLight</router-link> |
      <router-link to="/areaLight">AreaLight</router-link> |
      <router-link to="/postprocesssing">PostProcessing-template</router-link> |
      <router-link to="/component1">Component-1</router-link> |
      <router-link to="/component2">Foggy Scene</router-link> |
      <router-link to="/component3">Forced Materials</router-link> |
      <router-link to="/component4">Geometries</router-link> |
      <router-link to="/component5">Custom Geometry</router-link> |
      <router-link to="/component6">Mesh Properties</router-link> |
      <router-link to="/component7">Both Cameras</router-link> |
      <router-link to="/component8">Cameras LookAt</router-link> |
      <router-link to="/component31">Ambient Light</router-link> |
      <router-link to="/component32">Spot Light</router-link> |
      <router-link to="/component33">Point Light</router-link> |
      <router-link to="/component34">Direction Light</router-link> |
      <router-link to="/component35">Hemisphere Light</router-link> |
      <router-link to="/component36">Area Light</router-link> |
      <router-link to="/component37">Lens Flares</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
