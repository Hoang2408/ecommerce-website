const bar = document.getElementById("bar");
// console.log(bar)
const nav = document.getElementById("navbar");
const isClose = document.getElementById("close");
//mo menu
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
  });
}
//dong menu
if (isClose) {
  isClose.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });
}
//overlay
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  nav.classList.remove("active");
});
//cart
//gsap
gsap.to(".overlay-gsap", { y: "-100vh", delay: 1.5 });
gsap.to(".layer-1", { y: "-100vh", delay: 0.5 });
gsap.to(".layer-2", { y: "-100vh", delay: 0.7 });
gsap.to(".layer-3", { y: "-100vh", delay: 0.9 });
gsap.fromTo(
  ".circle-small",
  { x: "-30rem", opacity: 0 },
  { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 1 }
);

gsap.fromTo(
  ".circle-large",
  { x: "30rem", opacity: 0 },
  { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 1.5 }
);
gsap.fromTo(
  ".text",
  { x: "30rem", opacity: 0 },
  { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 1.5 }
);
