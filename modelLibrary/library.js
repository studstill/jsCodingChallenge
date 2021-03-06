// var Book = require('./book.js');
// var Shelf = require('./shelf.js');

// Create Library constructer
var Library = function(name) {
  this.name = name;
  this.shelves = [];
  this.addShelf = function(genre) {
    if (typeof(genre) != 'object') {
      // Handle if Shelf object is passed in as an argument
      genre = new Shelf(genre);
    }
    this.shelves.push(genre);
  };
  this.removeShelf = function(genre) {
    // Handle if a pre-existing Shelf object is passed in as
    // an argument
    if (typeof(genre) === 'object') {
      genre = genre.genre;
    }
    this._removeShelf(this.shelves, genre);
  };
};

Library.prototype._removeShelf = function(shelvesArray, genre) {
  // Handle different letter cases
  var genre = genre.toLowerCase();
  // Map the shelves array and return the genre of each shelf (lowercased),
  // then return the index of the matched shelf
  var shelfIndex = shelvesArray.map(function(currentValue) {
    return currentValue.genre.toLowerCase();
  }).indexOf(genre);
  // Removed the matched shelf by its index
  shelvesArray.splice(shelfIndex, 1);
};


/*****************************
  Test Code
******************************/

var greenLake = new Library('Green Lake Library');
greenLake.addShelf('Biography');
var fictionShelf = new Shelf('Fiction');
var huckFinn = new Book('Huck Finn', 'Mark Twain');
console.log(huckFinn);
fictionShelf.addBook(huckFinn);
console.log(fictionShelf);
greenLake.addShelf(fictionShelf);
greenLake.removeShelf('bIOGRAPHY');
console.log(greenLake);


