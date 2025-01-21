// main entry point (e.g., src/js/index.js)

import "../styles/index.css";
import { initPageRouter } from "./utils/pageRouter";

document.addEventListener("DOMContentLoaded", () => {
  initPageRouter();
});

import { VFX } from "@vfx-js/core";

const img = document.querySelector(".img-svg");

const vfx = new VFX();
img.forEach((img) => {
  vfx.add(img, { shader: "glitch", overflow: 100 });
});
