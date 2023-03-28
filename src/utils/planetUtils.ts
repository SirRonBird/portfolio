import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import universebg from '../textures/stars_milky_way.jpg';
import earthTexture from "../textures/earth_daymap.jpg";
import earthNormalMap from "../textures/earth_normal_map.jpg";
import earth_v_shader from "../shaders/v_earth.glsl";
import earth_f_shader from "../shaders/f_earth.glsl";

import sun_v_shader from "../shaders/v_sun.glsl";
import sun_f_shader from "../shaders/f_sun.glsl";

import moon_v_shader from "../shaders/v_moon.glsl";
import moon_f_shader from "../shaders/f_moon.glsl";
import moonTexture from "../textures/moon_map.jpg";

export const setupScene = () => {
  const scene = new THREE.Scene();

  const bgTexture = new THREE.TextureLoader().load(universebg);
  bgTexture.mapping = THREE.EquirectangularRefractionMapping;
  scene.background = bgTexture;

  return scene;
};

export const setupCamera = (scene: THREE.Scene) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000000
  );
  camera.position.set(-20, 0, 0);
  camera.name = "camera";
  scene.add(camera);
  return camera;
};

export const createEarth = (position?: THREE.Vector3  ) => {
  var shaderMat = new THREE.RawShaderMaterial({
    uniforms: {
      u_texture: { value: new THREE.TextureLoader().load(earthTexture) },
      u_normalMap: { value: new THREE.TextureLoader().load(earthNormalMap) },
    },
    vertexShader: earth_v_shader,
    fragmentShader: earth_f_shader,
  });
  var earthGeometry = new THREE.SphereBufferGeometry(6.371, 50, 50);
  const earth = new THREE.Mesh(earthGeometry, shaderMat);
  if (position){
    earth.position.set(position.x, position.y, position.z);
  }
  earth.name = "earth";
  //parent.add(earth);
  return earth;
};

export const setupRenderer = (scene: THREE.Scene, camera: THREE.Camera, container: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: container,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.enableZoom = true;
  controls.keys = {LEFT: "KeyA", UP:"KeyW", RIGHT: "KeyD", BOTTOM:"KeyS"};
  controls.minDistance = 0.1;
  controls.maxDistance = 1000;
  return renderer;
}

export const createSun = () => {
  const sunGeometry = new THREE.SphereBufferGeometry(10, 55, 55);
  const sunMaterial = new THREE.RawShaderMaterial(
    {
      uniforms: {
        u_time: { type: "f", value: 0.0 },
      },
      vertexShader: sun_v_shader,
      fragmentShader: sun_f_shader,
    }
  );
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.name = "sun";
  //parent.add(sun);
  return sun;
}

export const createMoon = (position?: THREE.Vector3) => {
  const moonGeometry = new THREE.SphereBufferGeometry(1.737, 55, 55);
  const moonMaterial = new THREE.RawShaderMaterial(
    {
      uniforms: {
        u_texture: { value: new THREE.TextureLoader().load(moonTexture) },
      },
      vertexShader: moon_v_shader,
      fragmentShader: moon_f_shader,
    }
  );
  const moon = new THREE.Mesh(moonGeometry, moonMaterial);
  if (position){
    moon.position.set(position.x, position.y, position.z);
  }
  moon.name = "moon";
  //parent.add(moon);
  return moon;
}

//function to set up the solar system input is the scene, the sun and the earth and the moon
//TODO: add more planets
export const setupSolarSystem = (scene: THREE.Scene, sun: THREE.Mesh, earth: THREE.Mesh, moon: THREE.Mesh) => {
  const solarSystem = new THREE.Object3D();
  solarSystem.name = "solarSystem";
  solarSystem.add(sun);

  const earthOrbit = new THREE.Object3D();
  earthOrbit.name = "earthOrbit";
  earthOrbit.add(earth);
  solarSystem.add(earthOrbit);

  const moonOrbit = new THREE.Object3D();
  moonOrbit.name = "moonOrbit";
  moonOrbit.position.copy(earth.position);
  moonOrbit.add(moon);
  earthOrbit.add(moonOrbit);

  scene.add(solarSystem);
}
