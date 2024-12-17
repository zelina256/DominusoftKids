let navbar = document.querySelector("nav");
let links = document.querySelectorAll(".nav-link");
let navBurgerLines = document.querySelectorAll("span.line");
let contactNav = document.querySelector(".contactNav");
let lines = document.querySelector(".contactNav");
let tabLink = document.querySelectorAll(" .nav-pills .nav-link");
console.log(tabLink);
window.onscroll = () => {
  let scroll = window.pageYOffset > 200;
  navbar.style.backgroundColor = scroll ? "#005176" : "transparent";
  navbar.style.transition = "opacity 0.3s ease -in -out";

  // contactNav.style.display = scroll ? "block" : "none"
  navBurgerLines.forEach((lines) => {
    lines.style.backgroundColor = scroll ? "#e6e7ee" : "#e6e7ee";
  });
  links.forEach((link) => {
    link.style.color = scroll ? "#e6e7ee" : "#e6e7ee";
  });
  tabLink.forEach((link) => {
    link.style.color = scroll ? "#005176" : "#005176";
  });
};

// document.querySelector("#programet").scrollIntoView({
//   behavior: "smooth",
// });

VanillaTilt.init(document.querySelector(".your-element"), {
  max: 25,
  speed: 400,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".your-element"));
