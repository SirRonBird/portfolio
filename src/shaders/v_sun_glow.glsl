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
uniform vec3 u_viewPos;
uniform float u_c;
uniform float u_p;
// default vertex attributes provided by Geometry and BufferGeometry
in vec3 position;
in vec3 normal;
in vec2 uv;

out float vIntensity;
out vec3 vPosition;
//out vec3 vReflect;


// main function gets executed for every vertex
void main()
{
    vPosition = position;
    
    vec3 vNormal = normalize(normalMatrix * normal);
    vec3 vNormel = normalize(normalMatrix * u_viewPos);
 
    vIntensity = pow(u_c - dot(vNormal, vNormel), u_p);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}
   
