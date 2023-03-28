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

in vec3 position;
in vec2 vUv;
in vec3 vPosition;
//in vec3 vReflect;


vec3 lightPosition = vec3(10.0, 0.0, 8.0);
float lightMagnitude = 50.0;
float ambientReflectance = 0.8;
float diffuseReflectance = 0.2;
float specularReflectance = 0.2;
vec3 specularLight = vec3(1.0, 1.0, 1.0);



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


void main()
{
    vec3 n = calcNormal();

    vec3 l = normalize(lightPosition - vPosition);

    vec3 r = reflect(-l, n);
    vec3 v = normalize(-vPosition);

    float diffuse = max(dot(n, l), 0.0);
    float specular = pow(max(dot(r, v), 0.0), dot(specularLight, vec3(1.0, 1.0, 1.0))) * lightMagnitude;
    
    vec3 ambient = texture(u_texture, vUv).rgb * ambientReflectance;

    vec3 diffuseColor = texture(u_texture, vUv).rgb * diffuse * diffuseReflectance;
    vec3 specularColor = specularLight * specular * specularReflectance;

    vec3 color = ambient + diffuseColor * specularColor;
    fragColor = vec4(color, 1.0);
}
