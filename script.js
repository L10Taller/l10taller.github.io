// Animación de velocímetro en el título
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.getElementById("hero-title");
  let speed = 0;
  const interval = setInterval(() => {
    speed += 10;
    heroTitle.textContent = `TorqueOS 11 25H2 — ${speed} km/h`;
    if (speed >= 220) {
      clearInterval(interval);
      heroTitle.textContent = "TorqueOS 11 25H2";
    }
  }, 80);
});
