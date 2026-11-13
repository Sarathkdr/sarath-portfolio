
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});


// ANIMATED JOB TITLE

const roles = [
  "Java Developer",
  "Backend Developer",
  "Software Engineer"
];

const roleText = document.getElementById("roleText");

let roleIndex = 0;

setInterval(() => {

  roleIndex = (roleIndex + 1) % roles.length;

  roleText.style.opacity = "0";

  setTimeout(() => {

    roleText.textContent = roles[roleIndex];

    roleText.style.opacity = "1";

  }, 220);

}, 2400);


// SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      revealObserver.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach((element) => {

  revealObserver.observe(element);

});


// ACTIVE NAVIGATION SECTION

const sections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      navItems.forEach((item) => {

        item.classList.toggle(
          "active",
          item.getAttribute("href") === `#${entry.target.id}`
        );

      });

    }

  });

}, {
  rootMargin: "-35% 0px -55% 0px"
});

sections.forEach((section) => {

  sectionObserver.observe(section);

});
