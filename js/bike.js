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
