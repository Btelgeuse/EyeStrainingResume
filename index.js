let hue = 0;
const img = document.getElementById("movingImg");
let x = 100,
  y = 100;
let vx = 2,
  vy = 2;
let angle = 0;

function animateBg(hue) {
  document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

  hue = (hue + 1) % 360;
  requestAnimationFrame(animateBg);
}

function animate() {
  // Move position
  x += vx;
  y += vy;

  // Bounce off edges
  const imgWidth = img.offsetWidth;
  const imgHeight = img.offsetHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (x <= 0 || x + imgWidth >= screenWidth) vx *= -1;
  if (y <= 0 || y + imgHeight >= screenHeight) vy *= -1;

  // Rotate
  angle = (angle + 2) % 360;

  // Apply transforms
  img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}

animateBg();
animate();
