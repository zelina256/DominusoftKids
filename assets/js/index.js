let navbar = document.querySelector("nav");
let links = document.querySelectorAll(".nav-link");
let navBurgerLines = document.querySelectorAll("span.line");
let contactNav = document.querySelector(".contactNav");

window.onscroll = () => {
  let scroll = window.pageYOffset > 200;
  navbar.style.backgroundColor = scroll ? "#005176" : "transparent";
  navbar.style.transition = "opacity 0.3s ease -in -out";
  // contactNav.style.display = scroll ? "block" : "none"
  navBurgerLines.forEach((lines) => {
    lines.style.backgroundColor = scroll ? "#005176" : "#e6e7ee";
  });
  links.forEach((link) => {
    link.style.color = scroll ? "#e6e7ee" : "#e6e7ee";
  });
};
