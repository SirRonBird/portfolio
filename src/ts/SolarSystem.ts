import * as THREE from 'three';
import {Planet} from "./Planet";
import {planets} from "../utils/threeUtils";
export class SolarSystem {

    scene: THREE.Scene;
    planets: Planet[];

    currentPlanet: string | null = null;

    constructor(scene: THREE.Scene, planets: Planet[]) {
        this.scene = scene;
        this.planets = planets;

        planets.map(planet => {
            planet.setSolarSystem(this);
        })

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
        earthOrbit.add(moonOrbit);

        scene.add(solarSystem);
    }

    getCurrentPlanet() {
        return this.currentPlanet;
    }
    setCurrentPlanet(planet: string) {
        this.currentPlanet = planet;
    }
}