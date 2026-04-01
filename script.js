// Animación simple de velocímetro al cargar
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero h2");
  let speed = 0;
  const interval = setInterval(() => {
    speed += 5;
    heroTitle.textContent = `TorqueOS 11 25H2 — ${speed} km/h`;
    if (speed >= 250) {
      clearInterval(interval);
      heroTitle.textContent = "TorqueOS 11 25H2";
    }
  }, 50);
});
