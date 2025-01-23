// main entry point (e.g., src/js/index.js)

import "../styles/index.css";
import { initPageRouter } from "./utils/pageRouter";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

document.addEventListener("DOMContentLoaded", () => {
  initPageRouter();
});
gsap.registerPlugin(Draggable);

Draggable.create("#Drag", {
  bounds: ".moodboard",
  inertia: true,
});

console.log("dragagarrrr");
