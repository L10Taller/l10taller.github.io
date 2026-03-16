const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    mainMenu.classList.toggle("open");
  });

  mainMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainMenu.classList.remove("open");
    });
  });
}

const quickSearch = document.getElementById("quickSearch");
const quickSearchBtn = document.getElementById("quickSearchBtn");

function runQuickSearch() {
  if (!quickSearch) return;

  const value = quickSearch.value.toLowerCase().trim();

  if (value.includes("descarga") || value.includes("iso") || value.includes("tool")) {
    document.querySelector("#descargas")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (value.includes("app") || value.includes("obd") || value.includes("play")) {
    document.querySelector("#app")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (value.includes("video") || value.includes("youtube") || value.includes("demo")) {
    document.querySelector("#videos")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (value.includes("donar") || value.includes("paypal") || value.includes("kofi") || value.includes("mercado")) {
    document.querySelector("#donar")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (value.includes("contacto") || value.includes("correo") || value.includes("mensaje")) {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" });
}

if (quickSearchBtn) {
  quickSearchBtn.addEventListener("click", runQuickSearch);
}

if (quickSearch) {
  quickSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runQuickSearch();
    }
  });
}

document.querySelectorAll(".search-tag").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
