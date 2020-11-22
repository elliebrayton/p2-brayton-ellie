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

//MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


window.addEventListener("load",
  function() {
    setTimeout(showPopup, 1500);
  });

function showPopup() {
  document.getElementById("myModal").style.opacity = 1;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}