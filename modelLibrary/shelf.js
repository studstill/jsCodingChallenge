// var Book = require('./book.js');

// Create Shelf constructor
var Shelf = function(genre) {
  this.genre = genre;
  this.books = [];
  this.addBook = function(title, author) {
    if (typeof(title) != 'object') {
      // Handle if Book object is passed in as an argument
      title = new Book(title, author);
    }
    this.books.push(title);
  };
  this.removeBook = function(title, author) {
    if (typeof(title) === 'object') {
      // Handle if Book object is passed in as an argument
      author = title.author;
      title = title.title;
    }
    // Remove book by title and author
    this._removeBook(this.books, title, author);
  };
};

Shelf.prototype._removeBook = function (bookArray, title, author) {
  // Handle different letter cases
  var title = title.toLowerCase();
  var author = author.toLowerCase();
  // Map the books array and return the title of each book (lowercased),
  // then return the index of the matched title
  var titleIndex = bookArray.map(function(currentValue) {
    return currentValue.title.toLowerCase();
  }).indexOf(title);
  // Map the books array and return the author of each book (lowercased),
  // then return the index of the author
  var authorIndex = bookArray.map(function(currentValue) {
    return currentValue.author.toLowerCase();
  }).indexOf(author);
  // Check that the title and author are correct
  if (titleIndex === authorIndex) {
    // Removed the matched book by its index
    bookArray.splice(titleIndex, 1);
  } else {
    console.log('Check that the title and author are correct');
  }
}

// module.exports = Shelf;
