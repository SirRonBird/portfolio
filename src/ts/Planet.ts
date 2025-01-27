import * as THREE from "three";
import {Atmosphere} from "./Atmosphere";
import {SolarSystem} from "./SolarSystem";


//class for the planets
export class Planet {
    name: string;
    radius: number;
    orbit: number;
    position: THREE.Vector3;
    tilt: THREE.Vector3;
    rotationSpeed: number;
    orbitSpeed: number;

    solarSystem: SolarSystem | null;

    uniforms: { [uniform: string]: THREE.IUniform };
    fragmentShader: string;
    vertexShader: string;

    mesh: THREE.Mesh;
    geometry: THREE.SphereGeometry;
    material: THREE.RawShaderMaterial;

    atmosphere: Atmosphere | null;

    parent: Planet | null;
    orbitObject: THREE.Object3D | null;
    scene: THREE.Scene | null;

    constructor(
        name: string,
        radius: number,
        orbit: number,
        position: THREE.Vector3,
        tilt: THREE.Vector3,
        rotationSpeed: number,
        orbitSpeed: number,
        vertexShader: string,
        fragmentShader: string,
        uniforms: { [uniform: string]: THREE.IUniform },
        scene?: THREE.Scene,
        parent?: Planet,
    ) {
        this.name = name;
        this.radius = radius;
        this.orbit = orbit;
        this.position = position;
        this.tilt = tilt;
        this.rotationSpeed = rotationSpeed;
        this.orbitSpeed = orbitSpeed;
        this.uniforms = uniforms;


        this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);
        this.material = new THREE.RawShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.name = this.name;
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);

        parent ? (this.parent = parent) : (this.parent = null);
        scene ? (this.scene = scene) : (this.scene = null);

        this.addEventListeners();
    }

    showAxishelper() {
        const axisHelper = new THREE.AxesHelper(3 + this.radius);
        this.mesh.add(axisHelper);
    }

    public setSolarSystem(solarSystem: SolarSystem) {
        this.solarSystem = solarSystem;
    }

    public getMesh() {
        return this.mesh;
    }

    rotate() {
        this.mesh.rotation.y += this.rotationSpeed;
    }

    rotateOrbit() {
        if (this.orbitObject) {
            this.orbitObject.rotation.y += this.orbitSpeed;
        }
    }

    setOrbitObject(orbitObject: THREE.Object3D) {
        this.orbitObject = orbitObject;
    }

    addToParent(parent: Planet) {
        this.parent = parent;
        this.parent.mesh.add(this.mesh);
    }

    addToScene(scene: THREE.Scene) {
        this.scene = scene;
        this.scene.add(this.mesh);
    }

    addAtmosphere(size: number, vertexShader: string, fragmentShader: string, uniforms: {
        [uniform: string]: THREE.Uniform
    },) {
        this.atmosphere = new Atmosphere(
            size,
            this,
            vertexShader,
            fragmentShader,
            uniforms,
        );
    }

    addEventListeners() {
        if(this.name === "earth"){

        this.mesh.addEventListener("click", () => {
            console.log(this.name);
            if (this.solarSystem && this.solarSystem.getCurrentPlanet() !== this.name) {
                this.solarSystem.setCurrentPlanet(this.name);
            } else if (this.solarSystem && this.solarSystem.getCurrentPlanet() === this.name) {
                this.solarSystem.setCurrentPlanet(null);
            }
        });}

        this.mesh.addEventListener("mouseover", () => {
            //TODO: add hover effect glow
            //console.log("hover");
        });

        this.mesh.addEventListener("mouseout", () => {
            //TODO: remove hover effect glow
            //console.log("hover over");
            }
        );


    }

    //methods
    update(time) {
        this.rotate();
        this.rotateOrbit();
    }
}
