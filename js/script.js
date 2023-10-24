//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu"),
  (onclick = () => {
    navbarNav?.classList.toggle("active");
  });
//   navbarNav.classList.toggle("active");
// document.querySelector("#hamburger-menu").onclick = () => {
// };

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector(`#hamburger-menu`);

document.addEventListener("click", function (e) {
  // @ts-ignore
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // @ts-ignore
    navbarNav.classList.remove(`active`);
  }
});
