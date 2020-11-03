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