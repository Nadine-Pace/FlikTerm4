$(function(){

    var apiCall = 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6';

    $.getJSON (apiCall, filmCallBack);

    function filmCallBack(filmData){
        console.log(filmData);
    }


});