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
uniform sampler2D u_nightTexture;
uniform sampler2D u_normalMap;
uniform sampler2D u_specularMap;
uniform vec3 u_lightPosition;

in vec3 position;
in vec2 vUv;
in vec3 vPosition;
in vec3 vNormal;
//in vec3 vReflect;

float lightMagnitude = 1.0;
float ambientReflectance = 0.2;
float diffuseReflectance = 1.5;
float specularReflectance = 0.8;
vec3 specularLight = vec3(.5, .5, .5);

out vec4 fragColor;

// main function gets executed for every pixel

vec3 calcNormal(){
    vec3 normalMapColor = texture(u_normalMap, vUv).rgb;
    vec3 normalDirection = normalize(normalMapColor * 2.0 - 1.0);
    mat3 tangentToWorld = mat3(
        vec3(1.0, 0.0, 0.0),
        vec3(0.0, 1.0, 0.0),
        vec3(0.0, 0.0, 1.0)
    );
    vec3 worldNormal = normalize(tangentToWorld * normalDirection);
    return worldNormal;
}

void main() {
    vec3 n = normalize(vNormal);

    vec3 l = normalize(u_lightPosition - vPosition);

    vec3 r = reflect(-l, n);
    vec3 v = normalize(cameraPosition - vPosition);

    float lambertian = max(dot(n, l), 0.0);
    float specular = pow(max(dot(r,v), 0.0), 32.0) * lightMagnitude;

    float facing = dot(normalize(vNormal), l);
    float diffuseColor =  lambertian * diffuseReflectance;

    vec3 specularColor = specularLight * specularReflectance * specular;


    float atmosphere = max(dot(normalize(vNormal), l), 0.0);
    vec3 atmosphereColor = vec3(0.3,0.6,1.0)*pow(atmosphere, 1.5)*0.3;


    vec3 color = texture(u_texture,vUv).rgb * (diffuseColor  + ambientReflectance + atmosphereColor) /* + specularColor * texture(u_specularMap, vUv).rgb */;
    fragColor = vec4(color, 1.0);
}
