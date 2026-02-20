"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2, Texture } from 'ogl';

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 uGridSize;
uniform vec2 uResolution;
uniform sampler2D uFont;
uniform float uCharCount;
uniform sampler2D uImage;
uniform vec2 uImageSize;

varying vec2 vUv;

void main() {
    // 1. Pixelate UVs to grid cells
    vec2 gridUV = floor(vUv * uGridSize) / uGridSize;
    vec2 centerUV = gridUV + (0.5 / uGridSize);

    // 2. Flip Y: WebGL UV has y=0 at bottom, image has y=0 at top
    vec2 imageUV = vec2(centerUV.x, 1.0 - centerUV.y);

    // 3. Object-cover: maintain aspect ratio and center-crop
    float containerAspect = uResolution.x / uResolution.y;
    float imageAspect = uImageSize.x / uImageSize.y;

    if (containerAspect > imageAspect) {
        // Container is wider: fit width, crop height
        float scale = containerAspect / imageAspect;
        imageUV.y = (imageUV.y - 0.5) * scale + 0.5;
    } else {
        // Container is taller: fit height, crop width
        float scale = imageAspect / containerAspect;
        imageUV.x = (imageUV.x - 0.5) * scale + 0.5;
    }

    // Discard out-of-bounds samples
    if (imageUV.x < 0.0 || imageUV.x > 1.0 || imageUV.y < 0.0 || imageUV.y > 1.0) {
        discard;
    }

    // 4. Sample the profile image
    vec4 imageColor = texture2D(uImage, imageUV);

    // 5. Convert to grayscale brightness
    float brightness = dot(imageColor.rgb, vec3(0.299, 0.587, 0.114));

    // 6. Map brightness to character index (same char set as background AsciiShader)
    float charIndex = floor(brightness * (uCharCount - 1.0));

    // 7. Sample the font texture
    vec2 cellUV = fract(vUv * uGridSize);
    float charWidth = 1.0 / uCharCount;
    vec2 fontUV = vec2(
        (charIndex + cellUV.x) * charWidth,
        cellUV.y
    );
    vec4 charColor = texture2D(uFont, fontUV);

    // 8. Discard background (non-character) pixels
    if (charColor.r < 0.5) discard;

    // 9. Output white characters — matching the OGL background shader style
    gl_FragColor = vec4(vec3(1.0) * charColor.r, 1.0);
}
`;

interface AsciiImageShaderProps {
    src: string;
}

export default function AsciiImageShader({ src }: AsciiImageShaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({ alpha: true });
        const gl = renderer.gl;
        const canvas = renderer.gl.canvas;
        canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
        containerRef.current.appendChild(canvas);

        // Font texture — same character set as background AsciiShader
        const chars = " .'`^,:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
        const fontSize = 64;
        const fontCanvas = document.createElement('canvas');
        fontCanvas.width = fontSize * chars.length;
        fontCanvas.height = fontSize;
        const ctx2d = fontCanvas.getContext('2d');
        if (ctx2d) {
            ctx2d.fillStyle = '#000000';
            ctx2d.fillRect(0, 0, fontCanvas.width, fontCanvas.height);
            ctx2d.font = `bold ${fontSize}px monospace`;
            ctx2d.textAlign = 'center';
            ctx2d.textBaseline = 'middle';
            ctx2d.fillStyle = '#ffffff';
            for (let i = 0; i < chars.length; i++) {
                ctx2d.fillText(chars[i], i * fontSize + fontSize / 2, fontSize / 2);
            }
        }

        const fontTexture = new Texture(gl, {
            image: fontCanvas,
            generateMipmaps: false,
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR,
        });

        // Image texture — starts empty, populated on load
        const imageTexture = new Texture(gl, {
            generateMipmaps: false,
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR,
        });

        // Build program before loading image so the onload callback can update uniforms
        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uGridSize: { value: new Vec2(60, 80) },
                uResolution: { value: new Vec2(1, 1) },
                uFont: { value: fontTexture },
                uCharCount: { value: chars.length },
                uImage: { value: imageTexture },
                uImageSize: { value: new Vec2(1, 1) },
            },
        });

        const img = new Image();
        img.onload = () => {
            imageTexture.image = img;
            program.uniforms.uImageSize.value.set(img.naturalWidth, img.naturalHeight);
        };
        img.src = src;

        const geometry = new Triangle(gl);
        const mesh = new Mesh(gl, { geometry, program });

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                renderer.setSize(width, height);
                program.uniforms.uResolution.value.set(width, height);

                // Match grid density to background shader (charSize ~12px)
                const charSize = 10;
                program.uniforms.uGridSize.value.set(
                    Math.floor(width / charSize),
                    Math.floor(height / charSize)
                );
            }
        });
        resizeObserver.observe(containerRef.current);

        let animId: number;
        const render = () => {
            animId = requestAnimationFrame(render);
            renderer.render({ scene: mesh });
        };
        animId = requestAnimationFrame(render);

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animId);
            if (containerRef.current?.contains(canvas)) {
                containerRef.current.removeChild(canvas);
            }
        };
    }, [src]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0"
            style={{ background: 'black' }}
        />
    );
}
