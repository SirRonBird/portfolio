import * as THREE from "three";
import {Planet} from "./Planet";

export class Atmosphere {
    size: number;

    parent: Planet;
    atmosphere: THREE.Mesh;
    atmosphereGeometry: THREE.SphereGeometry;

    atmosphereVertexShader: string;
    atmosphereFragmentShader: string;
    atmosphereUniforms: { [uniform: string]: THREE.IUniform };

    constructor(
        size: number,
        parent: Planet,
        atmosphereVertexShader: string,
        atmosphereFragmentShader: string,
        atmosphereUniforms: { [uniform: string]: THREE.IUniform }
    ) {
        this.size = size;
        this.parent = parent;
        this.atmosphereUniforms = atmosphereUniforms;

        this.atmosphereVertexShader = atmosphereVertexShader;
        this.atmosphereFragmentShader = atmosphereFragmentShader;

        this.atmosphereGeometry = new THREE.SphereGeometry(this.size, 32, 32);
        this.atmosphere = new THREE.Mesh(
            this.atmosphereGeometry,
            new THREE.RawShaderMaterial({
                uniforms: this.atmosphereUniforms,
                vertexShader: atmosphereVertexShader,
                fragmentShader: atmosphereFragmentShader,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true,
            })
        );
        this.parent.mesh.add(this.atmosphere);
    }

    update() {
        this.atmosphere.rotation.y -= this.parent.rotationSpeed;
    }
}
