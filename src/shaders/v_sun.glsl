#version 300 es 

// These uniforms and attributes are provided by threejs.
// If you want to add your own, look at https://threejs.org/docs/#api/en/materials/ShaderMaterial #Custom attributes and uniforms
// defines the precision
precision highp float;

// = object.matrixWorld
uniform mat4 modelMatrix;

// = camera.matrixWorldInverse * object.matrixWorld
uniform mat4 modelViewMatrix;

// = camera.projectionMatrix
uniform mat4 projectionMatrix;

// = camera.matrixWorldInverse
uniform mat4 viewMatrix;

// = inverse transpose of modelViewMatrix
uniform mat3 normalMatrix;

// = camera position in world space
uniform vec3 cameraPosition;


uniform sampler2D u_normalMap;

uniform float u_time;
uniform vec4 u_resolution;
uniform float u_progress;
uniform sampler2D u_texture;

out vec2 vUv;
out vec3 vPosition;

in vec3 position;
in vec3 normal;
in vec2 uv;


// main function gets executed for every vertex
void main()
{
    // set the varying variables
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}
