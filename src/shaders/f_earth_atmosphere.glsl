#version 300 es

// defines the precision
precision highp float;

in float vIntensity;
//in vec3 vReflect;


out vec4 fragColor;

// main function gets executed for every pixel

void main() {
    

    vec3 glow = vec3(0.3,0.6,1.0)* vIntensity;
    fragColor = vec4( glow,.5 );
}
