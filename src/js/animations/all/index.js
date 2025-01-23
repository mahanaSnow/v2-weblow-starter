import { initNavStarter } from "./components/nav";
import { initButtonStarter } from "./components/button";

export function initGeneralAnimation() {
  initNavStarter();
  initButtonStarter();
}
import { VFX } from "@vfx-js/core";

const text404 = document.getElementById("404");
const vfx = new VFX();
vfx.add(text404, { shader: "glitch", overflow: 100 });
