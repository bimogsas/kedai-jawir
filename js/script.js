//Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger di click

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar slide

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
