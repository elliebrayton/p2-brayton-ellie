//HAMBURGER MENU 

var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

//CONSOLE LOG 
console.log(hamburger);
console.log(menu);

//EVENT LISTENER
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('show');
  });

//ACCORDION

var accordion = document.getElementsByClassName("accordion");


for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}