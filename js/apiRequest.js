$(function () {
    getMovies('man', 'movie', null, '1');
    getMovies('wonder', 'movie', null, '1');
    
        var row = document.createElement('div');
                row.setAttribute('class', 'row container-fluid');

function getMovies(keyword, type, year, page) {
    //http://www.omdbapi.com/?apikey=d90cffd6&s=man&type=movie&r=json&page=1

    var url = 'http://www.omdbapi.com/?apikey=d90cffd6';

    if (keyword) {
        url += '&s=' + keyword;

        if (type) {
            url += '&type=' + type;
        }

        if (year) {
            url += '&y=' + year;
        }

        if (page) {
            url += '&page=' + page;
        }

        var apiRequest = new XMLHttpRequest();
        var container = document.getElementById('content-container');
        
       

        apiRequest.open('GET', url, true);
        apiRequest.send();
        apiRequest.onload = function () {
            
            
            
            var data = JSON.parse(this.response);
            
            
            
            

            if(data) {
                
                for (var i = 1; i <= data.Search.length; i++) {
                    var movie = data.Search[i];

                    if (movie) {
                        
                        
                        var colDiv = document.createElement('div');
                        colDiv.setAttribute('class', 'col-lg-2');
                        colDiv.setAttribute('style', 'text-align: center;');

                        var label = document.createElement('label');

                        var input = document.createElement('input');
                        input.setAttribute('type', 'checkbox');

                        var cardDiv = document.createElement('div')
                        cardDiv.setAttribute('class', 'card');

                        var frontDiv = document.createElement('div');
                        frontDiv.setAttribute('class', 'front');

                        var image = document.createElement('img');
                        image.setAttribute('src', movie.Poster);

                        var backDiv = document.createElement('div');
                        backDiv.setAttribute('class', 'back');

                        var h3 = document.createElement('h3');
                        h3.setAttribute('class', 'backTitle');
                        createTextElement(h3, movie.Title);

                        var h6 = document.createElement('h6');
                        h6.setAttribute('class', 'backYear');
                        createTextElement(h6, movie.Year);

                        var p = document.createElement('p');
                        p.setAttribute('class', 'backDescription');
                        getMovieInformation(movie.imdbID, p, 'short');

                        frontDiv.appendChild(image);
                        cardDiv.appendChild(frontDiv);

                        backDiv.appendChild(h3);
                        backDiv.appendChild(h6);
                        backDiv.appendChild(p);
                        cardDiv.appendChild(backDiv);

                        label.appendChild(input);
                        label.appendChild(cardDiv);

                        colDiv.appendChild(label);
                        row.appendChild(colDiv);
                        container.appendChild(row);

                    }
                }
            }
        }
    }
}

function createTextElement(parent, text) {

    if (parent && text) {
        var textElement = document.createTextNode(text);
        parent.appendChild(textElement);
    }
}

function getMovieInformation(id, parentNode, plotType) {
    //http://www.omdbapi.com/?apikey=d90cffd6&i=tt0316654&plot=short
    var url = 'http://www.omdbapi.com/?apikey=d90cffd6';

    if (id) {
        url = url + '&i=' + id;

        if (plotType) {
            url = url + '&plot=' + plotType;
        }

        var apiRequest = new XMLHttpRequest();
        apiRequest.open('GET', url, true);
        apiRequest.send();
        apiRequest.onload = function () {
            var data = JSON.parse(this.response);

            if (parentNode) {
                createTextElement(parentNode, data.Plot);
            }

            return data;
        }
    }

    return null;
}

    });
