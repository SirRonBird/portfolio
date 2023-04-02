#version 300 es

// defines the precision
precision highp float;

// we have access to the same uniforms as in the vertex shader
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

uniform sampler2D u_texture;
uniform sampler2D u_normalMap;
uniform vec3 u_lightPosition;

in vec3 position;
in vec2 vUv;
in vec3 vPosition;
in vec3 vNormal;
//in vec3 vReflect;


float lightMagnitude = 50.0;
float ambientReflectance = 0.1;
float diffuseReflectance = 1.;
float specularReflectance = 0.2;
vec3 specularLight = vec3(1.0, 1.0, 1.0);



out vec4 fragColor;

// main function gets executed for every pixel



void main()
{
    vec3 n = normalize(vNormal);

    vec3 l = normalize(u_lightPosition - vPosition);

    float diffuse = max(dot(n, l), 0.0);
    
    vec3 diffuseColor = texture(u_texture, vUv).rgb * diffuse * diffuseReflectance;    
    vec3 ambient = texture(u_texture, vUv).rgb * ambientReflectance;
    

    vec3 color =  diffuseColor + ambient;
    fragColor = vec4(color, 1.0);
}
