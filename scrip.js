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
