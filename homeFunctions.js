window.onload = function() {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//Scrolling animation-------------------------
// Create a new IntersectionObserver that takes a callback function as its argument
const observer = new IntersectionObserver((entries) => {
  // Loop through each entry that the observer observes
  entries.forEach((entry) => {
    // Check if the entry is currently intersecting with the viewport
    if(entry.isIntersecting){
      // If the entry is intersecting, add the 'show' class to the entry's target element
      entry.target.classList.add('show');
      setTimeout(typeWrite, 2500);
    }
  })
})

// Select all elements with the class 'hid'
const hidden = document.querySelectorAll('.hid');
// Loop through each 'hid' element and observe it with the IntersectionObserver
hidden.forEach((el) => observer.observe(el));
//Scrolling animation-----------------------

//-------------------------------------
// The real game-changer function responsible to fill svg as we scroll.
drawOnScroll = () => {
  // Get the id of the <path> element and the length of <path>
  var path = document.getElementById("myPath");
  var length = path.getTotalLength();

  // The start position of the drawing
  path.style.strokeDasharray = length;
  // Hide the path by offsetting dash. Remove this line to show the path before scroll draw
  path.style.strokeDashoffset = length;

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as
  // percentage scrolled
  window.addEventListener("scroll", fillOnScroll);

  function fillOnScroll() {

      // This long calculation is just needed to find out the percentage of the webpage that has been scrolled.
      // You don't need to worry about it much. Can be used as is all the time.
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // Sets draw to (the progress of scroll multiplied by the length) to find exact offset.
      var draw = length * scrollpercent * 0.7;
      console.log(draw)

      // In downward scroll, simply decreases the strokeDashOffset gradually towards zero.
      // Reverse the drawing (when scrolling upwards)
      path.style.strokeDashoffset = (length - draw);
      console.log()
  }
}

// Invoking the function once so that it set ups the event listener for scroll.
drawOnScroll();
//-------------------------------------



var i =0;
var text = `I'm 
currently a student at Kaunas University of Technology, where I'm studying software development. \n
It's a field that I'm really passionate about.
I'm always eager to learn more about programming, software engineering, and related topics.
Currently, I'm mostly working with C# using the ASP.NET framework.
I'm also spending a lot of my free time learning about Web Development.\n It's
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

  