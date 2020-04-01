const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navLinkFade 0.5s ease forwards ${index/7 +1.5}s";
      }
    });
    burger.classList.toggle("toggle");
  });
};

var count = 0;

navslide();
function change() {
  var line1 = document.querySelector(".line1");
  var line2 = document.querySelector(".line2");
  var line3 = document.querySelector(".line3");
  if (count % 2 == 0) {
    line1.style.transform = "translate(8px,8px) rotateZ(45deg)";
    line3.style.transform = "translate(8px,-8px) rotateZ(-45deg)";
    line2.style.opacity = "0";
    count++;
  } else {
    line1.style.transform = "translate(0px,0px) rotateZ(0deg)";
    line3.style.transform = "translate(0px,0px) rotateZ(0deg)";
    line2.style.opacity = "1";
    count++;
  }
}
