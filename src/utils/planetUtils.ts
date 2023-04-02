import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

import EarthView from "../components/EarthView.vue";


import universebg from "../textures/stars_milky_way.jpg";
import earthTexture from "../textures/earth_daymap.jpg";
import earthNormalMap from "../textures/earth_normal_map.jpg";
import earthNightTexture from "../textures/earth_nightmap.jpg";
import earthSpecularMap from "../textures/earth_specular_map.jpg";
import earth_v_shader from "../shaders/v_earth.glsl";
import earth_f_shader from "../shaders/f_earth.glsl";

import earth_atmosphere_v_shader from "../shaders/v_earth_atmosphere.glsl";
import earth_atmosphere_f_shader from "../shaders/f_earth_atmosphere.glsl";

import sun_v_shader from "../shaders/v_sun.glsl";
import sun_f_shader from "../shaders/f_sun.glsl";
import sun_glow_v_shader from "../shaders/v_sun_glow.glsl";
import sun_glow_f_shader from "../shaders/f_sun_glow.glsl";

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

export const setupCSS2DRenderer = (container: HTMLElement) => {
  const css2dRenderer = new CSS2DRenderer();
  css2dRenderer.setSize(window.innerWidth, window.innerHeight);
  css2dRenderer.domElement.style.position = "absolute";
  css2dRenderer.domElement.style.top = "0px";
  css2dRenderer.domElement.style.pointerEvents = "none";
  css2dRenderer.domElement.className = "css2dRenderer";
  container.appendChild(css2dRenderer.domElement);
  return css2dRenderer;
};

export const setupMainCamera = (scene: THREE.Scene) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000000
  );
  camera.position.set(-48, 69, -50);
  camera.name = "camera";
  scene.add(camera);
  return camera;
};

export const setupFollowCamera = (
  scene: THREE.Scene,
  target: THREE.Object3D,
  parent: THREE.Object3D
) => {
  const followCamera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  var position = new THREE.Vector3(0, 0, 0);
  var followCameraOffset = new THREE.Vector3(120, 10, 25);
  followCamera.position.copy(
    position.copy(parent.position).add(followCameraOffset)
  );
  followCamera.name = "followCamera";
  var followCameraLookAtOffset = new THREE.Vector3(0, 0, 10);
  var targetPosition = new THREE.Vector3(0, 0, 0);
  followCamera.lookAt(
    targetPosition.copy(target.position).add(followCameraLookAtOffset)
  );

  //const helper = new THREE.CameraHelper(followCamera);
  //scene.add(helper);
  const detailsDiv = document.createElement('div');
  detailsDiv.className = "details";

  const earthTitleDiv = document.createElement("div");
  earthTitleDiv.className = "earth-title";
  earthTitleDiv.textContent = "Earth";
  detailsDiv.appendChild(earthTitleDiv);

  const earthFactsDiv = document.createElement("div");
  earthFactsDiv.className = "earth-facts";
  earthFactsDiv.textContent = "<h3>Facts</h3>";

  const earthFactsTextDiv = document.createElement("div");
  earthFactsTextDiv.className = "earth-facts-text";
  earthFactsDiv.innerHTML = "Some facts about me.";
  earthFactsDiv.appendChild(earthFactsTextDiv);

  const earthPhotoDiv = document.createElement("div");
  earthPhotoDiv.className = "earth-photo";
  earthPhotoDiv.innerHTML =
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg" alt="Earth">';
  earthFactsDiv.appendChild(earthPhotoDiv);

  detailsDiv.appendChild(earthFactsDiv);

  const earthTextDiv = document.createElement("div");
  earthTextDiv.className = "earth-text";
  earthTextDiv.textContent =
    "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.";

  detailsDiv.appendChild(earthTextDiv);

  const earthText = new CSS2DObject(detailsDiv);
  earthText.position.set(0, 0, -20);
  earthText.name = "earthText";
  followCamera.add(earthText);

  //const earthTextAxis = new THREE.AxesHelper( 5 );
  //earthText.add( earthTextAxis );

  parent.add(followCamera);

  return followCamera;
};



export const createEarth = (position?: THREE.Vector3) => {
  var earthGeometry = new THREE.SphereGeometry(6.371, 50, 50);
  var shaderMat = new THREE.RawShaderMaterial({
    uniforms: {
      u_texture: { value: new THREE.TextureLoader().load(earthTexture) },
      u_normalMap: { value: new THREE.TextureLoader().load(earthNormalMap) },
      u_lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      u_nightTexture: {
        value: new THREE.TextureLoader().load(earthNightTexture),
      },
      u_specularMap: {
        value: new THREE.TextureLoader().load(earthSpecularMap),
      },
    },
    vertexShader: earth_v_shader,
    fragmentShader: earth_f_shader,
  });

  const earth = new THREE.Mesh(earthGeometry, shaderMat);
  earth.name = "earth";
  if (position) {
    earth.position.set(position.x, position.y, position.z);
  }

  const earthAtmosphereGeometry = new THREE.SphereGeometry(6.371, 50, 50);
  const earthAtmosphereMaterial = new THREE.RawShaderMaterial({
    uniforms: {
      u_viewPos: { value: new THREE.Vector3(0, 0, 0) },
      u_c: { value: 0.2 },
      u_p: { value: 3.5 },
    },
    vertexShader: earth_atmosphere_v_shader,
    fragmentShader: earth_atmosphere_f_shader,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  const earthAtmosphere = new THREE.Mesh(
    earthAtmosphereGeometry,
    earthAtmosphereMaterial
  );
  earthAtmosphere.scale.set(1.2, 1.2, 1.2);
  earthAtmosphere.name = "earthAtmosphere";
  //stop the athmosphere to rotate with the earth
  earth.add(earthAtmosphere);

  const earthDiv = document.createElement("div");
  earthDiv.className = "earth-label";
  earthDiv.textContent = "Earth";

  const earthLabel = new CSS2DObject(earthDiv);
  earthLabel.position.set(0, 10, 0);
  earthLabel.name = "earthLabel";
  earth.add(earthLabel);

  //var axisHelper = new THREE.AxesHelper( 10 );
  //earth.add( axisHelper );

  //parent.add(earth);
  return earth;
};

export const setupRenderer = (
  scene: THREE.Scene,
  camera: THREE.Camera,
  container: HTMLCanvasElement
) => {
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
  controls.keys = { LEFT: "KeyA", UP: "KeyW", RIGHT: "KeyD", BOTTOM: "KeyS" };
  controls.minDistance = 0.1;
  controls.maxDistance = 1000;
  return renderer;
};

export const createSun = () => {
  const sunGeometry = new THREE.SphereGeometry(10, 55, 55);
  const sunMaterial = new THREE.RawShaderMaterial({
    uniforms: {
      u_time: { type: "f", value: 0.0 },
    },
    vertexShader: sun_v_shader,
    fragmentShader: sun_f_shader,
  });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.name = "sun";

  //create sun glow element
  const sunGlowGeometry = new THREE.SphereGeometry(10, 55, 55);
  const sunGlowMaterial = new THREE.RawShaderMaterial({
    uniforms: {
      u_time: { type: "f", value: 0.0 },
      u_viewPos: { value: new THREE.Vector3(0, 0, 0) },
      u_c: { value: 0.3 },
      u_p: { value: 3.5 },
    },
    vertexShader: sun_glow_v_shader,
    fragmentShader: sun_glow_f_shader,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
  sunGlow.scale.set(1.25, 1.25, 1.25);
  sunGlow.name = "sunGlow";
  sun.add(sunGlow);


  const sunDiv = document.createElement("div");
  sunDiv.className = "sun-label";
  sunDiv.textContent = "Sun";
  const sunLabel = new CSS2DObject(sunDiv);
  sunLabel.position.set(0, 15, 0);
  sunLabel.name = "sunLabel";
  sun.add(sunLabel);

  //parent.add(sun);
  return sun;
};

export const createMoon = (position?: THREE.Vector3) => {
  const moonGeometry = new THREE.SphereGeometry(1.737, 55, 55);
  var shaderMat = new THREE.RawShaderMaterial({
    uniforms: {
      u_texture: { value: new THREE.TextureLoader().load(moonTexture) },
      u_lightPosition: { value: new THREE.Vector3(0, 0, 0) },
    },
    vertexShader: moon_v_shader,
    fragmentShader: moon_f_shader,
  });
  const moon = new THREE.Mesh(moonGeometry, shaderMat);
  if (position) {
    moon.position.set(position.x, position.y, position.z);
  }
  moon.name = "moon";

  //var axisHelper = new THREE.AxesHelper( 5 );
  //moon.add( axisHelper );

  return moon;
};

//function to set up the solar system input is the scene, the sun and the earth and the moon
//TODO: add more planets
export const setupSolarSystem = (
  scene: THREE.Scene,
  sun: THREE.Mesh,
  earth: THREE.Mesh,
  moon: THREE.Mesh
) => {
  const solarSystem = new THREE.Object3D();
  solarSystem.name = "solarSystem";
  solarSystem.add(sun);

  const earthOrbit = new THREE.Object3D();
  earthOrbit.name = "earthOrbit";
  earthOrbit.add(earth);
  solarSystem.add(earthOrbit);

  //var earthOrbitAxisHelper = new THREE.AxesHelper( 50 );
  //earthOrbit.add( earthOrbitAxisHelper );

  const moonOrbit = new THREE.Object3D();
  moonOrbit.name = "moonOrbit";
  moonOrbit.position.copy(earth.position);
  moonOrbit.add(moon);
  earthOrbit.add(moonOrbit);

  scene.add(solarSystem);

  return solarSystem;
};
