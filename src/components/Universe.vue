<script setup lang="ts">
import * as THREE from "three";
import { onMounted } from "vue";
import { InteractionManager } from "three.interactive";

import {
  createEarth,
  setupCamera,
  setupScene,
  setupRenderer,
  createSun,
  createMoon,
  setupSolarSystem,
} from "../utils/planetUtils";

const clock = new THREE.Clock();

var time = 0;
const earthOrbit = 147.105052;
const moonOrbit = 3.844+6.371*2;
var earthOrbitSpeed = 0.0001;
var earthRotationSpeed = 0.0365;
var moonOrbitSpeed = 0.0028;
var cameraFollowsEarth = false;

const scene = setupScene();
const camera = setupCamera(scene);

const sun = createSun();
const earth = createEarth( new THREE.Vector3(earthOrbit, 0, 0));
const moon = createMoon(new THREE.Vector3(moonOrbit, 0, 0));

setupSolarSystem(scene, sun, earth, moon);


onMounted(() => {
  const container = document.getElementById("canvas") as HTMLCanvasElement;
  const renderer = setupRenderer(scene, camera, container);

  const interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement
  );

  interactionManager.add(earth);

  earth.addEventListener("mouseover", () => {
    // earth should be light up and a text should appear above it
    earthRotationSpeed = earthRotationSpeed/2;
    moonOrbitSpeed = moonOrbitSpeed/2;
    console.log("Earth hover" + earthRotationSpeed);
  });

  earth.addEventListener("mouseout", () => {
    earthRotationSpeed = earthRotationSpeed*2;
    moonOrbitSpeed = moonOrbitSpeed*2;
    console.log("Earth hover");
  });

  earth.addEventListener("click", () => {
    //camera should follow earth
    //camera shoul zoom on earth with little offset to the earth origin so the plane is visible
    //a plane with text should appear next to earth
    cameraFollowsEarth = !cameraFollowsEarth;
    console.log("Earth click");
  });

  animate();

  function animate() {
    var sun = scene.getObjectByName("sun");
    var earth = scene.getObjectByName("earth");
    var earthOrbit = scene.getObjectByName("earthOrbit");
    var moonOrbit = scene.getObjectByName("moonOrbit");
    var camera = scene.getObjectByName("camera");
    requestAnimationFrame(animate);
    time += 1.0;
    //set the uniform: u_time from the shadermaterial from the sun
    sun.material.uniforms.u_time.value = clock.getElapsedTime();
    moonOrbit.rotation.y += moonOrbitSpeed;
    earthOrbit.rotation.y += earthOrbitSpeed;
    earth.rotation.y += earthRotationSpeed;
    
    renderer.render(scene, camera);
    interactionManager.update();

    scene.updateMatrixWorld();
    camera.updateMatrixWorld();
    earth.updateMatrixWorld();
    

    if(cameraFollowsEarth){
      camera.position.x = earth.position.x+10;
      camera.position.y = earth.position.y;
      camera.position.z = earth.position.z;
      camera.lookAt(earth.position);
    }

    // update all necessary objects matrices
    
    

  }
});
</script>
<template>
  <canvas id="canvas">
    <h1>Hello Universe!</h1>
  </canvas>
</template>
<style scoped>
</style>
