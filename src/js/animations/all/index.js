import { initNavStarter } from "./components/nav";
import { initButtonStarter } from "./components/button";

export function initGeneralAnimation() {
  initNavStarter();
  initButtonStarter();
}

// import { VFX } from "https://esm.sh/@vfx-js/core";

// const vfx = new VFX();
// const shader = `
//     uniform vec2 resolution;
//     uniform vec2 offset;
//     uniform vec2 velocity;
//     uniform sampler2D src;
//     out vec4 outColor;

//     void main() {
//         vec2 uv = (gl_FragCoord.xy - offset) / resolution;
//         vec2 d = velocity * vec2(-1, 1);

//         vec4 cr = texture(src, uv + d * 1.0);
//         vec4 cg = texture(src, uv + d * 1.5);
//         vec4 cb = texture(src, uv + d * 2.0);

//         outColor = vec4(cr.r, cg.g, cb.b, cr.a + cg.a + cb.a);
//     }
// `;

// let pos = [0.5, 0.5];
// let posDelay = [0.5, 0.5];

// const mix = (a, b, t) => a * (1 - t) + b * t;

// window.addEventListener("pointermove", (e) => {
//   const x = e.clientX / window.innerWidth;
//   const y = e.clientY / window.innerHeight;
//   pos = [x, y];
// });

// vfx.add(document.getElementById("404"), {
//   shader,
//   uniforms: {
//     velocity: () => {
//       posDelay = [
//         mix(posDelay[0], pos[0], 0.05),
//         mix(posDelay[1], pos[1], 0.05),
//       ];

//       return [pos[0] - posDelay[0], pos[1] - posDelay[1]];
//     },
//   },
// });
import { VFX } from "@vfx-js/core";

const text404 = document.getElementById("404");
const vfx = new VFX();
vfx.add(text404, { shader: "glitch", overflow: 100 });
