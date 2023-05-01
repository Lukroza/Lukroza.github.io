
const dots = [];


document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`Mouse position: (${x}, ${y})`);
});


document.addEventListener('mousemove', (event) => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = event.clientX + 'px';
  dot.style.top = event.clientY + 'px';
  document.body.appendChild(dot);
  
  const targetX = event.clientX + (Math.random() * 200 - 100);
  const targetY = event.clientY + (Math.random() * 200 - 100);
  const distance = Math.sqrt(Math.pow(targetX - event.clientX, 2) + Math.pow(targetY - event.clientY, 2));
  const speed = 0.2;
  const time = distance / speed;
  const startX = event.clientX;
  const startY = event.clientY;
  let startTime = null;

  function animateDot(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percent = Math.min(progress / time  , 1);
    const currentX = startX + (targetX - startX) * percent;
    const currentY = startY + (targetY - startY) * percent;
    dot.style.left = currentX + 'px';
    dot.style.top = currentY + 'px';
    if (percent < 1) {  
      requestAnimationFrame(animateDot);
    } else {
      document.body.removeChild(dot);
    }
  }

  requestAnimationFrame(animateDot);
  dots.push(dot);

});

// setInterval(() => {
//   dots.forEach((dot) => {
//     const x = parseInt(dot.style.left);
//     const y = parseInt(dot.style.top);
//     const distance = Math.sqrt(Math.pow(x - window.innerWidth / 2, 2) + Math.pow(y - window.innerHeight / 2, 2));
//     const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;
//     const percent = Math.max(1 - distance / maxDistance, 0);
//     const opacity = percent * 0.5 + 0.1;
//     dot.style.opacity = opacity;
//     const speed = percent * 0.1;
//     const angle = Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2);
//     const vx = Math.cos(angle) * speed;
//     const vy = Math.sin(angle) * speed;
//     const newX = x + vx;
//     const newY = y + vy;
//     dot.style.left = newX + 'px';
//     dot.style.top = newY + 'px';
//   });
// }, 50);


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
const sliderValue = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  document.getElementById("lorem").style.left = sliderValue
  output.innerHTML = sliderValue
}