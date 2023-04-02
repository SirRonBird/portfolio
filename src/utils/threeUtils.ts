import * as THREE from "three";
import {Planet} from "../ts/Planet";
import {DetailCamera} from "../ts/DetailCamera";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const earthCameraOffset = new THREE.Vector3(120, 10, 25);
const earthCameraLookAtOffset = new THREE.Vector3(0, 0, 10);

export enum planets {
    earth = "earth",
    sun = "sun",
    moon = "moon",
}
export function setupScene(backgroundTexture: THREE.Texture) {
    const scene = new THREE.Scene();
    scene.background = backgroundTexture;
    return scene;
}

export function setUpRenderer(scene: THREE.Scene, camera: THREE.Camera, container: HTMLElement) {
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
}
export function setupMainCamera(scene: THREE.Scene) {
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
}

export function createSolarSystem(scene: THREE.Scene, planets: Planet[]) {
    const solarSystem = new THREE.Object3D();
    solarSystem.name = "solarSystem";
    solarSystem.position.set(0, 0, 0);
    solarSystem.add(planets[0].getMesh());

    const earthOrbit = new THREE.Object3D();
    earthOrbit.name = "earthOrbit";
    earthOrbit.add(planets[1].getMesh());
    planets[1].setOrbitObject(earthOrbit);
    solarSystem.add(earthOrbit);

    const moonOrbit = new THREE.Object3D();
    moonOrbit.name = "moonOrbit";
    moonOrbit.position.copy(planets[1].position);
    moonOrbit.add(planets[2].getMesh());
    planets[2].setOrbitObject(moonOrbit);
    solarSystem.add(moonOrbit);

    scene.add(solarSystem);
}

export function setupEarthCamera(scene: THREE.Scene, target: Planet) {
    return new DetailCamera(
        "earthCamera",
        scene,
        target,
        target.orbitObject,
        earthCameraOffset,
        earthCameraLookAtOffset,
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
}