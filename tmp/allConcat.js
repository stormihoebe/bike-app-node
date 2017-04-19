var Search = require('./../js/bike.js').searchModule;

var displayBikes = function(bikeArray){
  bikeArray.forEach(function(bike){
    $('#output').append(
      "<li>" + bike.id+ "</li>"
    );
  });
};

$(function(){

  $('#form').submit(function(event){
    event.preventDefault();
    var location = $('#location').val();
    var distance = parseInt($('#distance').val());
    // console.log("location: " + location);
    // console.log("distance: " + distance);
    var newSearch = new Search(location, distance);
    newSearch.getBikes(displayBikes);
  });
});
