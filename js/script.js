/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header-section").style.top = "0";
  } else {
    document.querySelector(".header-section").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

/* Scroll up button script */
var scrollBtn = document.querySelector(".scroll-up");

/* When the user scrolls down 20px from the top of the document, show the button */

var scrollBtn = document.querySelector(".scroll-up");

window,
  addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });

/* Toggle X icon on burger menu */

function toggleBurgerMenu() {
  // var headerSection = document.querySelector(".header-section");
  var navSection = document.querySelector(".nav-section");
  // var container = document.querySelector(".container");

  // headerSection.classList.toggle("active");
  navSection.classList.toggle("active");
  navSection.classList.toggle("show");
  // container.classList.toggle("active");
}

// document
//   .querySelector(".burger-menu")
//   .addEventListener("click", () =>
//     document.querySelector(".nav-section").classList.toggle("show")
//   );
