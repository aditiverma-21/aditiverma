// Add real-time clock
const timeElement = document.getElementById("time");
function updateTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Moving gradient effect
const gradientBackground = document.querySelector(".gradient-background");

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const xPercentage = (clientX / screenWidth) * 100;
  const yPercentage = (clientY / screenHeight) * 100;

  gradientBackground.style.background = `
    radial-gradient(circle at ${xPercentage}% ${yPercentage}%, 
    hsla(217.85,28.38%,44.9%,1) 0%, rgba(255, 255, 255, 0.3) 30%)
  `;
});
