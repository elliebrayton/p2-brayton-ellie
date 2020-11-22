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