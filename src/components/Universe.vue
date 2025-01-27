<script setup lang="ts">
import {onMounted} from "vue";
import * as THREE from "three";
import {CSS2DRenderer,} from "three/examples/jsm/renderers/CSS2DRenderer";
import {Planet} from '../ts/Planet';
import {
    createSolarSystem,
    planets,
    setupEarthCamera,
    setupMainCamera,
    setUpRenderer,
    setupScene
} from '../utils/threeUtils';
import {setupCSS2DRenderer} from "../ts/DetailCamera";
import {InteractionManager} from "three.interactive";
import Stats from "stats.js";
import App from './App.vue'


import universeTexture from '../textures/stars_milky_way.jpg';
import earthTexture from '../textures/earth_daymap.jpg';
import earthNormalMap from '../textures/earth_normal_map.jpg';
import earthNightTexture from '../textures/earth_nightmap.jpg';
import earthSpecularMap from '../textures/earth_specular_map.jpg';

import moonTexture from '../textures/moon_map.jpg';

import gamePlanetTexture from '../textures/gameplanet_map.jpg';

// shaders import
import earth_v_shader from "../shaders/v_earth.glsl?raw";
import earth_f_shader from "../shaders/f_earth.glsl?raw";

import moon_v_shader from "../shaders/v_moon.glsl?raw";
import moon_f_shader from "../shaders/f_moon.glsl?raw";

import gamePlanet_v_shader from "../shaders/v_gamePlanet.glsl?raw";
import gamePlanet_f_shader from "../shaders/f_gamePlanet.glsl?raw";

import sun_v_shader from "../shaders/v_sun.glsl?raw";
import sun_f_shader from "../shaders/f_sun.glsl?raw";
import {SolarSystem} from "../ts/SolarSystem";
import { useRoute, useRouter } from 'vue-router'


const router = useRouter();

//set some variables
let time = 0;
let planetToFollow = null;

//sun
const sunRadius = 10;
const sunOrbit = 0;
const sunOrbitSpeed = 0;
const sunRotationSpeed = 0;
const sunPosition = new THREE.Vector3(0, 0, 0);
const sunTilt = new THREE.Vector3(0, 0, 0);
let sunUniforms: { [uniforms: string]: THREE.IUniform };
sunUniforms = {
    u_time: {value: 0}
};

//earth
const earthRadius = 6.371;
const earthOrbit = 147.105052;
const earthOrbitSpeed = 0.0001;
const earthRotationSpeed = 0.0365;
const earthTilt = new THREE.Vector3(23.5, 0, 0);
const earthPosition = new THREE.Vector3(earthOrbit, 0, 0);
let earthUniforms: { [uniforms: string]: THREE.IUniform };
earthUniforms = {
    u_texture: {value: new THREE.TextureLoader().load(earthTexture)},
    u_normalMap: {value: new THREE.TextureLoader().load(earthNormalMap)},
    u_lightPosition: {value: sunPosition},
    u_nightTexture: {
        value: new THREE.TextureLoader().load(earthNightTexture),
    },
    u_specularMap: {
        value: new THREE.TextureLoader().load(earthSpecularMap),
    }
};

//moon
const moonRadius = 1.7374;
const moonOrbit = 38.44 * 0.8 + 6;
const moonOrbitSpeed = 0.0028;
const moonRotationSpeed = 0.0365;
const moonTilt = new THREE.Vector3(0, 0, 0);
const moonPosition = new THREE.Vector3(moonOrbit, 0, 0);
let moonUniforms: { [uniforms: string]: THREE.IUniform };
moonUniforms = {
    u_texture: {value: new THREE.TextureLoader().load(moonTexture)},
    u_lightPosition: {value: sunPosition},
};

//game planet
const gamePlanetRadius = 5.212;
const gamePlanetOrbit = 74;
const gamePlanetOrbitSpeed = 0.00005;
const gamePlanetRotationSpeed = 0.005;
const gamePlanetTilt = new THREE.Vector3(12,0,1);
const gamePlanetPosition = new THREE.Vector3(gamePlanetOrbit, 0, 0 );
let gamePlanetUniforms: { [uniforms: string]: THREE.IUniform};
gamePlanetUniforms = {
    u_texture: {value: new THREE.TextureLoader().load(gamePlanetTexture)},
    u_lightPosition: {value: sunPosition}
}

//setup Scene with background texture
const scene = setupScene(
    new THREE.TextureLoader().load(universeTexture)
);


let planetarray: Planet[];

const sun = new Planet(
    'sun',
    sunRadius,
    sunOrbit,
    sunPosition,
    sunTilt,
    sunRotationSpeed,
    sunOrbitSpeed,
    sun_v_shader,
    sun_f_shader,
    sunUniforms,
    scene
);

const earth = new Planet(
    'earth',
    earthRadius,
    earthOrbit,
    earthPosition,
    earthTilt,
    earthRotationSpeed,
    earthOrbitSpeed,
    earth_v_shader,
    earth_f_shader,
    earthUniforms,
    null,
    sun
);

const moon = new Planet(
    'moon',
    moonRadius,
    moonOrbit,
    moonPosition,
    moonTilt,
    moonRotationSpeed,
    moonOrbitSpeed,
    moon_v_shader,
    moon_f_shader,
    moonUniforms,
    null,
    earth
);

const game_planet = new Planet(
    'game',
    gamePlanetRadius,
    gamePlanetOrbit,
    gamePlanetPosition,
    gamePlanetTilt,
    gamePlanetRotationSpeed,
    gamePlanetOrbitSpeed,
    gamePlanet_v_shader,
    gamePlanet_f_shader,
    gamePlanetUniforms,
    null,
    sun
)

planetarray = [sun, earth, moon, game_planet];
const solarSystem = new SolarSystem(scene, planetarray);


//setup cameras
const mainCamera = setupMainCamera(scene);
const earthCamera = setupEarthCamera(scene, earth);

//show cameras for debug
//earthCamera.show();

let container: HTMLCanvasElement;
let overlay: HTMLDivElement;

let app: App;

let renderer: THREE.WebGLRenderer;
let interactionManager: InteractionManager;
let css2dRenderer: CSS2DRenderer;


const stats = new Stats();

onMounted(() => {
    
    container = document.getElementById("canvas") as HTMLCanvasElement;
    overlay = document.getElementById("overlay") as HTMLDivElement;
    css2dRenderer = setupCSS2DRenderer(overlay);
    renderer = setUpRenderer(scene, mainCamera, container);


    /* stats.dom.style.position = 'absolute';
    stats.showPanel(0);
    document.body.appendChild(stats.dom); */

    interactionManager = new InteractionManager(
        renderer,
        mainCamera,
        renderer.domElement
    );



    solarSystem.planets.forEach((planet) => 
    {

        interactionManager.add(planet.mesh);

        if(planet.name === "game"){
            planet.mesh.addEventListener('click', () => {
                // Wechsel zur /game Route
                router.push('/game');
            });
        }
    });


    animate();

});


function animate() {
    time += 0.01;
    
    switch (solarSystem.currentPlanet) {
        case planets.earth:
            requestAnimationFrame(animate);
            overlay.className = "detailView";
            renderer.render(scene, earthCamera.camera);
            css2dRenderer.render(scene, earthCamera.camera);

            interactionManager.camera = earthCamera.camera;
            interactionManager.update();
            stats.update();
            earth.update(time);
            moon.update(time);
            break;
        
        default:
            requestAnimationFrame(animate);
            overlay.className = "overlay";
            renderer.render(scene, mainCamera);
            css2dRenderer.render(scene, mainCamera);
            interactionManager.camera = mainCamera;
            interactionManager.update();

            sun.material.uniforms.u_time.value = time;

            solarSystem.planets.map((planet) => {
                planet.update(time);
            });
            stats.update();
            break;
    }
}


</script>

<template>
    <div id="overlay" class="overview"></div>
    <canvas id="canvas"></canvas>
</template>

<style scoped></style>

