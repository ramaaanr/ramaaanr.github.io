import { certificate } from "./data.js";
let slider = 0;
function updateSlider() {
  let title = document.querySelector(".data-title");
  let detail = document.querySelector(".data-detail");
  let from = document.querySelector(".data-from");

  title.textContent = certificate[slider].title;
  detail.textContent = certificate[slider].detail;
  from.textContent = certificate[slider].from;
}

document.querySelector(".button-previous").addEventListener("click", () => {
  slider--;
  if (slider < 0) {
    slider = certificate.length - 1;
  }
  updateSlider();
  console.log(slider);
});

document.querySelector(".button-next").addEventListener("click", () => {
  slider++;
  if (slider > certificate.length - 1) {
    slider = 0;
  }
  updateSlider();
  console.log(slider);
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".drop-menu").classList.toggle("active");
});

updateSlider();

console.log(slider);
console.log(certificate.length);
