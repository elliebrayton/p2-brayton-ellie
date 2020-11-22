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


//API 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //variables for the quote
        var quote = document.createTextNode(apiResult.content);
        var author = document.createTextNode(apiResult.author);

        //add quote information
        var quotes = document.querySelectorAll('#quote_wrapper p span');

        quotes[0].appendChild(quote);
        quotes[1].appendChild(author);

    }
};
xmlhttp.open('GET', 'https://api.quotable.io/random', true);
xmlhttp.send();