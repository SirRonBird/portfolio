<script setup lang="ts">
import * as THREE from "three";
import { onMounted } from "vue";
import { InteractionManager } from "three.interactive";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

import {
  createEarth,
  setupMainCamera,
  setupFollowCamera,
  setupScene,
  setupRenderer,
  createSun,
  createMoon,
  setupSolarSystem,
  setupCSS2DRenderer,
} from "../utils/planetUtils";


var time = 0;
const earthOrbit = 147.105052;
const moonOrbit = 38.44*0.8  + 6;
var earthOrbitSpeed = 0.0001;
var earthRotationSpeed = 0.0365;
var moonOrbitSpeed = 0.0028;
var cameraFollowsEarth = false;

const scene = setupScene();
const mainCamera = setupMainCamera(scene);

const sun = createSun();
const earth = createEarth(new THREE.Vector3(earthOrbit, 0, 0));
earth.material.uniforms.u_lightPosition.value = sun.position;
const moon = createMoon(new THREE.Vector3(moonOrbit, 0, 0));

const solarSystem = setupSolarSystem(scene, sun, earth, moon);

const earthOrbitObject = solarSystem.getObjectByName("earthOrbit");
const followCamera = setupFollowCamera(scene, earth, earthOrbitObject);


onMounted(() => {
  const container = document.getElementById("canvas") as HTMLCanvasElement;
  const overlay = document.getElementById("overlay") as HTMLDivElement;
  const css2dRenderer = setupCSS2DRenderer(overlay);
  const renderer = setupRenderer(scene, mainCamera, container);
  const interactionManager = new InteractionManager(
    renderer,
    mainCamera,
    renderer.domElement
  );

  interactionManager.add(earth);

  earth.addEventListener("mouseover", () => {
    // earth should be light up and a text should appear above it
    earthRotationSpeed = earthRotationSpeed / 2;
    moonOrbitSpeed = moonOrbitSpeed / 2;
    console.log("Earth hover" + earthRotationSpeed);
  });

  earth.addEventListener("mouseout", () => {
    earthRotationSpeed = earthRotationSpeed * 2;
    moonOrbitSpeed = moonOrbitSpeed * 2;
    console.log("Earth hover");
  });

  earth.addEventListener("click", () => {
    cameraFollowsEarth = !cameraFollowsEarth;
    console.log("Earth click");
  });

  animate();

  function animate() {
    var sun = scene.getObjectByName("sun");
    var sunGlow = scene.getObjectByName("sunGlow");
    var earth = scene.getObjectByName("earth");
    var earthAtmosphere = scene.getObjectByName("earthAtmosphere");
    var earthOrbit = scene.getObjectByName("earthOrbit");
    var moonOrbit = scene.getObjectByName("moonOrbit");
    var camera = scene.getObjectByName("camera");
    var followCamera = scene.getObjectByName("followCamera");
    const overlay = document.getElementById("overlay") as HTMLDivElement;


    //set the uniform: u_time from the shadermaterial from the sun
    time += 0.01;

    //change randered camera
    if (cameraFollowsEarth) {
      requestAnimationFrame(animate);
      renderer.render(scene, followCamera);
      interactionManager.camera = followCamera;

      //change class of overlay to detailView
      overlay.className = "detailView";

      css2dRenderer.render(scene, followCamera);
      //rotate the earth and the moon around the sun
      moonOrbit.rotation.y += moonOrbitSpeed / 2;
      earthOrbit.rotation.y += earthOrbitSpeed;
      earth.rotation.y += earthRotationSpeed / 2;
      earthAtmosphere.rotation.y -= earthRotationSpeed / 2;
      earthAtmosphere.material.uniforms.u_viewPos.value = new THREE.Vector3().subVectors(
        followCamera.position,
        earth.position
      ).normalize();
      earthAtmosphere.material.uniforms.u_c.value = 0.2;
      earthAtmosphere.material.uniforms.u_p.value = 3.5;

    } else {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      interactionManager.update();
      interactionManager.camera = camera;

      sun.material.uniforms.u_time.value = time;
      sunGlow.material.uniforms.u_time.value = time;
      sunGlow.material.uniforms.u_viewPos.value = new THREE.Vector3().subVectors(
        camera.position,
        sun.position
      ).normalize();

      //change class of overlay to overview
      overlay.className = "overview";
      css2dRenderer.render(scene, camera);
      //rotate the earth and the moon around the sun
      moonOrbit.rotation.y += moonOrbitSpeed;
      earthOrbit.rotation.y += earthOrbitSpeed;
      earth.rotation.y += earthRotationSpeed;
      earthAtmosphere.rotation.y -= earthRotationSpeed;
      earthAtmosphere.material.uniforms.u_viewPos.value = new THREE.Vector3().subVectors(
        camera.position,
        earth.position
      ).normalize();
      earthAtmosphere.material.uniforms.u_c.value = 0.0;
      earthAtmosphere.material.uniforms.u_p.value = 3.0;

    }
  }
});
</script>
<template>
  <div id="overlay" class="overview"></div>
  <canvas id="canvas"> </canvas>
</template>
<style scoped></style>
