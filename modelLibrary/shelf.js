var Book = require("./book.js");


// Create Shelf constructor

var Shelf = function (genre) {
  this.genre = genre;
  this.addBook = function(title, author) {
    // Handle if a pre-existing Book object is passed in as
    // an argument
    if (typeof(title) === "object") {
      var bookObject = title;
      var bookTitle = bookObject.title;
      var bookAuthor = bookObject.author;
      this[bookTitle] = new Book(bookTitle, bookAuthor);
    } else {
      this[title] = new Book(title, author);
    }
  }
  this.removeBook = function(title, author) {
    // Handle if a pre-existing Book object is passed in as
    // an argument
    if (typeof(title) === "object") {
      var bookTitle = title.title;
      delete this[bookTitle];
    } else {
      delete this[title];
    }
  }
}

module.exports = Shelf;
