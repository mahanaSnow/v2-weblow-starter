// main entry point (e.g., src/js/index.js)

import "../styles/index.css";
import { initPageRouter } from "./utils/pageRouter";

document.addEventListener("DOMContentLoaded", () => {
  initPageRouter();
});

console.log("Hello, Viiiiiite!");
document.addEventListener("DOMContentLoaded", () => {
 
  const allElements = document.querySelectorAll("*");

  allElements.forEach((element) => {
    element.style.border = "1px solid blue";
  });

  console.log("Tous les éléments ont une bordure rouge !");
});
