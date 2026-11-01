// Add real-time clock
const timeElement = document.getElementById("time");
function updateTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Moving gradient effect (mouse, pen and touch)
const gradientBackground = document.querySelector(".gradient-background");
let ticking = false;
let px = 50;
let py = 50;

function applyGradient() {
  gradientBackground.style.setProperty("--x", px + "%");
  gradientBackground.style.setProperty("--y", py + "%");
  ticking = false;
}

function moveGradient(clientX, clientY) {
  px = (clientX / window.innerWidth) * 100;
  py = (clientY / window.innerHeight) * 100;
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(applyGradient);
  }
}

document.addEventListener("mousemove", (e) => moveGradient(e.clientX, e.clientY), { passive: true });

document.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  if (t) moveGradient(t.clientX, t.clientY);
}, { passive: true });