/*
Model a library using objects. *
A library contains shelves. Shelves contain books. Books have an author and a title. Give the library methods to add and remove a shelf. A shelf should have methods to add/remove a book. Use a modular approach so that each type of object is contained in its own file. Add any functionality you think appropriate.
*/
function Library(name) {
  this.libraryName = name;
  this.addShelf = function(genre) {
    // Handle if a pre-existing Shelf object is passed in as
    // an argument
    if (typeof(genre) === "object") {
      var shelfGenreName = genre.genre;
      this[shelfGenreName] = new Shelf(shelfGenreName);
    } else {
      this[genre] = new Shelf(genre);
    }
  }
  this.removeShelf = function(genre) {
    // Handle if a pre-existing Shelf object is passed in as
    // an argument
    if (typeof(genre) === "object") {
      var shelfGenreName = genre.genre;
      delete this[shelfGenreName];
    } else {
      delete this[genre];
    }
  }
}

// 1.1 Create Shelf constructor
function Shelf(genre) {
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

// 1. Create Book constructor
function Book(title, author) {
  this.title = title;
  this.author = author;
}
