(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var bikesUrl = "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=";
var bikesArray;
function Search(location, distance) {
  this.location = location;
  this.distance = distance;
}


Search.prototype.getBikes = function(displayBikes){
  $.get(bikesUrl + this.location + "&distance=" + this.distance + "&stolenness=proximity").then(function(response){
    displayBikes(response.bikes);
  });
};



exports.searchModule = Search;

},{}],2:[function(require,module,exports){
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

},{"./../js/bike.js":1}]},{},[2]);
