window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//Scrolling animation--------------------------
// Create a new IntersectionObserver that takes a callback function as its argument
const observer = new IntersectionObserver((entries) => {
  // Loop through each entry that the observer observes
  entries.forEach((entry) => {
    // Check if the entry is currently intersecting with the viewport
    if(entry.isIntersecting){
      // If the entry is intersecting, add the 'show' class to the entry's target element
      entry.target.classList.add('show');
      setTimeout(typeWrite, 2500);
    }else{
      // If the entry is not intersecting, remove the 'show' class from the entry's target element
      entry.target.classList.remove('show');
    }
  })
})

// Select all elements with the class 'hid'
const hidden = document.querySelectorAll('.hid');
// Loop through each 'hid' element and observe it with the IntersectionObserver
hidden.forEach((el) => observer.observe(el));
//Scrolling animation--------------------------




const dots = [];
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

var i =0;
var text = `I'm currently a student at Kaunas University of Technology, where I'm studying software development. <br>
It's a field that I'm really passionate about.

I'm always eager to learn more about programming, software engineering, and related topics.
Currently, I'm mostly working with C# using the ASP.NET framework.
I'm also spending a lot of my free time learning about Web Development.<br> It's
an area that I'm really interested in, and I'm eager to gain more knowledge.`
var target = document.getElementById("cons").innerHTML;

function typeWait(){
  setTimeout(target += "/", 1000);
  setTimeout(target.substring(0, target.length-1), 1100);
}
function typeWrite(){
  if(i < text.length){
    
    document.getElementById("cons").innerHTML += text[i];
    i++;
    setTimeout(typeWrite, 40);
    if(i == 20){}
  }
}
function typeDelete(){
  document.getElementById("cons").innerHTML = text + text[i].replace('_');
}
// const elem = window.getComputedStyle(document.querySelector('.test'), ':hover').getPropertyValue('color')
// document.addEventListener('click', (event) => {
//     var text = `1px 1px 1px #919191, 1px 1px 1px #919191, 1px 2px 1px #919191,
//     1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191,
//     1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
//     1px 9px 1px #919191, 1px 10px 1px #919191, 1px 11px 1px #919191,
//     1px 15px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
//     1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
//     1px 30px 60px rgba(16, 16, 16, 0.4);`;
//     elem = "#919191"
//   });

  