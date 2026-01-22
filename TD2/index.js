let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile_menu");

function setMenuOpen(isOpen) {
  mobileMenu.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu_open", isOpen);

  burger.classList.toggle("open", isOpen);

  burger.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));

  if (!isOpen) {
    navbar.classList.remove("hidden");
    lastScrollY = window.scrollY;
  }
}

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    setMenuOpen(!isOpen);
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("mobile_link")) {
      setMenuOpen(false);
      return;
    }

    if (e.target === mobileMenu) {
        setMenuOpen(false);
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("menu_open")) {
    setMenuOpen(false);
  }
});

window.addEventListener("scroll", () => {
  if (document.body.classList.contains("menu_open")) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});