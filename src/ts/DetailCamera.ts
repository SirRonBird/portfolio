import * as THREE from 'three';
import {CSS2DObject, CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";
import {Planet} from "./Planet";


export class DetailCamera {
    name: string;
    scene: THREE.Scene;
    target: Planet;
    //the object the camera is attached to (the planet-orbit)
    parent: THREE.Object3D;

    position: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    offset: THREE.Vector3;

    fov: number;
    aspect: number;
    near: number;
    far: number;

    camera: THREE.PerspectiveCamera;
    mainDiv: HTMLDivElement;
    htmlElements: HTMLDivElement[];
    detailText: CSS2DObject;

    constructor(
        name: string,
        scene: THREE.Scene,
        target: Planet,
        parent: THREE.Object3D,
        offset: THREE.Vector3,
        lookAtOffset: THREE.Vector3,
        fov: number,
        aspect: number,
        near: number,
        far: number
    ){
        this.name = name;
        this.scene = scene;
        this.target = target;
        this.parent = parent;
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.offset = offset;
        //create the camera
        this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
        this.camera.name = this.name;

        //position the camera relative to the parent and look at the target
        this.camera.position.copy(this.position.copy(this.parent.position).add(this.offset));
        this.camera.lookAt(this.position.copy(this.target.position).add(lookAtOffset));

        //add the camera to the parent to make it move with the parent
        parent.add(this.camera);
    }

    show(){
        const cameraHelper = new THREE.CameraHelper(this.camera);
        this.scene.add(cameraHelper);
    }
}



export function setupCSS2DRenderer(container: HTMLElement){
    const css2dRenderer = new CSS2DRenderer();
    css2dRenderer.setSize(window.innerWidth, window.innerHeight);
    css2dRenderer.domElement.style.position = "absolute";
    css2dRenderer.domElement.style.top = "0px";
    css2dRenderer.domElement.style.pointerEvents = "none";
    css2dRenderer.domElement.className = "css2dRenderer";
    container.appendChild(css2dRenderer.domElement);
    return css2dRenderer;
}