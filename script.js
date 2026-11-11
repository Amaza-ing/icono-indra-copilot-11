const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const year = document.querySelector("#current-year");
const clock = document.querySelector("#analog-clock");
const clockTime = document.querySelector("#clock-time");
const hourHand = document.querySelector("#clock-hour");
const minuteHand = document.querySelector("#clock-minute");
const secondHand = document.querySelector("#clock-second");

year.textContent = new Date().getFullYear();

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  hourHand.setAttribute("transform", `rotate(${(hours + minutes / 60) * 30} 50 50)`);
  minuteHand.setAttribute("transform", `rotate(${(minutes + seconds / 60) * 6} 50 50)`);
  secondHand.setAttribute("transform", `rotate(${seconds * 6} 50 50)`);
  clockTime.textContent = time;
  clockTime.dateTime = now.toISOString();
  clock.setAttribute("aria-label", `Reloj analógico. Hora local: ${time}`);
}

updateClock();
window.setInterval(updateClock, 1000);

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.querySelector(".sr-only").textContent = isExpanded ? "Abrir menú" : "Cerrar menú";
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "Abrir menú";
    siteNav.classList.remove("is-open");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}






