var Book = require('./book.js');
var Shelf = require('./shelf.js');

// Create Library constructer

var Library = function(name) {
  this.libraryName = name;
  this.addShelf = function(genre) {
    // Handle if a pre-existing Shelf object is passed in as
    // an argument
    if (typeof(genre) === 'object') {
      var shelfGenreName = genre.genre;
      this[shelfGenreName] = new Shelf(shelfGenreName);
    } else {
      this[genre] = new Shelf(genre);
    }
  };
  this.removeShelf = function(genre) {
    // Handle if a pre-existing Shelf object is passed in as
    // an argument
    if (typeof(genre) === 'object') {
      var shelfGenreName = genre.genre;
      delete this[shelfGenreName];
    } else {
      delete this[genre];
    }
  };
};

/****************************
  Test Code
******************************

var greenLake = new Library('Green Lake Library');
greenLake.addShelf('Biography');
greenLake.Biography.addBook('Huck Finn', 'Mark Twain');
console.log(greenLake);

*/
