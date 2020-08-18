/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header-section").style.top = "0";
  } else {
    document.querySelector(".header-section").style.top = "-200px";
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
  var navSection = document.querySelector(".nav-section");

  navSection.classList.toggle("show");
}

function toggleBurgerMenu_AfterCatalogClick() {
  setTimeout(function () {
    var navSection = document.querySelector(".nav-section");
    navSection.classList.toggle("show");
  }, 3000);
}

// Toggle light theme
function toggleLightTheme() {
  const lightThemeContainer = document.querySelector(".container");
  const lightThemeNavMenu = document.querySelector(".nav-menu");
  const lightThemeNavBurger = document.querySelector(".nav-section");
  const lightThemeHeader = document.querySelector(".header-section");
  const lightThemeBanner = document.querySelector(".banner-section");
  const lightThemeBackground = document.querySelector(".background");
  const lightThemeAbout = document.querySelector(".about-section");
  const lightThemeProject = document.querySelector(".project-section");
  const lightThemeContact = document.querySelector(".contact-section");
  const lightThemeFooter = document.querySelector("footer");

  lightThemeContainer.classList.toggle("light");
  lightThemeNavMenu.classList.toggle("light");
  lightThemeNavBurger.classList.toggle("light");
  lightThemeHeader.classList.toggle("light");
  lightThemeBanner.classList.toggle("light");
  lightThemeBackground.classList.toggle("light");
  lightThemeAbout.classList.toggle("light");
  lightThemeProject.classList.toggle("light");
  lightThemeContact.classList.toggle("light");
  lightThemeFooter.classList.toggle("light");

  // When screen size is on mobile devices or tablets, run this script for video
  // For bg-light video
  // window.addEventListener("load", function () {
  const bgLight = document.getElementById("bg-light");

  function displayVidLight(screenDesktop) {
    if (screenDesktop.matches) {
      // If media query matches
      bgLight.src = "assets/bg-light.mp4";
    }
  }

  const screenDesktop = window.matchMedia("(min-width: 1024px)");
  // Call listener function at run time
  displayVidLight(screenDesktop);
  // Attach listener function on state changes
  screenDesktop.addListener(displayVidLight);
}

// When screen size is on mobile devices or tablets, run this script for video
// For bg-dark video
window.addEventListener("load", function () {
  const bgDark = document.getElementById("bg-dark");

  const visible =
    bgDark.offsetWidth || bgDark.offsetHeight || bgDark.getClientRects().length;

  if (visible) {
    const children = bgDark.getElementsByTagName("source");

    for (let i = 0; i < children.length; ++i) {
      children[i].src = children[i].dataset.src;
    }
  }

  bgDark.load();
});
